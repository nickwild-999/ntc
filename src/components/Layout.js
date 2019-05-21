import React from 'react';
import Helmet from 'react-helmet';

import Navbar from './Navbar';
import Footer from './Footer';
import './all.sass';

const TemplateWrapper = ({ children }) => (
  <div className="Site">
    <Helmet title="Home | Gatsby + WordPress" />
    <Navbar />
    <div className="Site-content">{children}</div>
    <Footer />
  </div>
);

export default TemplateWrapper;
