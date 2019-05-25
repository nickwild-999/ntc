import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Html5Entities } from 'html-entities';

const htmlEntities = new Html5Entities();


const FOOTER_LISTING_QUERY = graphql`
query RecentProjectQuery {
    recentProjects:allWordpressWpProject(
      sort: { fields: date, order: DESC }
      limit:5
          ) {
      edges {
        node {
          ...ProjectListFields
          slug
        }
      }
    }
  }
`;

// factor this as a media display

const RecentProjectList = () => (
  <StaticQuery
    query={FOOTER_LISTING_QUERY}
    render={({ recentProjects }) => (
      <div>
        {recentProjects.edges.map(edge => (
          <div className="media" key={edge.node.id}>
            <aside className="media-left">
              <img
                src={`https://img.youtube.com/vi/${edge.node.acf.video_url.split('=')[1]}/mqdefault.jpg`}
                alt="Test"
              />
            </aside>
            <div className="media-content">
              <p className="is-strong">
                {htmlEntities.decode(edge.node.title)}
              </p>
              <p>
                {edge.node.project_categories[0].name}
              </p>
            </div>
          </div>
        ))}
      </div>
    )}
  />
);

export default RecentProjectList;
