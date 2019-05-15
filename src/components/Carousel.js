import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import Carousel from 'nuka-carousel'


const SLIDER_QUERY=graphql`
query ImageListing {
    myImages:allSliderJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            } 
          }
          title
          text
        }
      }
    }
  }       
` 

const TitleStyle = {
    position: "absolute",
    left: "50px",
    top: "200px",
    fontSize: "2.8rem",
    fontVariantCaps: "all-small-caps",
    color: "whitesmoke",
    backgroundColor: "#80008090",
    padding: "0px 30px 0px 30px"
}

const TextStyle = {
  position: "absolute",
  left: "50px",
  top: "280px",
}

const FPCarousel =() => (
  <StaticQuery
    query={SLIDER_QUERY}
    render={({myImages}) => (
      <Carousel
      
      >
              {myImages.edges.map(edge=>(
                  <div>
                    <Img fluid={edge.node.image.childImageSharp.fluid} />
                    <div style={TitleStyle}>{edge.node.title}</div>
                    <div style={TextStyle} className="is-size-4 has-text-white">{edge.node.text}</div>
                  </div>
              ))}
     </Carousel>
     )
      }
    />
)

  export default FPCarousel
  

  
             