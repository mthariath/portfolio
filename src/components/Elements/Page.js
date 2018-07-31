import React, { Component } from "react";
import PropTypes from "prop-types";
import { Background, Footer, Logo, Nav } from "../Elements";
import { LayoutGrid } from "../Layout";
import { Fade } from "react-reveal";

import { FlavorContext } from "../Utils";

class Page extends Component {
  render() {
    let color = "";
    // if(this.props.location === '/')
    color =
      this.props.location === "/"
        ? "teal"
        : this.props.location.includes("portfolio")
          ? "lavender"
          : this.props.location.includes("blog")
            ? "orange"
            : this.props.location.includes("about")
              ? "cherry"
              : this.props.location.includes("contact")
                ? "orange"
                : "teal";
    return (
      <FlavorContext.Provider value={color}>
        <Fade>
          <LayoutGrid>
            <Background />
            <Logo />
            <Nav location={this.props.location} />
            <div style={{ gridArea: "main", zIndex: "100" }}>
              {this.props.children}
            </div>
            <Footer />
          </LayoutGrid>
        </Fade>
      </FlavorContext.Provider>
    );
  }
}

Page.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export { Page };
