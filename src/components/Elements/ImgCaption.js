import React from "react";
import PropTypes from "prop-types";

const ImgCaption = props => {
  const css = {
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "100",
    fontSize: "1rem",
    padding: "0.5rem",
    opacity: "0.65"
  };
  return <div css={css}>{props.children}</div>;
};

ImgCaption.propTypes = {
  children: PropTypes.node.isRequired
};

export { ImgCaption };
