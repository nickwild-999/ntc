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
      This is a blog theme. The description will be showed in SEO results on pages
      without their own descriptions.
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
        siteUrl: 'https://casting.niccitopping.com',
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
    // need to add postpurge in here
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
