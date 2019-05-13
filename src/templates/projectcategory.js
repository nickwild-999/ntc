import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectList from '../components/ProjectList'

const ProjectCategory = props => {
  const { data, pageContext } = props
  const { edges: projects, totalCount } = data.allWordpressWpProject
  const { title: siteTitle } = data.site.siteMetadata
  const { name: category, slug } = pageContext
  const title = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } in the “${slug}” category`

  return (
    <Layout>
      <Helmet title={`${category} | ${siteTitle}`} />
      <ProjectList projects={projects} title={title} />
    </Layout>
  )
}

export default ProjectCategory

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
  }
`
