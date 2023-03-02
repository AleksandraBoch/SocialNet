import React from "react";

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
export default authReducer;