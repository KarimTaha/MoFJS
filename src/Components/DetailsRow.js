import React from 'react';
import {numFormat} from '../js/utils'

function DetailsRow(props){

  let row = props.data;
  let type = props.type;
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
            {type==="PFT" || type==="MPFT"?<td>proj</td>:null}
            {type==="MFT" || type==="MPFT"?<td>ent</td>:null}
            {type==="AFT"?null:<td>{numFormat(fromAmount)}</td>}
            <td>{numFormat(toAmount)}</td>
            <td></td>
          </tr>
      );
  }
  else {
    return("");
  }

}

export default DetailsRow;
