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


    // let newPostElement=React.createRef()

const addPost=()=>{
// let text=newPostElement.current.value;
}
    return (

        <div className={s.postsBlock}>

            <h3>my posts</h3>
            <div>new post

                <div>
                    <textarea ></textarea>
                    {/*ref={newPostElement}*/}


                </div>
                <div>

                    <button onClick={addPost}>add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>

    )
}