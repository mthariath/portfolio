import React from "react";
import PropTypes from "prop-types";
import classes from "./ArticleGrid.module.css";
import { TitleBlock } from "../Elements";
import { Fade } from "react-reveal";

const ArticleGrid = ({ children, title, subtitle, transition }) => {
  return (
    <Fade bottom={transition} cascade={transition}>
      <div className={classes.Grid}>
        <div style={{ gridArea: "title" }}>
          <TitleBlock title={title} subtitle={subtitle} />
        </div>

        {children}
      </div>
    </Fade>
  );
};

ArticleGrid.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  transition: PropTypes.bool
};

export { ArticleGrid };
