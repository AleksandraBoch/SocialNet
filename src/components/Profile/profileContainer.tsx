import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostsDataType} from "./MyPosts/MyPosts";
import {ProfileType, setUsersProfile} from "../State/profileReducer";
import {StateProps} from "../State/State";
import {ProfileInfoT} from "./profileInfo/ProfileInfo";

export type ProfilePropsType={
    profilePage: {
        newPostText:string,
        posts: Array<PostsDataType>,
        profile:null
    }}

export class ProfileContainer extends React.Component<any,ProfileInfoT>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
        then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data)
    })}

    render(){

    return(
        <>
            <Profile
                profile={undefined} name={""} id={0} photo={{
                large: undefined,
                small: undefined
            }} {...this.props}            />
</>

    )}
}

type MapStatePropsType={
    // posts: Array<PostPropsType>
    profile: ProfileType | null
}

let mapStateToProps=(state:StateProps):MapStatePropsType=>{
return {
    profile:state.profilePage.profile
}
}


export default  connect(mapStateToProps,{setUsersProfile})(ProfileContainer)