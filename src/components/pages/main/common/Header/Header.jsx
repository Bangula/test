import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, NavLink } from 'react-router-dom';

import logo from '@images/logo@3x.png';
import Button from '@components/Button/Button';
import * as actions from '@state/actions';
import { isAdmin, fullName, isAdminFeaturesEnabled } from '@state/selectors';
import { HEADER_ROUTES } from '@constants/routes';

function matchPath(path) {
  let result;

  if (
    path.includes('/artists') ||
    path.includes('/partners') ||
    (path.includes('/content') && !path.includes('management')) ||
    (!path.includes('/admin') && path.startsWith('/brand-approval')) ||
    path.includes('/profile')
  ) {
    return result;
  }

  for (const prop in HEADER_ROUTES) {
    if (path.includes(prop)) {
      result = prop;
    }
  }

  return result;
}

const Header = ({ match: { url }, logOut, ...props }) => {
  const root = url === '/' ? '' : url;

  const icon = props.isAdminFeaturesEnabled ? 'fas fa-eye-slash' : 'fas fa-eye';
  const btnAction = props.isAdminFeaturesEnabled ? 'hide' : 'show';

  const handleToggleAdminBtn = () => {
    props.toggleAdminFeatures();
  };

  return (
    <div className="header font-bebas">
      <div className="flex flex-wrap items-center justify-between py-6 px-16">
        <div style={{ width: '75px', height: '60px' }}>
          <Link to={`${root}/`}>
            <img style={{ width: '100%' }} src={logo} alt="logo" />
          </Link>
        </div>

        <div className="flex items-center">
          <Link
            to={`${root}/profile`}
            className="flex flex-col text-center justify-center border-2 rounded-full border-tirques mr-5"
            style={{ width: '40px', height: '40px', borderRadius: '100%' }}>
            <i className="fas fa-user-alt text-white pb-1" />
          </Link>
          <Link
            to={`${root}/profile`}
            className="uppercase text-2xl font-thin text-white mr-5">
            {props.fullName}
          </Link>
          <button onClick={logOut} className="header__link logout">
            log out
          </button>
        </div>
      </div>
      <div className="px-16 py-5">
        <ul className="header-nav flex flex-wrap">
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
          {props.isAdmin && (
            <li>
              <NavLink
                to={`${root}/admin`}
                activeClassName="active active-pink"
                className="header__link"
                title="Admin">
                Admin
              </NavLink>
            </li>
          )}
        </ul>
      </div>

      {props.location.pathname.includes('/admin') ||
      props.location.pathname.includes('/requests') ? (
        ''
      ) : (
        <div className="bg-tirques" style={{ minHeight: '4px' }}>
          <div className="px-16 flex items-center">
            {HEADER_ROUTES[matchPath(props.location.pathname)] && (
              <ul className="subheader-nav">
                {HEADER_ROUTES[matchPath(props.location.pathname)] &&
                  HEADER_ROUTES[matchPath(props.location.pathname)].map(
                    route => (
                      <li key={route.label}>
                        <NavLink
                          to={`${root}${route.path}`}
                          activeClassName="active"
                          className="subheader-link"
                          title={route.label}>
                          {route.label}
                        </NavLink>
                      </li>
                    ),
                  )}
              </ul>
            )}
          </div>
        </div>
      )}

      {props.isAdmin && (
        <div className="bg-pink" style={{ minHeight: '4px' }}>
          <div className="px-16 flex items-center">
            {props.location.pathname.includes('/requests') ||
            props.location.pathname.includes('/admin') ? (
              <ul className="subheader-nav pink">
                {HEADER_ROUTES[matchPath(props.location.pathname)] &&
                  HEADER_ROUTES[matchPath(props.location.pathname)].map(
                    route => (
                      <li key={route.label}>
                        <NavLink
                          to={`${root}${route.path}`}
                          title={route.label}
                          activeClassName="active"
                          className="subheader-link">
                          {route.label}
                        </NavLink>
                      </li>
                    ),
                  )}
              </ul>
            ) : (
              ''
            )}
          </div>
        </div>
      )}

      {props.isAdmin && (
        <div className="container mx-auto relative">
          <Button
            onClick={handleToggleAdminBtn}
            className="wide flex justify-between btn-bg-pink btn-text-white items-center absolute pin-r rounded-none px-8 text-xl z-10">
            <span className="admin-hide-icon flex align-center">
              <i className={`${icon} text-sm`} />
            </span>
            <span className="ml-4">{btnAction} admin tools</span>
          </Button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  isAdmin: isAdmin(state),
  fullName: fullName(state),
  isAdminFeaturesEnabled: isAdminFeaturesEnabled(state),
});

export default connect(
  mapStateToProps,
  actions,
)(withRouter(Header));
