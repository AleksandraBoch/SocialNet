import React from "react";
import s from'./Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogItemType={
    id:number,
    name:string
}

const DialogItem=(props:DialogItemType)=>{
    let path='/dialogs/*'+props.id

    return(
        <>
            <div className={s.dialog +' '+ s.active}>
                <NavLink to={path}> {props.name}</NavLink>

            </div>
        </>
    )
}


type MessagePropsType={
    message:string,

}
const Message=(props:MessagePropsType)=>{
    return(
        <>
        <div className={s.dialog}>{props.message}</div>
        </>
    )
}


export const Dialogs=()=>{

let dialogData=[
    {id:1,name:"Sasha"},
    {id:2,name:"Dina"},
    {id:3,name:"Vladimir"},
    {id:4,name:"Egor"},
]

    let messageData=[
        {id:1, message:'Hello'},
        {id:2,message:'How are you?'},
    ]


    return(
<div className={s.dialogs}>
<div className={s.dialogItems}>
       <DialogItem name={'Sasha'}
       id={1}/>

    <DialogItem name={dialogData[0].name}
                id={dialogData[0].id}/>
    <DialogItem name={'Vladimir'}
                id={3}/>

    <DialogItem name={'Egor'}
                id={4}/>

</div>
    <div className={s.messages}>
        <Message message={messageData[0].message}/>
        <Message message={messageData[1].message}/>
        <Message message={'Yo!'}/>

    </div>
</div>



    )
}