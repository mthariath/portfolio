import React from "react";
import { ArticleGrid, IconGrid, Layout } from "../components/Layout";
import {
  Icon,
  Paragraph,
  Title,
  TitleBox,
  ContactModal,
  ContactToggle
} from "../components/Elements";

import { Toggle } from "../components/Utils";
const AboutPage = props => {
  return (
    <Layout location={props.location}>
      <ArticleGrid
        transition
        title="I'm Mike!"
        subtitle={<>I love making awesome products.</>}
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
            I started making websites more than fifteen years ago, in the days
            of Geocities and Angelfire. I enjoyed it very much until academic
            and professional responsibilities pulled me away.
          </Paragraph>
          <Paragraph>
            After school, I worked for a few years until I suddenly found myself
            in my 20s staying up every night studying web development. That's
            when I realized that I should embrace my natural inclinations
            instead of fighting them.
          </Paragraph>
          <Paragraph>
            These days I'm currently living in Chicago and freelancing while
            honing my skills on the full stack, front to back. I would like to
            join a developer-oriented team and use my skills to create
            world-changing applications.
          </Paragraph>
          <Paragraph>
            My skills primarily lie in the front end, but I'm leveling my
            skillset everyday. Here's a nifty grid that shows some of my skills:
          </Paragraph>

          <TitleBox>
            <div
              css={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Title padding="1.5rem 0 0" size={5} underline>
                skills
              </Title>

              <IconGrid>
                <Icon caption type="html" />
                <Icon caption type="css" />
                <Icon caption type="javascript" />
                <Icon caption type="node" />
                <Icon caption type="npm" />
                <Icon caption type="sass" />
                <Icon caption type="react" />
                <Icon caption type="gulp" />
                <Icon caption type="mongo" />
                <Icon caption type="gatsby" />
                <Icon caption type="graphql" />
                <Icon caption type="googleanalytics" />
                <Icon caption type="photoshop" />
                <Icon caption type="indesign" />
                <Icon caption type="illustrator" />
              </IconGrid>
              <Title padding="1.5rem 0 0" size={5} underline>
                tools
              </Title>
              <IconGrid>
                <Icon caption type="linux" />
                <Icon caption type="terminal" />
                <Icon caption type="git" />
                <Icon caption type="github" />
                <Icon caption type="heroku" />
                <Icon caption type="netlify" />
                <Icon caption type="slack" />
                <Icon caption type="trello" />
              </IconGrid>
              {/* eslint-disable-next-line  */}
                <Title padding="1.5rem 0 0" size = {5} underline>/* todo */</Title>
              <IconGrid>
                <Icon caption type="python" />
                <Icon caption type="webpack" />
                <Icon caption type="docker" />
                <Icon caption type="firebase" />
                <Icon caption type="amazon" />
                <Icon caption type="vue" />
                <Icon caption type="ruby" />
                <Icon caption type="php" />
              </IconGrid>
            </div>
          </TitleBox>
          <Paragraph>
            Outside of the realm of 1's and 0's, I have a deep passion for
            woodworking and music&mdash;I will share some work soon enough. I
            also enjoy cooking and recently caught the horticulture bug.
          </Paragraph>
          <Paragraph>
            I'm always looking for cool projects to contribute to. Please don't
            hesitate to{" "}
            <ContactToggle>
              {toggle => (
                <a style={{ cursor: "pointer" }} onClick={toggle}>
                  reach out
                </a>
              )}
            </ContactToggle>{" "}
            if there's something I can help with.
          </Paragraph>
          <Paragraph>-Mike</Paragraph>
        </div>
      </ArticleGrid>
    </Layout>
  );
};

export default AboutPage;
