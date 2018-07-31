import React from "react";
import PropTypes from "prop-types";

const IconGrid = ({ flex, children }) => {
  const css = flex
    ? {
        alignSelf: "stretch",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0",
        "& *": {
          margin: ".15rem",
          flex: "1"
        }
      }
    : {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(4.1rem, 1fr))",
        gridAutoRows: "1fr",
        gridColumnGap: "2rem",
        gridRowGap: "2rem",
        alignSelf: "stretch",
        padding: "2rem 1rem 2rem",
        "@media(max-width: 1024px)": {
          gridColumnGap: "1rem",
          gridRowGap: "1rem"
        }
      };

  return <div css={css}>{children}</div>;
};

IconGrid.propTypes = {
  flex: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export { IconGrid };
