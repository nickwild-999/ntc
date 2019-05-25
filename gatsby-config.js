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
    title: 'NTC- Nick Wild',
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
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
        normalizer: mapProjectsToCategories, // WTF is this again?

      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-antd',
    'gatsby-plugin-react-helmet',
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
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
