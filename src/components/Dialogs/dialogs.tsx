import React from "react";
import s from'./Dialogs.module.css'

export const Dialogs=()=>{
    return(
<div className={s.dialogs}>
<div className={s.dialogItems}>
        <div className={s.dialog +' '+ s.active}>
            Sasha
        </div>
        <div className={s.dialog}>
            Vladimir
        </div>
        <div className={s.dialog}>
            Dina
        </div>
        <div className={s.dialog}>
            Egor
        </div>
</div>
    <div className={s.messages}>
        <div className={s.dialog}>Hi</div>
        <div className={s.dialog}>How are you?</div>
        <div className={s.dialog}>Yo</div>

    </div>
</div>



    )
}