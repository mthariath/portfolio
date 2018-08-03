import React from "react";
import { Link } from "gatsby";
import { ArticleGrid, Layout } from "../components/Layout";
import {
  Button,
  Paragraph,
  TitleBox,
  ContactToggle
} from "../components/Elements";

const IndexPage = props => {
  return (
    <Layout location={props.location}>
      <ArticleGrid
        transition
        title="Hi There!"
        subtitle={
          <>
            my name is <strong>Mike Thariath</strong>.
          </>
        }
      >
        <div
          css={{
            "@media (min-width: 1800px)": {
              gridArea: "intro",
              transform: "translateX(-5rem) translateY(-5rem)"
            }
          }}
        >
          <Paragraph>
            I'm a web developer, product designer,and all around good guy. I
            love coming up with ideas that make people's lives better.
          </Paragraph>
          <Paragraph>
            While you're here, please feel free to look at{" "}
            <Link to="/portfolio/">my work</Link> or read about{" "}
            <Link to="/about/">my life and my skills</Link>.
          </Paragraph>
          <Paragraph>
            If you're working on something awesome&nbsp;
            <Paragraph Span Small>
              (that I can help with,)
            </Paragraph>
            &nbsp;I'd love to{" "}
            <ContactToggle>
              {toggle => (
                <a style={{ cursor: "pointer" }} onClick={toggle}>
                  hear from you
                </a>
              )}
            </ContactToggle>
            !
          </Paragraph>

          <TitleBox title="connect with me" grid>
            <Button Icon link="https://github.com/mthariath" blank>
              <i className="fab fa-github" />
            </Button>
            <Button Icon link="https://linkedin.com/in/thariath" blank>
              <i className="fab fa-linkedin" />
            </Button>
            <Button Icon link="mailto:mike@thariath.com">
              <i className="far fa-envelope" />
            </Button>
            <ContactToggle>
              {toggle => (
                <Button Icon onClick={toggle}>
                  <i className="fas fa-phone" />
                </Button>
              )}
            </ContactToggle>

            {/* <Button Icon link='#' blank><i class="fab fa-github" /></Button> */}
          </TitleBox>
        </div>
      </ArticleGrid>
    </Layout>
  );
};

export default IndexPage;
