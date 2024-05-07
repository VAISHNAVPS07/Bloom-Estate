import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import App from './App';
import './index.css';
import store, { persistor } from './redux/store.js'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
