import React from 'react';
import Helmet from 'react-helmet';


const SEO = ({ seo }) => (
  <Helmet
    meta={[
      {
        name: 'description',
        content: seo.id,
      },
    ]}
  //  title={seo.yoast_wpseo_title}
  />

);


export default SEO;
