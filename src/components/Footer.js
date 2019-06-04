import React from 'react';
import TwitterFeed from './TwitterFeed';
import RecentProjectList from './RecentProjectFooter';


import logo from '../images/logo.png';

const Footer = () => (
  <div className="footer has-text-white-ter">
    <div className="container is-fluid">

      <div className="columns">
        <div className="column is-one-third-tablet is-one-third-desktop is-narrow">

          <img src={logo} alt="Nicci Topping Casting" />
          <div className="footer-text">
            <p>
              Twitter:
              <a
                href="https://twitter.com/niccitopping"
                target="_blank"
                rel="noopener"
              >
                @niccitopping
              </a>
            </p>
            <p>
              Facebook:
              <a
                href="https://facebook.com/niccitoppingcasting/"
                target="_blank"
                rel="noopener"
              >
                niccitoppingcasting/
              </a>
            </p>
            <p>
              Blog:
              <a
                href="https://niccitopping.com/"
                target="_blank"
                rel="noopener"
              >
              niccitopping.com
              </a>
            </p>
            <p>
            Email:
              <a
                href="mailto:nicci@niccitoppingcasting.com"
                target="_blank"
                rel="noopener"
              >
              nicci@niccitoppingcasting.com
              </a>
            </p>

          </div>
          <div className="footer-text">
            <p style={{ fontWeight: 'bold', paddingTop: '12px' }}>Main Office</p>
            <p>The Media Centre</p>
            <p>7 Northumberland Street</p>
            <p>Huddersfield</p>
            <p>West Yorkshire</p>
            <p>HD1 1RL</p>
            <p style={{ fontWeight: '500' }}>Phone: 01484 511988</p>
          </div>
          <div className="footer-text">
            <p style={{ fontWeight: 'bold', paddingTop: '12px' }}>London Office</p>
            <p>49 Carnaby Street,</p>
            <p>2nd Floor,</p>
            <p>London</p>
            <p>W1F 9PY</p>
            <p style={{ fontWeight: '500' }}>Phone: 0207 112 8156</p>
          </div>
        </div>
        <div className="column is-one-third-tablet is-one-third-desktop is-narrow">
          <h3 className="is-size-5 has-text-weight-bold">Recent Work</h3>
          <RecentProjectList />
        </div>
        <div className="column is-one-third-tablet is-one-third-desktop is-narrow">
          <h3 className="is-size-5 has-text-weight-bold">Recent Tweets</h3>
          <TwitterFeed />
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
