import React from "react";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";
import {friendsReducer} from "./friendsReduser";
import authReducer from "./authReduser";
import thunk from "redux-thunk";

export type AppStateType = ReturnType<typeof rootReducer>
// export type StoreType = typeof store;
// export type StoreType = ReturnType<typeof rootReducer>;

let rootReducer=combineReducers(
    {
        profilePage:profileReducer,
        dialogsPage: dialogsReducer,
        friendsPage:friendsReducer,
        auth:authReducer,

    }
)

export type dispatchType = typeof store.dispatch
let store=createStore(rootReducer,applyMiddleware(thunk));

export default store;

//@ts-ignore
window.store = store