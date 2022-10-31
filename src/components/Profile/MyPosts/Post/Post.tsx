import React from "react";
import s from './post.module.css'

type PostType={
    message:string
    likeCount:number
}




export const Post = (props:PostType) => {
    return (

        <div className={s.item}>
            <img src={'https://klike.net/uploads/posts/2019-06/1559798617_1.jpg'}/>

            {props.message}
            <div>
                <span>{props.likeCount}</span>
            </div>
        </div>


    )
}