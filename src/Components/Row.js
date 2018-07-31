import React from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.min.css'

function Row(props){

  let row = props.data;
  if (row){
      return(
          <tr>
						<td>{row.row[1]}</td>
            <td>{row.row[2]}</td>
						<td>{row.data[1]}</td>
						<td>{row.row[0]}</td>
            <td>{row.data[0]}</td>
            <td>comments</td>
            <td>
            <Link to={{
              pathname: 'TransferDetails',
              state: {
                entity: row.row[0],
                transfer: row.row[1],
                segment: row.row[2]
              }
            }}><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></Link>
            </td>
            <td>
              <input type="radio" name={props.id} value="Yes"/>
            </td>
            <td>
              <input type="radio" name={props.id} value="No"/>
            </td>
            <td>
              <input type="radio" name={props.id} value="No-action"/>
            </td>
          </tr>



      );

  }
  else {
    return("");
  }

}

export default Row;
