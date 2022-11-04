import React from "react";
import s from'./Dialogs.module.css'
import {DialogItem} from "./DialogItem/dialogItem";
import {Message} from "./Message/message";
import {DialogsPageProps} from "../State/State";

export type DialogsProps={
    data:DialogsPageProps;
}
export const Dialogs=(props:DialogsProps)=>{


    let dialogsElement=props.data.dialogsData.map(dialog=><DialogItem id={dialog.id} name={dialog.name}/>)
let messageElement=props.data.messageData.map(message=><Message  id={message.id} message={message.message}/>)
    return(
<div className={s.dialogs}>
<div className={s.dialogItems}>
    {dialogsElement}

</div>
    <div className={s.messages}>
        {messageElement}

    </div>
    <textarea></textarea>
    <button>Send</button>
</div>



    )
}