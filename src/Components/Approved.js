import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';
import '../css/app.css'
import {getStageName} from '../js/utils'
import ApprovedRow from './ApprovedRow';

//Dubai server Hyperion url
var baseUrl = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
//Server that has Python app deployed
var serverUrl = 'http://142.93.22.27:5000';
//Localhost Python server
var testUrl = 'http://127.0.0.1:5000';
// variables to keep track of last sorting order, changed with each sort
var dateAsc = true;
var entityAsc = true;
var amountAsc = true;
var numAsc = false;

class Approved extends Component{

  constructor(props){
    super(props);
    this.state= {
      data: []
    }
    // Bind functions
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByAmount = this.sortByAmount.bind(this);
    this.sortByEntity = this.sortByEntity.bind(this);
    this.sortByNumber = this.sortByNumber.bind(this);
  }

  // Sort rows by row number
  sortByNumber(){
  var data = this.state.data;
  // Sort using a custom function, compare rows a, b
  data.rows.sort(function (a,b) {
  // Check if last sort was ascending or descending
  if(numAsc){
  // Smaller value comes first
  return a.num-b.num;
}
else{
  // Bigger value comes first
  return b.num-a.num;
}
});
// switch sorting order for next time
numAsc = !numAsc;
// Set state for the data to be rerendered
this.setState({data:data});
}

// Sort rows by transfer creation date
sortByDate(){
var data = this.state.data;
// Sort using a custom function, compare rows a, b
data.rows.sort(
function (a,b) {
  //Convert date to array in format [Mon],[DD],[Year]
  var dateTokens1 = a.data[1].toString().replace(",","").split(" ");
  var dateTokens2 = b.data[1].toString().replace(",","").split(" ");
  // Get a numerical value that represents how recent a date is to be able to compare dates
  var x = (dateTokens1[2] + monthName(dateTokens1[0]) + dateTokens1[1]) * 1;
  var y = (dateTokens2[2] + monthName(dateTokens2[0]) + dateTokens2[1]) * 1;
  // Check if last sort was ascending or descending
  if(dateAsc)
  // earlier date comes first
  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  else
  // later date comes first
  return ((x < y) ? 1 : ((x > y) ? -1 : 0));
}
);
// switch sorting order for next time
dateAsc = !dateAsc;
// Set state for the data to be rerendered
this.setState({data:data});
}

// Sort rows by money amount
sortByAmount(){
var data = this.state.data;
// Sort using a custom function, compare rows a, b
data.rows.sort(function (a,b) {
// Check if last sort was ascending or descending
if(amountAsc){
// Smaller amount comes first
return a.data[0]-b.data[0];
}
else{
  // Bigger amount comes first
  return b.data[0]-a.data[0];
}
});
// switch sorting order for next time
amountAsc = !amountAsc;
// Set state for the data to be rerendered
this.setState({data:data});
}

// Sort rows by Entity name
sortByEntity(){
var data = this.state.data;
// Sort using a custom function, compare rows a, b
data.rows.sort(function (a,b) {
// Check if last sort was ascending or descending
if(entityAsc)
// compare ascii characters a comes before b
return a.row[0]>b.row[0];
else
// compare ascii characters b comes before a
return a.row[0]<b.row[0];
});
// switch sorting order for next time
entityAsc = !entityAsc;
// Set state for the data to be rerendered
this.setState({data:data});
}

componentDidMount(){
  // Set the loader to be visible
  document.getElementById("loaderBackground").style.visibility = "visible";
  // Sent request to Python app to get data for Stage 9 regardless of user
  axios.get(serverUrl+'/getData',
  {
    headers: {'auth': localStorage.getItem('auth'),
    'url': baseUrl + 'applications/' + appName + '/dataexport/1.3.9 NFT-LM Approval Stage 9 - All'}
  }).then((response) => {
    // Add a num value for each row, so that when data is sorted, the row keeps its number
    for(var i = 0; i<response.data.rows.length; i++){
    // Counter starts from zero, but row number should start from one
    response.data.rows[i].num = i+1;
  }
  // Set the state to hold the data from the response
  this.setState({data:response.data});
  // Hide the loader animation
  document.getElementById("loaderBackground").style.visibility = "hidden";
  }).catch(error => {
    document.getElementById("loader").style.visibility = "hidden";
    console.log("error occurred!");
  });
}

render(){
  //If the user is not logged in, redirect to login page
  if(!localStorage.getItem('loggedIn')){
  this.props.history.push('/login');
}
let data = this.state.data;
//Check if data is loaded first
if (data.rows){
return(
  <div className="container-fluid">
    {/* The gold bar that has stage name */}
    <div className="transferdiv transferlbl row">
      {/* Link to go back to home page */}
      <div className="backLabel col-3">
        <Link to={{
          pathname: '/'
        }}>
        <div className="backLabel">
          <span className="glyphicon glyphicon-arrow-left"></span>
          <label className="back">رجوع</label>
        </div>
      </Link>
    </div>
    {/* Stage 9 name */}
    <div className="title col-8">
      <label>{getStageName(9)}</label>
    </div>

  </div>

  {/* Table that shows each transfer and a link to show its details */}
  <div className="row" dir="rtl">
    <div className="divtable">
      <table id="t01">
        <thead>
          <tr id="header">
            <th># <span className="glyphicon glyphicon-sort" onClick={this.sortByNumber}></span></th>
            <th className="bigCol">المناقلة</th>
            <th className="bigCol">الجهة <span className="glyphicon glyphicon-sort" onClick={this.sortByEntity}></span></th>
            <th className="bigCol">تاريخ الطلب <span className="glyphicon glyphicon-sort" onClick={this.sortByDate}></span></th>
            <th>المبلغ <span className="glyphicon glyphicon-sort" onClick={this.sortByAmount}></span></th>
            <th>تفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {/* Map the rows to be displayed as an ApprovedRow component each */}
          {data.rows.length>0 ? data.rows.map((row,i) => <ApprovedRow data={row} key={i} id={i}></ApprovedRow>) : <p>No Data</p>}
        </tbody>
      </table>
    </div>
  </div>
</div>

);

}
else {
  //If no data is in state, just display loader
  return(
  <div className="container-fluid">
    {/* The gold bar that has stage name */}
    <div className="transferdiv transferlbl row">
      {/* Link to go back to home page */}
      <div className="backLabel col-3">
        <Link to={{
          pathname: '/'
        }}>
        <div className="backLabel">
          <span className="glyphicon glyphicon-arrow-left"></span>
          <label className="back">رجوع</label>
        </div>
      </Link>
    </div>
    {/* Stage 9 name */}
    <div className="title col-8">
      <label>{getStageName(9)}</label>
    </div>

  </div>
</div>
);
}
}

}
// Function to get month number from month name TODO: Change function name
function monthName(monthname) {
var months = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May',
  'Jun', 'Jul', 'Aug', 'Sept',
  'Oct', 'Nov', 'Dec'
];
var month = months.indexOf(monthname);
// Jan is in index zero, so add 1
return month + 1;
}

export default withRouter(Approved);
