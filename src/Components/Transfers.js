import React, { Component } from 'react';
import '../css/home.css';
import {askagree , hideWindow} from '../js/home.js';
import {withRouter} from 'react-router-dom';
import Row from './Row.js';
import axios from 'axios';

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
    axios.get(baseUrl + 'applications/' + appName + '/dataexport/' + ruleName,
    {
      headers: { 'Authorization': 'Basic '+localStorage.getItem('auth') }
    }).then((response) => {
      this.setState({data:response.data});
    });
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
            <div className="transfernumberdiv">
              <h3><label id="transferlbl">Transfers in stage 7 - Assistant Undersecretary</label></h3>
            </div>
          </div>

          <div className="body">
            <div className="divtable">
              <table id="t01">
                <thead>
                  <tr>
                    <th>Transfer Number</th>
                    <th>Request Date</th>
                    <th>Entity</th>
                    <th>Amount</th>
                    <th>Comments</th>
                    <th></th>
                    <th>Approve</th>
                    <th>Reject</th>
                    <th>No Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.rows.length>0 ? data.rows.map((row,i) => <Row data={row} key={i} id={i}></Row>) : <p>No Data</p>}
                </tbody>
              </table>
            </div>
            <input type="button" className="submitBtn" name="submit" value="Submit" onClick={askagree}/>
          </div>

          <div className="popup" id="dialog" style={{visibility: 'hidden'}}>
            <div className="rowcontainer">
              <div className="row">
                <p id="dialogText"></p>
              </div>
              <div className="row">
                <div className="checkcontainer">
                  <div className="checkbtn"><button onClick={hideWindow} className="yesbtn">Yes</button>
                </div>
                <div className="checkbtn"><button onClick={hideWindow} className="nobtn">No</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  );

}
else {
  return("");
}
}

}

export default withRouter(Transfers);
