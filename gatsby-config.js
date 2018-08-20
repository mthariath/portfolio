module.exports = {
  siteMetadata: {
    title: "Michael Thariath",
    siteUrl: `https://thariath.com`
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
              maxWidth: 900,
              linkImagesToOriginal: false,
              quality: 100
            }
          }
        ]
      }
    },
    "gatsby-plugin-catch-links",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-123373114-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true
      }
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://thariath.com",
        sitemap: "https://thariath.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Mike Thariath",
        short_name: "Thariath",
        start_url: "/",
        background_color: "#F5FFFD",
        theme_color: "#21DECB",
        display: "minimal-ui",
        icon: "static/og_image.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
};
