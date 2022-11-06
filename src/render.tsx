import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost, state, StateProps} from "./components/State/State";

export let renderReactTree=(state:StateProps)=>{
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App postsData={state.postData}
                 dialogsData={state.dialogsPage}
                 addPost={addPost}
            />
        </React.StrictMode>
    );
}