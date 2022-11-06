import React from "react";
import s from './Profile.module.css'
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {addPost} from "../State/State";

type ProfilePropsType={
    postsData: Array<PostsDataType>
    addPost:(text:string)=>void
}

export const Profile = (props:ProfilePropsType) => {



    return (

        <div>
          <ProfileInfo/>
            <MyPosts postsData={props.postsData}
            addPost={addPost}/>


        </div>


    )
}