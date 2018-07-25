import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import DetailsRow from './DetailsRow.js'

var baseUrl = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
var plan = 'MOF_BT';


class TransferDetails extends React.Component{

	constructor(props){
		super(props);
		if(localStorage.getItem('loggedIn') && props.location.state!=null){
			this.state= {
				data :"",
				entity : props.location.state.entity,
				transfer : props.location.state.transfer,
				segment :props.location.state.segment
			}
		}
	}

	componentDidMount(){
		if(localStorage.getItem('loggedIn') && this.state!=null){
			var body = `mdxQuery=
			SELECT
			{[Selection Account],[Selection Location],[Selection Activity ${this.state.entity}],[Source],[Destination]}
			ON COLUMNS, Non Empty
			{[All Line Items].Children}
			ON ROWS
			FROM MOF_BT.MOF_BT
			WHERE
			([Period].[Annual Value],[FY17],[Fund Transfer],[Stage 1 - Working],[Department NSP],[${this.state.entity}],
				[Input View],[Activity NSP],[Location NSP],[Project NSP],[Account NSP],[${this.state.transfer}],[${this.state.segment}])`;

				axios({
					method: 'post',
					url: baseUrl+'applications/'+appName+'/dataexport/plantypes/'+plan+'/',
					headers: {'Authorization': 'Basic '+localStorage.getItem('auth')},
					data: body
				}).then((response) => {
					this.setState({data:response.data});
					console.log(response);
				});
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
							<div className="transferdiv">
								<div className="transfernumberdiv">
									<Link to={{
										pathname: '/',
									}}>Back</Link>
									<span className="separator"></span>
									<label id="transferlbl"> Transfer identifier: {this.state.transfer},{this.state.segment}, {this.state.entity}</label>
								</div>
							</div>

							<div>
								<div className="divtable">
									<table id="t01">
										<thead>
											<tr>
												<th>Line Item</th>
												<th>Account</th>
												<th>Location</th>
												<th>Activity</th>
												<th>Source</th>
												<th>Destination</th>
											</tr>
										</thead>
										<tbody>
											{data.rows.length>0 ? data.rows.map((row,i) => <DetailsRow data={row} key={i} id={i}></DetailsRow>) : <p>No Data</p>}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					);
				}
				else{
					return(
						<Link to={{
							pathname: '/',
						}}>Back</Link>);
					}
				}
			}
		}

		export default withRouter(TransferDetails)
