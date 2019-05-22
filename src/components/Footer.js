import React from 'react';
import TwitterFeed from './TwitterFeed';

const Footer = () => (
  <div className="footer has-text-white-ter">
    <div className="container is-fluid">

      <div className="columns">
        <div className="column is-one-third-tablet is-one-third-desktop is-narrow">
      Stuff in here
        </div>
        <div className="column is-one-third-tablet is-one-third-desktop is-narrow">
      Stuff in here
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
