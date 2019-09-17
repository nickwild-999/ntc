/* eslint-disable no-undef */
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';
import Carousel from 'nuka-carousel';
import BackgroundImage from 'gatsby-background-image';
import { useWindowSize } from './hooks/useWindowSize';


const TestimonialSlider = () => {
  const size = useWindowSize();

  let winsize;
  if (size.width > 1024) {
    winsize = 4;
  } else if (size.width > 768) {
    winsize = 2;
  } else {
    winsize = 1;
  }

  const bg = useStaticQuery(graphql`
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
  `);
  return (
    <div>
      <Carousel
        slidesToShow={winsize}
        slidesToScroll={1}
        cellSpacing={0}
      >
        {bg.myTestimonials.edges.map(edge => (
          <div className="card ">
            <BackgroundImage
              fluid={edge.node.image.childImageSharp.fluid}
            >
              <div className="card-content blockquote" style={{ minHeight: '400px' }}>
                <p className="title has-text-white is-size-4 ">{edge.node.quote}</p>
                <div className="subtitle has-text-white">{edge.node.person}</div>
              </div>
            </BackgroundImage>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialSlider;
