import React from "react";
import PropTypes from "prop-types";
import classes from "./LayoutGrid.module.css";
import { FlavorContext, flavors } from "../Utils";

function LayoutGrid(props) {
  return (
    <FlavorContext.Consumer>
      {flavor => {
        const css = {
          "& a": {
            color: flavors[flavor].pale
          },
          "& a::after": {
            background: flavors[flavor].pale
          },
          "& a:hover": {
            color: flavors[flavor].button
          },
          "& a:hover::after": {
            background: flavors[flavor].fade
          },
          "& *::selection": {
            background: flavors[flavor].main,
            color: flavors[flavor].bold
          }
        };
        return (
          <div css={css} className={classes.Grid}>
            {props.children}
          </div>
        );
      }}
    </FlavorContext.Consumer>
  );
}

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired
};

export { LayoutGrid };
