import React from "react";
import PropTypes from "prop-types";
import classes from "./Paragraph.module.css";

const Paragraph = ({ children, Center, Small, Span }) => {
  const classList = [
    classes.Paragraph,
    Small && classes.Small,
    Center && classes.Center
  ];
  const classNames = classList.join(" ");
  return Span ? (
    <span className={classNames}>{children}</span>
  ) : (
    <p className={classNames}>{children}</p>
  );
};

Paragraph.propTypes = {
  Small: PropTypes.bool,
  Center: PropTypes.bool,
  Span: PropTypes.bool,
  children: PropTypes.node.isRequired
};

export { Paragraph };
