import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import logo from '../images/logo.png';


const Navbar = class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          active: false,
          navBarActiveClass: '',
        }
      }
    
      toggleHamburger = () => {
        // toggle the active boolean in the state
        this.setState(
          {
            active: !this.state.active,
          },
          // after state has been updated,
          () => {
            // set the class in state for the navbar accordingly
            this.state.active
              ? this.setState({
                  navBarActiveClass: 'is-active',
                })
              : this.setState({
                  navBarActiveClass: '',
                })
          }
        )
      }

      render() {
        return (
            <nav
            className="navbar is-spaced is-fixed-top"
            style={{ paddingTop: '8px', paddingBottom: '2px' }}
            role="navigation"
            aria-label="main-navigation"
            >
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                    <figure className="brandimage">
                        <img src={logo} alt="Nicci Topping Casting" />
                    </figure>
                    </Link>
                    {/* Hamburger menu */}
                    <div
                        className={`navbar-burger burger ${this.state.navBarActiveClass}    `}
                        data-target="mainMenu"
                        onClick={() => this.toggleHamburger()}
                    >
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
                <div
                    id="navMenu"
                    className={`navbar-menu ${this.state.navBarActiveClass}`}
                >
                    <div className="navbar-end"  >
                        <Link
                        className="navbar-item"
                        to="/"
                        >
                        Home
                        </Link>

                        <Link
                        className="navbar-item"
                        to="/projects"
                        >
                            Projects
                        </Link>
                        <Link
                        className="navbar-item"
                        to="/categories/commercials"
                        >
                            Commercials
                        </Link>
                        <Link
                        className="navbar-item"
                        to="/categories/feature-films"
                        >
                            Films
                        </Link>
                        <Link
                        className="navbar-item"
                        to="/blog"
                        >
                            Blog
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )}
    }
    export default Navbar;

