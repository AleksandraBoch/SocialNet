import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {MessagePropsType} from "../Dialogs/Message/message";
import {DialogsItemProps} from "../Dialogs/DialogItem/dialogItem";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";

//
// export const subscribe = (observer: () => void) => {
//     renderReactTree = observer;
// }

export type DialogsPageType = {
    newMessageText: string,
    dialogsData: Array<DialogsItemProps>
    messageData: Array<MessagePropsType>
}
export type StateProps = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
export type ProfilePageType = {
    newPostText: string
    posts: Array<PostsDataType>

}
export type StoreType = {
    state: StateProps,
    // updateNewMessage: (newText: string) => void,
    // addMessage: (text: string) => void,
    // getState: () => StateProps,
    // dispatch: (action: ActionsTypes) => void

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
export type ChangeNewMessageTextType = {
    type: 'UPDATE-NEW-MESSAGE-BODY',
    newMessageText: string
}
const store = {
    _state: {
        dialogsPage: {
            'newMessageText': '',

            "dialogsData": [
                {id: 11, name: "Sasha"},
                {id: 12, name: "Dina"},
                {id: 13, name: "Vladimir"},
                {id: 14, name: "Egor"},

            ],
            'messageData': [
                {id: 21, message: 'Hello'},
                {id: 22, message: 'How are you?'},
                {id: 23, message: 'Whats the weather like today?'}

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
    getState() {
        return this._state
    },
    dispatch(action: ActionsTypes) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        // renderReactTree()
        //
        // if (action.type === 'ADD-POST') {
        //     const newPost: PostsDataType = {
        //         id: new Date().getTime(),
        //         message: action.postText,
        //         likesCount: 0
        //     }
        //     this._state.profilePage.posts.push(newPost)
        //     this._state.profilePage.newPostText = ' '
        //     renderReactTree()
        //
        // } else if (action.type === 'CHANGE-NEW-POST') {
        //
        //     this._state.profilePage.newPostText = action.newPostText;
        //     renderReactTree()
        // } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        //     this._state.dialogsPage.newMessageText = action.newMessageText
        //     renderReactTree()
        // } else if (action.type === ADD_MESSAGE) {
        //     // let body = this._state.dialogsPage.newMessageText;
        //     // this._state.dialogsPage.newMessageText = ' '
        //     // this._state.dialogsPage.messageData.push({id: 6, message: body})
        //     let newMessage:MessagePropsType={
        //         id: new Date().getTime(),
        //         message:action.newMessage
        //     }
        //
        //     this._state.dialogsPage.messageData.push(newMessage)
        //     this._state.dialogsPage.newMessageText=''
        //
        //     renderReactTree()
        // }
    }


}
// export let addPostActionCreator = (postText: string): AddPostActionType => {
//     return {
//         type: "ADD-POST",
//         postText: postText
//     }
// }
//
// export let addMessageAC = (newMessage: string): AddMessageType => {
//     return {
//
//         type: "ADD-MESSAGE",
//         newMessage,
//
//     }
// }

// export let changePostActionCreator = (text: string): ChangeNewPostType => {
//
//     return {
//         type: "CHANGE-NEW-POST",
//         newPostText: text
//     }
// }
// export let changeMessageTextActionCreator = (text: string): ChangeNewMessageTextTyep => {
//
//     return {
//         type: 'UPDATE-NEW-MESSAGE-BODY',
//         newMessageText: text
//     }
// }
//
