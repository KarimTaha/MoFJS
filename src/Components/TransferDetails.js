import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {numFormat, getStageName, getStageNameEN, getTransferName, getSegmentName, getEntityName, transferType,getTransferTypeArabic} from '../js/utils'
import {getValidationMessage} from '../js/Validation'

import DetailsRow from './DetailsRow.js'

class TransferDetails extends React.Component{

	constructor(props){
		super(props);
		//Check if user is logged in, and parameters are passed from Transfers
		if(localStorage.getItem('loggedIn') && props.location.state!=null){
		this.state= {
			data :"",
			entity : props.location.state.entity,
			transfer : props.location.state.transfer,
			segment : props.location.state.segment,
			version : props.location.state.version,
			validation : props.location.state.validation,
			year: props.location.state.year,
			type: ""
		}
	}
	//Bind functions
	this.sum = this.sum.bind(this);
}
//Function that takes the name of the column in data, and return the sum of all items in column
sum(col){
	var sum = 0;
	for(var i = 0; i<this.state.data.rows.length; i++){
		sum += Number(this.state.data.rows[i].data[col==="from"?15:16]);
	}
	return sum;
}

componentDidMount(){
	//Check if user is logged in, and state is not null
	if(localStorage.getItem('loggedIn') && this.state!=null){
	//Set the loader animation to be visible
	document.getElementById("loaderBackground").style.visibility = "visible";
	//Send GET request to get Transfer details
	console.log(this.state.entity +", "+this.state.transfer+", "+ this.state.segment+", "+this.state.version);

	var body = `mdxQuery=
	Select {[Selection Account],[Select Account MoPW],[Select Account OMs],[Selection Activity ${this.state.entity}],
	[Select Activity M05],[Select Activity M06],[Select Activity MoPW],[Selection Location],[Select Location M05],
	[Select Location M06],[Select Location MoPW],[Select Project OMs],[Select Project MoPW],[Source Entity],[Target Entity],
	[Source],[Destination],[Validation Message]} ON COLUMNS, Non Empty {[All Line Items].Children} ON ROWS FROM MOF_BT.MOF_BT
	WHERE ([Period].[Annual Value],[${this.state.year}],[Fund Transfer],[${getStageNameEN(this.state.version)}],[Department NSP],[${this.state.entity}],
	[Input View],[Activity NSP],[Location NSP],[Project NSP],[Account NSP],[${this.state.transfer}],[${this.state.segment}])`

	axios({
		method: 'post',
		url: '/api/getDetails',
		headers: {
			'Authorization': 'Basic '+localStorage.getItem('auth'),
			'Content-Type': 'text/plain'
	},
		data: body
	}).then((response) => {
		console.log(response);
		//Set the transfer type variable according to transfer name
		var type;
		if(response.data.pov[11]){
			// var type = response.data.pov[11].charAt(3)==="T"?"MPFT":response.data.pov[11].substring(0,3);
			type = transferType(response.data.pov[11]);
		}
		//Set the state to be the data for Transfer details
		this.setState({data:response.data, type:type});
		//Hide the loader animation
		document.getElementById("loaderBackground").style.visibility = "hidden";
		}).catch(error => {
			console.log(error.response);
	    document.getElementById("loaderBackground").style.visibility = "hidden";
	    toast.error("Error occurred!",{
	      autoClose: false
	      });
	  });
	}
}

render(){
	//If the user is not logged in, redirect to login page
	if(!localStorage.getItem('loggedIn')){
	this.props.history.push('/login');
	return("");
}
else{
	//Handle if state is null, redirect to home page
	if(this.state==null){
	this.props.history.push('/');
	return("");
}
let data = this.state.data;
if(data.rows){
	return(
		<div className="container-fluid">
			{/* Gold bar that has Transfer identifier details, back link */}
			<div className="transferdiv transferlbl row">
				{/* Link to go back */}
				<div className="backLabel col-3">
					<Link to={{pathname: this.state.version==="9"?'/Approved':(this.state.version==="8"?'/ApproveToFMIS':'/')}}>
					<div className="backLabel">
						<span className="glyphicon glyphicon-arrow-left"></span>
						<label className="back"> رجوع</label>
					</div>
				</Link>
			</div>
			{/* Transfer identifier */}
			<div className="title col-8">
				<label>{getEntityName(this.state.entity)} - </label>
				<label>{getTransferName(this.state.transfer)} - {getSegmentName(this.state.segment)}</label>
				<label>{" : " + " مناقلة " + getTransferTypeArabic(this.state.type)}</label>
			</div>

		</div>

		<div className="row">
			{/* Table that displays the lines of transfer */}
			<div className="divtable" dir="rtl">
				<table id="t01">
					<thead>
						<tr id="header">
							<th>#</th>
							<th className="bigCol">البند</th>
							<th className="bigCol">النشاط</th>
							<th className="bigCol">الموقع</th>
							{this.state.type==="PFT" || this.state.type==="PFT1" || this.state.type==="MPFT"?<th className="bigCol">المشروع</th>:null}
							{this.state.type==="MFT" || this.state.type==="MPFT"?<th>الجهة</th>:null}
							{this.state.type==="AFT"?null:<th>المنقول منه</th>}
							<th>المنقول إليه</th>
							<th className="validCol">رسالة التحقق</th>
						</tr>
					</thead>
					<tbody>
						{/* Map each line to a DetailsRow component */}
						{data.rows.length>0 ? data.rows.map((row,i) => <DetailsRow data={row} type={this.state.type} entity={this.state.entity} key={i} id={i}></DetailsRow>) : <p>No Data</p>}
						{/* Show the sum of source and destination columns */}
						<tr className="sumRow">
							<td>الإجمالي</td>
							<td></td>
							<td></td>
							<td></td>
							{this.state.type==="MFT" || this.state.type==="MPFT"?<th></th>:null}
							{this.state.type==="PFT" || this.state.type==="PFT1" || this.state.type==="MPFT"?<td></td>:null}
							{/* numFormat function is used to show number with comma separators */}
							{this.state.type==="AFT"?null:<td>{numFormat(this.sum("from"))}</td>}
							<td>{numFormat(this.sum("to"))}</td>
							<td className="validCol">{getValidationMessage(this.state.validation)}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
);
}
else{
	// If no data, just show empty page
	return(
	<div className="container-fluid">
		{/* Gold bar */}
		<div className="transferdiv transferlbl row">
			<div className="backLabel col-3">
				<Link to={{
					pathname: '/',
				}}>
				{/* Back link */}
				<div className="backLabel">
					<span className="glyphicon glyphicon-arrow-left"></span>
					<label className="back"> رجوع</label>
				</div>
			</Link>
		</div>
		<div className="title col-8">
			<label>{getEntityName(this.state.entity)} - </label>
			<label>{getTransferName(this.state.transfer)} - {getSegmentName(this.state.segment)}</label>
		</div>

	</div>
</div>
);
}
}
}
}

export default withRouter(TransferDetails)
