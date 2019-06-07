import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/app';
import rootReducer from './reducers';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import contactsData from './data';

const initialState = {
  contacts: contactsData,
  byID: {},
  byValue: [],
};

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* eslint-disable-next-line no-undef */}
  </Provider>, document.getElementById('root'),
);
