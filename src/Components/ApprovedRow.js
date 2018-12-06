import React from 'react';
import {getTransferName, getSegmentName, getEntityName, numFormat, transferType, getTransferTypeArabic} from '../js/utils'
import { Link } from 'react-router-dom';

function ApprovedRow(props){

  let row = props.data;
  if (row){
    let num = row.num;
    let entity = row.row[0];
    let transfer = row.row[1];
    let segment = row.row[2];
    let date = row.data[1];
    let amount = row.data[0];
    let validation = row.data[3];
    let year = props.year;
    return(
      <tr>
        <td>{num}</td>
        <td>{getTransferTypeArabic(transferType(transfer))}</td>
        <td>{getTransferName(transfer)+" - "+getSegmentName(segment)}</td>
        <td>{getEntityName(entity)}</td>
        <td>{date}</td>
        <td>{numFormat(amount)}</td>
        <td>
          <Link to={{
            pathname: 'TransferDetails',
            state: {
              entity: entity,
              transfer: transfer,
              segment: segment,
              version: "9",
              validation: validation,
              year: year
            }
          }}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></Link>
        </td>
      </tr>

    );

  }
  else {
    return("");
  }

}

export default ApprovedRow;
