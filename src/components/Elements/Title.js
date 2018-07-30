import React from "react";
import PropTypes from "prop-types";
import classes from "./Title.module.css";
import { FlavorContext, flavors } from "../Utils";

const Title = props => {
  return (
    <FlavorContext.Consumer>
      {flavor => {
        const css = {
          "&::after": {
            background: props.color
              ? flavors[props.color].button
              : flavors[flavor].button
          }
        };
        const classList = [
          props.underline && classes.Underline,
          props.sans && classes.Sans
        ];

        switch (props.size) {
          case 1:
            classList.push(classes.Title1);
            return (
              <h1 css={css} className={classList.join(" ")}>
                {props.children}
              </h1>
            );
          case 2:
            classList.push(classes.Title2);
            return (
              <h2 css={css} className={classList.join(" ")}>
                {props.children}
              </h2>
            );
          case 3:
            classList.push(classes.Title3);
            return (
              <h3 css={css} className={classList.join(" ")}>
                {props.children}
              </h3>
            );
          case 4:
            classList.push(classes.Title4);
            return (
              <h4 css={css} className={classList.join(" ")}>
                {props.children}
              </h4>
            );
          case 5:
            classList.push(classes.Title5);
            return (
              <h5 css={css} className={classList.join(" ")}>
                {props.children}
              </h5>
            );
          case 6:
            classList.push(classes.Title6);
            return (
              <h6 css={css} className={classList.join(" ")}>
                {props.children}
              </h6>
            );
          default:
            classList.push(classes.Title3);
            return (
              <h3 css={css} className={classList.join(" ")}>
                {props.children}
              </h3>
            );
        }
      }}
    </FlavorContext.Consumer>
  );
};

Title.propTypes = {
  color: PropTypes.bool,
  underline: PropTypes.bool,
  sans: PropTypes.bool,
  size: PropTypes.number,
  children: PropTypes.node.isRequired
};

export { Title };
