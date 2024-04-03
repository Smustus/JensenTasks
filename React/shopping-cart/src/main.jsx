import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
/**
 * Store - Vårat state, det vill spara i Redux
 * Reducer - Själva logiken för att uppdatera vår store
 * Actions - Triggar igång en uppdatering i en reducer
 * Dispatch - Triggar igång en action i en komponent
 */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
