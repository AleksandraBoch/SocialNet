import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MessageFormType={
    message:string
}

const MessageForm = (props:InjectedFormProps<MessageFormType>) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'textMessage'} placeholder={'введите сообщение'}/>
            </div>
            {/*<div></div>*/}
            <button>Отправить</button>
        </form>
    )
}

const MessageReduxForm=reduxForm<MessageFormType>({form:'message'})(MessageForm)

export const MessForm=()=>{
    const onSubmit=(props:MessageFormType)=>{}
    return (
        <>
        <h3>Введите сообщение</h3>
            <MessageReduxForm onSubmit={onSubmit}/>
        </>
    )
}