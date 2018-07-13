module.exports = {
  siteMetadata: {
    title: 'Michael Thariath',
  },
  plugins: [
    'gatsby-plugin-glamor', 
    'gatsby-plugin-react-helmet', 
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/projects`,
        name: "projects",
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-catch-links',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    
  ]
}
