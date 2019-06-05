import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


const MyImage = ({ imgName }) => (
  <StaticQuery
    query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(
                  maxWidth: 500,
                  duotone: {
                    highlight: "#228B22",
                    shadow: "#32CD32",
                    opacity: 10,
                    } 
                  ) {
                    ...GatsbyImageSharpFluid
                    originalName
                    }
                }
            }
          }
        }
      `}
    render={(data) => {
      const image = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === imgName,
      );
      if (!image) {
        return null;
      }
      return (<Img fluid={image.node.fluid} />);
    }}
  />

);
export default MyImage;
