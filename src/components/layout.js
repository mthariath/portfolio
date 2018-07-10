import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"

import Page from './Page/Page'
import './layout.css'







const Layout = ({ children, color, location, mainClass }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Page location = {location.pathname} mainClass = {mainClass}>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />
          {children} 
        </Page>
      </>
    )}
  />
)






Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
