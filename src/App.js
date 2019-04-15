import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Pages from '@pages';

import store from './state/store';

import history from '@/services/history';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Pages />
        </Router>
      </Provider>
    );
  }
}

export default App;
