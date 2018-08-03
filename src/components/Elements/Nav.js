import React from "react";
import PropTypes from "prop-types";
import classes from "./Nav.module.css";
import { Button, ContactToggle } from "../Elements";

const Nav = props => (
  <ul className={classes.Nav}>
    <li className={classes.NavItem}>
      <Button to="/" Active={props.location === "/"} Large={true}>
        Home
      </Button>
    </li>
    <li className={classes.NavItem}>
      <Button
        to="/portfolio"
        Active={props.location.includes("portfolio")}
        Large={true}
      >
        Portfolio
      </Button>
    </li>
    {/* <li className={classes.NavItem}><Button to='/blog/' Active={ props.location.includes('blog') } Large={true}>Blog</Button></li> */}
    <li className={classes.NavItem}>
      <Button to="/about/" Active={props.location === "/about/"} Large={true}>
        About
      </Button>
    </li>
    <li className={classes.NavItem}>
      <ContactToggle>
        {toggle => (
          <Button
            onClick={toggle}
            Active={props.location === "/contact/"}
            Large={true}
          >
            Contact
          </Button>
        )}
      </ContactToggle>
    </li>
  </ul>
);

Nav.propTypes = {
  location: PropTypes.string.isRequired
};

export { Nav };
