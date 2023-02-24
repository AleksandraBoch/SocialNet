import React, {ReactComponentElement, ReactElement} from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {PostsDataType} from "./MyPosts/MyPosts";
import {ProfileType, setUsersProfile} from "../State/profileReducer";
import {StateProps} from "../State/State";
import {ProfileInfoT} from "./profileInfo/ProfileInfo";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import Any = jasmine.Any;
// import {RouteComponentProps} from "react-router-dom";


type PathParamsType = {
    userId: string,
    router:any
}
type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;

type NewProfileContainerPropsType = PathParamsType & ProfileContainerPropsType;

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        // let profileId = this.props.router.params.profileId
        console.log(this.props)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).
        then(response => {
            this.props.setUsers(response.data.items)
            this.props.setUsersCount(response.data)
    })}

    render(){

    return(


        <>
            <Profile
                profile={undefined} name={""} id={0} photo={{
                large: undefined,
                small: undefined }}

                 />
</>

    )}
}

type MapStatePropsType={
    // posts: Array<PostPropsType>
    // profile: ProfileType | null
    profile: any
}

let mapStateToProps=(state:StateProps):MapStatePropsType=>{
    return {
        profile:state.profilePage.profile
    }
}

function withRouter <T>(Component: any) {
    function ComponentWithRouterProp(props:T) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();

        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}


export default (connect(mapStateToProps,{setUsersProfile}))(withRouter(ProfileContainer))
