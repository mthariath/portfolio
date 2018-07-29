import React from "react";
import PropTypes from "prop-types";
import { Title } from "../Elements";

const TitleBlock = ({ title, subtitle }) => {
  return (
    <>
      <Title size={1}>{title}</Title>
      {subtitle && <Title size={5}>{subtitle}</Title>}
    </>
  );
};

TitleBlock.propTypes = {
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node
};
export { TitleBlock };
