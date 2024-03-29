import React from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {useSelector} from "react-redux";
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
          <ProfileInfo profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}/>
            <MyPostsContainer posts={profilePage.posts}
            newPostText={profilePage.newPostText}
            />


        </div>


    )
}