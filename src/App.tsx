import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/navBar/navBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/news";



function App() {


    return (
        <div className={'app-wrapper'}>
            <BrowserRouter>
            <Header/>
            <NavBar/>
            <div className={'app-wrapper-content'}>
<Routes>
    <Route path={'/profile'} element={<Profile />}/>
<Route path={'/dialogs/*'} element={<Dialogs/>}/>
<Route path={'/news'} element={<News/>}/>
</Routes>

            </div>

        </BrowserRouter>
        </div>
    );
}

export default App;
