import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';
import ReactPlayer from 'react-player';
import ProjectFields from '../components/graphql/ProjectFields';

import Layout from '../components/Layout';

export const ProjectTemplate = ({
  content,
  title,
  date,
  video_url,

}) => (
  <section className="section">
    <div className="container content">
      <div className="columns">
        <div className="column is-7 is-offset-1">
          <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
            {title}
          </h1>
          <div className="player-wrapper">
            <ReactPlayer
              url={video_url}
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div>{date}</div>
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
      <ProjectTemplate
        content={project.content}
        categories={project.categories}
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
      id
      title
      slug
      content
      date(formatString: "DD MMMM, YYYY")
      acf {
        video_url 
      }
      featured_media {
        source_url
    } 
    }
  }
`;
