import React from "react";
import {changeMessageTextActionCreator, DialogsReducerType,
} from "../State/dialogsReduser";
import {addMessageAC} from "../State/dialogsReduser";
import {useDispatch, useSelector} from "react-redux";
import {Dialogs} from "./dialogs";
import {AppStateType} from "../State/redux-store";

type DialogsType = {
    // dialogsPage: DialogsPageType;
    // newMessage:string,
    // message:Array<MessagePropsType>
    // onMessageChange:()=>void,
    // addMessage:()=>void
}

 export const DialogsContainer= (props:DialogsType) => {
     const dialogsPage = useSelector<AppStateType, DialogsReducerType>(state => state.dialogsPage)
    const dispatch = useDispatch()

    const addNewMessage = () => {
        // dispatch(addMessageAC(props.dialogsPage.newMessageText))
        dispatch(addMessageAC('newMessage'))
    }

    let onNewMessageChange = (e:string) => {
        // if (newMessageElement.current) {
        //     dispatch(changeMessageTextActionCreator(newMessageElement.current.value))
        // }
        dispatch(changeMessageTextActionCreator(e))
    }

    return (
        <div>
     <Dialogs
onMessageChange={onNewMessageChange}
addMessage={addNewMessage}
dialogsPage={dialogsPage}


              />
        </div>


    )
}