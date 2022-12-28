import React from "react";
import {MessagePropsType} from "../Dialogs/Message/message";
import {ChangeNewMessageTextTyep, ChangeNewPostType} from "./State";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'


export const dialogsReducer=(state,action)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newMessageText
            return state
            break;

        case ADD_MESSAGE:
            let newMessage: MessagePropsType = {
                id: new Date().getTime(),
                message: action.newMessage
            }

            state.messageData.push(newMessage)
            state.newMessageText = ''
            return state
            break;
        default:return state
    }
    return state
}

export let changePostActionCreator = (text: string): ChangeNewPostType => {

    return {
        type: "CHANGE-NEW-POST",
        newPostText: text
    }
}
export let changeMessageTextActionCreator = (text: string): ChangeNewMessageTextTyep => {

    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageText: text
    }
}

