import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/navBar/navBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/news";
import {ActionsTypes, StoreType} from "./components/State/State";


export type AppPropsType = {
    store: StoreType
    dispatch:(action:ActionsTypes)=>void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();


    return (
        <div className={'app-wrapper'}>
            <BrowserRouter>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile
                            postsData={props.store._state.ProfilePage.posts}
                            updateNewPostText={props.store.updateNewPost}
                            addPost={props.store.addPost}
                            dispatch={props.store.dispatch.bind(props.store)}
                        />}/>


                        <Route path={'/dialogs/*'} element={<Dialogs
                            updateNewMessage={props.store.updateNewMessage}
                            addNewMessage={props.store.addMessage}
                            data={props.store._state.dialogsPage}/>}/>
                        <Route path={'/news'} element={<News/>}/>
                    </Routes>

                </div>

            </BrowserRouter>
        </div>
    );
}

export default App;
