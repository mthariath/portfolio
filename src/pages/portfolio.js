import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import { Fade } from 'react-reveal'


import Layout from '../components/layout'
import PortfolioPageListing from '../components/PageComponents/PortfolioPageListing'
import ArticleGrid from '../components/PageComponents/ArticleGrid'

// const PortfolioPage = ( props ) => (

// )

const PortfolioPage = (props) => {

  return (
    <StaticQuery
        query={graphql`
          query PortfolioPageQuery {
            allMarkdownRemark(
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 1000
            ) {
              edges {
                node {
                  excerpt(pruneLength: 250)
                  html
                  id
                  frontmatter {
                    date
                    path
                    title
                    technology
                    scope
                    image {
                      childImageSharp {
                        sizes(maxWidth: 800) {
                          ...GatsbyImageSharpSizes_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const projects = data.allMarkdownRemark.edges
          return (
          <Layout location={props.location}>
            <ArticleGrid title='My Work'>
                <div css={{
                  gridArea: 'intro',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  '@media (min-width: 1800px)': {
                    
                  }
                }}>
                  {projects.map(({node})=>(<PortfolioPageListing project={node} key={node.id} />))}
                </div>
            </ArticleGrid>
          </Layout>
        )}}
      />
  )
}

export default PortfolioPage


