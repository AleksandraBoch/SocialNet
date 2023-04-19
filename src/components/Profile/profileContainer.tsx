import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../State/profileReducer";
import {StateProps} from "../State/State";
import {useLocation, useNavigate, useParams,} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {stat} from "fs";

type PathParamsType = {
    userId: string,
    router:any
}
type MapDispatchPropsType = {
    getUsersProfile:(userId:number)=>void
    updateStatus:(status:string)=>void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType;

type NewProfileContainerPropsType = PathParamsType & ProfileContainerPropsType;

class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.router.params.profileId
        // console.log(this.props)

      this.props.getUserProfile(userId)
    this.props.getStatus(userId)
    }

    render(){

        // if (!this.props.isAuth) return <Navigate to={'/login'}/>


        return(


        <>
            <Profile
                profile={undefined} name={""} id={0} photo={{
                large: undefined,
                small: undefined }}
status={this.props.status}
                updateStatus={this.props.updateStatus}
                 />
</>

    )}
}

type MapStatePropsType={
    profile: any,
    status:string
    // isAuth:boolean
}

let mapStateToProps=(state:StateProps):MapStatePropsType=>{
    return {
        profile:state.profilePage.profile,
        // isAuth:state.auth.isAuth
        status:state.profilePage.status
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

export default compose<React.ComponentType>(connect(mapStateToProps,
        {getUserProfile:getUserProfile,getStatus,updateStatus}),
    withRouter,withAuthRedirect)(ProfileContainer)