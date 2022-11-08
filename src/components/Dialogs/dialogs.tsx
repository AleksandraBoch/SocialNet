import React,{ChangeEvent} from "react";
import s from'./Dialogs.module.css'
import {DialogItem} from "./DialogItem/dialogItem";
import {Message} from "./Message/message";
import {DialogsPageProps} from "../State/State";

export type DialogsProps={
    data:DialogsPageProps,
    updateNewMessage:(text:string)=>void
    addNewMessage:(text:string)=>void
}
export const Dialogs=(props:DialogsProps)=>{


    let dialogsElement=props.data.dialogsData.map(dialog=><DialogItem id={dialog.id} name={dialog.name}/>)
let messageElement=props.data.messageData.map(message=><Message  id={message.id} message={message.message}/>)

    let newMessageElement= React.createRef<HTMLTextAreaElement>()

    // let MessageOnChange=()=>{
    //     let text=newMessageElement.current&&newMessageElement.current.value
    //     props.updateNewMessage('newText')
    // }

    const addNewMessage=()=>{
        if(newMessageElement.current){
            props.addNewMessage(newMessageElement.current.value)
        }
    }

    return(
<div className={s.dialogs}>
<div className={s.dialogItems}>
    {dialogsElement}

</div>
    <div className={s.messages}>
        {messageElement}

    </div>
    <textarea ref={newMessageElement}
    onChange={(e:ChangeEvent<HTMLTextAreaElement>)=>{props.updateNewMessage(e.currentTarget.value)}}/>
    <button onClick={addNewMessage}>Send</button>
</div>



    )
}