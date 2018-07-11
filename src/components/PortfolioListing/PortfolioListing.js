import React from "react";
import ArticleGrid from '../PageComponents/ArticleGrid'
import Layout from '..//layout'

export default ({ data, ...props }) => {

    const articleCss = {
        '@media (min-width: 1800px)': {
            gridArea: 'intro',
            transform: 'translateX(-5rem) translateY(-5rem)'
        }
    }
    const post = data.markdownRemark;
    return (
        <Layout location={props.location}>
            <ArticleGrid title={post.frontmatter.title} subtitle ={<>by <strong>Mike Thariath</strong>.</>}>
            <div css={articleCss}>
             <div dangerouslySetInnerHTML={{ __html: post.html }} />

            </div>
            </ArticleGrid>
      </Layout>
    );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;