import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Pagination from '../components/Pagination'
import FPCarousel from '../components/Carousel'

export default class BlogPage extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const { edges: posts } = data.allWordpressPost


    return (
      <Layout>
        <FPCarousel />
        <PostList posts={posts} title="Latest posts" />
        <Pagination pageContext={pageContext} pathPrefix="/" />
        
      </Layout>
    )
  }
}



export const pageQuery = graphql`
  query BlogQuery($limit: Int!, $skip: Int!) {
    allWordpressPost(
      sort: { fields: date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...PostListFields
        }
      }
    }
  }
`
