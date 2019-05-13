import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
// import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPage(sort: { fields: wordpress_id }, limit: 5) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `}
    render={data => (
      <nav className="navbar is-primary is-spaced is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
              </figure>
            </Link>
          </div>
          <div className="navbar-start" />
          <div className="navbar-end">
            {data.allWordpressPage.edges.map(edge => (
              <Link
                className="navbar-item"
                to={edge.node.slug}
                key={edge.node.slug}
              >
                {edge.node.title}
              </Link>
            ))}
            <Link
              className="navbar-item"
              to="/projects"
            >
              Projects
            </Link>
            <Link
              className="navbar-item"
              to="/categories/commercial"
            >
              Commercials
            </Link>
            <Link
              className="navbar-item"
              to="/categories/film"
            >
              Films
            </Link>
          </div>
        </div>
      </nav>
    )}
  />
)

export default Navbar
