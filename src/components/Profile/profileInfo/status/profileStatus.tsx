import React from "react";
import {updateStatus} from "../../../State/profileReducer";

export type ProfileStatusType={
    status:string
}

class ProfileStatus extends React.Component<ProfileStatusType>{

state={
    editMode:false,
    status:this.props.status
}

activateEditMode=()=>{
    this.setState({editMode:true})
}

    deactivateEditMode=()=>{
        this.setState({editMode:false})
        updateStatus(this.state.status)
    }
    onStatusChange=(e:any)=>{
   this.setState({status:e.currentTarget.value})
    }

    render() {
        return (<>
            {this.state.editMode ?
                <div>
                    <input onChange={this.onStatusChange}
                        onBlur={this.deactivateEditMode} type="text" value={this.props.status}
                           autoFocus/>
                </div> :
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>}
            </>
        );
    }
}
export  default ProfileStatus;