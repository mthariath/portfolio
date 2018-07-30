import React from "react";
import { ArticleGrid, IconGrid, Layout } from "../components/Layout";
import { Icon, Paragraph, Title, TitleBox } from "../components/Elements";
import classes from "./index.module.css";

const AboutPage = props => {
  return (
    <Layout location={props.location}>
      <ArticleGrid
        transition
        title="I'm Mike!"
        subtitle={<>I love making cool stuff.</>}
      >
        <div className={classes.Intro}>
          <Paragraph>
            I started playing around with websites more than fifteen years ago.
            Remember the days of Geocities and Angelfire? Back then. I drifted
            away from web development during high school and meandered my way
            through various interests, hobbies, and careers until my natural
            inclinations brought me back around recently.
          </Paragraph>
          <Paragraph>
            I'm currently learning my way through the full stack, front to back.
            My skills primarily lie in the front end, but I'm working on
            leveling my skillset everyday.{" "}
          </Paragraph>
          <Paragraph>
            Here's a nifty grid that shows some of my skills:
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
              <Title size={5} underline>
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
              <Title size={5} underline>
                tools
              </Title>
              <IconGrid>
                <Icon caption type="linux" />
                <Icon caption type="terminal" />
                <Icon caption type="git" />
                <Icon caption type="github" />
                <Icon caption type="heroku" />
                <Icon caption type="netlify" />
                <Icon caption type="trello" />
              </IconGrid>
              {/* eslint-disable-next-line  */}
                <Title size = {5} underline>/* todo */</Title>
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
            woodworking and music - I will have some cool projects to share soon
            enough. I also enjoy cooking very much, though mostly for others
            more than myself.
          </Paragraph>
          <Paragraph>
            Professionally, I am currently freelancing while building up my
            skills to prepare for the right opportunity. Ideally, I would like
            to join a developer-oriented team and use my skills to create
            large-scale applications.
          </Paragraph>
          <Paragraph>
            I'm always looking for cool projects to contribute to. Please don't
            hesitate to reach out if there's anything I can help with.
          </Paragraph>
          <Paragraph>-Mike</Paragraph>
        </div>
      </ArticleGrid>
    </Layout>
  );
};

export default AboutPage;
