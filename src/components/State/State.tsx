import React from "react";
import {PostsDataType} from "../Profile/MyPosts/MyPosts";
import {MessagePropsType} from "../Dialogs/Message/message";
import {DialogsItemProps} from "../Dialogs/DialogItem/dialogItem";
import {renderReactTree} from "./render";


export type DialogsPageProps = {
    newMessageText:string,
    dialogsData: Array<DialogsItemProps>
    messageData: Array<MessagePropsType>
}


export type StateProps = {
    dialogsPage: DialogsPageProps
    ProfilePage:ProfilePageType

}

type ProfilePageType={
    newPostText:string
    posts:Array<PostsDataType>

}


export type StoreType={
    _state:StateProps,
    updateNewMessage:(newText:string)=>void,
    updateNewPost:(newText:string)=>void,
    addPost:(text:string)=>void,
    addMessage:(text:string)=>void,
    getState:()=>StateProps,
    dispatch:(action:ActionsTypes)=>void

}

export type ActionsTypes= AddPostActionType|ChangeNewPostType


export type AddPostActionType={
    type:'ADD-POST',
    text:string

}
export type ChangeNewPostType={
    type:'CHANGE-NEW-POST',
    newText:string
}
const store={
    _state:{
        dialogsPage: {
            'newMessageText':'',

            "dialogsData": [
                {id: 1, name: "Sasha"},
                {id: 2, name: "Dina"},
                {id: 3, name: "Vladimir"},
                {id: 4, name: "Egor"},

            ],
            'messageData': [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Whats the weather like today?'}

            ]
        },
        ProfilePage: {
            'newPostText': '',

            'posts':
                [
                    {id: 1, message: 'My first post', likesCount: 12},
                    {id: 1, message: 'Im Okay', likesCount: 11},
                    {id: 3, message: 'im learning js', likesCount: 1}
                ]
        }
    },
    updateNewMessage(newText:string) {
        this._state.dialogsPage.newMessageText=newText
        renderReactTree()},
    updateNewPost(newText:string){
        this._state.ProfilePage.newPostText=newText
        renderReactTree()
    },
    addPost  (text: string){
        const newPost: PostsDataType = {
            id: new Date().getTime(),
            message: text,
            likesCount: 0
        }
        this._state.ProfilePage.posts.push(newPost)
        renderReactTree()
    },
    addMessage(text:string){
        const newMessage:MessagePropsType={
            id:new Date().getTime(),
            message:text
        }
        this._state.dialogsPage.messageData.push(newMessage)
        renderReactTree()

    },
getState(){
        return this._state
},
    dispatch(action){
if (action.type==='ADD-POST'){
    const newPost: PostsDataType = {
        id: new Date().getTime(),
        message: action.text,
        likesCount: 0
    }
    this._state.ProfilePage.posts.push(newPost)
    renderReactTree()
}else if (action.type==='CHANGE-NEW-POST'){
    this._state.ProfilePage.newPostText=action.newText
    renderReactTree()
}
    }


}



export default store;