import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import Pages from '@pages';

import history from '@/services/history';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Pages />
      </Router>
    );
  }
}

export default App;
