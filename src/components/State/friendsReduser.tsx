import React from "react";
import {UserType} from "../friends/friendsAPI";
import exp from "constants";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'



type FriendsPageType={
    users:Array<UserType>,
    pageSize:number,
    totalUsersCount:number,
    currentPage:number,
}

type ActionCreatorType= followAC|UnfollowAC|setUsersAC|setUsersAC
|setCurrentPage|setTotalUsersCount


type setTotalUsersCount = {
    type: "SET_TOTAL_USERS_COUNT",
    payload: {
        totalUsersCount: number
    }
}
type setCurrentPage ={
    type:'SET_CURRENT_PAGE',
    payload:{
        currentPage:number
    }
}
 type followAC={
    type:'FOLLOW',
    payload:{
        userId:number
    },
}

export type UnfollowAC={
    type:'UNFOLLOW',
    payload:{
        userId:number
    },
}

type setUsersAC={
    type:'SET_USERS'
    payload:{
        users:Array<UserType>
    }
}

let initialState = {
users:[],
    pageSize:5,
    totalUsersCount:0,
    currentPage:1,

}

export const friendsReducer = (state: FriendsPageType = initialState, action: ActionCreatorType):FriendsPageType  => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ? {
                    ...el, follow: true
                } : el)
            }


        case UNFOLLOW:
            return {
                ...state, users: state.users.map(el => el.id === action.payload.userId ? {
                    ...el, follow: false
                } : el)
            }

        case 'SET_USERS':
            return{
                ...state,users:action.payload.users
                 }
        case "SET_CURRENT_PAGE":
            return{
                ...state,currentPage:action.payload.currentPage
            }

        case "SET_TOTAL_USERS_COUNT":
            return{
                ...state,totalUsersCount:action.payload.totalUsersCount
            }
        default:
            return state
    }
}

export const followAC = (userId: number): followAC => {
    return {
        type: FOLLOW,
        payload:{userId}

    }
}
export const unfollowAC = (userId:number): UnfollowAC => {
    return {
        type: UNFOLLOW,
        payload:{userId
        }
    }
}

export const setUsersAC = (users:Array<UserType>):setUsersAC => {
  return {
      type:'SET_USERS',
      payload:{users}
  }
}

export const setCurrentPageAC=(currentPage:number):setCurrentPage=>{
    return{
        type:'SET_CURRENT_PAGE',
        payload:{
            currentPage
        }
    }
}

export const setTotalUSersCount=(totalUsersCount:number):setTotalUsersCount=>{
    return{
        type:'SET_TOTAL_USERS_COUNT',
        payload:{
            totalUsersCount
        }
    }
}