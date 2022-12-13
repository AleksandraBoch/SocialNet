import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {MessagePropsType} from "../Dialogs/Message/message";
import {DialogsItemProps} from "../Dialogs/DialogItem/dialogItem";
import {renderReactTree} from "./render";


export type DialogsPageProps = {
    newMessageText:string,
    dialogsData: Array<DialogsItemProps>
    messageData: Array<MessagePropsType>
}


export type StateProps = {
    dialogsPage: DialogsPageProps
    ProfilePage:ProfilePageType

}

type ProfilePageType={
    newPostText:string
    posts:Array<PostsDataType>

}


export let state: StateProps = {
    'dialogsPage': {
        'newMessageText':'',

        "dialogsData": [
            {id: 1, name: "Sasha"},
            {id: 2, name: "Dina"},
            {id: 3, name: "Vladimir"},
            {id: 4, name: "Egor"},

        ],
        'messageData': [
            {id: 1, message: 'Hello'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Whats the weather like today?'}

        ]
    },
    ProfilePage: {
        'newPostText': '',

        'posts':
            [
                {id: 1, message: 'My first post', likesCount: 12},
                {id: 1, message: 'Im Okay', likesCount: 11},
                {id: 3, message: 'im learning js', likesCount: 1}
            ]
    }
}

export let addMessage=(text:string)=>{
    const newMessage:MessagePropsType={
        id:new Date().getTime(),
        message:text
    }
    state.dialogsPage.messageData.push(newMessage)
    renderReactTree()

}


export let addPost = (text: string) => {
    const newPost: PostsDataType = {
        id: new Date().getTime(),
        message: text,
        likesCount: 0
    }
    state.ProfilePage.posts.push(newPost)
    renderReactTree()
}


export let updateNewPost=(newText:string)=>{
    state.ProfilePage.newPostText=newText
    renderReactTree()

}

export let updateNewMessage=(newText:string)=>{
    state.dialogsPage.newMessageText=newText
    renderReactTree()
}