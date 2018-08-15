import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import Row from './Row.js';
import axios from 'axios';
import '../css/app.css'
import {getStageName, getFormName, getStageNameEN} from '../js/utils'

var baseUrl = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
var formName;
var serverUrl = 'http://142.93.22.27:5000'
var testUrl = 'http://127.0.0.1:5000'

class Transfers extends Component{

  constructor(props){
    super(props);
    this.state= {
      data: []
    }
    this.showCommentBox = this.showCommentBox.bind(this);
    this.hideCommentBox = this.hideCommentBox.bind(this);
    this.postComment = this.postComment.bind(this);
  }

  showCommentBox = (e) => {
    let entity = e.target.getAttribute("entity");
    let transfer = e.target.getAttribute("transfer");
    let segment = e.target.getAttribute("segment");
    let version = getStageNameEN(localStorage.getItem('stageNumber'));
    let id = e.target.getAttribute("id");
    // console.log("Entity: " + entity);
    // console.log("Transfer: " + transfer);
    // console.log("Segment: " + segment);
    // console.log("ID: " + id);
    var text = document.getElementById("Text-"+id).textContent;
    // console.log(text);
    document.getElementById("commentBox").style.visibility = "visible";
    document.getElementById("commentBody").value = text;
    document.getElementById("commentIdentifier").innerHTML = entity + ", " + transfer + ", " + segment;

    var button = document.getElementById("submitComment");
    button.setAttribute("data-entity", entity);
    button.setAttribute("data-transfer", transfer);
    button.setAttribute("data-segment", segment);
    button.setAttribute("data-version", version);
  }

  postComment(){
    document.getElementById("loaderBackground").style.visibility = "visible";
    let button = document.getElementById("submitComment");
    let entity = button.getAttribute("data-entity");
    let transfer = button.getAttribute("data-transfer")
    let segment = button.getAttribute("data-segment")
    let version = button.getAttribute("data-version")
    let text = document.getElementById("commentBody").value;
    console.log(localStorage.getItem('auth'));

    document.getElementById("commentBox").style.visibility = "hidden";
    axios.get(testUrl+'/postComment',
    {
      headers: {
        'auth': localStorage.getItem('auth'),
        'url': baseUrl + 'applications/' + appName + '/dataimport/plantypes/MOF_BT/',
        'entity': entity,
        'transfer': transfer,
        'segment': segment,
        'version': version,
        'text': text
      }
    }).then((response) => {
      console.log(response.data);
      this.componentDidMount();
    })

  }

  hideCommentBox(){
    document.getElementById("commentBox").style.visibility = "hidden";
  }

  componentDidMount(){
    document.getElementById("loaderBackground").style.visibility = "visible";
    formName = getFormName(localStorage.getItem('stageNumber'));
    axios.get(testUrl+'/getData',
    {
      headers: {'auth': localStorage.getItem('auth'),
      'url': baseUrl + 'applications/' + appName + '/dataexport/' + formName}
    }).then((response) => {
      console.log(response.data);
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
          <div id="commentBox">
            <div id="commentTitle">Comments</div>
            <div id="commentIdentifier">M09, NFT001, TS01</div>
            <textarea name="commentBody" id="commentBody"/>
            <br/>
            <input type="button" id="submitComment" className="commentButton" data-entity="" data-transfer="" data-segment="" data-version="" value="Send" onClick={this.postComment}/>
            <input type="button" className="commentButton" value="Cancel" onClick={this.hideCommentBox}/>
          </div>
          <div className="transferdiv">
            <h3><label id="transferlbl">{getStageName(localStorage.getItem('stageNumber'))}</label></h3>
          </div>
          <div id="approvedLink">
            <Link to={{
              pathname: '/Approved',
            }}>
            <p><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"/>المناقلات المعتمدة</p>
          </Link>
        </div>
        <div className="body" dir="rtl">
          <div className="divtable">
            <table id="t01">
              <thead>
                <tr id="header">
                  <th>#</th>
                  <th>المناقلة</th>
                  <th>الجهة</th>
                  <th>تاريخ الطلب</th>
                  <th>المبلغ</th>
                  <th>ملاحظات</th>
                  <th>تفاصيل</th>
                  <th>إعتماد</th>
                  <th>ترقية</th>
                  <th>رفض</th>
                  <th id="lastColumn">بدون إجراء</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.length>0 ? data.rows.map((row,i) => <Row data={row} key={i} id={i} showCommentBox={this.showCommentBox}></Row>) : <p>No Data</p>}
              </tbody>
            </table>
          </div>
          <input type="button" className="submitBtn" name="submit" value="إرسال" onClick={() => { if (window.confirm('تأكيد؟')) submit(this.state.data.rows.length)}}/>
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
    for (var j = 0; j < radios.length; j++){
      var curr = radios[j];
      if (curr.checked){
        // do whatever you want with the checked radio
        if(curr.value === "Yes"){
        console.log(curr.getAttribute('entity')+", "+curr.getAttribute('transfer')+", "+curr.getAttribute('segment')+": YES");
      }
      if(curr.value === "Up"){
        console.log(curr.getAttribute('entity')+", "+curr.getAttribute('transfer')+", "+curr.getAttribute('segment')+": UP");
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
