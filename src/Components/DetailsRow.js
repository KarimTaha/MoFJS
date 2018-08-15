import React from 'react';
import {getTransferName, getSegmentName, getEntityName, numFormat, getLine} from '../js/utils'

function DetailsRow(props){

  let row = props.data;
  if (row){
    var lineItem = row.row[0];
    var account = row.data[0];
    var activity = row.data[2];
    var location = row.data[1];
    var fromAmount = row.data[3];
    var toAmount = row.data[4];
      return(
          <tr>
						<td>{props.id+1}</td>
            <td>{account}</td>
            <td>{activity}</td>
            <td>{location}</td>
            <td>{numFormat(fromAmount)}</td>
            <td>{numFormat(toAmount)}</td>
          </tr>
      );
  }
  else {
    return("");
  }

}

export default DetailsRow;
