import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {state} from "./components/State/State";

test('renders learn react link', () => {
  render(<App postsData={state.postData} dialogsData={state.dialogsPage} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
