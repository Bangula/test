import React from 'react';
import { Link } from 'react-router-dom';
import logo from '@images/logo@3x.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-holder">
          <div className="footer-nav">
            <div className="footer-logo">
              <Link to="/main/home">
                <img src={logo} alt="footer-logo" />
              </Link>
            </div>

            <div className="footer-nav">
              <ul>
                <li>
                  <Link className="footer__link">Website Guide</Link>
                </li>
                <li>
                  <Link className="footer__link">Noticeboard</Link>
                </li>
                <li>
                  <Link className="footer__link">Sitemap</Link>
                </li>
                <li>
                  <Link className="footer__link">Cookie policy</Link>
                </li>
                <li>
                  <Link className="footer__link">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-socials">
            <ul>
              <li>
                <Link className="footer-socials__link">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link className="footer-socials__link">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link className="footer-socials__link">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link className="footer-socials__link">
                  <i className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
