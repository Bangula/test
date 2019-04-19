import React from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import logo from '@images/logo@3x.png';
import Button from '@components/Button/Button';

const Header = ({ match: { url } }) => {
  const root = url === '/' ? '' : url;

  const [toggleAdminBtn, setToggleAdminBtn] = React.useState(true);
  const icon = toggleAdminBtn ? 'fas fa-eye-slash' : 'fas fa-eye';
  const btnAction = toggleAdminBtn ? 'hide' : 'show';

  const handleToggleAdminBtn = () => {
    setToggleAdminBtn(toggleAdminBtn => !toggleAdminBtn);
  };

  return (
    <div className="header">
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
            full name
          </Link>
          <Link className="uppercase text-2xl font-thin text-tirques">
            log out
          </Link>
        </div>
      </div>
      <div className="px-16 py-5">
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

      <div className="bg-tirques" style={{ minHeight: '4px' }}>
        <div className="px-16 flex items-center" />
      </div>

      <div className="bg-pink" style={{ minHeight: '4px' }}>
        <div className="px-16 flex items-center" />
      </div>

      <div className="container mx-auto relative">
        <Button
          onClick={handleToggleAdminBtn}
          className="btn wide flex justify-between align-center absolute pin-r rounded-none px-4"
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

export default withRouter(Header);
