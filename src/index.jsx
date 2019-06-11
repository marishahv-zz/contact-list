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
  searchValue: '',
};

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-undef,no-underscore-dangle,no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
    {/* eslint-disable-next-line no-undef */}
  </Provider>, document.getElementById('root'),
);
