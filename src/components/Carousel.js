import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';


const SLIDER_QUERY = graphql`
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
`;


const FPCarousel = () => (
  <StaticQuery
    query={SLIDER_QUERY}
    render={({ myImages }) => (
      <Carousel>
        {myImages.edges.map(edge => (
          <div>
            <Img fluid={edge.node.image.childImageSharp.fluid} />
            <div className="carousel-title-style">{edge.node.title}</div>
            <div className="carousel-text-style is-size-4 has-text-white">{edge.node.text}</div>
          </div>
        ))}
      </Carousel>
    )
    }
  />
);

export default FPCarousel;
