module.exports = {
  siteMetadata: {
    title: 'Michael Thariath',
  },
  plugins: ['gatsby-plugin-glamor', 'gatsby-plugin-react-helmet', `gatsby-transformer-remark`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `portfolio`,
      path: `${__dirname}/src/portfolio/`,
    },
  },]
}
