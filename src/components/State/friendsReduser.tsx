import React from "react";
import {UserType} from "../users/usersContainer";
import {UsersAPI} from "../API/api";
import {dispatchType} from "./redux-store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'


type FriendsPageType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followInProgress:number[]
}

type ActionCreatorType = followAC | UnfollowAC |ToggleIsFetchingProgress | setUsersAC
    | setCurrentPage | setTotalUsersCount | ToggleIsFetching
type ToggleIsFetching = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}

type setTotalUsersCount = {
    type: "SET_TOTAL_USERS_COUNT",
    payload: {
        totalUsersCount: number
    }
}
type setCurrentPage = {
    type: 'SET_CURRENT_PAGE',
    currentPage: number
}
type followAC = {
    type: 'FOLLOW',
    payload: {
        userId: number
    },
}

export type UnfollowAC = {
    type: 'UNFOLLOW',
    payload: {
        userId: number
    },
}

type setUsersAC = {
    type: 'SET_USERS'
    payload: {
        users: Array<UserType>
    }
}

type ToggleIsFetchingProgress = {
    type: "TOGGLE_IS_FETCHING_PROGRESS",
    isFetching: boolean,
    userId:number
}

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followInProgress:[]

}

export const friendsReducer = (state: FriendsPageType = initialState, action: ActionCreatorType): FriendsPageType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                        if (el.id === action.payload.userId) {
                            return {
                                ...el, followed: true
                            }
                        }
                        return el;
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => {
                        if (el.id === action.payload.userId) {
                            return {
                                ...el, followed: false
                            }
                        }
                        return el;
                    }
                )

            }

        case 'SET_USERS':
            return {
                ...state, users: action.payload.users
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state, currentPage: action.currentPage
            }

        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state, totalUsersCount: action.payload.totalUsersCount
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state, isFetching: action.isFetching
            }

        case "TOGGLE_IS_FETCHING_PROGRESS":
            return {
                ...state, followInProgress: action.isFetching
                ?[...state.followInProgress,action.userId]
                    :state.followInProgress.filter(id=>id!=action.userId)
            }
        default:
            return state
    }
}

export const followSucAC = (userId: number): followAC => {
    return {
        type: FOLLOW,
        payload: {userId}

    }
}
export const unfollowSucAC = (userId: number): UnfollowAC => {
    return {
        type: UNFOLLOW,
        payload: {
            userId
        }
    }
}

export const setUsersAC = (users: Array<UserType>): setUsersAC => {
    return {
        type: 'SET_USERS',
        payload: {users}
    }
}

export const setCurrentPageAC = (currentPage: number): setCurrentPage => {
    return {
        type: 'SET_CURRENT_PAGE',

        currentPage

    }
}

export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCount => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        payload: {
            totalUsersCount
        }
    }
}
export const toggleIsFetchingAC = (isFetching: boolean): ToggleIsFetching => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    }
}
export const toggleFollowingProgressAC = (isFetching: boolean, userId:number): ToggleIsFetchingProgress => {
    return {
        type: "TOGGLE_IS_FETCHING_PROGRESS",
        isFetching,userId
    }
}

export const getUsersThunkCreator=(currentPage:number,pageSize:number)=>
  (dispatch:dispatchType)=>{
        dispatch(toggleIsFetchingAC(true));

        UsersAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalUsersCountAC(data.totalCount))
        })

}

export const followThunkCreator=(userId:number)=>
    (dispatch:dispatchType)=>{

        dispatch(toggleFollowingProgressAC(true,userId))

        UsersAPI.follow(userId).then(response => {
            if (response.data.resultCode ==0)
            {dispatch(followSucAC(userId))}

            dispatch(toggleFollowingProgressAC(false,userId))
        })
    }

export const unfollowThunkCreator=(userId:number)=>
    (dispatch:dispatchType)=>{

        dispatch(toggleFollowingProgressAC(true,userId))

        UsersAPI.follow(userId).then(response => {
            if (response.data.resultCode ==0)
            {dispatch(unfollowSucAC(userId))}

            dispatch(toggleFollowingProgressAC(false,userId))
        })
    }