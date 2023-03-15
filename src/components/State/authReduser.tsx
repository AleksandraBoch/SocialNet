import React from "react";
import {dispatchType} from "./redux-store";
import {authAPI} from "../API/api";

type AuthType={
    userId:number,
    email:string,
    login:string,
    isAuth:boolean
}

let initialState={
  userId:0,
    email:'',
    login:'',
    isAuth:false
}

type ActionType= getUserDataType


type getUserDataType={
    type:'SET_USER_DATA',
    data:AuthType
}

export const authReducer=(state:AuthType=initialState,action:ActionType):AuthType=>{
    switch (action.type) {
        case 'SET_USER_DATA':
            return{
                ...state,
                ...action.data
            }

    }
    return state
}

export const setAuthUserDataAC=(userId:number, login:string, email:string,isAuth:boolean):getUserDataType=>
{
return{
    type:'SET_USER_DATA' as const,
    data:{
        userId,
        login,
        email,
        isAuth,
    }
}

}


export const getAuthUserData=()=>(dispatch:dispatchType)=>{

    authAPI.me().
    then(response => {
        if (response.data.resultCode === 0) {

            dispatch(setAuthUserDataAC(response.data.data.id,response.data.data.email,response.data.data.login,response.data.data.isAuth))
        }
    })
}
export default authReducer;