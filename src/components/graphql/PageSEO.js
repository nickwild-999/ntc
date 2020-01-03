import { graphql } from 'gatsby';


export const PageSEO = graphql`
  fragment PageSEO on wordpress__PAGE {
    wordpress_id
    yoast_meta {
      yoast_wpseo_title
      yoast_wpseo_metadesc
      yoast_wpseo_canonical
      yoast_wpseo_facebook_title
      yoast_wpseo_facebook_description
      yoast_wpseo_twitter_title
      yoast_wpseo_twitter_description
      # yoast_wpseo_twitter_image
    }
  }
`;
