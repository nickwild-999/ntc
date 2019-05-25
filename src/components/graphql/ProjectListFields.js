import { graphql } from 'gatsby';


export const ProjectListFields = graphql`
  fragment ProjectListFields on wordpress__wp_project {
    id
    title
    date(formatString: "MMMM DD, YYYY")
    slug
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
