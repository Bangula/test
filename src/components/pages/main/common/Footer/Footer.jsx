import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '@images/logo@3x.png';

const Footer = ({ match: { url } }) => {
  const root = url === '/' ? '' : url;

  return (
    <footer className="footer flex justify-between align-center py-5">
      <div className="flex">
        <div className="mr-5" style={{ width: '44px' }}>
          <Link to="/main/home">
            <img src={logo} alt="footer-logo" />
          </Link>
        </div>
        <ul className="flex items-center">
          <li className="mr-5">
            <Link className="font-bebas text-md font-thin uppercase text-white">
              Website Guide
            </Link>
          </li>
          <li className="mr-5">
            <Link className="font-bebas text-md font-thin uppercase text-white">
              Noticeboard
            </Link>
          </li>
          <li className="mr-5">
            <Link className="font-bebas text-md font-thin uppercase text-white">
              Sitemap
            </Link>
          </li>
          <li className="mr-5">
            <Link className="font-bebas text-md font-thin uppercase text-white">
              Cookie policy
            </Link>
          </li>
          <li>
            <Link className="font-bebas text-md font-thin uppercase text-white">
              Contact us
            </Link>
          </li>
        </ul>
      </div>
      <ul className="flex items-center">
        <li className="pr-5">
          <Link>
            <i className="fab fa-facebook-f text-white" />
          </Link>
        </li>
        <li className="ml-5 pr-5">
          <Link>
            <i className="fab fa-twitter text-white" />
          </Link>
        </li>
        <li className="ml-5 pr-5">
          <Link>
            <i className="fab fa-instagram text-white" />
          </Link>
        </li>
        <li className="ml-5">
          <Link>
            <i className="fab fa-youtube text-white" />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default withRouter(Footer);
