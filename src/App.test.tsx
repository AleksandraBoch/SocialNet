import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import {addMessage, state, updateNewMessage, updateNewPost} from "./components/State/State";
import {addPost} from "./components/State/State";

test('renders learn react link', () => {
    render(<App
        postsData={state.ProfilePage.posts}
        addPost={addPost}
                updateNewPostText={updateNewPost}
                addMessage={addMessage}
                updateNewMessage={updateNewMessage}
                dialogsData={state.dialogsPage}/>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
