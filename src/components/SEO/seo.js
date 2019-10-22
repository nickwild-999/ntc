import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';


const SEO = ({ seo, videoimage }) => (

  // pass the video image in here


  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
            author {
              name
            }
            organization {
              name
              url
              logo
            }
            social {
              twitter
              fbAppID
            }
          }
        }
      }
    `}


    render={(data) => {
      const { image, title } = data.site.siteMetadata;
      const myTitle = seo.yoast_wpseo_title || title;
      const myDescription = seo.yoast_wpseo_metadesc;
      const myFacebookTitle = seo.yoast_wpseo_facebook_title || myTitle;
      const myFacebookDesc = seo.yoast_wpseo_facebook_title || myDescription;

      { console.log(`https://img.youtube.com/vi/${videoimage.split('=')[1]}/maxresdefault.jpg`); }

      return (
        <Helmet
          meta={[
            {
              name: 'description',
              content: myDescription,
            },
            {
              property: 'og:title',
              content: myFacebookTitle,
            },
            {
              property: 'og:description',
              content: myFacebookDesc,
            },
            {
              property: 'og:image',
              content: 'seo.yoast_wpseo_facebook_image.link',
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
        />
      );
    }
    }
  />
);


export default SEO;
