import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Pages from '@pages';

import store from './state/store';

import history from '@/services/history';
const App = () => (
  <div className="font-bebas">
    <Provider store={store}>
      <Router history={history}>
        <Pages />
      </Router>
    </Provider>
  </div>
);

export default App;
