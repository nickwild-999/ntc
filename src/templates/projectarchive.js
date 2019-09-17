import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';
import SEO from '../components/SEO/seo'; // ADD THIS IN


export default class ArchivePage extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { edges: projects } = data.allWordpressWpProject;
    const { node: imageheader } = data.allCategoryheadersJson.edges[0];

    return (
      <Layout>
        <Helmet title="Casting Videos | Nicci Topping Casting" />
        <div className="category-image">
          <Img fluid={imageheader.image.childImageSharp.fluid} />
        </div>
        <div className="category-header">
          <div className="container">
            <div className="content">
              <div>
                <h1 className="category-title">Casting Videos</h1>
              </div>
            </div>
          </div>
        </div>
        <ProjectList projects={projects} title="Casting Projects" />
      </Layout>
    );
  }
}

// ArchivePage.propTypes = {
//   data: PropTypes.shape({
//     allWordpressWpProject: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
//   pageContext: PropTypes.shape({
//     currentPage: PropTypes.number,
//     numPages: PropTypes.number,
//   }),
// };

export const pageQuery = graphql`
  query ArchiveQuery {
    allWordpressWpProject(
      sort: { fields: date, order: DESC }
          ) {
      edges {
        node {
          ...ProjectMain
          ...ProjectDetails
          slug
        }
      }
    }
    allCategoryheadersJson (filter: { header_category:{ eq: "all" }}) {
      edges {
        node {
          header_category
          image {
            childImageSharp {
              fluid (maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            } 
          }
        }
      }
    }
  }
`;
