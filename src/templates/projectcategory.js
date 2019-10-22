import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ReactPlayer from 'react-player';

import Layout from '../components/Layout';
import SEO from '../components/SEO/seo'; // ADD THIS IN
import ProjectList from '../components/ProjectList';

const ProjectCategory = (props) => {
  const { data, pageContext } = props;
  const { edges: projects, totalCount } = data.allWordpressWpProject;
  const { title: siteTitle } = data.site.siteMetadata;
  const { node: imageheader } = data.allCategoryheadersJson.edges[0];
  const { name: category, slug } = pageContext;
  const { node: category2 } = data.allWordpressWpProjectCategories.edges[0];

  let video = '';
  if (slug === 'commercials') {
    video = (
      <div
        className="container"
        style={{
          paddingBottom: '20px',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ReactPlayer
          url="https://vimeo.com/365292142/50ebb98ea7"
          light
          className="react-player-fp"
        />
      </div>
    );
  } else if (slug === 'feature-films') {
    video = (
      <div
        className="container"
        style={{
          paddingBottom: '20px',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ReactPlayer
          url="https://vimeo.com/365292665/14521dedaa"
          light
          className="react-player-fp"
        />
      </div>
    );
  } else {
    video = <div />;
  }


  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <div className="category-image">
        <Img fluid={imageheader.image.childImageSharp.fluid} />
      </div>
      <div className="category-header">
        <div className="container">
          <div className="content">
            <div>
              <h1 className="category-title">{category}</h1>
              <div className="category-description">{category2.description}</div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="container"
        style={{
          paddingBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ReactPlayer
          url="https://vimeo.com/365292142/50ebb98ea7"
          light
          className="react-player-fp"
        />
      </div> */}
      {video}

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
          ...ProjectMain
          ...ProjectDetails
          ...ProjectSEO
        }
      }
    }
    allCategoryheadersJson (filter: { header_category:{ eq: $slug }}) {
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
    allWordpressWpProjectCategories (filter: { slug:{ eq: $slug }})  {
      edges {
        node {
          id
          name
          description
          slug
        }
      }
    }
  }
`;
