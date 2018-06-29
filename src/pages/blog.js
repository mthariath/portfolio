import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = ( props ) => (
  <Layout location={props.location}>
    <h1>My Bloggg</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default BlogPage
