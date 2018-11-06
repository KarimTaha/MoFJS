import React from 'react';
import {numFormat} from '../js/utils'
import {getAccountName} from '../js/accounts'
import {getLocationName} from '../js/locations'
import {getProjectName} from '../js/projects'
import {getActivityName} from '../js/activities'

function DetailsRow(props){

  let row = props.data;
  let type = props.type;
  let entity = props.entity;
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
    var entityNum = SourceEntity.substring(1,3);
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
            {type==="NFT"?<td>{getAccountName(SelectionAccount)}</td>:null}
            {type==="AFT"?<td>{getAccountName(SelectionAccount)}</td>:null}
            {type==="MFT"?<td>{getAccountName(SelectionAccount)}</td>:null}
            {type==="PFT"?<td>{getAccountName(SelectAccountMoPW)}</td>:null}
            {type==="PFT1"?<td>{getAccountName(SelectAccountOMs)}</td>:null}
            {type==="MPFT"?<td>{getAccountName(SelectionAccount)}</td>:null}
            {/* Activity, SelectionActivityMxx for NFT, SelectActivityM05, 06 for PFT1 */}
            {type==="NFT"?<td>{getActivityName(entity,SelectionActivityMxx)}</td>:null}
            {type==="AFT"?<td>{getActivityName(entity,SelectionActivityMxx)}</td>:null}
            {type==="MFT"?<td>{getActivityName(entity,SelectionActivityMxx)}</td>:null}
            {type==="PFT"?<td>{getActivityName(entity,SelectActivityMopw)}</td>:null}
            {type==="PFT1"?<td>{getActivityName(entity,SelectActivityM05)}</td>:null}
            {type==="MPFT"?<td>{getActivityName(entity,SelectionActivityMxx)}</td>:null}
            {/* Location */}
            {type==="NFT"?<td>{getLocationName(SelectionLocation)}</td>:null}
            {type==="AFT"?<td>{getLocationName(SelectionLocation)}</td>:null}
            {type==="MFT"?<td>{getLocationName(SelectionLocation)}</td>:null}
            {type==="PFT"?<td>{getLocationName(SelectLocationMoPW)}</td>:null}
            {type==="PFT1"?<td>{getLocationName(SelectLocationM05)}</td>:null}
            {type==="MPFT"?<td>{getLocationName(SelectionLocation)}</td>:null}
            {/* Project */}
            {type==="PFT" || type==="MPFT"?<td>{getProjectName(SelectProjectMoPW)}</td>:null}
            {type==="PFT1"?<td>{getProjectName(SelectProjectOMs)}</td>:null}
            {/* Source or target entity */}
            {type==="MFT" || type==="MPFT"?<td>{TargetEntity}</td>:null}
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
