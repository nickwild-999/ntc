import { graphql } from 'gatsby';


export const ProjectSEO = graphql`
  fragment ProjectSEO on wordpress__wp_project {
    title
    content
    wordpress_id
    yoast_meta {
       yoast_wpseo_title
      yoast_wpseo_metadesc
      yoast_wpseo_canonical
      yoast_wpseo_facebook_title
      yoast_wpseo_facebook_description
      yoast_wpseo_twitter_title
      yoast_wpseo_twitter_description
      yoast_wpseo_twitter_image
    }
  }
`;
