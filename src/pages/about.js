import React from 'react'
import ArticleGrid from '../components/PageComponents/ArticleGrid'
import Paragraph from '../components/PageComponents/Paragraph'
import TitleBox from '../components/PageComponents/TitleBox'
import Icon from '../components/Icon/Icon'
import classes from './index.module.css'
import Title from '../components/PageComponents/Title'
import IconGrid from '../components/PageComponents/IconGrid'
import Layout from '../components/layout'
import {Fade} from 'react-reveal'

const AboutPage = ( props ) => {
  
  return (
    <Layout location={props.location}>
      <ArticleGrid transition title="I'm Mike!" subtitle ={<>I love making cool stuff.</>}>
        <div className={classes.Intro}>
            <Paragraph>I started playing around with websites more than fifteen years ago.  Remember the days of Geocities and Angelfire?  Back then.  I drifted away from web development during high school and meandered my way through various interests, hobbies, and careers until my natural inclinations brought me back around recently.</Paragraph>
            <Paragraph>I'm currently learning my way through the full stack, front to back.  My skills primarily lie in the front end, but I'm working on leveling my skillset everyday.  </Paragraph>
            <Paragraph>Here's a nifty grid that shows some of my skills:</Paragraph>

            <TitleBox>
              <div css={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Title size='5' underline>skills</Title>
                
                <IconGrid>
                  <Icon type='html'>HTML5</Icon>
                  <Icon type='css'>CSS3</Icon>
                  <Icon type='javascript'>JS</Icon>
                  <Icon type='node'>Node JS</Icon>
                  <Icon type='npm'>NPM</Icon>
                  <Icon type='sass'>SASS</Icon>
                  <Icon type='react'>React</Icon>
                  <Icon type='mongo'>MongoDB</Icon>
                  <Icon type='gatsby'>GatsbyJS</Icon>
                  <Icon type='graphql'>GraphQL</Icon>
                  <Icon type='googleanalytics'>Analytics</Icon>
                  <Icon type='photoshop'>Photoshop</Icon>
                  <Icon type='indesign'>InDesign</Icon>
                  <Icon type='illustrator'>Illustrator</Icon>
                </IconGrid>
                <Title size='5' underline>tools</Title>
                <IconGrid>
                  <Icon type='linux'>Linux</Icon>
                  <Icon type='terminal'>CLI</Icon>
                  <Icon type='git'>Git</Icon>
                  <Icon type='github'>Github</Icon>
                  <Icon type='heroku'>Heroku</Icon>
                  <Icon type='netlify'>Netlify</Icon>
                  <Icon type='trello'>Trello</Icon>
                </IconGrid>
                <Title size='5' underline>/* todo */</Title>
                <IconGrid>
                  <Icon type='python'>Python</Icon>
                  <Icon type='webpack'>Webpack</Icon>
                  <Icon type='docker'>Docker</Icon>
                  <Icon type='firebase'>Firebase</Icon>
                  <Icon type='amazon'>AWS</Icon>
                  <Icon type='vue'>VueJS</Icon>
                  <Icon type='ruby'>Ruby</Icon>
                  <Icon type='php'>PHP</Icon>
                </IconGrid>
                
              </div>

            </TitleBox>
            <Paragraph>Outside of the realm of 1's and 0's, I have a deep passion for woodworking and music.  I also enjoy cooking very much, though mostly for others more than myself.</Paragraph>
            <Paragraph>Professionally, I am currently freelancing while building up my skills to prepare for the right opportunity.  Ideally, I would like to join a developer-oriented team and use my skills to create large-scale applications.</Paragraph>
            <Paragraph>I'm always looking for cool projects to contribute to.  Please don't hesitate to reach out if there's anything I can help with.</Paragraph>
            <Paragraph>-Mike</Paragraph>
        </div>
      </ArticleGrid>
    </Layout>
  )
}
  

export default AboutPage
