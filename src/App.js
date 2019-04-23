import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Pages from '@pages';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import store from './state/store';

import history from '@/services/history';
const App = () => (
  <div className="font-bebas">
    <Provider store={store}>
      <Router history={history}>
        <Pages />
      </Router>
    </Provider>
    <Alert stack={{ limit: 1 }} timeout={3000} effect={'slide'} />
  </div>
);

export default App;
