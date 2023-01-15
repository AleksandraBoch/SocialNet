import React from "react";
import {UserType} from "../friends/friends";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'



export type FriendsPageType={
    users:Array<UserType>
}

type ActionCreatorType= followAC|UnfollowAC|setUsersAC


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
users:[]
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
                ...state,users:[...state.users,...action.payload.users]
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