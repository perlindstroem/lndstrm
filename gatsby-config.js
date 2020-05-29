/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log('API KEY', process.env.API_KEY)

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `lndstrm`,
        accessToken: `${process.env.API_KEY}`,
        schemas: {
          post: require('./src/schemas/post.json'),
        },
        // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
  ],
}

// module.exports = {}