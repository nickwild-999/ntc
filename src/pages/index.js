import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import FPCarousel from '../components/Carousel';
import MyImage from '../components/GatsbyImage';
import TestimonialSlider from '../components/Testimonials';


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
        <section className="section">
          <div className="container is-fluid">
            <div className="columns">
              <div className="column is-one-third is-narrow" style={{ paddingTop: '0px' }}>
                <MyImage imgName="nicci_topping_portrait.jpg" />
              </div>
              <div
                className=" column is-two-third has-text-justified front-page box "
                dangerouslySetInnerHTML={{
                  __html: myContent.items[0].item.copy,
                }}
              />
            </div>
            <TestimonialSlider />
          </div>
        </section>
      </Layout>
    )
    }
  />
);
export default IndexPage;
