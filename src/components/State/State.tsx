import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {MessagePropsType} from "../Dialogs/Message/message";
import {DialogsItemProps} from "../Dialogs/DialogItem/dialogItem";
import {renderReactTree} from "./render";

let ADD_POST = 'ADD-POST'
let CHANGE_NEW_POST = 'CHANGE-NEW-POST'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'

export type DialogsPageProps = {
    newMessageText: string,
    dialogsData: Array<DialogsItemProps>
    messageData: Array<MessagePropsType>
}
export type StateProps = {
    dialogsPage: DialogsPageProps
    profilePage: ProfilePageType

}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsDataType>

}
export type StoreType = {
    _state: StateProps,
    // updateNewMessage: (newText: string) => void,
    // addMessage: (text: string) => void,
    getState: () => StateProps,
    dispatch: (action: ActionsTypes) => void

}
export type ActionsTypes = AddPostActionType | ChangeNewPostType | UpdateNewMessageBody | AddMessageType
export type UpdateNewMessageBody = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessageText: string
}
export type AddMessageType = {
    type: 'ADD-MESSAGE',
    newMessage: string

}
export type AddPostActionType = {
    type: 'ADD-POST',
    postText: string

}
export type ChangeNewPostType = {
    type: 'CHANGE-NEW-POST',
    newPostText: string
}
const store = {
    _state: {
        dialogsPage: {
            'newMessageText': '',

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
        profilePage: {
            'newPostText': '',

            'posts':
                [
                    {id: 1, message: 'My first post', likesCount: 12},
                    {id: 1, message: 'Im Okay', likesCount: 11},
                    {id: 3, message: 'im learning js', likesCount: 1}
                ]
        }
    },
    // addMessage(text: string) {
    //     const newMessage: MessagePropsType = {
    //         id: new Date().getTime(),
    //         message: text
    //     }
    //     this._state.dialogsPage.messageData.push(newMessage)
    //     renderReactTree()
    //
    // },
    getState() {
        return this._state
    },
    dispatch(action: ActionsTypes) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsDataType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ' '
            renderReactTree()

        } else if (action.type === 'CHANGE-NEW-POST') {

            this._state.profilePage.newPostText = action.newPostText;
            renderReactTree()
        } else if (action.type == UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            renderReactTree()
        } else if (action.type === ADD_MESSAGE) {
            // let body = this._state.dialogsPage.newMessageText;
            // this._state.dialogsPage.newMessageText = ' '
            // this._state.dialogsPage.messageData.push({id: 6, message: body})
            let newMessage:MessagePropsType={
                id: new Date().getTime(),
                message:action.newMessage
            }
            this._state.dialogsPage.messageData.push(newMessage)

            renderReactTree()
        }
    }


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
        newMessage: "",

    }
}

export let changePostActionCreator = (text: string): ChangeNewPostType => {

    return {
        type: "CHANGE-NEW-POST",
        newPostText: text
    }
}


export default store;