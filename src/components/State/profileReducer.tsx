import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {ActionsTypes, AddMessageType, AddPostActionType, ChangeNewPostType, ProfilePageType, StateProps} from "./State";




export const profileReducer=(state:ProfilePageType,action:ActionsTypes)=> {
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