import React from "react";
import s from'./Dialogs.module.css'
import {DialogItem} from "./DialogItem/dialogItem";
import {Message} from "./Message/message";
import {dialogData, message} from "../../index";


export const Dialogs=()=>{

// let dialogData=[
//     {id:1,name:"Sasha"},
//     {id:2,name:"Dina"},
//     {id:3,name:"Vladimir"},
//     {id:4,name:"Egor"},
// ]
//
//     let message=[
//         {id:1, message:'Hello'},
//         {id:2,message:'How are you?'},
//     ]

    let dialogsElement=dialogData.map(dialog=><DialogItem id={dialog.id} name={dialog.name}/>)
let messageElement=message.map(message=><Message message={message.message}/>)
    return(
<div className={s.dialogs}>
<div className={s.dialogItems}>
    {dialogsElement}

</div>
    <div className={s.messages}>
        {messageElement}

    </div>
</div>



    )
}