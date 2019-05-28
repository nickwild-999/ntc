import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/Layout';
import ProjectList from '../components/ProjectList';

const ProjectCategory = (props) => {
  const { data, pageContext } = props;
  const { edges: projects, totalCount } = data.allWordpressWpProject;
  const { title: siteTitle } = data.site.siteMetadata;
  const { node: imageheader } = data.allCategoryheadersJson.edges[0];
  const { name: category, slug } = pageContext;

  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <div className="content">
        <Img fluid={imageheader.image.childImageSharp.fluid} />

        <h1 className="carousel-title-style">{category}</h1>
      </div>
      <ProjectList projects={projects} title={`${category}`} />
    </Layout>
  );
};

export default ProjectCategory;

export const pageQuery = graphql`
  query ProjectCategoryPage  ($slug: String!){
    site {
      siteMetadata {  
        title
      }
    }
    allWordpressWpProject (filter: { project_categories: { elemMatch:{slug:{ eq: $slug }}}})  {
      totalCount
      edges {
        node {
          ...ProjectListFields
        }
      }
    }
    allCategoryheadersJson (filter: { header_category:{ eq: $slug }}) {
      edges {
        node {
          header_category
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            } 
          }
        }
      }
    } 
  }
`;
