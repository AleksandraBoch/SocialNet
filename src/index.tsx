import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import {renderReactTree} from "./components/State/render";
import store from "./components/State/redux-store";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import App from "./App";

// renderReactTree()

// store.subscribe(renderReactTree)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <Provider store={store}>
        <App
            // state={store.getState()}
            // dispatch={store.dispatch.bind(store)}
        />
    </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
