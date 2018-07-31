import React from "react";
import PropTypes from "prop-types";
import { Title } from "../Elements";
import { FlavorContext, flavors } from "../Utils";

import { IconGrid } from "../Layout";

const TitleBox = props => (
  <FlavorContext.Consumer>
    {flavor => {
      const css = {
        boxShadow: props.border
          ? "none"
          : props.small
            ? "0px 0px 50px 0px rgba(0,0,0,0.2)"
            : "0px 0px 100px 0px rgba(0,0,0,0.2)",
        display: "flex",
        backgroundColor: props.shaded
          ? flavors[flavor].fade
          : "rgba(255, 255, 255, 0.85)",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: props.small ? "1rem 2rem" : "2rem 3rem",
        margin: props.border ? "1rem 0" : "4rem 6vw",
        "@media (max-width: 1024px)": {
          padding: props.small ? "0rem" : "0.5rem"
        }
      };

      const innerCss = { padding: "1rem 1rem", alignSelf: "stretch" };
      return (
        <div css={css}>
          {props.title && (
            <Title size={6} underline>
              {props.title}
            </Title>
          )}

          <div css={innerCss}>
            {props.grid ? (
              <IconGrid flex>{props.children}</IconGrid>
            ) : (
              props.children
            )}
          </div>
        </div>
      );
    }}
  </FlavorContext.Consumer>
);

TitleBox.propTypes = {
  grid: PropTypes.bool,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  small: PropTypes.bool,
  border: PropTypes.bool
};

export { TitleBox };
