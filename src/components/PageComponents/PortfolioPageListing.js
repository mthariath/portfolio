import React from 'react'
import Img from 'gatsby-image'
import {Fade} from 'react-reveal'

const PortfolioPageListing = ({project})=>{
    console.log(project.frontmatter.image.childImageSharp.sizes)
    const wrapperStyles = {
        maxWidth: '600px',
        minWidth: '60%',
        margin: '3rem',
        '& details': {
            display: 'none'
        },
        '@media (max-width: 800px)': {
            minWidth: '90%',
            margin: '2rem'
        }
    }


    return (
    <Fade bottom>
        <article css={wrapperStyles}>
            <Img sizes={project.frontmatter.image.childImageSharp.sizes} />
            <details>{project.frontmatter.title}</details>
        </article>
    </Fade>
    )
}

export default PortfolioPageListing