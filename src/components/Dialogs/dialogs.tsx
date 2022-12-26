import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/dialogItem";
import {Message, MessagePropsType} from "./Message/message";
import {ActionsTypes, addMessageAC, changePostActionCreator, DialogsPageProps} from "../State/State";

export type DialogsProps = {
    dialogsPage:{
       newMessageText: string,
        dialogsData:Array<DialogsItemProps>
            messageData:Array<MessagePropsType>
    },
    dispatch: (action: ActionsTypes) => void,
}
export const Dialogs = (props: DialogsProps) => {


    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    let messageElement = props.dialogsPage.messageData.map(message => <Message id={message.id} message={message.message}/>)
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

    let onNewMessageChange=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let newMessageText=e.target.value
        props.dispatch(changePostActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}

            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>

            </div>
            <textarea ref={newMessageElement}
                      placeholder={'введите сообщение'}
                      onChange={onNewMessageChange}
            />
            <button onClick={addNewMessage}>Send</button>
        </div>


    )
}