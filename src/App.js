import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import Pages from '@pages';

import history from '@/services/history';
class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>AXE.</div>
        <Link to="/auth/sign-up">Sign Up</Link>
        <Link to="/auth/sign-in">Sign In</Link>
        <Link to="/auth/signed-out">Sign Out</Link>
        <Link to="/auth/confirmation-sent">Confirmation Sent</Link>
        <Link to="/auth/confirmation-resent">Confirmation Resent</Link>
        <Link to="/auth/forgot-password">Forgot Password</Link>
        <Link to="/auth/password-reset-link-sent">
          Password-reset-link-sent
        </Link>
        <Link to="/auth/reset-password">Reset Password</Link>
        <Pages />
      </Router>
    );
  }
}

export default App;
