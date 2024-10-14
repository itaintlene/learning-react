import React from 'react';
import ReactDOM from 'react-dom/client'; // reactDOM is like reactNative for browser
import App from './App';


// react makes a virtual DOM and compares to browser DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

