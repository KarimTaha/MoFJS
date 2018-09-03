import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import {numFormat, getStageName, getStageNameEN, getTransferName, getSegmentName, getEntityName} from '../js/utils'

import DetailsRow from './DetailsRow.js'

var baseUrl = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
var plan = 'MOF_BT';
var serverUrl = 'http://142.93.22.27:5000';
var testUrl = 'http://127.0.0.1:5000';

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
	sum += Number(this.state.data.rows[i].data[col==="from"?3:4]);
}
return sum;
}

componentDidMount(){
	//Check if user is logged in, and state is not null
	if(localStorage.getItem('loggedIn') && this.state!=null){
	//Set the loader animation to be visible
	document.getElementById("loaderBackground").style.visibility = "visible";
	//Send GET request to Python app to get Transfer details
	console.log(this.state.entity +", "+this.state.transfer+", "+ this.state.segment+", "+this.state.version);
	axios.get(serverUrl+'/getDetails',
	{
		headers: {'auth': localStorage.getItem('auth'),
		'url': baseUrl + 'applications/' + appName + '/dataexport/plantypes/' + plan,
		'entity': this.state.entity,
		'transfer': this.state.transfer,
		'segment': this.state.segment,
		'version': getStageNameEN(this.state.version)
	}
}).then((response) => {
	//Set the transfer type variable according to transfer name
	if(response.data.pov[11]){
		var type = response.data.pov[11].charAt(3)==="T"?"MPFT":response.data.pov[11].substring(0,3);
	}
	//Set the state to be the data for Transfer details
	this.setState({data:response.data, type:type});
	//Hide the loader animation
	document.getElementById("loaderBackground").style.visibility = "hidden";
})
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
			{/* Loader animation div */}
			<div className="loaderBackground" id="loaderBackground">
				<div className="loader"/>
			</div>
			{/* Gold bar that has Transfer identifier details, back link */}
			<div className="transferdiv transferlbl row">
				{/* Link to go back */}
				<div className="backLabel col-3">
					<Link to={{
						pathname: this.state.version==="9"?'/Approved':'/'
					}}>
					<div className="backLabel">
						<span className="glyphicon glyphicon-arrow-left"></span>
						<label className="back"> رجوع</label>
					</div>
				</Link>
			</div>
			{/* Transfer identifier */}
			<div className="title col-8">
				<label>تفاصيل مناقلة : </label>
				<label>{getEntityName(this.state.entity)} - </label>
				<label>{getTransferName(this.state.transfer)} - {getSegmentName(this.state.segment)}</label>
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
							{this.state.type==="PFT" || this.state.type==="MPFT"?<th className="bigCol">المشروع</th>:null}
							{this.state.type==="MFT" || this.state.type==="MPFT"?<th>الجهة</th>:null}
							{this.state.type==="AFT"?null:<th>المنقول منه</th>}
							<th>المنقول إليه</th>
							<th>رسالة التحقق</th>
						</tr>
					</thead>
					<tbody>
						{/* Map each line to a DetailsRow component */}
						{data.rows.length>0 ? data.rows.map((row,i) => <DetailsRow data={row} type={this.state.type} key={i} id={i}></DetailsRow>) : <p>No Data</p>}
						{/* Show the sum of source and destination columns */}
						<tr className="sumRow">
							<td>الإجمالي</td>
							<td></td>
							<td></td>
							<td></td>
							{this.state.type==="MFT" || this.state.type==="MPFT"?<th></th>:null}
							{this.state.type==="PFT" || this.state.type==="MPFT"?<td></td>:null}
							{/* numFormat function is used to show number with comma separators */}
							{this.state.type==="AFT"?null:<td>{numFormat(this.sum("from"))}</td>}
							<td>{numFormat(this.sum("to"))}</td>
							<td></td>
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
			<label>تفاصيل مناقلة : </label>
			<label>{getEntityName(this.state.entity)} - </label>
			<label>{getTransferName(this.state.transfer)} - {getSegmentName(this.state.segment)}</label>
		</div>

	</div>
	{/* Loader animation */}
	<div className="loaderBackground" id="loaderBackground">
		<div className="loader"/>
	</div>
</div>
);
}
}
}
}

export default withRouter(TransferDetails)
