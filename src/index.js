import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';//for simple project we using this for stayling things or // using framework like tailwind or bootstrap
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
