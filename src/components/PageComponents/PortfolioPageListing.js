import React from 'react'
import Img from 'gatsby-image'
import {Fade} from 'react-reveal'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'
import classes from './PortfolioPageListing.module.css'
import Button from '../Button/Button'
import Chip from '../Chip'
import Toggle from '../../Utils/Toggle'

const PortfolioPageListing = ({project})=>{
    return (
        <FlavorContext.Consumer>
            {flavor => {
                const descCss = {
                    background: flavors[flavor].bg
                }
                return (
                <Fade bottom>
                    <article tabIndex="0" className={classes.Wrapper}>
                        <Img sizes={{...project.frontmatter.image.childImageSharp.sizes, aspectRatio: 1.618/1}} />
                        <div css={descCss} className={classes.DescriptionBox}>
                            <h3 css={{textTransform: 'uppercase', fontSize: '1rem'}}>{project.frontmatter.title}</h3>
                            <p css={{fontSize: '.9rem'}}>{project.excerpt}</p>
                            <div css={{
                                margin: '0.3rem 0'
                            }}>
                                {project.frontmatter.scope.map(scope => <Chip margin key={scope}>{scope}</Chip>)}
                            </div>
                            <Toggle>
                                {({visible, toggle}) => (
                                    <div css={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                        {visible && 'hiii'}
                                        <Button onClick={toggle}>Read More</Button>

                                    </div>
                                )}
                            </Toggle>
                        </div >
                    </article>
                </Fade>
                )

            }}
        </FlavorContext.Consumer>
    )
}

export default PortfolioPageListing