import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'
import Pagination from '../components/Pagination'

export default class ArchivePage extends React.Component {

  render() {
    const { data, pageContext } = this.props
    const { edges: projects } =  data.allWordpressWpProject

    return (
      <Layout>
        <ProjectList projects={projects} title="My Jobs" />
        <Pagination pageContext={pageContext} pathPrefix="/" />
      </Layout>
    )
  }
}

ArchivePage.propTypes = {
  data: PropTypes.shape({
    allWordpressWpProject: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number,
    numPages: PropTypes.number,
  }),
}

export const pageQuery = graphql`
  query ArchiveQuery {
    allWordpressWpProject(
      sort: { fields: date, order: DESC }
          ) {
      edges {
        node {
          ...ProjectListFields
          slug
        }
      }
    }
  }
`
