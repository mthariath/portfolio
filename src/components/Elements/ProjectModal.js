import React from "react";
import Img from "gatsby-image";
import { Transition, animated, Keyframes, config } from "react-spring";

import { Modal, Title, TitleBox, Paragraph, Icon } from "../Elements";
import { IconGrid } from "../Layout";

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
  const { title, client, scope, technology } = project.frontmatter;
  const mainText = project.html;
  const ModalContent = styles => {
    return (
      <Modal toggle={toggle} styles={styles}>
        <div
          css={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "35vh 60vh",
            position: "relative",
            gridGap: "3vw",
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
          >
            <div onClick={e => e.stopPropagation()}>
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
            </div>
          </animated.div>

          <animated.div
            css={{
              padding: "0vw",
              boxSizing: "border-box",
              overflowY: "auto"
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
              <TitleBox>
                <Title size={5} sans>
                  {title}
                </Title>
                <IconGrid flex>
                  {technology.map(tech => <Icon type={tech} key={tech} />)}
                </IconGrid>
              </TitleBox>
              <div dangerouslySetInnerHTML={{ __html: mainText }} />
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
