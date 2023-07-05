import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PostsFormType={
    post:string
}

const Post=(props:InjectedFormProps<PostsFormType>)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} placeholder={'введите текст'}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>


        </form>
    )
}
const PostReduxForm=reduxForm<PostsFormType>({
    form:'post'
})(Post)

export const PostRed=()=>{
    return(
        <>
        <h3>Введите текст</h3>
            <PostRed/>
        </>
    )
}