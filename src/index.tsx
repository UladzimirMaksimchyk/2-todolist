import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Button_1 from './button/Button_1';
import App_1 from './App_1';
import App_2 from './useState/UseState';
import App_3 from './filter/Filter';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Button_1/> */}
    {/* <App_1/> */}
    {/* <App_2/> */}
    {/* <App_3/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

