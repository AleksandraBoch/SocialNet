import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/navBar/navBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/news";
import store, {ActionsTypes, StoreType} from "./components/State/State";


export type AppPropsType = {
    store: StoreType,
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();

    console.log('111---222', props.store._state.profilePage.newPostText)
    return (
        <div className={'app-wrapper'}>
            <BrowserRouter>
                <Header/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile'} element={<Profile
                            profilePage={props.store._state.profilePage}
                            dispatch={props.dispatch}
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
