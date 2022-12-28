import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, changePostActionCreator} from "../../State/State";
import {addPostActionCreator} from "../../State/profileReducer";

export type PostsDataType = {
    id: number
    message: string
    likesCount: number

}
export type PostPropsType = {
    newPostText: string,
    postsData: Array<PostsDataType>
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: PostPropsType) => {
    let postElement = props.postsData.map(post => <Post message={post.message} likeCount={post.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // if(newPostElement.current){
        //     props.addPost(newPostElement.current.value)
        // }
        props.dispatch(addPostActionCreator(props.newPostText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //     let text=newPostElement.current&&newPostElement.current.value
        // props.updateNewPost('newText')
        // console.log(newPostText:e.currentTarget.value)
        props.dispatch(changePostActionCreator(e.currentTarget.value))

    }
    // const onChangeHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{props.updateNewPost(e.currentTarget.value)}
    return (
        <div className={s.postsBlock}>

            <h3>my posts</h3>
            <div>new post
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                        // value={props.newPostText}
                    />
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