import React from "react";
import {MessagePropsType} from "../Dialogs/Message/message";
import {ActionsTypes, AddMessageType, ChangeNewMessageTextType} from "./State";
import {DialogsItemProps} from "../Dialogs/DialogItem/dialogItem";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const ADD_MESSAGE = 'ADD-MESSAGE'


export type DialogsReducerType={
    newMessageText:string,
    dialogsData:{
        avatar?: string;
        id:number,
        name:string
    }[]
    messageData:{
        id:number,
        message:string
    }[]

}

let initialState={
    newMessageText: '',
    "dialogsData": [
        {id: 11, name: "Sasha",},
        {id: 12, name: "Dina"},
        {id: 13, name: "Vladimir"},
        {id: 14, name: "Egor"},

    ],
    'messageData': [
        {id: 21, message: 'Hello'},
        {id: 22, message: 'How are you?'},
        {id: 23, message: 'Whats the weather like today?'}

    ]
}

export const dialogsReducer=(state: DialogsReducerType=initialState,action:ActionsTypes)=>{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:

            state.newMessageText = action.newMessageText

            return {...state}
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

export let addMessageAC = (newMessage: string): AddMessageType => {
    // console.log('111')
    return {

        type: "ADD-MESSAGE",
        newMessage:newMessage,

    }
}

export let changeMessageTextActionCreator = (text: string): ChangeNewMessageTextType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessageText: text
    }
}

