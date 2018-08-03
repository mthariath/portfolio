import React from "react";
import { animated, Keyframes, config } from "react-spring";

import { TitleBox, Modal, Button, Paragraph } from "../Elements";
import { P } from "glamorous";

const ModalWrapper = Keyframes.Transition({
  open: [
    {
      delay: 0,
      to: {
        opacity: 1,
        contentY: "0",
        descY: "-150",
        descOpacity: 0
      },
      config: config.wobbly
    }
  ],
  close: [
    {
      delay: 0,
      to: {
        opacity: 0,
        pointerEvents: "none",
        contentY: "150",
        descY: "-150",
        descOpacity: 0
      }
    }
  ]
});

const ContactModal = ({ toggle, visible }) => {
  const ModalContent = styles => {
    return (
      <Modal styles={styles} toggle={toggle}>
        <animated.div
          css={{
            position: "fixed",
            top: ".5rem",
            right: "0.5rem",
            zIndex: "1000"
          }}
          style={{ opacity: styles.opacity }}
        >
          <Button Large Shadow>
            [close]
          </Button>
        </animated.div>
        <animated.div
          style={{
            opacity: styles.opacity,
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: styles.contentY.interpolate(y => `translateY(${y}px)`)
          }}
        >
          <TitleBox title="contact me" onClick={e => e.stopPropagation()}>
            <Paragraph Center>
              Interested in working with me?
              <br />
              <Paragraph Span Small>
                Feel free to contact me through any of the methods below.
              </Paragraph>
            </Paragraph>

            <Paragraph Center>
              email: <a href="mailto:mike@thariath.com">mike@thariath.com</a>
              <br />
              phone: <a href="tel:2246232760">224-623-2760</a>
              <br />
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/thariath/" target="_blank">
                linkedin.com/in/thariath/
              </a>
              <br />
              Github:{" "}
              <a href="https://www.github.com/mthariath" target="_blank">
                github.com/mthariath
              </a>
            </Paragraph>
          </TitleBox>
        </animated.div>
      </Modal>
    );
  };
  return (
    <ModalWrapper native state={visible ? "open" : "close"}>
      {visible && ModalContent}
    </ModalWrapper>
  );
};

export { ContactModal };
