import React, {ChangeEvent} from "react";
import {StoreType} from "../../State/State";
import {addPostActionCreator, changePostActionCreator} from "../../State/profileReducer";
import {MyPosts, PostsDataType} from "./MyPosts";
import {useDispatch} from "react-redux";


export type PostPropsType = {
    // store: StoreType
    posts:  Array<PostsDataType>
    newPostText: string

}
export const MyPostsContainer = (props: PostPropsType) => {
    const dispatch = useDispatch()
    // let state = props.store.getState().profilePage

    const addPost = () => {

      dispatch(addPostActionCreator('newPostText'))
    }

    let onPostChange = (e: string) => {
      dispatch(changePostActionCreator(e))
        dispatch(changePostActionCreator(e))
    }

    return (
        <div>
            <MyPosts addPost={addPost}
                     onPostChange={onPostChange}
                     posts={props.posts}
                     newPostText={props.newPostText}

            />
        </div>

    )
}