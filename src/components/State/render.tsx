import React from "react";
import App from "../../App";
import reduxStore, {AppStateType} from "./redux-store";
import ReactDOM from "react-dom/client";
import store from "./redux-store";
import {useSelector} from "react-redux";

// export const subscribe = (observer: (state: AppStateType) => void) => {
//     renderReactTree = observer;
// }

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let renderReactTree=()=>{

    root.render(
            <App store={store.getState()}
                 dispatch={store.dispatch.bind(store)}
            />
    );
}
