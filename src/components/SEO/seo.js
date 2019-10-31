import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';


const SEO = ({ seo, videoimage }) => (

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
      const { image: myImage, title, author } = data.site.siteMetadata;
      const myTitle = seo.yoast_wpseo_title || title;
      const myDescription = seo.yoast_wpseo_metadesc;
      const myFacebookTitle = seo.yoast_wpseo_facebook_title || myTitle;
      const myFacebookDesc = seo.yoast_wpseo_facebook_title || myDescription;
      const myThumbnail = (seo.yoast_wpseo_title === 'About - Nicci Topping Casting | CDA | CSA' ? myImage : `https://img.youtube.com/vi/${videoimage.split('=')[1]}/maxresdefault.jpg`);
      const myTwitterTitle = seo.yoast_wpseo_twitter_title || myTitle;


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
              content: myThumbnail,
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
              content: author.name,
            },
            {
              name: 'twitter:title',
              content: myTwitterTitle,
            },
            {
              name: 'twitter:description',
              content: myDescription,
            },
            {
              name: 'twitter:image',
              content: myThumbnail,
            },
          ]}
        />
      );
    }
    }
  />
);


export default SEO;
