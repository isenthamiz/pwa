import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import AppRouter from './lib/router/AppRouter';
import Login from './lib/components/Login';

require("babel-core/register");
require("babel-polyfill");

import './App.css';

const store =configureStore();

const unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
})

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


