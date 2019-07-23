import React from 'react';
// import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import MainHero from '../components/MainHero';
import FrontPageContent from '../components/FrontPageContent';
import FrontPageVideo from '../components/FrontPageVideo';


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
    content: 'PULL THIS FROM site.siteMetadata.author,', // TO CHANGE
  },
  {
    name: 'twitter:title',
    content: 'twitter_title',
  },
  {
    name: 'twitter:description',
    content: 'twitter_description',
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
          style={{ backgroundColor: '#d5cfe1', paddingTop: '150px' }}
        >
          <FrontPageVideo />
        </section>
        <section>
          <FrontPageContent />
        </section>
      </Layout>

    )
    }
  />
);
export default IndexPage;
