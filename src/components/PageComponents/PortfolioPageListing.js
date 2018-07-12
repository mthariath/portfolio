import React from 'react'
import Img from 'gatsby-image'
import {Fade} from 'react-reveal'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'
import Title from './Title'
import classes from './PortfolioPageListing.module.css'

const PortfolioPageListing = ({project})=>{
    return (
        <FlavorContext.Consumer>
            {flavor => {
                const descCss = {
                    background: flavors[flavor].bg
                }
                return (
                <Fade bottom>
                    <article className={classes.Wrapper}>
                        <Img sizes={project.frontmatter.image.childImageSharp.sizes} />
                        <div css={descCss} className={classes.DescriptionBox}>
                            <Title size='6'>{project.frontmatter.title}</Title>
                            <Title size='6'>{project.frontmatter.title}</Title>
                            <Title size='6'>{project.frontmatter.title}</Title>
                        </div >
                    </article>
                </Fade>
                )

            }}
        </FlavorContext.Consumer>
    )
}

export default PortfolioPageListing