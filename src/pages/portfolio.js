import React from "react";
import { StaticQuery, graphql } from "gatsby";

import { ArticleGrid, Layout } from "../components/Layout";
import { PortfolioPageListing } from "../components/Elements";

const PortfolioPage = props => {
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
                excerpt(pruneLength: 50)
                html
                id
                frontmatter {
                  date
                  path
                  title
                  client
                  technology
                  scope
                  image {
                    childImageSharp {
                      sizes(maxWidth: 800) {
                        ...GatsbyImageSharpSizes
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
        const projects = data.allMarkdownRemark.edges;
        return (
          <Layout location={props.location}>
            <ArticleGrid title="My Work">
              <div
                css={{
                  gridArea: "intro",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                  gridGap: "2rem",
                  alignItems: "center",
                  display: "grid",
                  padding: "0.25rem",
                  gridTemplateColumns: "repeat(auto-fill, minmax(45%, 1fr))",
                  gridAutoRows: "1fr",
                  "@media (max-width: 1024px)": {
                    gridTemplateColumns: "repeat(auto-fill, minmax(90%, 1fr))"
                  },
                  "@media (min-width:1024px) and (max-width: 1800px)": {
                    padding: "1rem"
                  },
                  "@media (min-width: 1800px)": {
                    gridGap: "4rem",
                    padding: "2rem"
                  }
                }}
              >
                {projects.map(({ node }) => (
                  <PortfolioPageListing project={node} key={node.id} />
                ))}
              </div>
            </ArticleGrid>
          </Layout>
        );
      }}
    />
  );
};

export default PortfolioPage;
