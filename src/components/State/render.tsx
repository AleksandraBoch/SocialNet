import React from "react";
import App from "../../App";
import {addMessage, addPost, state, updateNewMessage, updateNewPost} from "./State";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let renderReactTree=()=>{

    root.render(
        <React.StrictMode>
            <App postsData={state.ProfilePage.posts}
                 dialogsData={state.dialogsPage}
                 addPost={addPost}
                 updateNewPostText={updateNewPost}
                 addMessage={addMessage}
                 updateNewMessage={updateNewMessage}
            />
        </React.StrictMode>
    );
}
