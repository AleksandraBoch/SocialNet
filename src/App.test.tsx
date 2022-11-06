import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {state} from "./components/State/State";
import {addPost} from "./components/State/State";

test('renders learn react link', () => {
  render(<App postsData={state.postData} addPost={addPost} dialogsData={state.dialogsPage} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
