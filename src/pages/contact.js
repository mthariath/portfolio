import React from 'react'
import { Link } from 'gatsby'

import {Layout} from '../components/Layout'

const ContactPage = ( props ) => (
  <Layout location={props.location}>
    <h1>Contact me!</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default ContactPage
