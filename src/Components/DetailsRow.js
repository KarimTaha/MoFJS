import React from 'react';
import {numFormat} from '../js/utils'

function DetailsRow(props){

  let row = props.data;
  let type = props.type;
  if (row){
    // Returned columns
    // Account
    var SelectionAccount = row.data[0];
    var SelectAccountMoPW = row.data[1];
    var SelectAccountOMs = row.data[2];
    // Activity
    var SelectionActivityMxx = row.data[3];
    var SelectActivityM05 = row.data[4];
    var SelectActivityM06 = row.data[5];
    var SelectActivityMopw = row.data[6];
    // Location
    var SelectionLocation = row.data[7];
    var SelectLocationM05 = row.data[8];
    var SelectLocationM06 = row.data[9];
    var SelectLocationMoPW = row.data[10];
    // Project
    var SelectProjectOMs = row.data[11];
    var SelectProjectMoPW = row.data[12];
    // Source or target entity
    var SourceEntity = row.data[13];
    var TargetEntity = row.data[14];
    // Amount source and target
    var Source = row.data[15];
    var Destination = row.data[16];
    // Validation Message
    var ValidationMessage = row.data[17];
      return(
          <tr>
            {/* Row number */}
						<td>{props.id+1}</td>
            {/* Account, SelectAccountMoPW for PFT, SelectAccountOMs for PFT1 */}
            {type==="NFT"?<td>{SelectionAccount}</td>:null}
            {type==="AFT"?<td>{SelectionAccount}</td>:null}
            {type==="MFT"?<td>{SelectionAccount}</td>:null}
            {type==="PFT"?<td>{SelectAccountMoPW}</td>:null}
            {type==="PFT1"?<td>{SelectAccountOMs}</td>:null}
            {type==="MPFT"?<td>{SelectionAccount}</td>:null}
            {/* Activity, SelectionActivityMxx for NFT, SelectActivityM05, 06 for PFT1 */}
            {type==="NFT"?<td>{SelectionActivityMxx}</td>:null}
            {type==="AFT"?<td>{SelectionActivityMxx}</td>:null}
            {type==="MFT"?<td>{SelectionActivityMxx}</td>:null}
            {type==="PFT"?<td>{SelectActivityMopw}</td>:null}
            {type==="PFT1"?<td>{SelectActivityM05}</td>:null}
            {type==="MPFT"?<td>{SelectionActivityMxx}</td>:null}
            {/* Location */}
            {type==="NFT"?<td>{SelectionLocation}</td>:null}
            {type==="AFT"?<td>{SelectionLocation}</td>:null}
            {type==="MFT"?<td>{SelectionLocation}</td>:null}
            {type==="PFT"?<td>{SelectLocationMoPW}</td>:null}
            {type==="PFT1"?<td>{SelectLocationM05}</td>:null}
            {type==="MPFT"?<td>{SelectionLocation}</td>:null}
            {/* Project */}
            {type==="PFT" || type==="MPFT"?<td>{SelectProjectMoPW}</td>:null}
            {type==="PFT1"?<td>{SelectProjectOMs}</td>:null}
            {/* Source or target entity */}
            {type==="MFT" || type==="MPFT"?<td>{SourceEntity}</td>:null}
            {/* Source amount */}
            {type==="AFT"?null:<td>{numFormat(Source)}</td>}
            {/* Target Amount */}
            <td>{numFormat(Destination)}</td>
            {/* Validation Message */}
            <td>{ValidationMessage}</td>
          </tr>
      );
  }
  else {
    return("");
  }

}

export default DetailsRow;
