import React from "react";
import Img from "gatsby-image";

import { Modal, TitleBox } from "../Elements";
import { Transition, animated, Keyframes, config } from "react-spring";

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
      config: config.fast
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
            gridTemplateRows: "35vh 65vh"
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
              style={{ height: "35vh", width: "calc(35vh*1.618)" }}
            />
          </animated.div>

          <animated.div
            style={{
              opacity: styles.descOpacity,
              transform: styles.descY.interpolate(y => `translateY(${y}px)`)
            }}
          >
            <TitleBox>asdfadsf</TitleBox>
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
