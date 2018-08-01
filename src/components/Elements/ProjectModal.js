import React from "react";
import Img from "gatsby-image";
import rehypeReact from "rehype-react";
import { animated, Keyframes, config } from "react-spring";

import { Modal, Title, TitleBox, Icon, Button, Chip } from "../Elements";
import { FlavorContext, flavors } from "../Utils";
import { IconGrid } from "../Layout";

const scroll = e => {
  const el = e.nativeEvent.srcElement;
  console.log(el.scrollTop / Math.abs(el.clientHeight - el.scrollHeight));
};

const renderAst = new rehypeReact({
  createElement: React.createElement
}).Compiler;

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
      <FlavorContext.Consumer>
        {flavor => {
          return (
            <Modal toggle={toggle} styles={styles}>
              <div
                css={{
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gridTemplateRows: "35vh 60vh",
                  gridGap: "1vw",
                  padding: "2vw"
                }}
              >
                <animated.div
                  style={{
                    opacity: styles.opacity,
                    zIndex: 100,
                    transform: styles.imgY.interpolate(
                      y => `translateY(${y}px)`
                    ),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <animated.div
                    css={{
                      position: "fixed",
                      top: ".5rem",
                      right: "0.5rem",
                      zIndex: "1000"
                    }}
                    style={{ opacity: styles.descOpacity }}
                  >
                    <Button Large Shadow>
                      [close]
                    </Button>
                  </animated.div>
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
                    transform: styles.descY.interpolate(
                      y => `translateY(${y}px)`
                    )
                  }}
                >
                  <div
                    css={{
                      background: flavors[flavor].bg,
                      boxShadow: "0px 0px 100px 0px rgba(0,0,0,0.2)",
                      padding: "3vw",
                      boxSizing: "border-box"
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <TitleBox small>
                      <div
                        css={{
                          display: "flex",
                          flexDirection: "row",
                          "@media(max-width: 1024px)": {
                            flexDirection: "column"
                          }
                        }}
                      >
                        <div css={{ flex: "1" }}>
                          <Title size={5} sans>
                            {title}
                          </Title>
                          <Title size={6} sans>
                            {client}
                          </Title>
                          {project.frontmatter.scope.map(scope => (
                            <Chip margin key={scope}>
                              {scope}
                            </Chip>
                          ))}
                        </div>
                        <div css={{ flex: "1" }}>
                          <TitleBox grid small border title="tech">
                            {technology.map(tech => (
                              <Icon type={tech} caption key={tech} />
                            ))}
                          </TitleBox>
                        </div>
                      </div>
                    </TitleBox>
                    {/* <div dangerouslySetInnerHTML={{ __html: mainText }} /> */}
                    {renderAst(project.htmlAst)}
                  </div>
                </animated.div>
              </div>
            </Modal>
          );
        }}
      </FlavorContext.Consumer>
    );
  };

  return (
    <ImgContainer native state={visible ? "open" : "close"}>
      {visible && ModalContent}
    </ImgContainer>
  );
};

export { ProjectModal };
