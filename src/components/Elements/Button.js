import React from "react";
import PropTypes from "prop-types";
import classes from "./Button.module.css";
import { FlavorContext, flavors } from "../Utils";
import { Link } from "gatsby";

const Button = props => {
  // const classArr = [];
  const variants = ["Large", "Block", "Small", "Icon", "Active"];
  let buttonClasses = [classes.Button];
  buttonClasses = buttonClasses.concat(
    variants.filter(variant => props[variant]).map(variant => classes[variant])
  );

  return (
    <FlavorContext.Consumer>
      {flavor => {
        const css = {
          textShadow:
            props.Shadow &&
            `2px 2px 50px ${
              props.color ? flavors[props.color].button : flavors[flavor].button
            }`,
          "&::after": {
            background: `${
              props.color ? flavors[props.color].button : flavors[flavor].button
            }!important`
          },
          "&:hover::after": {
            background: `${
              props.color ? flavors[props.color].button : flavors[flavor].button
            }!important`
          }
        };
        const buttonProps = {
          css: css,
          className: buttonClasses.join(" "),
          "aria-label": props.ariaLabel && props.ariaLabel
        };
        const button = (
          <button {...buttonProps} onClick={props.onClick}>
            {props.children}
          </button>
        );
        return props.link ? (
          <a
            role="button"
            href={props.link}
            target={props.blank ? "_blank" : "_self"}
            {...buttonProps}
          >
            {props.children}
          </a>
        ) : props.to ? (
          <Link to={props.to} {...buttonProps}>
            {props.children}
          </Link>
        ) : (
          button
        );
      }}
    </FlavorContext.Consumer>
  );
};

Button.propTypes = {
  color: PropTypes.string,
  Large: PropTypes.bool,
  Block: PropTypes.bool,
  Small: PropTypes.bool,
  Icon: PropTypes.bool,
  Active: PropTypes.bool,
  link: PropTypes.string,
  blank: PropTypes.bool,
  onClick: PropTypes.func,
  Shadow: PropTypes.bool,
  ariaLabel: PropTypes.string,
  children: PropTypes.node.isRequired
};

export { Button };
