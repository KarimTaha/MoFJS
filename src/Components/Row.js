import React from 'react';
import { Link } from 'react-router-dom';
import '../css/bootstrap.min.css'

function Row(props){

  let row = props.data;
  if (row){
    let entity = row.row[0];
    let transfer = row.row[1];
    let segment = row.row[2];
      return(
          <tr>
						<td>{transfer}</td>
            <td>{segment}</td>
						<td>{row.data[1]}</td>
						<td>{entity}</td>
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
            }}><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></Link>
            </td>
            <td>
              <input type="radio" name={props.id} entity={entity} transfer={transfer} segment={segment} value="Yes"/>
            </td>
            <td>
              <input type="radio" name={props.id} entity={entity} transfer={transfer} segment={segment} value="No"/>
            </td>
            <td>
              <input type="radio" name={props.id} entity={entity} transfer={transfer} segment={segment} value="No-action"/>
            </td>
          </tr>



      );

  }
  else {
    return("");
  }

}

export default Row;
