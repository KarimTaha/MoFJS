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
				version : props.location.state.version
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
			axios.get(serverUrl+'/getDetails',
			{
				headers: {'auth': localStorage.getItem('auth'),
				'url': baseUrl + 'applications/' + appName + '/dataexport/plantypes/' + plan + '?q={omitMetadata:false}',
				'entity': this.state.entity,
				'transfer': this.state.transfer,
				'segment': this.state.segment,
				'version': getStageNameEN(this.state.version)
			}
		}).then((response) => {
			//Set the state to be the data for Transfer details
			this.setState({data:response.data});
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
				<div>
					{/* Loader animation div */}
					<div className="loaderBackground" id="loaderBackground">
						<div className="loader"/>
					</div>
					{/* Gold bar that has Transfer identifier details, back link */}
					<div className="transferdiv">
						<h3>
							{/* Transfer identifier */}
							<div className="title">
								<label>تفاصيل مناقلة : </label>
								<label>{getEntityName(this.state.entity)} - </label>
								<label>{getTransferName(this.state.transfer)} - {getSegmentName(this.state.segment)}</label>
							</div>
							{/* Link to go back */}
							<div className="backLabel">
								<Link to={{
									pathname: this.state.version==="9"?'/Approved':'/'
								}}>
								<div className="backLabel">
									<span className="glyphicon glyphicon-arrow-left"></span>
									<label className="back"> رجوع</label>
								</div>
							</Link>
						</div>
					</h3>
				</div>

				<div>
					{/* Table that displays the lines of transfer */}
					<div className="divtable" dir="rtl">
						<table id="t01">
							<thead>
								<tr id="header">
									<th>#</th>
									<th>البند</th>
									<th>النشاط</th>
									<th>الموقع</th>
									<th>المنقول منه</th>
									<th>المنقول إليه</th>
								</tr>
							</thead>
							<tbody>
								{/* Map each line to a DetailsRow component */}
								{data.rows.length>0 ? data.rows.map((row,i) => <DetailsRow data={row} key={i} id={i}></DetailsRow>) : <p>No Data</p>}
								{/* Show the sum of source and destination columns */}
								<tr className="sumRow">
									<td>الإجمالي</td>
									<td></td>
									<td></td>
									<td></td>
									{/* numFormat function is used to show number with comma separators */}
									<td>{numFormat(this.sum("from"))}</td>
									<td>{numFormat(this.sum("to"))}</td>
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
		// Gold bar
			<div className="transferdiv">
				<h3>
					<div className="title">
						<label>تفاصيل مناقلة : </label>
						<label>{getEntityName(this.state.entity)} - </label>
						<label>{getTransferName(this.state.transfer)} - {getSegmentName(this.state.segment)}</label>
					</div>
					<div className="backLabel">
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
			</h3>
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
