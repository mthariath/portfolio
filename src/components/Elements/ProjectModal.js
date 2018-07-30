import React from "react";
import Img from "gatsby-image";
import { Transition, animated, Keyframes, config } from "react-spring";

import { Modal, TitleBox } from "../Elements";

const ImgContainer = Keyframes.Transition({
  open: [
    {
      delay: 0,
      to: {
        opacity: 1,
        imgY: "0",
        descY: "-150",
        descOpacity: 0
      },
      config: config.wobbly
    },
    {
      delay: 0,
      to: {
        opacity: 1,
        imgY: "0",
        descY: "0",
        descOpacity: 1
      }
    }
  ],
  close: [
    {
      delay: 0,
      to: {
        descY: "-150",
        descOpacity: 0
      },
      config: config.wobbly
    },
    {
      delay: 0,
      to: {
        opacity: 0,
        pointerEvents: "none",
        imgY: "150",
        descY: "-150",
        descOpacity: 0
      }
    }
  ]
});

const ProjectModal = ({ visible, toggle, project }) => {
  const ModalContent = styles => {
    return (
      <Modal toggle={toggle} styles={styles}>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "35vh 65vh",
            position: "relative",
            gridGap: "2vw",
            padding: "2vw"
          }}
        >
          <animated.div
            style={{
              opacity: styles.opacity,
              zIndex: 100,
              transform: styles.imgY.interpolate(y => `translateY(${y}px)`),
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={e => e.stopPropagation()}
          >
            <Img
              sizes={{
                ...project.frontmatter.image.childImageSharp.sizes,
                aspectRatio: 1.618 / 1
              }}
              style={{
                height: "35vh",
                width: "calc(35vh*1.618)",
                maxWidth: "96vw"
              }}
            />
          </animated.div>

          <animated.div
            css={{
              padding: "0vw",
              boxSizing: "border-box"
            }}
            style={{
              opacity: styles.descOpacity,
              transform: styles.descY.interpolate(y => `translateY(${y}px)`)
            }}
          >
            <div
              css={{
                background: "rgba(255, 255, 255, 1)",
                padding: "3vw",
                boxSizing: "border-box"
              }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </div>
          </animated.div>
        </div>
      </Modal>
    );
  };

  return (
    <ImgContainer native state={visible ? "open" : "close"}>
      {visible && ModalContent}
    </ImgContainer>
  );
};

export { ProjectModal };
