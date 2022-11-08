import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/navBar/navBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/news";
import {PostsDataType} from "./components/Profile/MyPosts/MyPosts";
import {addMessage, DialogsPageProps} from "./components/State/State";


export type AppPropsType = {
    postsData: Array<PostsDataType>
    dialogsData: DialogsPageProps
    addPost:(text:string)=>void
    updateNewPostText:(newPostText:string)=>void
    addMessage:(text:string)=>void
    updateNewMessage:(newText:string)=>void
}

function App(props: AppPropsType) {

    return (
        <div className={'app-wrapper'}>
            <BrowserRouter>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile
                            postsData={props.postsData}
                            updateNewPostText={props.updateNewPostText}

                        addPost={props.addPost}
                        />}/>


                        <Route path={'/dialogs/*'} element={<Dialogs
                            updateNewMessage={props.updateNewMessage}
                            addNewMessage={props.addMessage}
                            data={props.dialogsData}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                    </Routes>

                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
