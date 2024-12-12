import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './Reducers';

const store = createStore(Reducers)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
  <App />
 </Provider>
);


