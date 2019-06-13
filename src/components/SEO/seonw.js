import React from 'react';
import Helmet from 'react-helmet';


const SEO = ({ seo }) => (
  <Helmet
    meta={[
      {
        name: 'description',
        content: seo.yoast_wpseo_metadesc,
      },
      {
        property: 'og:title',
        content: seo.yoast_wpseo_facebook_title,
      },
      {
        property: 'og:description',
        content: seo.yoast_wpseo_facebook_description,
      },
      {
        property: 'og:image',
        content: seo.yoast_wpseo_facebook_image.link,
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
        content: seo.yoast_wpseo_twitter_title,
      },
      {
        name: 'twitter:description',
        content: seo.yoast_wpseo_twitter_description,
      },
    ]}
    title={seo.yoast_wpseo_title}
  />

);


export default SEO;
