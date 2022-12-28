import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/dialogItem";
import {Message, MessagePropsType} from "./Message/message";
import {
    ActionsTypes,
    changeMessageTextActionCreator,
    DialogsPageType
} from "../State/State";
import {addMessageAC} from "../State/profileReducer";

export type DialogsProps = {
    dialogsPage: DialogsPageType,
    dispatch: (action: ActionsTypes) => void,
}
export const Dialogs = (props: DialogsProps) => {


    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                                 name={dialog.name}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()

    // let MessageOnChange=()=>{
    //     let text=newMessageElement.current&&newMessageElement.current.value
    //     props.updateNewMessage('newText')
    // }

    const addNewMessage = () => {
        // if(newMessageElement.current){
        //     props.addNewMessage(newMessageElement.current.value)
        //
        // }
        // props.updateNewMessage('')

        props.dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }

    let onNewMessageChange = () => {
        if (newMessageElement.current) {
            props.dispatch(changeMessageTextActionCreator(newMessageElement.current.value))
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{props.dialogsPage.messageData.map(message => <Message key={message.id} id={message.id}
                                                                            message={message.message}/>)}</div>

            </div>
            <textarea ref={newMessageElement}
                      value = {props.dialogsPage.newMessageText}
                      placeholder={'введите сообщение'}
                      onChange={onNewMessageChange}
            />
            <button onClick={addNewMessage}>Send</button>
        </div>


    )
}