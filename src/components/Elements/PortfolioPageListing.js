import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import {Fade} from 'react-reveal'
import {FlavorContext, flavors} from '../Utils'
import classes from './PortfolioPageListing.module.css'
import {Button, Modal, Paragraph, Title, Chip} from '../Elements'
import {Toggle} from '../Utils'
import { Transition } from 'react-spring'








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
                            <Title sans size={6}>{project.frontmatter.title}</Title>
                            <Paragraph Small>{project.excerpt}</Paragraph>
                            <div css={{
                                margin: '0.3rem 0'
                            }}>
                                {project.frontmatter.scope.map(scope => <Chip margin key={scope}>{scope}</Chip>)}
                            </div>
                            <Toggle>
                                {({visible, toggle}) => {

                                    const Hello = (styles) => {
                                        return (<Modal toggle={toggle} styles={styles}>{styles.opacity}</Modal>)
                                    }            
                                                            
                                    return (
                                        <div css={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                            
                                            <Button onClick={toggle}>Read More</Button>
                                            <Transition 
                                            from={{ backdropOpacity: 0 }}
                                            enter={{ backdropOpacity: .3}} 
                                            leave={{ backdropOpacity: 0, pointerEvents: 'none' }}
                                            >
                                                {visible && Hello}
                                                </Transition>
                                        </div>
                                    )
                                }}
                            </Toggle>
                        </div >
                    </article>
                </Fade>
                )

            }}
        </FlavorContext.Consumer>
    )
}

PortfolioPageListing.propTypes = {
    project: PropTypes.object.isRequired
}

export {PortfolioPageListing}