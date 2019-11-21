import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import MainHero from '../components/MainHero';
import FrontPageContent from '../components/FrontPageContent';
import FrontPageVideo from '../components/FrontPageVideo';
import Testimonials from '../components/Testimonials';
import Directors from '../components/Directors';
import Videov from '../components/Video';


const INDEXPAGE_QUERY = graphql`
query MyContent{
myContent:allMarkdownRemark {
  items:edges {
    item:node {
      copy:html
    }
  }
}
  }      
`;


const indexmeta = [
  {
    name: 'description',
    content: 'Leading UK Casting Director working in commercials, feature film and TV. | CSA | CDA',
  },
  {
    property: 'og:title',
    content: 'Nicci Topping Casting | CDA | CSA | Leading UK Casting Director ',
  },
  {
    property: 'og:description',
    content: 'Leading UK Casting Director | CDA | CSA',
  },
  {
    property: 'og:image',
    content: 'https://infallible-mcnulty-753e25.netlify.com/NTC-fb-logo3.jpg',
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    name: 'twitter:card',
    content: 'summary',
  },
  {
    name: 'twitter:creator',
    content: 'Nicci Topping',
  },
  {
    name: 'twitter:title',
    content: 'Nicci Topping Casting | CDA | CSA |',
  },
  {
    name: 'twitter:description',
    content: "Nicci Topping Casting is one of the UK's leading Casting Directors",
  },
  {
    name: 'twitter:image',
    content: 'https://infallible-mcnulty-753e25.netlify.com/NTC-fb-logo3.jpg',
  },
];


const IndexPage = () => (
  <StaticQuery
    query={INDEXPAGE_QUERY}
    render={({ myContent }) => (
      <Layout>
        <Helmet meta={indexmeta} />
        <section className="hero is-fullheight">
          <MainHero />
        </section>
        <section
          id="showreel"
          className="hero is-fullheight"
          style={{ backgroundColor: '#d5cfe1', paddingTop: '175px' }}
        >
          <FrontPageVideo />
        </section>
        <section>
          <Testimonials />
        </section>
        <section>
          <Directors />
        </section>
        {/* <section>
          <FrontPageContent />
        </section> */}
      </Layout>

    )
    }
  />
);
export default IndexPage;
