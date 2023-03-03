import React from 'react';
import './App.css';
import {Header} from "./components/header/header";
import {NavBar} from "./components/navBar/navBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/news/news";
import {DialogsContainer} from "./components/Dialogs/dialogsContainer";
import {UserContainer} from "./components/users/usersContainer";
import {Users} from "./components/users/Users";
import ProfileContainer from "./components/Profile/profileContainer";
import HeaderContainer from "./components/header/headerContainer";



export type AppPropsType = {
    // state: AppStateType,
    // store: StoreType,
    // dispatch: (action: ActionsTypes) => void
}

const App: React.FC<AppPropsType> = () => {
    // const state = useSelector((state)=>state)
    // console.log('state', state)
    // useEffect(()=>{
    //     console.log(props)
    // },[props])
    return (
        <div className={'app-wrapper'}>
            <BrowserRouter>
                <HeaderContainer/>
                <NavBar/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/profile/:userId'} element={<ProfileContainer
                           // store={props.store}
                        />}/>
                        <Route path="/profile/" element={<ProfileContainer/>}/>

                        <Route path={'/dialogs/*'} element={<DialogsContainer

                            // dispatch={props.dispatch}
                            // dialogsPage={props.store.getState().dialogsPage}
                         />}/>

                        <Route path={'/users'} element={<UserContainer />}/>

                        <Route path={'/news'} element={<News/>}/>
                    </Routes>

                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
