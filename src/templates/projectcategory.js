import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
// import ReactPlayer from 'react-player';
import Videov from '../components/Video';


import Layout from '../components/Layout';
import SEO from '../components/SEO/seo'; // ADD THIS IN
import ProjectList from '../components/ProjectList';
import { useWindowSize } from '../components/hooks/useWindowSize';


const ProjectCategory = (props) => {
  const { data, pageContext } = props;
  const { edges: projects, totalCount } = data.allWordpressWpProject;
  const { title: siteTitle } = data.site.siteMetadata;
  const { node: imageheader } = data.allCategoryheadersJson.edges[0];
  const { name: category, slug } = pageContext;
  const { node: category2 } = data.allWordpressWpProjectCategories.edges[0];

  const size = useWindowSize();
  const videoWidth = size.width < 569 ? 320 : 680;
  const videoSize = { width: videoWidth, height: videoWidth / 1.7 };

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
        <div className="vimeo-wrapper">
          <Videov
            videoSrcURL="https://player.vimeo.com/video/369889988"
          />
        </div>
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
        <div className="vimeo-wrapper">
          <Videov
            videoSrcURL="https://player.vimeo.com/video/369891463"
            size={videoSize}
          />
        </div>
      </div>
    );
  } else {
    video = <div />;
  }


  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      {/* add an seo for categories that pulls from the header image */}
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
