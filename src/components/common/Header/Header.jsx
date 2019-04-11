import React from 'react';
import logo from '@images/logo@3x.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-top">
          <div className="logo-holder">
            <Link to="/main/home">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="account-nav">
            <Link className="account-btn">
              <i className="fas fa-user-alt" />
            </Link>
            <Link to="my-profile" className="header__link">
              full name
            </Link>
            <Link className="header__link logout">log out</Link>
          </div>
        </div>
        <div className="header-bottom">
          <ul className="header-nav">
            <li>
              <Link className="header__link">Home</Link>
            </li>
            <li>
              <Link className="header__link">AXE MUsic</Link>
            </li>
            <li>
              <Link className="header__link">Artists</Link>
            </li>
            <li>
              <Link className="header__link">Partners</Link>
            </li>
            <li>
              <Link className="header__link">Content</Link>
            </li>
            <li>
              <Link className="header__link">Brand approval</Link>
            </li>
            <li>
              <span className="pipe">|</span>
            </li>
            <li>
              <Link className="header__link">my requests</Link>
            </li>
            <li>
              <Link className="header__link">Admin</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
