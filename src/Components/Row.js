import React from 'react';
import { Link } from 'react-router-dom';

function Row(props){

  // console.log("ROW function called");
  // console.log(props);
  // console.log(props.entity);

  let row = props.data;
  if (row){
      return(
          <tr>
						<td>{row.row[1]},{row.row[2]}</td>
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
            }}>Details</Link>
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