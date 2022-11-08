import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addMessage, addPost, state, StateProps, updateNewMessage, updateNewPost} from "./components/State/State";
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export let renderReactTree=(state:StateProps)=>{

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