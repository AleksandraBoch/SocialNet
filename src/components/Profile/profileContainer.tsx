import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostsDataType} from "./MyPosts/MyPosts";
import {setUsersProfile} from "../State/profileReducer";
import {StateProps} from "../State/State";

type ProfilePropsType={
    profilePage: {
        newPostText:string,
        posts: Array<PostsDataType>
    }}

export class ProfileContainer extends React.Component<any,ProfilePropsType>{

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
                {...this.props}
            />
</>

    )}
}

type MapStatePropsType={

}

let mapStateToProps=(state:StateProps):MapStatePropsType=>{
return {
    profile:state.profilePage.profile
}
}


export default  connect(mapStateToProps,{setUsersProfile})(ProfileContainer)