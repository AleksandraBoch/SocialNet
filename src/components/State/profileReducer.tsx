import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {ActionsTypes, AddPostActionType, ChangeNewPostType} from "./State";

export type ProfileReducerType = {
    newPostText: string,
    posts: {
        id: number,
        message: string,
        likesCount: number
    }[]
}

let initialState = {
    'newPostText': '',
    'posts':
        [
            {id: 1, message: 'My first post', likesCount: 12},
            {id: 2, message: 'Im Okay', likesCount: 11},
            {id: 3, message: 'im learning js', likesCount: 1}
        ]
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
                newPostText: '',
                posts: [...state.posts, newPost]
            }

        case 'CHANGE-NEW-POST':
            // state.newPostText = action.newPostText;
            return {...state, newPostText: action.newPostText}
    }
    return state
}

export let addPostActionCreator = (postText: string): AddPostActionType => {
    return {
        type: "ADD-POST",
        postText: postText
    }
}

export let changePostActionCreator = (text: string): ChangeNewPostType => {
    console.log('text', text)
    return {
        type: "CHANGE-NEW-POST",
        newPostText: text
    }
}