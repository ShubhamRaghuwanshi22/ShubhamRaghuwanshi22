import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './Redux/Store';
import App from './App';
import datafile from './datafile.json'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App data={datafile}/>
  </Provider>
);




