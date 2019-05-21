import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import ReactPlayer from 'react-player';
import _ from 'lodash';

function ArchivePage(props) {
  const { projects, title } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [projectModal, setProjectModal] = useState({});
  const [playing, setPlaying] = useState(false);
  console.log(projectModal.acf);

  // const clearModal

  return (
    <section className="section">
      <div className="container ">
        <div className="content">
          <h1 className="has-text-weight-bold is-size-3">{title}</h1>
        </div>
        <div className="columns is-multiline">
          {projects.map(({ node: project }) => {
            project.video_url = project.acf.video_url;

            return (
              <div className="column is-one-third-tablet is-one-quarter-desktop is-narrow" key={project.id}>

                <div
                  className="card"
                  onClick={() => {
                    setProjectModal({ ...project });
                    setIsOpen(!isOpen);
                  }}
                >
                  <div className="card-header ">
                    <div className="card-header-title has-background-primary has-text-white">
                      {project.title}
                    </div>
                  </div>
                  <div className="card-image">
                    <figure className="image is-6by9">
                      <img
                        src={`https://img.youtube.com/vi/${project.video_url.split('=')[1]}/mqdefault.jpg`}
                        alt="Test"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p>{project.project_categories[0].name}</p>
                    <p>{project.date}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setProjectModal({ ...project });
                        setIsOpen(!isOpen);
                      }}
                    >
                      Test
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={isOpen ? 'modal is-active' : 'modal '} id="myModal">
          <div
            className="modal-background"
            role="button"
            onClick={() => {
              setIsOpen(!isOpen);
              setProjectModal({});
              setPlaying(false);
            }}
          />
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{projectModal.title}</p>
              <button
                type="button"
                className="delete"
                aria-label="close"
                onClick={() => {
                  setIsOpen(!isOpen);
                  setProjectModal({});
                  setPlaying(false);
                }}
              />
            </header>
            <section className="modal-card-body" style={{ padding: '0px' }}>
              <div className="player-wrapper">
                <ReactPlayer
                  url={projectModal.video_url}
                  playing={playing}
                  className="react-player"
                  width="100%"
                  height="100%"
                />
              </div>
            </section>
            <footer className="modal-card-foot">
              <p>{projectModal.date}</p>
            </footer>
          </div>
        </div>
      </div>
    </section>

  );
}

export default ArchivePage;


ArchivePage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
};

export const pageQuery = graphql`
  fragment ProjectListFields on wordpress__wp_project {
    id
    title
    date(formatString: "MMMM DD, YYYY")
    slug
    content
    acf {
      video_url 
      }
    project_categories {
      name
    }
    featured_media {
      source_url
    } 
  }
`;
