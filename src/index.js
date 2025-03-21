import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContexProvider } from './context/appContext';
import { APIProvider } from './context/APIContext';
import { CartProvider } from './context/CartContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <APIProvider> 
      <CartProvider>       
    <AppContexProvider>
    <App />
    </AppContexProvider>
    </CartProvider> 
    </APIProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
