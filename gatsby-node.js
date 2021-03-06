const _ = require('lodash');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const { paginate } = require('gatsby-awesome-pagination');

const getOnlyPublished = edges => _.filter(edges, ({ node }) => node.status === 'publish');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  // Create Pages
  return graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
            status
          }
        }
      }
    }
  `)
    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const pageTemplate = path.resolve('./src/templates/page.js');

      // Only publish pages with a `status === 'publish'` in production. This
      // excludes drafts, future posts, etc. They will appear in development,
      // but not in a production build.

      const allPages = result.data.allWordpressPage.edges;
      const pages = process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allPages)
        : allPages;

      // Call `createPage()` once per WordPress page
      _.each(pages, ({ node: page }) => {
        createPage({
          path: `/${page.slug}/`,
          component: pageTemplate,
          context: {
            id: page.id,
          },
        });
      });
    })

    // create posts
    .then(() => graphql(`
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
              }
            }
          }
        }
      `))
    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const postTemplate = path.resolve('./src/templates/post.js');
      const blogTemplate = path.resolve('./src/templates/blog.js');

      // In production builds, filter for only published posts.
      const allPosts = result.data.allWordpressPost.edges;
      const posts = process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allPosts)
        : allPosts;

      // Iterate over the array of posts
      _.each(posts, ({ node: post }) => {
        // Create the Gatsby page for this WordPress post
        createPage({
          path: `blog/${post.slug}/`,
          component: postTemplate,
          context: {
            id: post.id,
          },
        });
      });

      // Create a paginated blog, e.g., /, /page/2, /page/3
      // paginate({
      //   createPage,
      //   items: posts,
      //   itemsPerPage: 10,
      //   pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/blog/' : '/blog/page'),
      //   component: blogTemplate,
      // });
    })

    // projects now
    .then(() => graphql(`
{
  allWordpressWpProject {
    edges {
      node {
        id
        slug
        status
      }
    }
  }
}
`))
    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const projectTemplate = path.resolve('./src/templates/project.js');
      const projectListTemplate = path.resolve('./src/templates/projectarchive.js');

      // In production builds, filter for only published posts.
      const allProjects = result.data.allWordpressWpProject.edges;
      const projects = process.env.NODE_ENV === 'production'
        ? getOnlyPublished(allProjects)
        : allProjects;

      // Iterate over the array of projects
      _.each(projects, ({ node: project }) => {
        // Create the Gatsby page for each WordPress project
        createPage({
          path: `/project/${project.slug}/`,
          component: projectTemplate,
          context: {
            id: project.id,
          },
        });
      });


      // Create a paginated list, e.g., /, /page/2, /page/3
      paginate({
        createPage,
        items: projects,
        itemsPerPage: 10,
        pathPrefix: ({ pageNumber }) => (pageNumber === 0 ? '/projects' : '/projects/page'),
        component: projectListTemplate,
      });
    })


    // Create Individual Category Pages
    .then(() => graphql(`
        {
          allWordpressCategory(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `))
    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const categoriesTemplate = path.resolve('./src/templates/category.js');

      // Create a Gatsby page for each WordPress Category
      _.each(result.data.allWordpressCategory.edges, ({ node: cat }) => {
        createPage({
          path: `/categories/${cat.slug}/`,
          component: categoriesTemplate,
          context: {
            name: cat.name,
            slug: cat.slug,
          },
        });
      });
    })

    // Create Individual Project Category Pages
    .then(() => graphql(`
        {
          allWordpressWpProjectCategories(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `))
    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const projectCategoriesTemplate = path.resolve('./src/templates/projectcategory.js');

      // Create a Gatsby page for each WordPress Project Category
      _.each(result.data.allWordpressWpProjectCategories.edges, ({ node: cat }) => {
        createPage({
          path: `/categories/${cat.slug}/`,
          component: projectCategoriesTemplate,
          context: {
            name: cat.name,
            slug: cat.slug,
          },
        });
      });
    })

    // Create Tag Pages
    .then(() => graphql(`
        {
          allWordpressTag(filter: { count: { gt: 0 } }) {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      `))

    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const tagsTemplate = path.resolve('./src/templates/tag.js');

      // Create a Gatsby page for each WordPress tag
      _.each(result.data.allWordpressTag.edges, ({ node: tag }) => {
        createPage({
          path: `/tags/${tag.slug}/`,
          component: tagsTemplate,
          context: {
            name: tag.name,
            slug: tag.slug,
          },
        });
      });
    })

    // Create User Pages
    .then(() => graphql(`
        {
          allWordpressWpUsers {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `))
    .then((result) => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()));
        return Promise.reject(result.errors);
      }

      const authorTemplate = path.resolve('./src/templates/author.js');

      _.each(result.data.allWordpressWpUsers.edges, ({ node: author }) => {
        createPage({
          path: `/author/${author.slug}`,
          component: authorTemplate,
          context: {
            id: author.id,
          },
        });
      });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    
  type AcfVideoUrl {
    video_url:String
  }
  
  type wordpress__acf_project implements Node {
    acf: AcfVideoUrl
  }  

  
  type wordpress__wp_project implements Node {
    fimg_url:String
  }
  `;
  createTypes(typeDefs);
};
