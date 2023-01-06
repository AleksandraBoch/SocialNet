import React, {ChangeEvent} from "react";
import {StoreType} from "../../State/State";
import {addPostActionCreator, changePostActionCreator} from "../../State/profileReducer";
import {MyPosts, PostsDataType} from "./MyPosts";
import {useDispatch} from "react-redux";

// export type PostPropsType = {
//
//     newPostText: string,
//     postsData: Array<PostsDataType>
//     dispatch: (action: ActionsTypes) => void
// }

type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type PostPropsType = {
    // store: StoreType
    posts:  Array<PostsDataType>
    newPostText: string

}
export const MyPostsContainer = (props: PostPropsType) => {
    const dispatch = useDispatch()
    // let state = props.store.getState().profilePage

    const addPost = () => {
        debugger
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