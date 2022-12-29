import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {ActionsTypes, AddMessageType, AddPostActionType, ChangeNewPostType, ProfilePageType, StateProps} from "./State";


let initialState={

    'newPostText': '',

    'posts':
        [
            {id: 1, message: 'My first post', likesCount: 12},
            {id: 1, message: 'Im Okay', likesCount: 11},
            {id: 3, message: 'im learning js', likesCount: 1}
        ]
}

export const profileReducer=(state=initialState,action:ActionsTypes)=> {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ' '
            return state

        case 'CHANGE-NEW-POST':
            state.newPostText = action.newPostText;
            break;
        default: return  state
    }
    return state
}

export let addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postText: postText
    }
}

export let addMessageAC = (newMessage: string): AddMessageType => {
    return {

        type: "ADD-MESSAGE",
        newMessage,

    }
}