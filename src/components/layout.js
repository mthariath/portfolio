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
          <Helmet>
            <title>{data.site.siteMetadata.title}</title>
            <meta name='description' content='Sample' />
            <meta name='keywords' content='sample, something'/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
          </Helmet>
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
