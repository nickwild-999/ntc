import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import ReactPlayer from 'react-player';
import { Html5Entities } from 'html-entities';

import SEO from '../components/SEO/seo';
import Layout from '../components/Layout';
import GatsbyImage from '../components/GatsbyImage';

const htmlEntities = new Html5Entities();

export const ProjectTemplate = ({
  content,
  title,
  date,
  categories,
  video_url,

}) => (
  <section className="section">
    <div className="container content">
      <div className="columns">

        <div className="column is-7 is-offset-1">
          {/* <h1 className="title is-size-3 has-text-weight-bold is-bold-light" style={{ marginBottom: '0px' }}>
            {htmlEntities.decode(title)}
            {/* SHOULD I MOVE THE TTLE UP */}
          {/* </h1>
          <div style={{ marginBottom: '25px' }}>
            {categories}
            <span> Commercial</span>

          </div> */}

          <div className="player-wrapper">
            <ReactPlayer
              url={video_url}
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  </section>
);

ProjectTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
};

const Project = ({ data }) => {
  const { wordpressWpProject: project } = data;
  return (
    <Layout>
      <Helmet title={`${project.title} | Blog`} />
      <SEO seo={project.yoast_meta} />
      {/* <GatsbyImage imgName="feature-film-header.jpg" /> */}
      <div style={{
        backgroundColor: '#9c92ac',
        height: '200px',
      }}
      >
        <svg width="100%" height="100%">
          <defs>
            <pattern id="stripes" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                fill="#bcb9d0"
                fillOpacity="0.2"

                d="M0 40L40 0H20L0 20M40 40V20L20 40"
              />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#stripes)" />
        </svg>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          position: 'absolute',
          top: '120px',
          left: '100px',
          zIndex: '10',
        }}
        >
          <h1
            className="title is-size-3 has-text-weight-bold "
            style={{ marginBottom: '0px' }}
          >
            {htmlEntities.decode(project.title)}
          </h1>
          <div style={{ marginBottom: '25px', fontWeight: '700' }}>
            {project.project_categories[0].name}

          </div>
        </div>
      </div>
      <ProjectTemplate
        content={project.content}
        categories={project.project_categories[0].name}
        tags={project.tags}
        title={project.title}
        date={project.date}
        author={project.author}
        video_url={project.acf.video_url}
      />
    </Layout>
  );
};

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default Project;

export const pageQuery = graphql`
  
  query ProjectByID($id: String!) {
    wordpressWpProject(id: { eq: $id }) {
      ...ProjectMain
      ...ProjectDetails
      ...ProjectSEO
    }
  }
`;
