import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {ActionsTypes, AddPostActionType, ChangeNewPostType, ProfilePageType, setStatus, setUsersProps} from "./State";
import {ProfileAPI, UsersAPI} from "../API/api";
import {dispatchType} from "./redux-store";

export type ProfileReducerType = {
    newPostText: string,
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[],
    profile:any,
    status:string
}

export type ProfileType={
    profile: any;
    name:string,
    id:number,
    photo: {
        large: string | undefined,
        small: string | undefined
    },
    status:string,
    updateStatus:(status:string)=>void
}




let initialState = {
    'newPostText': '',
    'posts':
        [
            {id: 1, message: 'My first post', likesCount: 12},
            {id: 2, message: 'Im Okay', likesCount: 11},
            {id: 3, message: 'im learning js', likesCount: 1}
        ],
    profile:null,
    status:'',
}

export const profileReducer = (state: ProfileReducerType = initialState, action: ActionsTypes): ProfileReducerType => {
    switch (action.type) {
        case 'ADD-POST':
            debugger
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }

            // state.posts.push(newPost)
            // state.newPostText = ' '
            return {
                ...state,
                // newPostText: '',
                posts: [newPost,...state.posts ]
            }

        case 'CHANGE-NEW-POST':
            // state.newPostText = action.newPostText;
            return {...state, newPostText: action.newPostText}


        case 'SET-USERS-PROFILE':
            return {...state,profile:action.profile}

    case 'SET-STATUS':{
        return {...state,status:action.status}
    } }
    return state
}

export let setStatusAC=(status:string):setStatus=>{
    return {
       type:'SET-STATUS',
       status
    }
}

export let addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postText
    }
}

export let changePostActionCreator = (text: string): ChangeNewPostType => {
    return {
        type: "CHANGE-NEW-POST",
        newPostText: text
    }
}
export let setUsersProfile=(profile:ProfilePageType):setUsersProps=>{
    return{
        type:"SET-USERS-PROFILE",
        profile
    }
}


export const getStatus=(userId:number,status:string)=>(dispatch:dispatchType)=>{
    ProfileAPI.getStatus(userId).then(response=>{
        dispatch(setStatusAC(response.data))
    })
}
export const updateStatus=(status:string)=>(dispatch:dispatchType)=>{
    ProfileAPI.updateStatus(status).then(response=>{
        if(response.data.resultCode===0)
        {dispatch(setStatusAC(status))}

    })
}

export const getUserProfile=(userId:number)=>(dispatch:dispatchType)=>{
    UsersAPI.getProfile(userId).
    then(response => {
        dispatch(setUsersProfile(response.data))
    })

}