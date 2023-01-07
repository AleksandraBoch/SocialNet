import React from "react";
import s from './Dialogs.module.css'
import {DialogItem, DialogsItemProps} from "./DialogItem/dialogItem";
import {Message, MessagePropsType} from "./Message/message";
import {changeMessageTextActionCreator,
} from "../State/dialogsReduser";
import {addMessageAC} from "../State/dialogsReduser";
import {DialogsPageType} from "../State/State";
import {useDispatch} from "react-redux";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";

export type DialogsProps = {
    dialogsPage: DialogsPageType,
   // state:DialogsPageType
    addMessage: (e: string) => void
    onMessageChange: (e: string) => void

    // dispatch: (action: ActionsTypes) => void,
}
export const Dialogs = (props: DialogsProps) => {
    const dispatch = useDispatch()

    let dialogsElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem key={dialog.id} id={dialog.id}
                                                                                 name={dialog.name}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>()


    const addNewMessage = () => {
        dispatch(addMessageAC(props.dialogsPage.newMessageText))
    }

    let onNewMessageChange = () => {
        if (newMessageElement.current) {
            dispatch(changeMessageTextActionCreator(newMessageElement.current.value))
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