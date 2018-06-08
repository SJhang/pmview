import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
    <App/>
  </Provider>, root);
  registerServiceWorker();
});
