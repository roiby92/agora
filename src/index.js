import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'mobx-react'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Inventory from './stores/Inventory'

let myInventory = new Inventory()


ReactDOM.render(
  <React.StrictMode>
    <Provider myInventory={myInventory}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
