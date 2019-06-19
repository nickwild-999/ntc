import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import MainHero from '../components/MainHero';

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
        <section className="section">
          <MainHero />
        </section>
      </Layout>
    )
    }
  />
);
export default IndexPage;
