import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {posts} from "../../../index";


export const MyPosts = () => {

    let postElement=posts.map(p=><Post message={p.message} likeCount={p.likesCount}/>)

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
                {postElement}
            </div>
        </div>

    )
}