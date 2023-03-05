import React, {FC} from "react";
import {Header} from "./header";
import axios from "axios";
import {connect, MapStateToProps} from "react-redux";
import {setAuthUserDataAC} from "../State/authReduser";
import {AppStateType} from "../State/redux-store";
import {compose} from "redux";

type HeaderContainerType = MapDispatchPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                this.props.setAuthUserDataAC(id, login, email)
            }
        })
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

export default compose<FC>(connect(mapStateToProps, {setAuthUserDataAC}))(HeaderContainer)


