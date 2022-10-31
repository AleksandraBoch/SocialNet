import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {

    let postsData=[
        {id:1, message: 'My first post', likesCount:12},
        {id:1, message: 'Im Okay', likesCount: 11},

    ]

    return (

        <div className={s.postsBlock}>

            <h3>my posts</h3>
            <div>new post

                <div>
                    <textarea></textarea>
                </div>


                <div>

                    <button>add post</button>
                </div>

            </div>
            <div className={s.posts}>
                <Post message={postsData[0].message} likeCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likesCount}/>
            </div>
        </div>

    )
}