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
    addPost:(text:string)=>void
}

export const MyPosts = (props:PostPropsType) => {

    let postElement = props.postsData.
    map(post => <Post message={post.message} likeCount={post.likesCount}/>)

    let newPostElement=React.createRef<HTMLTextAreaElement>()

const addPost=()=>{
  // alert(newPostElement.current&&newPostElement.current.value)
    if(newPostElement.current){
        props.addPost(newPostElement.current.value)
    }
}
    return (
        <div className={s.postsBlock}>

            <h3>my posts</h3>
            <div>new post

                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>

                    <button onClick={addPost}>add post</button>

                </div>

            </div>
            <div className={s.posts}>
                <div>


                </div>

                {postElement}
            </div>

        </div>

    )
}