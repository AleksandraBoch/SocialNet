import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {AppStateType} from "../../State/redux-store";
import {connect} from "react-redux";

type FormDataType={
    login:string,
    password:string,
    rememberMe:boolean
}


export const LoginForm=(props: InjectedFormProps<FormDataType>)=>{
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'}  name={'login'} placeholder={'Login'}/>
            </div>
            <div>
                <Field component={'input'} name={'password'} placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'rememberMe'} type={'checkbox'}/>remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm=reduxForm<FormDataType>({
    form:'login'
})(LoginForm)

 const  Login=()=>{
    const onSubmit=(props:FormDataType)=>{
        // props.login(formData.email, formData.password, formData.rememberMe)

    }

    return(
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps=(state:AppStateType):{isAuth:boolean}=>{
    return{isAuth:state.auth.isAuth}
}


export default connect(mapStateToProps,{Login})(Login)