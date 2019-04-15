import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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
      <div className="wrapper">
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
            <Link className="header__link logout">log out</Link>
          </div>
        </div>
        <div className="header-bottom">
          <ul className="header-nav">
            <li>
              <Link to={`${root}/`} className="header__link">
                Home
              </Link>
            </li>
            <li>
              <Link to={`${root}/axe-music`} className="header__link">
                AXE MUsic
              </Link>
            </li>
            <li>
              <Link to={`${root}/artists`} className="header__link">
                Artists
              </Link>
            </li>
            <li>
              <Link to={`${root}/partners`} className="header__link">
                Partners
              </Link>
            </li>
            <li>
              <Link to={`${root}/content`} className="header__link">
                Content
              </Link>
            </li>
            <li>
              <Link to={`${root}/brand-approval`} className="header__link">
                Brand approval
              </Link>
            </li>
            <li>
              <span className="pipe">|</span>
            </li>
            <li>
              <Link to={`${root}/requests`} className="header__link">
                my requests
              </Link>
            </li>
            <li>
              <Link to={`${root}/admin`} className="header__link">
                Admin
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="sub-header">
        <div className="wrapper" />
      </div>

      <div className="sub-header__admin">
        <div className="wrapper" />
      </div>

      <div className="admin-btn__holder wrapper relative">
        <button
          onClick={handleToggleAdminBtn}
          className="btn wide flex justify-between align-center absolute pin-r">
          <span className="admin-hide-icon flex align-center">
            <i className={`${icon} text-sm`} />
          </span>
          <span className="ml-4">{btnAction} admin tools</span>
        </button>
      </div>
    </div>
  );
};

export default withRouter(Header);
