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
          ...ProjectMain
          ...ProjectDetails
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
      <div style={{ paddingTop: '10px' }}>
        {recentProjects.edges.map(edge => (
          <div className="media" key={edge.node.id}>
            <aside className="media-left">
              <img
                src={`https://img.youtube.com/vi/${edge.node.acf.video_url.split('=')[1]}/mqdefault.jpg`}
                alt="Test"
              />
            </aside>
            <div className="media-content">
              <div
                className="project-title is-text-overflow
                "
                style={{ fontWeight: 'bold' }}
              >
                {htmlEntities.decode(edge.node.title)}
              </div>

            </div>
          </div>
        ))}
      </div>
    )}
  />
);

export default RecentProjectList;
