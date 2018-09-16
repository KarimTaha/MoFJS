import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import Select from 'react-select'
import axios from 'axios';
import '../css/app.css'
import {getStageName, getEntityName} from '../js/utils'
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

var entityList = [];
var options = [];

class Approved extends Component{

  constructor(props){
    super(props);
    this.state= {
      data: [],
      filteredRows: [],
      selectedOption: null,
      filterEntity: null,
      startDate: null,
      endDate:null
    }
    // Bind functions
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByAmount = this.sortByAmount.bind(this);
    this.sortByEntity = this.sortByEntity.bind(this);
    this.sortByNumber = this.sortByNumber.bind(this);
    this.applyFilters = this.applyFilters.bind(this);
    this.cancelFilters = this.cancelFilters.bind(this);
    this.filterEntityChange = this.filterEntityChange.bind(this);
    this.startDateChange = this.startDateChange.bind(this);
    this.endDateChange = this.endDateChange.bind(this);
  }

  // Sort rows by row number
  sortByNumber(){
  var rows = this.state.filteredRows;
  // Sort using a custom function, compare rows a, b
  rows.sort(function (a,b) {
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
  this.setState({filteredRows:rows});
  }

// Sort rows by transfer creation date
sortByDate(){
  var rows = this.state.filteredRows;
  // Sort using a custom function, compare rows a, b
  rows.sort(
  function (a,b) {
    //Convert date to array in format [Mon],[DD],[Year]
    var dateTokens1 = a.data[1].toString().replace(",","").split(" ");
    var dateTokens2 = b.data[1].toString().replace(",","").split(" ");
    // console.log(dateTokens1);
    // Get a numerical value that represents how recent a date is to be able to compare dates
    var x = (dateTokens1[2] + monthName(dateTokens1[0]) + (dateTokens1[1]<10?"0"+dateTokens1[1]:dateTokens1[1])) * 1;
    var y = (dateTokens2[2] + monthName(dateTokens2[0]) + (dateTokens2[1]<10?"0"+dateTokens2[1]:dateTokens2[1])) * 1;
    // console.log(x);
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
this.setState({filteredRows:rows});
}

// Sort rows by money amount
sortByAmount(){
  var rows = this.state.filteredRows;
  // Sort using a custom function, compare rows a, b
  rows.sort(function (a,b) {
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
  this.setState({filteredRows:rows});
}

// Sort rows by Entity name
sortByEntity(){
  // var rows = this.state.filteredRows;
  // // Sort using a custom function, compare rows a, b
  // rows.sort(function (a,b) {
  //   // Check if last sort was ascending or descending
  //   // console.log(a.row[0].substring(1,3)+", "+b.row[0].substring(1,3));
  //   // console.log(a.row[0].substring(1,3)>b.row[0].substring(1,3)?a.row[0].substring(1,3)+" is bigger":b.row[0].substring(1,3)+" is bigger")
  //   if(entityAsc)
  //     // compare ascii characters a comes before b
  //     return a.row[0] >= b.row[0];
  //   else
  //     // compare ascii characters b comes before a
  //     return a.row[0] < b.row[0];
  // });
  // console.log(rows);
  // // switch sorting order for next time
  // entityAsc = !entityAsc;
  // // Set state for the data to be rerendered
  // this.setState({filteredRows:rows});
}

applyFilters(){
  //Filter entities
  var entity = this.state.filterEntity;
  var filteredArray = [];
  if(entity == null || entity.length === 0){
    this.setState({filteredRows: this.state.data.rows});
    filteredArray = this.state.data.rows.slice();
  }
  else {
    var originalArray = this.state.data.rows.slice();

    for(var i = 0; i<originalArray.length; i++){
      if(originalArray[i].row[0] === entity){
        filteredArray.push(originalArray[i]);
      }
    }
    this.setState({filteredRows:filteredArray})
  }
  //Filter transfers starting from start date
  var startDate = this.state.startDate;
  var startDateFormat;
  if(startDate){
    try{
      startDateFormat = startDate.format("MMM DD YYYY");
      startDateFormat = startDateFormat.split(" ");
    }
    catch(error){
      toast.error("Error occurred!",{
        autoClose: false
        });
    }
    for(var i = 0; i<filteredArray.length; i++){

      var dateTokens = filteredArray[i].data[1].toString().replace("," , "").split(" ");
      var x = (dateTokens[2] + monthName(dateTokens[0]) + (dateTokens[1]<10?"0"+dateTokens[1]:dateTokens[1])) * 1;
      var y = (startDateFormat[2] + monthName(startDateFormat[0]) + startDateFormat[1]) * 1;

      if(x < y){
        // console.log("Comparing row data (x): ");
        // console.log(x);
        // console.log(" with startDate(y) = "+ y);
        // console.log("x < y , Splice DONE");
        // console.log("------------------------------")
        filteredArray.splice(i,1);
        i--;
      }
      // else{
      //   console.log("Comparing row data(x): ");
      //   console.log(x);
      //   console.log(" with startDate(y) = "+ y);
      //   console.log("y >= x , No Splice");
      //   console.log("------------------------------")
      // }

    }
    // console.log(filteredArray);
    this.setState({filteredRows:filteredArray})
  }
  // Filter transfers before end date
  var endDate = this.state.endDate;
  var endDateFormat;
  if(endDate){
    try{
      endDateFormat = endDate.format("MMM DD YYYY");
      endDateFormat = endDateFormat.split(" ");
    }
    catch(error){
      toast.error("Error occurred!",{
        autoClose: false
        });
    }
    for(var i = 0; i<filteredArray.length; i++){

      var dateTokens = filteredArray[i].data[1].toString().replace("," , "").split(" ");
      var x = (dateTokens[2] + monthName(dateTokens[0]) + (dateTokens[1]<10?"0"+dateTokens[1]:dateTokens[1])) * 1;
      var y = (endDateFormat[2] + monthName(endDateFormat[0]) + endDateFormat[1]) * 1;

      if(x > y){
        // console.log("Comparing row data (x): ");
        // console.log(x);
        // console.log(" with startDate(y) = "+ y);
        // console.log("x > y , Splice DONE");
        // console.log("------------------------------")
        filteredArray.splice(i,1);
        i--;
      }
      // else{
      //   console.log("Comparing row data(x): ");
      //   console.log(x);
      //   console.log(" with startDate(y) = "+ y);
      //   console.log("y <= x , No Splice");
      //   console.log("------------------------------")
      // }

    }
    // console.log(filteredArray);
    this.setState({filteredRows:filteredArray})
  }
}

cancelFilters(){
  this.setState({filterEntity:"", startDate:"", endDate:"", filteredRows:this.state.data.rows, selectedOption:""})
}

filterEntityChange = (selectedOption) => {
  console.log(selectedOption)
  if(selectedOption == null){
    this.setState({filterEntity: "", selectedOption:selectedOption});
  }
  else
   this.setState({filterEntity: selectedOption.value, selectedOption:selectedOption})
}

startDateChange(date) {
  this.setState({
    startDate: date
  });
}

endDateChange(date) {
  this.setState({
    endDate: date
  });
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
    console.log(response)
    // Add a num value for each row, so that when data is sorted, the row keeps its number
    for(var i = 0; i<response.data.rows.length; i++){
      // Counter starts from zero, but row number should start from one
      response.data.rows[i].num = i+1;
      var entry = {value: response.data.rows[i].row[0], label: getEntityName(response.data.rows[i].row[0])};
      if(!(entityList.includes(response.data.rows[i].row[0]))) {
        entityList.push(response.data.rows[i].row[0]);
        options.push(entry);
      }
    }
    // Set the state to hold the data from the response
    this.setState({data:response.data, filteredRows: response.data.rows});
    // Hide the loader animation
    document.getElementById("loaderBackground").style.visibility = "hidden";
    }).catch(error => {
      document.getElementById("loaderBackground").style.visibility = "hidden";
      toast.error("Error occurred!",{
        autoClose: false
        });
    });
}

render(){
  //If the user is not logged in, redirect to login page
  if(!localStorage.getItem('loggedIn')){
  this.props.history.push('/login');
  }
  let data = this.state.data;
  var filteredRows = this.state.filteredRows;
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

    <div className="row">
      <div className="col-md-3 col-sm-12">
        <div className="inline">
          <DatePicker
              selected={this.state.endDate}
              onChange={this.endDateChange}
              dateFormat="DD/MM/YYYY"
              className="datePicker"
              placeholderText="إلى تاريخ"
          />
        </div>
        {/* <div className="inline">
          إلى تاريخ
        </div> */}
      </div>

      <div className="col-md-3 col-sm-12">
        <div className="inline">
          <DatePicker
              selected={this.state.startDate}
              onChange={this.startDateChange}
              dateFormat="DD/MM/YYYY"
              className="datePicker"
              placeholderText="من تاريخ"
          />
        </div>
        {/* <div className="inline">
          من تاريخ
        </div> */}
        <br className="clearBoth" />
      </div>


      <div className="col-md-3 col-sm-12">
        <Select options={options} value={this.state.selectedOption} isClearable isRtl placeholder="الجهة" onChange={this.filterEntityChange} id="entitySelect" />
      </div>

    </div>
    <div className="row">
      <div className="filterButtons">
        <button type="button" className="btn cancelFilterButton" onClick={this.cancelFilters}>إلغاء</button>
        <button type="button" className="btn filterButton" onClick={this.applyFilters}>بحث</button>
      </div>
    </div>

    {/* Table that shows each transfer and a link to show its details */}
    <div className="row" dir="rtl">
      <div className="divtable">
        <table id="t01">
          <thead>
            <tr id="header">
              <th># <span className="glyphicon glyphicon-sort" onClick={this.sortByNumber}></span></th>
              <th>نوع المناقلة</th>
              <th className="bigCol">المناقلة</th>
              <th className="bigCol">الجهة <span className="glyphicon glyphicon-sort" onClick={this.sortByNumber}></span></th>
              <th className="bigCol">تاريخ الطلب <span className="glyphicon glyphicon-sort" onClick={this.sortByDate}></span></th>
              <th>المبلغ <span className="glyphicon glyphicon-sort" onClick={this.sortByAmount}></span></th>
              <th>تفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {/* Map the rows to be displayed as an ApprovedRow component each */}
            {filteredRows.length>0 ? filteredRows.map((row,i) => <ApprovedRow data={row} key={i} id={i}></ApprovedRow>) : null}
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
    'Jun', 'Jul', 'Aug', 'Sep',
    'Oct', 'Nov', 'Dec'
  ];
  // Jan is in index zero, so add 1
  var month = months.indexOf(monthname)+1;
  return month<10?"0"+month:month;
}

export default withRouter(Approved);
