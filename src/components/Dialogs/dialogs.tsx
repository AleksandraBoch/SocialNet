import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/dialogItem";
import {Message, MessagePropsType} from "./Message/message";
import {
    changeMessageTextActionCreator, DialogsReducerType,
} from "../State/dialogsReduser";
import {addMessageAC} from "../State/dialogsReduser";
import {DialogsPageType, StateProps} from "../State/State";
import {useDispatch} from "react-redux";


export type DialogsType = {
    dialogsPage: DialogsReducerType,
   // state:DialogsPageType
    addMessage: (e: string) => void
    onMessageChange: (e: string) => void

    // dispatch: (action: ActionsTypes) => void,
}
export const Dialogs = (props:DialogsType) => {
    const dispatch = useDispatch()
    // let state=props.dialogsPage


    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                                 name={dialog.name}
    avatar={dialog.avatar}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()


    const addNewMessage = () => {
        dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }

    let onNewMessageChange = () => {
        if (newMessageElement.current) {
            dispatch(changeMessageTextActionCreator(newMessageElement.current.value))
        }
    }
    // let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     if (e.currentTarget.value) {
    //         dispatch(changeMessageTextActionCreator(e.currentTarget.value))
    //     }
    // }

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
                      value={props.dialogsPage.newMessageText}
                      placeholder={'введите сообщение'}
                      onChange={onNewMessageChange}
            />
            <button onClick={addNewMessage}>Send</button>
        </div>


    )
}