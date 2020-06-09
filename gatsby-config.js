/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  plugins: [
    // {
    //   resolve: `gatsby-source-prismic`,
    //   options: {
    //     repositoryName: `lndstrm`,
    //     accessToken: `${process.env.API_KEY}`,
    //     schemas: {
    //       post: require("./src/schemas/post.json"),
    //     },
    //     // linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-124494829-2",
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "lndstrm",
    //     short_name: "lndstrm",
    //     start_url: "/",
    //     background_color: "#ffffff",
    //     theme_color: "#ffffff",
    //     // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
    //     // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
    //     display: "standalone",
    //     icon: "/static/android-chrome-192x192.png", // This path is relative to the root of the site.
    //     // An optional attribute which provides support for CORS check.
    //     // If you do not provide a crossOrigin option, it will skip CORS for manifest.
    //     // Any invalid keyword or empty string defaults to `anonymous`
    //     // crossOrigin: `use-credentials`,
    //   },
    // },

  ],
  siteMetadata: {
    siteUrl: `https://lndstrm.se/`,
    description: `Per is a software engineer enthusiastic about user oriented web applications and data science.`,
  },
}
