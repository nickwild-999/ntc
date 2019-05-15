import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import FPCarousel from '../components/Carousel'

export default class IndexPage extends React.Component {
  render() {
   
    return (
      <Layout>
        <FPCarousel />
      </Layout>
    )
  }
}


