import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';
import { Html5Entities } from 'html-entities';
import { useSpring, animated } from 'react-spring';

import logo from '../images/NTC-logo.jpg';

const htmlEntities = new Html5Entities();


const ProjectList = (props) => {
  const pointericon = {
    cursor: 'pointer',
  };

  const { projects, title } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [projectModal, setProjectModal] = useState({});
  const [playing, setPlaying] = useState(false);
  const [hasFocus, setFocus] = useState({});
  const [activePointer, setPointer] = useState(false);

  const fade = useSpring({ opacity: isOpen ? 1 : 0 });
  // const hover = useSpring({ transform: hasFocus ? 'scale(0.8)' : 'scale(1.0)' });

  // console.log(hasFocus);
  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {projects.map(({ node: project }) => {
            project.video_url = project.acf.video_url;
            return (
              <div className="column is-one-third-tablet is-one-quarter-desktop is-narrow" key={project.id}>
                <animated.div
                  className="card"
                  onMouseEnter={() => {
                    setFocus(project.id);
                    setPointer(!activePointer);
                  }}
                  onMouseLeave={() => {
                    setFocus(!hasFocus);
                    setPointer(!activePointer);
                  }}
                  onClick={() => {
                    setProjectModal({ ...project });
                    setIsOpen(!isOpen);
                  }}
                >
                  <div className="card-header ">
                    <div className="card-header-title has-background-primary has-text-white is-text-overflow">
                      {htmlEntities.decode(project.title)}
                    </div>

                  </div>
                  <div className="card-image">
                    <figure className="image is-6by9">

                      { project.video_url !== null
                        ? (
                          <img
                            src={`https://img.youtube.com/vi/${project.video_url.split('=')[1]}/mqdefault.jpg`}
                            alt="Test"
                          />
                        )
                        : (

                          <img
                            src={logo} // replace this with default image
                            style={{
                              // width: '320px',
                              height: '180px',
                            }}
                            alt="Test"
                          />
                        )
                    }
                    </figure>
                  </div>
                  <div className="card-content">
                    <p>{project.project_categories[0].name}</p>
                    <p>{project.date}</p>
                  </div>
                </animated.div>
              </div>
            );
          })}
        </div>
        <animated.div className={isOpen ? 'modal is-active' : 'modal '} id="projectModal" style={fade}>
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
              <p className="modal-card-title">
                {htmlEntities.decode(projectModal.title)}
              </p>
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
              <p>
                {(typeof projectModal.project_categories !== 'undefined') ? projectModal.project_categories[0].name : 'No'}
              </p>
            </footer>
          </div>
        </animated.div>
      </div>
    </section>

  );
};

export default ProjectList;
