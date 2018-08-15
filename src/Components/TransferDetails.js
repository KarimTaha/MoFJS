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
		if(localStorage.getItem('loggedIn') && props.location.state!=null){
			this.state= {
				data :"",
				entity : props.location.state.entity,
				transfer : props.location.state.transfer,
				segment : props.location.state.segment,
				version : props.location.state.version
			}
		}
		this.sum = this.sum.bind(this);
	}

	sum(col){
		var sum = 0;
		for(var i = 0; i<this.state.data.rows.length; i++){
			sum += Number(this.state.data.rows[i].data[col==="from"?3:4]);
		}
		return sum;
	}

	componentDidMount(){
		if(localStorage.getItem('loggedIn') && this.state!=null){
			document.getElementById("loaderBackground").style.visibility = "visible";
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
			this.setState({data:response.data});
			console.log(response);
			document.getElementById("loaderBackground").style.visibility = "hidden";
		})
	}
}

render(){
	if(!localStorage.getItem('loggedIn')){
		this.props.history.push('/login');
		return("");
	}
	else{
		if(this.state==null){
			this.props.history.push('/');
			return("");
		}
		let data = this.state.data;
		if(data.rows){
			return(
				<div>


					<div className="loaderBackground" id="loaderBackground">
						<div className="loader"/>
					</div>
					<div className="transferdiv">
						<h3>
							<div className="title">
								<label>تفاصيل مناقلة : </label>
								<label>{getEntityName(this.state.entity)} - </label>
								<label>{getTransferName(this.state.transfer)} - {getSegmentName(this.state.segment)}</label>
							</div>
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
								{data.rows.length>0 ? data.rows.map((row,i) => <DetailsRow data={row} key={i} id={i}></DetailsRow>) : <p>No Data</p>}
								<tr className="sumRow">
									<td>الإجمالي</td>
									<td></td>
									<td></td>
									<td></td>
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
		return(
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
						<div className="backLabel">
							<span className="glyphicon glyphicon-arrow-left"></span>
							<label className="back"> رجوع</label>
						</div>
					</Link>
				</div>
			</h3>
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
