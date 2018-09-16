import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Row from './Row.js';
import axios from 'axios';
import '../css/app.css'
import {getStageName, getFormName, getStageNameEN} from '../js/utils'

//Dubai server Hyperion url
var baseUrl = 'http://94.200.95.142:3285/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
//Server that has Python app deployed
var serverUrl = 'http://142.93.22.27:5000'
//Localhost Python server
var testUrl = 'http://127.0.0.1:5000'

class Transfers extends Component{

  constructor(props){
    super(props);
    this.state= {
      data: []
    }
    //Binding methods used
    this.showCommentBox = this.showCommentBox.bind(this);
    this.hideCommentBox = this.hideCommentBox.bind(this);
    this.postComment = this.postComment.bind(this);
    this.submit = this.submit.bind(this);
  }

  //This method is called onClick when edit icon is clicked. It shows a window that allows entering/editing comment for the specified transfer
  showCommentBox = (e) => {
  //Get identifiers for comment selected
  let entity = e.target.getAttribute("entity");
  let transfer = e.target.getAttribute("transfer");
  let segment = e.target.getAttribute("segment");
  let version = getStageNameEN(localStorage.getItem('stageNumber'));
  let id = e.target.getAttribute("id");
  //Text inside the comment that is displayed
  var text = document.getElementById("Text-"+id).textContent;
  //Make comment window visible
  document.getElementById("commentBox").style.visibility = "visible";
  //Set textarea text to the comment body
  document.getElementById("commentBody").value = text;
  //Set comment identifier text
  document.getElementById("commentIdentifier").innerHTML = entity + ", " + transfer + ", " + segment;
  //Get submit comment button element
  var button = document.getElementById("submitComment");
  //Set button attributes to use it in postComment
  button.setAttribute("data-entity", entity);
  button.setAttribute("data-transfer", transfer);
  button.setAttribute("data-segment", segment);
  button.setAttribute("data-version", version);
}

//This method gets the target transfer details from the submitBtn attributes. Then takes the text inside the textarea and posts the comment to Hyperion
postComment(){
//Set loader to be visible
document.getElementById("loaderBackground").style.visibility = "visible";
//Get submit button element
let button = document.getElementById("submitComment");
//Get transfer attributes from button
let entity = button.getAttribute("data-entity");
let transfer = button.getAttribute("data-transfer")
let segment = button.getAttribute("data-segment")
let version = button.getAttribute("data-version")
//Get text inside the textarea to post it as the comment
let text = document.getElementById("commentBody").value;
console.log(text);
//Hide the comment box
document.getElementById("commentBox").style.visibility = "hidden";
//Sent request to Python app to post the comment to Hyperion
//Params required: auth base64, url, entity, transfer, segment, version, text
axios.post(serverUrl+'/postComment', {text},
{
  headers: {
    'auth': localStorage.getItem('auth'),
    'url': baseUrl + 'applications/' + appName + '/dataimport/plantypes/MOF_BT/',
    'entity': entity,
    'transfer': transfer,
    'segment': segment,
    'version': version
  }
}).then((response) => {
  // console.log("Number of accepted cells: "+response.data.numAcceptedCells);
  // console.log("Number of rejected cells: "+response.data.numRejectedCells);
  console.log(response)
  //Call componentDidMount to re render page with modified comments
  this.componentDidMount();
})

}

// This function hides the comment window. Called when cancel is clicked
hideCommentBox(){
document.getElementById("commentBox").style.visibility = "hidden";
}

//Submit transfers' actions to Hyperion
submit(len){
  //Set loader to be visible
  document.getElementById("loaderBackground").style.visibility = "visible";
  var radios;
  var promises = [];
  var that = this;
  var approveRule = false;
  var rejectRule = false;
  //Loop on transfers available in page
  for (var i = 0; i<len; i++){
    //get the four radio buttons for this transfer
    radios = document.getElementsByName(i);
    for (var j = 0; j < radios.length; j++){
      //Loop on each radio button
      var curr = radios[j];
      if (curr.checked){
        var entity = curr.getAttribute('entity');
        var transfer = curr.getAttribute('transfer');
        var segment = curr.getAttribute('segment');
        var vNum = curr.getAttribute('vnum');
        var flag = 0;
        // do whatever you want with the checked radio according to value
        if(curr.value === "Yes"){
          flag = 2;
          approveRule = true;
        }
        if(curr.value === "Up"){
          flag = 1;
          approveRule = true;
        }
        if(curr.value === "No"){
          flag = 3;
          rejectRule = true;
        }
        if(flag != 0){
          console.log("set flag: "+ Date.now()/1000);
          promises.push(axios.get(serverUrl+'/setFlag',
          {
            headers: {
              'auth': localStorage.getItem('auth'),
              'url': baseUrl + 'applications/' + appName + '/dataimport/plantypes/MOF_BT/',
              'entity': entity,
              'transfer': transfer,
              'segment': segment,
              'version': getStageNameEN(vNum),
              'flag': flag
            }
          }));
        }
      }
    }
  }
  axios.all(promises).then(function(results) {
    for(var i = 0; i<results.length; i++){
      console.log(results[i]);
    }
    if(approveRule && rejectRule){
      console.log("approve and rej entered if cond: "+Date.now()/1000);
      axios.get(serverUrl+'/runRule',
      {
        headers: {
          'auth': localStorage.getItem('auth'),
          'url': baseUrl + 'applications/' + appName + '/jobs',
          'ruleName': 'Test_Empty_Approve'
        }
      }).then((response)=> {
        console.log("Approve in both: "+Date.now()/1000);
        console.log(response);
        axios.get(serverUrl+'/runRule',
        {
          headers: {
            'auth': localStorage.getItem('auth'),
            'url': baseUrl + 'applications/' + appName + '/jobs',
            'ruleName': 'Test_Empty_Reject'
          }
        }).then((response)=> {
          console.log(response);
          console.log("reject in both: "+Date.now()/1000);
          window.location.reload();
        })
      })
    }
    else if(approveRule){
      axios.get(serverUrl+'/runRule',
      {
        headers: {
          'auth': localStorage.getItem('auth'),
          'url': baseUrl + 'applications/' + appName + '/jobs',
          'ruleName': 'Test_Empty_Approve'
        }
      }).then((response)=> {
        console.log("Approve only: "+Date.now()/1000);
        console.log(response);
        window.location.reload();
      })
    }
    else if(rejectRule){
      axios.get(serverUrl+'/runRule',
      {
        headers: {
          'auth': localStorage.getItem('auth'),
          'url': baseUrl + 'applications/' + appName + '/jobs',
          'ruleName': 'Test_Empty_Reject'
        }
      }).then((response)=> {
        console.log("Reject only: "+Date.now()/1000);
        console.log(response);
        window.location.reload();
      })
    }

  });
  if(promises.length === 0)
    document.getElementById("loaderBackground").style.visibility = "hidden";
}

componentDidMount(){
  //Set loader to visible while the data is loaded
  document.getElementById("loaderBackground").style.visibility = "visible";
  //Get required form name using logged in user's stage number
  var formName = getFormName(localStorage.getItem('stageNumber'));
  //Send GET request to Python app to retrieve data in form
  axios.get(serverUrl+'/getData',
  {
    headers: {'auth': localStorage.getItem('auth'),
    'url': baseUrl + 'applications/' + appName + '/dataexport/' + formName}
  }).then((response) => {
    // Delete rows that have flag set (Business rule running)
    for(var i = 0; i<response.data.rows.length; i++){
      if(response.data.rows[i].data[3]){
        response.data.rows.splice(i,1);
        i--;
      }
    }
    //Set state.data to the data received
    this.setState({data:response.data});
    //Hide the loader after loading data is done
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
var data = this.state.data;
//Check if data is loaded first
if (data.rows){
return(
  <div className="container-fluid">
    {/* Comment entry box */}
    <div id="commentBox" dir="rtl">
      <div id="commentTitle">التعليقات</div>
      <div id="commentIdentifier">M09, NFT001, TS01</div>
      <textarea name="commentBody" id="commentBody"/>
      <br/>
      <input type="button" className="commentButton" value="إلغاء" onClick={this.hideCommentBox}/>
      <input type="button" id="submitComment" className="commentButton" data-entity="" data-transfer="" data-segment="" data-version="" value="إرسال" onClick={this.postComment}/>
    </div>
    {/* The gold bar that has stage name */}
    <div className="transferdiv row">
      <div className="col">
        <label className="transferlbl">{getStageName(localStorage.getItem('stageNumber'))}</label>
      </div>
    </div>
    {/* Link to the approved transfers (stage 9) page */}
    <div id="approvedLink" className="row">
      <Link to={{
        pathname: '/Approved',
      }}>
      <p><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"/>المناقلات المعتمدة</p>
    </Link>
  </div>
  {/* Data retrieved from form - saved in state - to be displayed in a table */}
  <div className="body" dir="rtl">
    <div className="row">
      <div className="divtable">
        <table id="t01">
          <thead>
            <tr id="header">
              <th>#</th>
              <th>نوع المناقلة</th>
              <th className="bigCol">المناقلة</th>
              <th className="bigCol">الجهة</th>
              <th className="bigCol">تاريخ الطلب</th>
              <th>المبلغ</th>
              <th className="bigCol">ملاحظات</th>
              <th>تفاصيل</th>
              <th>إعتماد</th>
              {localStorage.getItem('stageNumber')==="7"?null:<th>ترقية</th>}
              <th>رفض</th>
              <th id="lastColumn">بدون إجراء</th>
            </tr>
          </thead>
          {/* Map each row in data.rows to a Row component */}
          <tbody>
            {data.rows.length>0 ? data.rows.map((row,i) => <Row data={row} key={i} id={i} showCommentBox={this.showCommentBox}></Row>) : null}
          </tbody>
        </table>
      </div>
    </div>
    {/* Submit transfers' actions button, confirm before action */}
    <input type="button" className="submitBtn" name="submit" value="إرسال" onClick={() => { if (window.confirm('تأكيد؟')) this.submit(this.state.data.rows.length)}}/>
  </div>
</div>

);

}
else {
  return(
    <div className="container-fluid">
      <div className="transferdiv row">
        <div className="col">
          <label className="transferlbl">{getStageName(localStorage.getItem('stageNumber'))}</label>
        </div>
      </div>
    </div>
  )
}
//Close render function
}
//End Class
}


export default withRouter(Transfers);
