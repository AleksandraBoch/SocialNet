import React from "react";
import s from'./../Dialogs.module.css'
import {NavLink} from "react-router-dom";

export type DialogsItemProps={
    id:number,
    name:string,
    avatar?:string
}

export const DialogItem=(props:DialogsItemProps)=>{
    let path='/dialogs/*'+props.id

    return(
        <>
            <div className={s.dialog +' '+ s.active}>
                <NavLink to={path}> {props.name}</NavLink>

            </div>
        </>
    )
}

