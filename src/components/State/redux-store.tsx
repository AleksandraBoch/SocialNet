import React from "react";
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";

export type AppStateType = ReturnType<typeof rootReducer>
export type ReduxStoreType=typeof store;

let rootReducer=combineReducers(
    {
        profilePage:profileReducer,
        dialogsPage: dialogsReducer,
    }
)

let store=createStore(rootReducer);

export default store