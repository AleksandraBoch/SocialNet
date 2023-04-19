import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../components/State/redux-store";

type MapStatePropsType ={
    isAuth:boolean
}

let mapStateToPropsForRedirect=(state:AppStateType):MapStatePropsType=>
    ({isAuth: state.auth.isAuth})

export function withAuthRedirect<T>(Component:ComponentType<any>) {


    const  RedirectComponent=(props:MapStatePropsType)=>{
        let {isAuth,...restProps}=props

        if(props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as any}/>
    }

let ConnectAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectAuthRedirectComponent

}