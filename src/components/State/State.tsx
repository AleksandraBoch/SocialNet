import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {MessagePropsType} from "../Dialogs/Message/message";
import {DialogsProps} from "../Dialogs/dialogs";
import {DialogsItemProps} from "../Dialogs/DialogItem/dialogItem";

export type DialogsPageProps = {
    dialogsData: Array<DialogsItemProps>
    messageData: Array<MessagePropsType>
}


export type StateProps = {
    dialogsPage: DialogsPageProps
    postData: Array<PostsDataType>
}


export let state:StateProps = {
    'dialogsPage': {
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
     'postData': [
        {id: 1, message: 'My first post', likesCount: 12},
         {id: 1, message: 'Im Okay', likesCount: 11},
     ]
 }






