import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (

        <div>my posts
            <div>new post
                <textarea></textarea>
                <button>add post</button>
            </div>
            <div className={s.posts}>
                <Post message={'My first post'} likeCount={10}/>
                <Post message={"i'm okay"} likeCount={15}/>
            </div>
        </div>

    )
}