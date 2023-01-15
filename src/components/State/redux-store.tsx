import React from "react";
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReduser";
import {friendsReducer} from "./friendsReduser";

export type AppStateType = ReturnType<typeof rootReducer>
// export type StoreType = typeof store;
// export type StoreType = ReturnType<typeof rootReducer>;

let rootReducer=combineReducers(
    {
        profilePage:profileReducer,
        dialogsPage: dialogsReducer,
        friendsPage:friendsReducer,
    }
)

let store=createStore(rootReducer);

export default store;

//@ts-ignore
window.store = store