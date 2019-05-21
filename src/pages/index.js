import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import FPCarousel from '../components/Carousel';


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
        <FPCarousel />
        <div
          className="columns"
          style={{ padding: '80px 140px 20px 140px' }}
        >
          <div className="column">
            Picture in here
          </div>
          <div
            className="column"
            dangerouslySetInnerHTML={{
              __html: myContent.items[0].item.copy,
            }}
          />
        </div>

      </Layout>
    )
        }
  />
);
export default IndexPage;
