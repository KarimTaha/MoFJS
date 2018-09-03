import React from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.min.css'
import {getTransferName, getSegmentName, getEntityName, numFormat, transferType} from '../js/utils'

function Row(props){

  let row = props.data;
  if (row){
    let entity = row.row[0];
    let transfer = row.row[1];
    let segment = row.row[2];
    let date = row.data[1];
    let amount = row.data[0];
    let comments = row.data[2];
    return(
      <tr>
        <td>{props.id+1}</td>
        <td>{transferType(transfer)}</td>
        <td>{getTransferName(transfer)+" - "+getSegmentName(segment)}</td>
        <td>{getEntityName(entity)}</td>
        <td>{date}</td>
        <td>{numFormat(amount)}</td>
        <td id={"Text-"+props.id}>{comments} <span className="glyphicon glyphicon-edit" entity={entity} transfer={transfer} segment={segment} id={props.id} onClick={((e) => props.showCommentBox(e))}/></td>
        <td>
          <Link to={{
            pathname: 'TransferDetails',
            state: {
              entity: entity,
              transfer: transfer,
              segment: segment,
              version: 1
            }
          }}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></Link>
        </td>
        <td>
          <input type="radio" name={props.id} entity={entity} transfer={transfer} segment={segment} value="Yes"/>
        </td>
        <td>
          <input type="radio" name={props.id} entity={entity} transfer={transfer} segment={segment} value="Up"/>
        </td>
        <td>
          <input type="radio" name={props.id} entity={entity} transfer={transfer} segment={segment} value="No"/>
        </td>
        <td>
          <input type="radio" name={props.id} entity={entity} transfer={transfer} segment={segment} defaultChecked value="No-action"/>
        </td>
      </tr>



    );

  }
  else {
    return("");
  }

}

export default Row;
