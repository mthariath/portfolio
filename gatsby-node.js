/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

//  const path = require("path");

//  exports.createPages = ({ graphql, boundActionCreators }) => {
//    const { createPage } = boundActionCreators
//    return new Promise((resolve, reject) => {
//      const projectTemplate = path.resolve(`src/components/ProjectPage/ProjectPage.js`)
//      // Query for markdown nodes to use in creating pages.
//      resolve(
//        graphql(
//          `
//         {
//             allMarkdownRemark(
//                 sort: { order: DESC, fields: [frontmatter___date] }
//                 limit: 1000
//             ) {
//                 edges {
//                 node {
//                     excerpt(pruneLength: 250)
//                     html
//                     id
//                     frontmatter {
//                     date
//                     path
//                     title
//                     technology
//                     scope
//                     }
//                 }
//                 }
//             }
//         }
//      `
//        ).then(result => {
//          if (result.errors) {
//            reject(result.errors)
//          }

//          // Create project pages.
//          result.data.allMarkdownRemark.edges.forEach(edge => {
//              createPage({
//                path: `projects${edge.node.frontmatter.path}`, // required
//                component: projectTemplate,
//                context: {
//                 id: edge.node.id
//                },
//              })
//          })

//          return
//        })
//      )
//    })
//  }
