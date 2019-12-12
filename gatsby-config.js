function mapProjectsToCategories({ entities }) {
  const genres = entities.filter(e => e.__type === 'wordpress__wp_project_categories');

  return entities.map((e) => {
    if (e.__type === 'wordpress__wp_project') {
      const hasGenres = e.genres && Array.isArray(e.genres) && e.genres.length;
      // Replace genres with links to their nodes.
      if (hasGenres) {
        e.genres___NODE = e.genres.map(
          c => genres.find(gObj => c === gObj.wordpress_id).id,
        );
        delete e.genres;
      }
    }
    return e;
  });
}


module.exports = {
  siteMetadata: {
    title: 'Nicci Topping Casting',
    description: `
      Nicci Topping CDA, CSA is one of Europe's leading casting directors  
    `,
    siteUrl: 'https:/casting.niccitopping.com',
    image: 'https://lengstorf.com/images/jason-lengstorf.jpg',
    author: {
      name: 'Nicci Topping',
      minibio: `
      Nicci Topping CDA, CSA is one of Europe's leading casting directors  
      `,
    },
    organization: {
      name: 'Nicci Topping Casting',
      url: 'https:/casting.niccitopping.com',
      logo: 'https:/casting.niccitopping.com/android-chrome-512x512.png',
    },
    social: {
      twitter: '@niccitopping',
      fbAppID: '',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/slider`,
        name: 'slider',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/categoryheaders`,
        name: 'categoryheaders',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/testimonials`,
        name: 'testimonials',
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'ntc1.vivotest.co.uk',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: false,
        // The protocol. This can be http or https.
        protocol: 'http',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: true,
        auth: {},
        searchAndReplaceContentUrls: {
          sourceUrl: 'http://ntc1.vivotest.co.uk',
          replacementUrl: 'https://casting.niccitopping.com',
        },
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        normalizer: mapProjectsToCategories, // WTF is this again?

      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: 'https://casting.niccitopping.com/',
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/sitemap.xml',
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ['/projects/page/*', '/tags/*', '/author/*','/blog/*','/blog/', `https:/casting.niccitopping.com/indexold/` ],// eslint-disable-line
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) => allSitePage.edges.map(edge => ({
          url: site.siteMetadata.siteUrl + edge.node.path,
          changefreq: 'daily',
          priority: 0.7,
        })),
      },
    },
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      // Removes unused css rules
      resolve: 'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: false,
        whitelist: ['about-head', 'about-image', 'about-body', 'about-wrapper', 'about-bullet'],
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins

    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
