import React, {useEffect} from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useDispatch, useSelector} from "react-redux";
import {ProfileReducerType, ProfileType} from "../State/profileReducer";
import {AppStateType} from "../State/redux-store";
import {ProfileInfo} from "./profileInfo/ProfileInfo";

// export type ProfilePropsType={
//     profilePage: {
//         newPostText:string,
//         posts: Array<PostsDataType>
//     }
//     dispatch:(action:ActionsTypes)=>void
// }

type StatePropsType={
    // store:StoreType
    profile: any;
}

type Props = {
    profile: ProfileType
}

export const Profile = (props:ProfileType) => {
    const profilePage = useSelector<AppStateType, ProfileReducerType>(state => state.profilePage)

    // const dispatch = useDispatch()
    return (

        <div>
          <ProfileInfo profile={props.profile}/>
            <MyPostsContainer posts={profilePage.posts}
            newPostText={profilePage.newPostText}
            />


        </div>


    )
}