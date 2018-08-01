module.exports = {
  siteMetadata: {
    title: "Michael Thariath"
  },
  plugins: [
    "gatsby-plugin-glamor",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "projects"
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- end -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590
            }
          }
        ]
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp"
  ]
};
