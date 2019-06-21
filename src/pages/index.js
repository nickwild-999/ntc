import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import MainHero from '../components/MainHero';
import FrontPageContent from '../components/FrontPageContent';
import FrontPageVideo from '../components/FrontPageVideo';
import Test from '../components/test';


const INDEXPAGE_QUERY = graphql`
query MyContent{
myContent:allMarkdownRemark {
  items:edges {
    item:node {
      copy:html
    }
  }
}
  }      
`;

const IndexPage = () => (
  <StaticQuery
    query={INDEXPAGE_QUERY}
    render={({ myContent }) => (
      <Layout>
        <section className="hero is-fullheight">
          <MainHero />
        </section>
        <section
          id="showreel"
          className="hero is-fullheight"
          style={{ backgroundColor: '#d5cfe1', paddingTop: '150px' }}
        >
          <FrontPageVideo />
        </section>
        <section>
          <FrontPageContent />
        </section>
      </Layout>

    )
    }
  />
);
export default IndexPage;
