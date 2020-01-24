import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './lib/router/AppRouter';
import Login from './lib/components/Login';

import './App.css';

const app = (
  <div>
    <AppRouter />
  </div>
  
)

ReactDOM.render(app, document.getElementById('root'));


