import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO/seo';

export const PageTemplate = ({ title, content }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

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
