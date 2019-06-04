/* eslint-disable no-undef */
import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';
import BackgroundImage from 'gatsby-background-image';


const TESTIMONIAL_QUERY = graphql`
query Testimonials {
    myTestimonials:allTestimonialsJson {
      edges {
        node {
          image {
            childImageSharp {
              fluid (duotone: {highlight: "#f00e2e", shadow: "#192550"}) {
                ...GatsbyImageSharpFluid
              }
            } 
          }
          person
          quote
        }
      }
    }
  }
`;


const TestimonialSlider = () => (
  <StaticQuery
    query={TESTIMONIAL_QUERY}
    render={({ myTestimonials }) => (
      <div>
        <Carousel
          slidesToShow={3}
          slidesToScroll={1}
          cellSpacing={20}
        >
          {myTestimonials.edges.map(edge => (
            <div className="card">
              <BackgroundImage
                fluid={edge.node.image.childImageSharp.fluid}
              >
                <div className="card-content">
                  <p className="title has-text-white">{edge.node.quote}</p>
                  <div className="subtitle">{edge.node.person}</div>
                </div>
              </BackgroundImage>
            </div>
          ))}
        </Carousel>
      </div>
    )
    }
  />
);

export default TestimonialSlider;
