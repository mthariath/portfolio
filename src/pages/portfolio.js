import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

// const PortfolioPage = ( props ) => (

// )

const PortfolioPage = (props) => {
  // displays an object of the query data in console
  // simply access what you need using a map function
  // data.allFile.edges.map()
  console.log(props.data)
  const {data} = props;
  return (
    <Layout location={props.location}>
      <div>
        <h1 style={{ display: 'inline-block', borderBottom: '1px solid' }}>
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={'/portfolio'+node.fields.slug}
              
            >
              <h3 style={{ marginBottom: '4px' }}>
                {node.frontmatter.title}{" "}
                <span style={{ color: "#BBB" }}>— {node.frontmatter.date}</span>
              </h3>
            </Link>
              <p>{node.excerpt}</p>
          </div>
            ))}
      </div>
    </Layout>
  )
}

export default PortfolioPage


export const query = graphql`
  query IndexQuery {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
        totalCount
      edges {
        node {
      id
          frontmatter {
        title
            date(formatString: "DD MMMM, YYYY")
    }
          fields {
        slug
      }
      excerpt
    }
  }
}
}
`;