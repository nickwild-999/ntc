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
        This bio is shown at the bottom of each blog post. It supports
        <strong>custom HTML</strong> if you’re into that sort of thing.
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
    categories: [
      {
        slug: 'test',
        name: 'Test Category',
      },
    ],
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
        siteUrl: 'https://infallible-mcnulty-753e25.netlify.com/',
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
        // Purge only the main css file
        purgeOnly: ['/all.sass'],
      },
    }, // must be after other CSS plugins

    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
