import React from "react";
import Friends, {UserType} from "./friends";
import {AppStateType} from "../State/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../State/friendsReduser";
import {connect} from "react-redux";

type MapStatePropsType={
    users:Array<UserType>
}

type MapDispatchPropsType={
    follow:(userID:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users:Array<UserType>)=>void
}

const mapStateProps=(state:AppStateType):MapStatePropsType=>{
    return {
        users:state.friendsPage.users
    }

}

const mapDispatchToProps=(dispatch:Dispatch):MapDispatchPropsType=>{
    return {
        follow:(userID:number)=>{
            dispatch(followAC(userID))},
        unfollow:(userId:number)=>{
            dispatch(unfollowAC(userId))
        },
        setUsers:(users:Array<UserType>)=>{
            dispatch(setUsersAC(users))
        }
    }
}


const FriendsContainer=connect(mapStateProps, mapDispatchToProps)(Friends)
export default FriendsContainer