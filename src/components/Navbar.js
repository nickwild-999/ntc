import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import logo from '../images/NTC-logo.jpg';


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
            className="navbar is-spaced is-fixed-top is-transparent"
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
                    className={`navbar-menu is-transparent ${this.state.navBarActiveClass}`}
                >
                    <div className="navbar-end is-transparent"  >
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
                            All Projects
                        </Link>
                        
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                            Commercials
                            </a>
                            <div className="navbar-dropdown">
                                <Link
                                    className="navbar-item"
                                    to="/categories/commercials"
                                    >
                                        All
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/financial-services"
                                    >
                                        Financial Services
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/food-beverage"
                                    >
                                        Food & Beverage
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/games-entertainment"
                                    >
                                        Games & Entertainment
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/hair-fashion-beauty"
                                    >
                                        Hair, Fashion, Beauty
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/health"
                                    >
                                        Health
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/lifestyle-sport"
                                    >
                                        Lifestyle & Sport
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/retail"
                                    >
                                        Retail
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/telecoms-technology"
                                    >
                                        Telecoms & Technology
                                </Link>
                                <Link
                                    className="navbar-item"
                                    to="/categories/travel"
                                    >
                                        Travel
                                </Link>
                            </div>
                        </div>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">
                            Films
                            </a>
                            <div className="navbar-dropdown">
                                <Link
                                className="navbar-item"
                                to="/categories/feature-films"
                                >
                                    Feature Films
                                </Link>
                                <Link
                                className="navbar-item"
                                to="/categories/short-film"
                                >
                                    Shorts & Music Promos
                                </Link>
                            </div>
                        </div>
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

