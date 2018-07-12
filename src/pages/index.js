import React from 'react'
import ArticleGrid from '../components/PageComponents/ArticleGrid'
import Paragraph from '../components/PageComponents/Paragraph'
import TitleBox from '../components/PageComponents/TitleBox'
import Button from '../components/Button/Button'
import classes from './index.module.css'

import Layout from '../components/layout'

const IndexPage = ( props ) => {
  
  return (
    <Layout location={props.location}>
      <ArticleGrid transition title='Hi There!' subtitle ={<>my name is <strong>Mike</strong>.</>}>
        <div className={classes.Intro}>
            <Paragraph>I'm a web developer, product designer,and all around good guy. I love solving problems and learning new things.</Paragraph>
            <Paragraph>Feel free to check out my work, read about my crazy life, or read my crazy thoughts. </Paragraph>
            <Paragraph>If you're working on something awesome <span className="small-text">(that I can help with,) </span>I'd love to hear from you!</Paragraph>

            <TitleBox title='connect with me' grid>
              <Button Icon link='#' blank><i className="fab fa-github" /></Button>
              <Button Icon><i className="fab fa-stack-overflow"></i></Button>
              <Button Icon><i className="fab fa-codepen"></i></Button>
              <Button Icon link='#' blank><i className="far fa-envelope" /></Button>
              <Button Icon link='#' blank><i className="fas fa-phone" /></Button>
              {/* <Button Icon link='#' blank><i class="fab fa-github" /></Button> */}


            </TitleBox>
        </div>
      </ArticleGrid>
    </Layout>
  )
}
  

export default IndexPage
