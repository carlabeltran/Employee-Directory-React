//ES6 
//INDEX.JS
import React from 'react';
//ONE COMPONENT WHERE WE RENDER
import ReactDOM from 'react-dom';
//STYLE
import './index.css';
//
import App from './App';

//REGISTER SERVICES WORKER
import * as serviceWorker from './serviceWorker';

//DOC.GETELEMENT IS COMPONENT DEPLOYMENT LOCATION
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
