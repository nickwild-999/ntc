import { graphql } from 'gatsby';


export const ProjectFields = graphql`
  fragment ProjectFields on wordpress__wp_project {
    id
    slug
    content
    date(formatString: "DD MMMM, YYYY")
    title,
  }
`;
