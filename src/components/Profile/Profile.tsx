import React from "react";
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {ActionsTypes} from "../State/State";

type ProfilePropsType={
    postsData: Array<PostsDataType>
    addPost:(text:string)=>void
    updateNewPostText:(newPostText:string)=>void
    dispatch:(action:ActionsTypes)=>void
}

export const Profile = (props:ProfilePropsType) => {



    return (

        <div>
          <ProfileInfo/>
            <MyPosts postsData={props.postsData}

                     updateNewPost={props.updateNewPostText}
            addPost={props.addPost}/>


        </div>


    )
}