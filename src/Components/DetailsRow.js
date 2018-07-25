import React from 'react';

function DetailsRow(props){

  let row = props.data;
  if (row){
    var header;
    switch(row.row[0]) {
      case "LI01":
          header = "ONE"
          break;
      case "LI02":
          header = "TWO"
          break;
      default:
          header = "NONE"
    }
      return(
          <tr>
						<td>{header}</td>
						<td>{row.data[0]}</td>
            <td>{row.data[1]}</td>
            <td>{row.data[2]}</td>
            <td>{row.data[3]}</td>
            <td>{row.data[4]}</td>
          </tr>
      );
  }
  else {
    return("");
  }

}

export default DetailsRow;