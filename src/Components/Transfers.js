import React, { Component } from 'react';
import {Link, withRouter} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Row from './Row.js';
import axios from 'axios';
import '../css/app.css'
import {getStageName, getFormName, getStageNameEN} from '../js/utils'

//Dubai server Hyperion url
var baseUrl = 'http://94.200.95.142:3290/HyperionPlanning/rest/11.1.2.4/';
var appName = 'MOF_BT';
//Server that has Python app deployed
var serverUrl = 'http://142.93.22.27:5000'
//Localhost Python server
var testUrl = 'http://127.0.0.1:5000'

// variables to keep track of last sorting order, changed with each sort
var dateAsc = true;
var entityAsc = true;
var amountAsc = true;
var numAsc = false;

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

    this.sortByDate = this.sortByDate.bind(this);
    this.sortByAmount = this.sortByAmount.bind(this);
    this.sortByNumber = this.sortByNumber.bind(this);
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
    // axios.post(serverUrl+'/postComment', {text},
    // {
    //   headers: {
    //     'auth': localStorage.getItem('auth'),
    //     'url': baseUrl + 'applications/' + appName + '/dataimport/plantypes/MOF_BT/',
    //     'entity': entity,
    //     'transfer': transfer,
    //     'segment': segment,
    //     'version': version
    //   }
    // })
    var body = {'pov': ['Annual Value', '&CurrYear', 'Fund Transfer', 'Project NSP', 'Input View', 'Activity NSP', 'Account NSP', 'Location NSP',
    'Department NSP', version, 'Line Item NSP', transfer, segment],'columns': [['Remarks']],'rows': [{'row': [entity],'data': [text]}]};

    axios({
  		method: 'post',
  		url: '/api/postComment',
  		headers: {
  			'Authorization': 'Basic '+localStorage.getItem('auth'),
  			'Content-Type': 'application/json'
  	},
  		data: body
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
          console.log("approveRule set");
        }
        if(curr.value === "Up"){
          flag = 1;
          approveRule = true;
          console.log("approveRule set");
        }
        if(curr.value === "No"){
          flag = 3;
          rejectRule = true;
          console.log("rejectRule set");
        }
        if(flag != 0){
          console.log("set flag: "+ Date.now()/1000);

          var body = {'pov': ['Annual Value', '&CurrYear', 'Fund Transfer', 'Project NSP', 'Input View', 'Activity NSP', 'Account NSP', 'Location NSP',
          'Department NSP', getStageNameEN(vNum), 'Line Item NSP', transfer, segment],'columns': [['Flag']],'rows': [{'row': [entity],'data': [flag]}]}

          promises.push(axios.post('/api/setFlag',
            {
              	headers: {
                  'Authorization': 'Basic '+localStorage.getItem('auth'),
                  'Content-Type': 'application/json'
                },
                data: body
            }
          )
            // axios
            // ({
            //   method: 'post',
            //   url: '/api/setFlag',
            //   headers: {
            //     'Authorization': 'Basic '+localStorage.getItem('auth'),
            //     'Content-Type': 'application/json'
            //   },
            //   data: body
            // })
          );
        }
      }
    }
  }
  console.log("Approve Rule = "+approveRule+", Reject rule = "+ rejectRule);
  axios.all(promises).then(function(results) {
    if(approveRule && rejectRule){
      console.log("approve and rej entered if cond");
      body = 'jobType=RULES&jobName=MOF_BT_Remote_Stage_'+vNum+'_Promote_Approve';
      axios({
    		method: 'post',
    		url: '/api/runRule',
    		headers: {
    			'Authorization': 'Basic '+localStorage.getItem('auth'),
    			'Content-Type': 'text/plain'
    	},
    		data: body
    	}).then((response)=> {
        console.log("Approve in both: "+Date.now()/1000);
        console.log(response);
        body = 'jobType=RULES&jobName=MOF_BT_Remote_Stage_'+vNum+'_Reject';
        axios({
      		method: 'post',
      		url: '/api/runRule',
      		headers: {
      			'Authorization': 'Basic '+localStorage.getItem('auth'),
      			'Content-Type': 'text/plain'
      	},
      		data: body
      	}).then((response)=> {
          console.log(response);
          console.log("reject in both: "+Date.now()/1000);
          window.location.reload();
        })
      })
    }
    else if(approveRule){
      body = 'jobType=RULES&jobName=MOF_BT_Remote_Stage_'+vNum+'_Promote_Approve';
      axios({
    		method: 'post',
    		url: '/api/runRule',
    		headers: {
    			'Authorization': 'Basic '+localStorage.getItem('auth'),
    			'Content-Type': 'text/plain'
    	},
    		data: body
    	}).then((response)=> {
        window.location.reload();
      })
    }
    else if(rejectRule){
      body = 'jobType=RULES&jobName=MOF_BT_Remote_Stage_'+vNum+'_Reject';
      axios({
        method: 'post',
        url: '/api/runRule',
        headers: {
          'Authorization': 'Basic '+localStorage.getItem('auth'),
          'Content-Type': 'text/plain'
      },
        data: body
      }).then((response)=> {
        window.location.reload();
      })
    }

  }).catch(error => {
    console.log(error);
    document.getElementById("loaderBackground").style.visibility = "hidden";
    toast.error("Error occurred axios all!",{
      autoClose: false
      });
  });
  if(promises.length === 0)
    document.getElementById("loaderBackground").style.visibility = "hidden";
}


  // Sort rows by row number
  sortByNumber(){
    var data = this.state.data;
    var rows = data.rows;
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
    this.setState({data:data});
  }

  // Sort rows by money amount
  sortByAmount(){
    var data = this.state.data;
    var rows = data.rows;
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
    this.setState({data:data});
  }

  // Sort rows by transfer creation date
  sortByDate(){
    var data = this.state.data;
    var rows = data.rows;
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
  this.setState({data:data});
  }


  componentDidMount(){
    if(localStorage.getItem('loggedIn')){
      //Set loader to visible while the data is loaded
      document.getElementById("loaderBackground").style.visibility = "visible";
      //Get required form name using logged in user's stage number
      var formName = getFormName(localStorage.getItem('stageNumber'));
      //Send GET request to Python app to retrieve data in form
      // axios.get(serverUrl+'/getData',
      axios.get('/api/forms/'+formName,
      {
        headers: {'Authorization': 'Basic '+localStorage.getItem('auth')}
        // headers: {'auth': localStorage.getItem('auth'),
        // 'url': baseUrl + 'applications/MOF_BT/dataexport/' + formName

      }).then((response) => {
        console.log("Response:")
        console.log(response);
        // Delete rows that have flag set (Business rule running)
        for(var i = 0; i<response.data.rows.length; i++){
          response.data.rows[i].num = i+1;
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
        console.log(error);
        console.log("Error in Transfers")
        document.getElementById("loaderBackground").style.visibility = "hidden";
        toast.error("Error occurred!",{
          autoClose: false
          });
      });
    }
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
                <th># <span className="glyphicon glyphicon-sort" onClick={this.sortByNumber}></span></th>
                <th>نوع المناقلة</th>
                <th className="bigCol">المناقلة</th>
                <th className="bigCol">الجهة <span className="glyphicon glyphicon-sort" onClick={this.sortByNumber}></span></th>
                <th className="bigCol">تاريخ الطلب <span className="glyphicon glyphicon-sort" onClick={this.sortByDate}></span></th>
                <th>المبلغ <span className="glyphicon glyphicon-sort" onClick={this.sortByAmount}></span></th>
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
              {data.rows.length>0 ? data.rows.map((row,i) => <Row data={row} key={row.num} id={i} showCommentBox={this.showCommentBox}></Row>) : null}
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


export default withRouter(Transfers);
