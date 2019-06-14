import { graphql } from 'gatsby';


export const ProjectMain = graphql`
  fragment ProjectMain on wordpress__wp_project {
    id
    slug
    title
    date(formatString: "DD MMMM, YYYY")
    
  }
`;
