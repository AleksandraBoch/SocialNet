import React from "react";
import {Header} from "./header";
import axios from "axios";
import {connect, MapStateToProps} from "react-redux";
import {setAuthUserDataAC} from "../State/authReduser";
import {AppStateType} from "../State/redux-store";

class HeaderContainer extends React.Component<any, any>{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).
        then(response => {
            if (response.data.resultCode ===0){
                let {id,login,email}=response.data.data;
                this.props.setAuthUserDataAC(id,login,email)
            }

        })
    }

    render(){
    return(
<>
<Header/>
</>


    )}
}

type MapStateToPropsType={
    userId: number,
    email: string,
    login: string,
}


const mapStateToProps=(state:AppStateType):MapStateToPropsType=>{
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login
    }
}
const HeadeContainer=connect(mapStateToProps,{setAuthUserDataAC}) (HeaderContainer)

export default HeaderContainer ;