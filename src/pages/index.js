import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'
import FPCarousel from '../components/Carousel'





const INDEXPAGE_QUERY = graphql`
query MyContent{
myContent:allMarkdownRemark {
  items:edges {
    item:node {
      copy:rawMarkdownBody
    }
  }
}
  }      
`

const IndexPage = () => (
  <StaticQuery
    query={INDEXPAGE_QUERY}
    render={({ myContent }) => (
      <Layout>
        <FPCarousel />
        {myContent.items[0].item.copy}
      </Layout>
)
    }
  />
)
export default IndexPage


