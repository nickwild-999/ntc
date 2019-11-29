import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import parse, { domToReact } from 'html-react-parser';

import Layout from '../components/Layout';
import SEO from '../components/SEO/seo';


export const PageTemplate = ({ title, content }) => {
  const myContent = parse(content);


  return (
    <section className="section section--gradient section-about">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section section-about">
              <h1 className="category-title about-title">{title}</h1>
              <div>{myContent}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  seo: PropTypes.shape({
    yoast_wpseo_title: PropTypes.string,
    yoast_wpseo_metadesc: PropTypes.string,
    yoast_wpseo_canonical: PropTypes.string,
    yoast_wpseo_facebook_title: PropTypes.string,
    yoast_wpseo_facebook_description: PropTypes.string,
    yoast_wpseo_facebook_image: PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.string,
    }),
    yoast_wpseo_twitter_title: PropTypes.string,
    yoast_wpseo_twitter_description: PropTypes.string,
  }),
};

SEO.propTypes = {
  seo: PropTypes.shape({
    yoast_wpseo_title: PropTypes.string,
    yoast_wpseo_metadesc: PropTypes.string,
    yoast_wpseo_canonical: PropTypes.string,
    yoast_wpseo_facebook_title: PropTypes.string,
    yoast_wpseo_facebook_description: PropTypes.string,
    yoast_wpseo_facebook_image: PropTypes.shape({
      id: PropTypes.string,
      link: PropTypes.string,
    }),
    yoast_wpseo_twitter_title: PropTypes.string,
    yoast_wpseo_twitter_description: PropTypes.string,
  }),
};

const Page = ({ data }) => {
  const { wordpressPage: page } = data;
  return (
    <Layout>
      <SEO seo={page.yoast_meta} />
      <PageTemplate title={page.title} content={page.content} />
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Page;

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
      ...PageSEO
    }
    site {
      siteMetadata {
        title
        description
        siteUrl
        image
        author {
          name
        }
        organization {
          name
          url
          logo
        }
        social {
          twitter
          fbAppID
        }
      }
    }
  }
`;
