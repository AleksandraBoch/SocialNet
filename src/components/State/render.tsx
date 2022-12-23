import React from "react";
import App from "../../App";
import store from "./State";
import ReactDOM from "react-dom/client";


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
