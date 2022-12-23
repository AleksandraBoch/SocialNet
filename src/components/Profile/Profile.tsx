import React from "react";
import {MyPosts, PostsDataType} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo";
import {ActionsTypes} from "../State/State";

type ProfilePropsType={
    profilePage: {
        newPostText:string,
        posts: Array<PostsDataType>
    }
    dispatch:(action:ActionsTypes)=>void

}

export const Profile = (props:ProfilePropsType) => {

    // console.log('111---222---333', props.profilePage.newPostText)

    return (

        <div>
          <ProfileInfo/>
            <MyPosts postsData={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}/>


        </div>


    )
}