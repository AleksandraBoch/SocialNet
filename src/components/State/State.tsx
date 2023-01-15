import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {MessagePropsType} from "../Dialogs/Message/message";
import {DialogsItemProps} from "../Dialogs/DialogItem/dialogItem";


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

