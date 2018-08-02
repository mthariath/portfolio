import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { Transition, animated } from "react-spring";
import { FlavorContext, flavors } from "../Utils";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    if (typeof document !== `undefined`) {
      this.el = document.createElement("div");
    }
  }
  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    const modalRoot = document.getElementById("modal-root");
    document.body.style.overflow = "hidden";
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    const modalRoot = document.getElementById("modal-root");
    document.body.style.overflow = "auto";
    modalRoot.removeChild(this.el);
  }

  render() {
    const Backdrop = ({ children, toggle }) => (
      <FlavorContext.Consumer>
        {flavor => {
          return (
            <animated.div
              onClick={toggle}
              onKeyDown={toggle}
              tabIndex="0"
              css={{
                "& a": {
                  color: flavors[flavor].pale
                },
                "& a::after": {
                  background: flavors[flavor].pale
                },
                "& a:hover": {
                  color: flavors[flavor].fade
                },
                "& a:hover::after": {
                  background: flavors[flavor].fade
                },
                "& *::selection": {
                  background: flavors[flavor].main,
                  color: flavors[flavor].bold
                }
              }}
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                width: "100vw",
                height: "100vh",
                background: this.props.styles.opacity.interpolate(
                  o => `rgba(0, 0, 0, ${o / 3})`
                ),
                pointerEvents: this.props.styles.pointerEvents
              }}
            >
              <div>{children}</div>
            </animated.div>
          );
        }}
      </FlavorContext.Consumer>
    );

    return ReactDOM.createPortal(
      <Backdrop style={{ color: "white" }} toggle={this.props.toggle}>
        {this.props.children}
      </Backdrop>,
      this.el
    );
  }
}
Modal.propTypes = {
  styles: PropTypes.object.isRequired,
  toggle: PropTypes.func.isRequired
};

export { Modal };
