import React from "react";
import PropTypes from "prop-types";
import { ContactModal } from "../Elements";
import { Toggle } from "../Utils";

const ContactToggle = ({ children }) => {
  return (
    <Toggle>
      {({ visible, toggle }) => {
        return (
          <>
            {children(toggle)}
            <ContactModal visible={visible} toggle={toggle} />
          </>
        );
      }}
    </Toggle>
  );
};

ContactToggle.propTypes = {
  children: PropTypes.func.isRequired
};

export { ContactToggle };
