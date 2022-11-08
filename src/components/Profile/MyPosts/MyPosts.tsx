import React, {ChangeEvent} from "react";
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
    updateNewPost:(newText:string)=>void
}

export const MyPosts = (props:PostPropsType) => {

    let postElement = props.postsData.
    map(post => <Post message={post.message} likeCount={post.likesCount}/>)

    let newPostElement=React.createRef<HTMLTextAreaElement>()

const addPost=()=>{
    if(newPostElement.current){
        props.addPost(newPostElement.current.value)
    }
}

let onPostChange=()=>{
        let text=newPostElement.current&&newPostElement.current.value
    props.updateNewPost('newText')
}
    const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{props.updateNewPost(e.currentTarget.value)}

    return (
        <div className={s.postsBlock}>

            <h3>my posts</h3>
            <div>new post

                <div>
                    <textarea ref={newPostElement}

                              onChange={onChangeHandler}/>

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