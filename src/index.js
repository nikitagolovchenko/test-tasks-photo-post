import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import theme from './theme.js';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);