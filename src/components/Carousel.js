import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

export default () => (
  <StaticQuery
    query={graphql`
        query HeadingQuery {
            myImage:imageSharp (original:{src:{regex:"/slide2/" }}){ 
                    id
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    
                }
            }
        }       
    `}
    render={data => (
      <div>
        <Img fluid={data.myImage.fluid} alt="" />
      </div>
        )}
  />
)