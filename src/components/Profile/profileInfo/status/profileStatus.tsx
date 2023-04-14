import React from "react";

export type ProfileStatusType={
    status:string
}

class ProfileStatus extends React.Component<ProfileStatusType>{

state={
    editMode:false,
}

activateEditMode=()=>{
    this.setState({editMode:true})
}

    deactivateEditMode=()=>{
        this.setState({editMode:false})
    }

    render() {
        return (<>
            {this.state.editMode ?
                <div>
                    <input onBlur={this.deactivateEditMode.bind(this)} type="text" value={this.props.status}
                           autoFocus/>
                </div> :
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>}
            </>
        );
    }
}
export  default ProfileStatus;