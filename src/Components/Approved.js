import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import axios from 'axios';
import '../css/app.css'
import {getStageName, getFormName} from '../js/utils'
import ApprovedRow from './ApprovedRow';

var baseUrl = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
var serverUrl = 'http://142.93.22.27:5000';
var testUrl = 'http://127.0.0.1:5000';

var dateAsc = true;
var entityAsc = true;
var amountAsc = true;
var numAsc = true;

class Approved extends Component{

  constructor(props){
    super(props);
    this.state= {
      data: []
    }
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByAmount = this.sortByAmount.bind(this);
    this.sortByEntity = this.sortByEntity.bind(this);
    this.sortByNumber = this.sortByNumber.bind(this);
  }

  sortByNumber(){
    var data = this.state.data;
    data.rows.sort(function (a,b) {
      if(numAsc){
        return a.num-b.num;
      }
      else{
        return b.num-a.num;
      }
    });
    numAsc = !numAsc;
    this.setState({data:data});
  }

  sortByDate(){
    var data = this.state.data;
    data.rows.sort(
      function (a,b) {
        //Convert date to array in format [Mon],[DD],[Year]
        var dateTokens1 = a.data[1].toString().replace(",","").split(" ");
        var dateTokens2 = b.data[1].toString().replace(",","").split(" ");
        var x = (dateTokens1[2] + monthName(dateTokens1[0]) + dateTokens1[1]) * 1;
        var y = (dateTokens2[2] + monthName(dateTokens2[0]) + dateTokens2[1]) * 1;
        if(dateAsc)
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        else
        return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      }
    );
    dateAsc = !dateAsc;
    this.setState({data:data});
  }

  sortByAmount(){
    var data = this.state.data;
    data.rows.sort(function (a,b) {
      if(amountAsc){
        return a.data[0]-b.data[0];
      }
      else{
        return b.data[0]-a.data[0];
      }
    });
    amountAsc = !amountAsc;
    this.setState({data:data});
  }

  sortByEntity(){
    var data = this.state.data;
    data.rows.sort(function (a,b) {
      if(entityAsc)
      return a.row[0]>b.row[0];
      else
      return a.row[0]<b.row[0];
    });
    entityAsc = !entityAsc;
    this.setState({data:data});
  }

  componentDidMount(){
    document.getElementById("loaderBackground").style.visibility = "visible";
    axios.get(serverUrl+'/getData',
    {
      headers: {'auth': localStorage.getItem('auth'),
      'url': baseUrl + 'applications/' + appName + '/dataexport/1.3.9 NFT-LM Approval Stage 9 - All'}
    }).then((response) => {
      console.log(response);
      for(var i = 0; i<response.data.rows.length; i++){
        response.data.rows[i].num = i+1;
      }
      this.setState({data:response.data});
      document.getElementById("loaderBackground").style.visibility = "hidden";
    })
  }

  render(){
    if(!localStorage.getItem('loggedIn')){
      this.props.history.push('/login');
    }
    let data = this.state.data;
    if (data.rows){

      return(
        <div>
          <div className="loaderBackground" id="loaderBackground">
            <div className="loader"/>
          </div>
          <div className="transferdiv">
            <h3>
              <div className="title">
                <label id="transferlbl">{getStageName(9)}</label>
              </div>
              <div className="backLabel">
                <Link to={{
                  pathname: '/'
                }}>
                <div className="backLabel">
                  <span className="glyphicon glyphicon-arrow-left"></span>
                  <label className="back"> رجوع</label>
                </div>
              </Link>
            </div>
          </h3>
        </div>


        <div className="body" dir="rtl">
          <div className="divtable">
            <table id="t01">
              <thead>
                <tr id="header">
                  <th># <span className="glyphicon glyphicon-sort" onClick={this.sortByNumber}></span></th>
                  <th>المناقلة</th>
                  <th>الجهة <span className="glyphicon glyphicon-sort" onClick={this.sortByEntity}></span></th>
                  <th>تاريخ الطلب <span className="glyphicon glyphicon-sort" onClick={this.sortByDate}></span></th>
                  <th>المبلغ <span className="glyphicon glyphicon-sort" onClick={this.sortByAmount}></span></th>
                  <th>تفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.length>0 ? data.rows.map((row,i) => <ApprovedRow data={row} key={i} id={i}></ApprovedRow>) : <p>No Data</p>}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );

  }
  else {
    return(
      <div className="loaderBackground" id="loaderBackground">
        <div className="loader"/>
      </div>
    );
  }
}

}

function monthName(monthname) {
  var months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sept',
    'Oct', 'Nov', 'Dec'
  ];
  var month = months.indexOf(monthname);
  return month + 1;
}

export default withRouter(Approved);
