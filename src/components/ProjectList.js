import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ReactPlayer from 'react-player'
import { Col, Row, Card, Modal, Button } from 'antd'
import _ from 'lodash';


export default class ArchivePage extends React.Component {

  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    //console.log(this.props.projects[1].node)
    const { projects, title } = this.props

    return (

      <section className="section">
        <div className="container " >
          <div className="content">
            <h1 className="has-text-weight-bold is-size-3">{title}</h1>
          </div>
          <div className="columns is-multiline">
            {projects.map(({ node: project }) => (
              <div className="column is-one-third-tablet is-one-quarter-desktop is-narrow" key={project.id}>

                <div className="card">
                  <div className="card-header ">
                    <div className="card-header-title has-background-primary has-text-white">
                      {project.title}
                    </div>
                  </div>
                  <div className="card-image">
                    <figure className="image is-6by9">
                      <img
                        src={`https://img.youtube.com/vi/${project.acf.video_url.split('=')[1]}/mqdefault.jpg`}
                        alt="Test" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p>{project.project_categories[0].name}</p>
                    <p>{project.date}</p>
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}

ArchivePage.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

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
`
