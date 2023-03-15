import React, {FC} from "react";
import {Header} from "./header";
import {connect} from "react-redux";
import {AppStateType} from "../State/redux-store";
import {compose} from "redux";
import {getAuthUserData, setAuthUserDataAC} from "../State/authReduser";

type HeaderContainerType = MapDispatchPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {

       this.props.getAuthUserData()
    }


    render() {
        return (
            <>
                <Header {...this.props}
                        userId={this.props.userId}
                        isAuth={this.props.isAuth}
                        login={this.props.login}
                        email={this.props.email}


                />
            </>


        )
    }
}

type MapStateToPropsType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean,
}

type MapDispatchPropsType = {
    getAuthUserData:()=>void,
    setAuthUserDataAC: (
        userId: number,
        email: string,
        login: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}

export default compose<FC>(connect(mapStateToProps, {getAuthUserData}))(HeaderContainer)


