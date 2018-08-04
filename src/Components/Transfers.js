import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Row from './Row.js';
import axios from 'axios';
import '../css/app.css'

var baseUrl = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
var ruleName = 'NFT-Transfers Karim';

class Transfers extends Component{

  constructor(props){
    super(props);
    this.state= {
      data: []
    }
  }

  componentDidMount(){
    // axios.get(baseUrl + 'applications/' + appName + '/dataexport/' + ruleName,
    // {
    //   headers: { 'Authorization': 'Basic '+localStorage.getItem('auth') }
    // }).then((response) => {
    //   this.setState({data:response.data});
    // });
    axios.get('http://127.0.0.1:5000/getData',
    {
      headers: {'auth': localStorage.getItem('auth'),
      'url': baseUrl + 'applications/' + appName + '/dataexport/' + ruleName}
    }).then((response) => {
      this.setState({data:response.data});

      if(this.state.data){
        var len = this.state.data.rows.length;
        var radios;
        
        for (var i = 0; i<len; i++){
          radios = document.getElementsByName(i);
          for (var j = 0; j < radios.length; j++)
          {
            if(radios[j].value === "No-action"){
              radios[j].checked = true;
            }
          }
        }
      }
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
          <div className="transferdiv">
            <h3><label id="transferlbl">المرحلة الخامسة - مساعد وكيل الوزارة</label></h3>
          </div>

          <div className="body" dir="rtl">
            <div className="divtable">
              <table id="t01">
                <thead>
                  <tr id="header">
                    <th>الحزمة</th>
                    <th>المناقلة</th>
                    <th>تاريخ الطلب</th>
                    <th>الجهة</th>
                    <th>المبلغ</th>
                    <th>ملاحظات</th>
                    <th>تفاصيل</th>
                    <th>إعتماد</th>
                    <th>رفض</th>
                    <th>بدون إجراء</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.length>0 ? data.rows.map((row,i) => <Row data={row} key={i} id={i}></Row>) : <p>No Data</p>}
                </tbody>
              </table>
            </div>
            <input type="button" className="submitBtn" name="submit" value="Submit" onClick={submit.bind(null,data.rows.length)}/>
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

function submit(len){
  var radios;

  for (var i = 0; i<len; i++){
    radios = document.getElementsByName(i);
    for (var j = 0; j < radios.length; j++)
    {
      var curr = radios[j];
      if (curr.checked)
      {
        // do whatever you want with the checked radio
        if(curr.value === "Yes"){
        console.log(curr.getAttribute('entity')+", "+curr.getAttribute('transfer')+", "+curr.getAttribute('segment')+": YES");
      }
      if(curr.value === "No"){
        console.log(curr.getAttribute('entity')+", "+curr.getAttribute('transfer')+", "+curr.getAttribute('segment')+": NO");
      }


      break;
    }
  }
}
}

export default withRouter(Transfers);
