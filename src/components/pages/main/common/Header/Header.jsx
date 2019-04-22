import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, NavLink } from 'react-router-dom';

import logo from '@images/logo@3x.png';
import Button from '@components/Button/Button';
import * as actions from '@state/actions';

const Header = ({ match: { url }, logOut }) => {
  const root = url === '/' ? '' : url;

  const [toggleAdminBtn, setToggleAdminBtn] = React.useState(true);
  const icon = toggleAdminBtn ? 'fas fa-eye-slash' : 'fas fa-eye';
  const btnAction = toggleAdminBtn ? 'hide' : 'show';

  const handleToggleAdminBtn = () => {
    setToggleAdminBtn(toggleAdminBtn => !toggleAdminBtn);
  };

  return (
    <div className="header">
      <div className="container mx-auto">
        <div className="header-top">
          <div className="logo-holder">
            <Link to={`${root}/`}>
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="account-nav">
            <Link to={`${root}/profile`} className="account-btn">
              <i className="fas fa-user-alt" />
            </Link>
            <Link to={`${root}/profile`} className="header__link">
              full name
            </Link>
            <button onClick={logOut} className="header__link logout">
              log out
            </button>
          </div>
        </div>
        <div className="header-bottom">
          <ul className="header-nav">
            <li>
              <NavLink
                to={`${root}/`}
                exact
                activeClassName="active"
                className="header__link"
                title="Home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/axe-music`}
                activeClassName="active"
                className="header__link"
                title="AXE Music">
                AXE Music
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/artists`}
                activeClassName="active"
                className="header__link"
                title="Artists">
                Artists
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/partners`}
                activeClassName="active"
                className="header__link"
                title="Partners">
                Partners
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/content`}
                activeClassName="active"
                className="header__link"
                title="Content">
                Content
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/brand-approval`}
                activeClassName="active"
                className="header__link"
                title="Brand approval">
                Brand approval
              </NavLink>
            </li>
            <li className="flex items-center">
              <span className="pipe" />
            </li>
            <li>
              <NavLink
                to={`${root}/requests`}
                activeClassName="active active-pink"
                className="header__link"
                title="my requests">
                my requests
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${root}/admin`}
                activeClassName="active active-pink"
                className="header__link"
                title="Admin">
                Admin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-header">
        <div className="container mx-auto" />
      </div>

      <div className="sub-header__admin">
        <div className="container mx-auto" />
      </div>

      <div className="admin-btn__holder container mx-auto relative">
        <Button
          onClick={handleToggleAdminBtn}
          className="btn wide flex justify-between align-center absolute pin-r rounded-none"
          bgColor="btn-bg-pink"
          textColor="btn-text-white">
          <span className="admin-hide-icon flex align-center">
            <i className={`${icon} text-sm`} />
          </span>
          <span className="ml-4">{btnAction} admin tools</span>
        </Button>
      </div>
    </div>
  );
};

export default connect(
  null,
  actions,
)(withRouter(Header));
