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
              fluid (duotone: {highlight: "#b7c0ee", shadow: "#330c2f"}) {
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
          slidesToShow={2}
          slidesToScroll={1}
          cellSpacing={20}
        >
          {myTestimonials.edges.map(edge => (
            <div className="card testimonal-card ">
              <BackgroundImage
                fluid={edge.node.image.childImageSharp.fluid}
              >
                <div className="card-content blockquote">
                  <p className="title has-text-white is-size-4 ">{edge.node.quote}</p>
                  <div className="subtitle has-text-white">{edge.node.person}</div>
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
