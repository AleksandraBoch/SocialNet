import React from "react";
import App from "../../App";
import store from "./State";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let renderReactTree=()=>{

    root.render(
        <React.StrictMode>
            <App store={store}
            />
        </React.StrictMode>
    );
}
