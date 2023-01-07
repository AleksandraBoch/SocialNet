import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/dialogItem";
import {Message, MessagePropsType} from "./Message/message";
import {changeMessageTextActionCreator,
} from "../State/dialogsReduser";
import {addMessageAC} from "../State/dialogsReduser";
import {DialogsPageType} from "../State/State";
import {useDispatch} from "react-redux";
import {Dialogs} from "./dialogs";

export type DialogsProps = {
    dialogsPage: DialogsPageType,
    // dispatch: (action: ActionsTypes) => void,
    message:Array<MessagePropsType>,

}

export const DialogsContainer = (props: DialogsProps) => {
    const dispatch = useDispatch()

    const addNewMessage = () => {
        // dispatch(addMessageAC(props.dialogsPage.newMessageText))
        dispatch(addMessageAC('newMessage'))
    }

    let onNewMessageChange = (e:string) => {
        // if (newMessageElement.current) {
        //     dispatch(changeMessageTextActionCreator(newMessageElement.current.value))
        // }
        dispatch(changeMessageTextActionCreator(e))
    }

    return (
        <div>
     <Dialogs
        dialogsPage={props.dialogsPage}
              addMessage={addNewMessage}
              onMessageChange={onNewMessageChange}

              />
        </div>


    )
}