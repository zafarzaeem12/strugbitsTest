import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App';
import {store, persistor} from './redux/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <ThemeProvider>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
        </ThemeProvider>
      </Router>
    </React.StrictMode>
  </Provider>
);
