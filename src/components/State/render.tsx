import React from "react";
import App from "../../App";
import reduxStore from "./redux-store";
import ReactDOM from "react-dom/client";
import store from "./redux-store";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let renderReactTree=()=>{
    root.render(

            <App store={store}
                 dispatch={store.dispatch.bind(store)}
            />

    );
}
