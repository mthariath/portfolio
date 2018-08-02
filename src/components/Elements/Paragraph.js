import React from "react";
import PropTypes from "prop-types";
import classes from "./Paragraph.module.css";

const Paragraph = ({ children, Small }) => {
  const classList = [classes.Paragraph, Small && classes.Small];
  return <p className={classList.join(" ")}>{children}</p>;
};

Paragraph.propTypes = {
  Small: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export { Paragraph };
