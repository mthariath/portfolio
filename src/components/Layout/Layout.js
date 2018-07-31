import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import favicon from "../../favicon.png";

import { Page } from "../Elements";
import "./Layout.css";

const Layout = ({ children, location }) => (
  <Page location={location.pathname}>
    <Helmet>
      <title>Mike Thariath</title>
      <meta name="description" content="Sample" />
      <meta name="keywords" content="sample, something" />
      <link rel="shortcut icon" type="image/png" href={favicon} />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossorigin="anonymous"
      />
    </Helmet>
    {children}
  </Page>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
};

export { Layout };
