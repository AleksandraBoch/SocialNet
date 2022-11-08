import React from "react";
import s from './Profile.module.css'
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {addPost, updateNewPost} from "../State/State";

type ProfilePropsType={
    postsData: Array<PostsDataType>
    addPost:(text:string)=>void
    updateNewPostText:(newPostText:string)=>void
}

export const Profile = (props:ProfilePropsType) => {



    return (

        <div>
          <ProfileInfo/>
            <MyPosts postsData={props.postsData}
                     updateNewPost={props.updateNewPostText}
            addPost={addPost}/>


        </div>


    )
}