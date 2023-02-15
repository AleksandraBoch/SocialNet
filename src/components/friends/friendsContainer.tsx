import React from "react";
import {UserType} from "./friendsAPI";
import {AppStateType} from "../State/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC} from "../State/friendsReduser";
import {connect} from "react-redux";
import FriendsAPI from "./friendsAPI";

type MapStatePropsType={
    users:Array<UserType>
    pageSize:number,
    totalUsersCount:number,
    currentPage:any
}

type MapDispatchPropsType={
    follow:(userID:number)=>void,
    unfollow:(userId:number)=>void,
    setUsers:(users:Array<UserType>)=>void
}

const mapStateProps=(state:AppStateType):MapStatePropsType=>{
    return {
        users:state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount:state.friendsPage.totalUsersCount,
        currentPage:state.friendsPage.currentPage
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


const FriendsContainer=connect(mapStateProps, mapDispatchToProps)(FriendsAPI)
export default FriendsContainer