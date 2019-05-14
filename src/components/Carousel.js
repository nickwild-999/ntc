import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'


const LISTING_QUERY=graphql`
query ImageListing {
    myImages:allImageSharp (filter:{original:{src:{regex:"/slide/" }}}) { 
            edges {
              node {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid
                  
                }
              }
            }
      }
  }       
` 



const FPCarousel =() => (
  <StaticQuery
    query={LISTING_QUERY}
    
    render={({myImages}) => (
      myImages.edges.map(edge=>(
        <div>
        <Img fluid={edge.node.fluid} alt="" />
      </div>
      ))
     )
      }
    />
)

  export default FPCarousel
  