import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../State/profileReducer";
import {StateProps} from "../State/State";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getUsersThunkCreator} from "../State/friendsReduser";

type PathParamsType = {
    userId: string,
    router:any
}
type MapDispatchPropsType = {
    getUsersProfile:(userId:number)=>void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;

type NewProfileContainerPropsType = PathParamsType & ProfileContainerPropsType;

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.router.params.profileId
        // console.log(this.props)

      this.props.getUserProfile(userId)}

    render(){

        // if (!this.props.isAuth) return <Navigate to={'/login'}/>


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
    profile: any,
    // isAuth:boolean
}

let mapStateToProps=(state:StateProps):MapStatePropsType=>{
    return {
        profile:state.profilePage.profile,
        // isAuth:state.auth.isAuth
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


// const withAuthRedirect(connect(mapStateToProps,
//     {getUserProfile})(withRouter(ProfileContainer)))

export default compose<React.ComponentType>(connect(mapStateToProps,{getUserProfile:getUserProfile}),
    withRouter,withAuthRedirect)(ProfileContainer)