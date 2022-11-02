import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostsType={
    id:number
    message:string
    likesCount:number
}

export let posts=[
    {id:1, message: 'My first post', likesCount:12},
    {id:1, message: 'Im Okay', likesCount: 11},

]


export let dialogData=[
    {id:1,name:"Sasha"},
    {id:2,name:"Dina"},
    {id:3,name:"Vladimir"},
    {id:4,name:"Egor"},
]

export let message=[
    {id:1, message:'Hello'},
    {id:2,message:'How are you?'},
]


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
