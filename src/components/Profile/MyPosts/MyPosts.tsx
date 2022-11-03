import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";



export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
type PostPropsType = {
    postsData: Array<PostsDataType>
}

export const MyPosts = (props:PostPropsType) => {


    let postElement = props.postsData.
    map(post => <Post message={post.message} likeCount={post.likesCount}/>)


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