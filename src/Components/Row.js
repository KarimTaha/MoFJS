import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.min.css'
import {getTransferName, getSegmentName, getEntityName, numFormat, transferType, getTransferTypeArabic} from '../js/utils'

class Row extends Component{

  constructor(props){
    console.log("Row constructor called");
    super(props);
    this.state= {
      data: props.data,
      id: props.id,
      checked: "No-action",
      year: props.year
    }
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.showCommentBox = props.showCommentBox;
  }

  // Function to handle checkbox change to keep track of selected option
  handleOptionChange= function (changeEvent) {
    this.setState({
      checked: changeEvent.target.value
    });
  }

  render(){
    let row = this.state.data;
    if (row){
      // Variables to keep track of data passed from Transfers
      let entity = row.row[0];
      let transfer = row.row[1];
      let segment = row.row[2];
      let versionNum = localStorage.getItem('stageNumber');
      let date = row.data[1];
      let amount = row.data[0];
      let comments = row.data[2];
      let validation = row.data[5];
      let year = this.state.year;
      return(
        <tr>
          <td>{this.state.id+1}</td>
          <td>{getTransferTypeArabic(transferType(transfer))}</td>
          <td>{getTransferName(transfer)+" - "+getSegmentName(segment)}</td>
          <td>{getEntityName(entity)}</td>
          <td>{date}</td>
          <td>{numFormat(amount)}</td>
          <td id={"Text-"+this.state.id}>{comments}<span className="glyphicon glyphicon-edit" entity={entity} transfer={transfer} segment={segment} id={this.state.id} onClick={((e) => this.showCommentBox(e))}/></td>
          <td>
            <Link to={{
              pathname: 'TransferDetails',
              state: {
                entity: entity,
                transfer: transfer,
                segment: segment,
                version: versionNum,
                validation: validation,
                year: year
              }
            }}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></Link>
          </td>
          <td>
            <input type="radio" name={this.state.id} entity={entity} transfer={transfer} segment={segment} vnum={versionNum} checked={this.state.checked==="Yes"} onChange={this.handleOptionChange} value="Yes"/>
          </td>
          // Do not show promote column for stage 7 users
          {localStorage.getItem('stageNumber')==="7"?null:<td><input type="radio" name={this.state.id} entity={entity} transfer={transfer} segment={segment} vnum={versionNum} checked={this.state.checked==="Up"} onChange={this.handleOptionChange} value="Up"/></td>}
          <td>
            <input type="radio" name={this.state.id} entity={entity} transfer={transfer} segment={segment} vnum={versionNum} checked={this.state.checked==="No"} onChange={this.handleOptionChange} value="No"/>
          </td>
          <td>
            <input type="radio" name={this.state.id} entity={entity} transfer={transfer} segment={segment} vnum={versionNum} checked={this.state.checked==="No-action"} onChange={this.handleOptionChange} value="No-action"/>
          </td>
        </tr>



      );

    }
    else {
      return("");
    }

  }
}

export default Row;
