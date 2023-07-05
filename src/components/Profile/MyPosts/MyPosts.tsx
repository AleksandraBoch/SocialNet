import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostRed} from "./Post/postsForm";

export type PostsDataType = {
    id: number
    message: string
    likesCount: number

}
export type PostPropsType = {
    // store:StoreType
    posts: Array<PostsDataType>
    addPost: (e: string) => void
    onPostChange: (e: string) => void
    newPostText: string
}

export const MyPosts = (props: PostPropsType) => {

    let postElement = props.posts.map(post => <Post key={post.id} message={post.message} likeCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()


    const addPost = () => {
props.addPost(props.newPostText)
        // props.dispatch(addPostActionCreator(props.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text=newPostElement.current?.value
        props.onPostChange((e.currentTarget.value))
    }

    return (
        <div className={s.postsBlock}>

            <h3>my posts</h3>
            <div>new post
                {/*<div>*/}
                {/*    <textarea ref={newPostElement}*/}
                {/*              onChange={onPostChange}*/}
                {/*        // value={props.newPostText}*/}
                {/*    />*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <button onClick={addPost}>add post</button>*/}
                {/*</div>*/}
                <PostRed/>

            </div>
            <div className={s.posts}>
                <div>
                </div>
                {postElement}
            </div>

        </div>

    )
}