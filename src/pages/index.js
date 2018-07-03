import React from 'react'
import { Link } from 'gatsby'
import ArticleGrid from '../components/PageComponents/ArticleGrid'
import Paragraph from '../components/PageComponents/Paragraph'

import classes from './index.module.css'

import Layout from '../components/layout'

const IndexPage = ( props ) => {
  
  return (
    <Layout location={props.location}>
      <ArticleGrid title='Hi There!' subtitle ={<>my name is <strong>Mike</strong>.</>}>
        <div className={classes.Intro}>
            <Paragraph>I'm a web developer, product designer,and all around good guy. I love solving problems and learning new things.</Paragraph>
            <Paragraph>Feel free to check out my work, read about my crazy life, or read my crazy thoughts. </Paragraph>
            <Paragraph>If you're working on something awesome <span className="small-text">(that I can help with,) </span>I'd love to hear from you!</Paragraph>
            <p className={classes.Signature}>Mike</p>
        </div>
      </ArticleGrid>
    </Layout>
  )
}
  

export default IndexPage
