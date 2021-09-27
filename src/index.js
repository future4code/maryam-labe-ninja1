import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Globalstyle} from "./global"

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Globalstyle />
  </React.StrictMode>,
  document.getElementById('root')
);