import { graphql } from 'gatsby';


export const ProjectDetails = graphql`
  fragment ProjectDetails on wordpress__wp_project {
    content
    acf {
      video_url 
      }
    project_categories {
      name
    }
    featured_media {
      source_url
    } 
  }
`;
