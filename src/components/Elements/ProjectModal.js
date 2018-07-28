import React from 'react'
import Img from 'gatsby-image'

import {Modal} from '../Elements'
import { Transition, animated, interpolate } from 'react-spring'

const ProjectModal = ( {visible, toggle, project} ) => {
    const Hello = (styles) => {
        return (
            <Modal toggle={toggle} styles={styles}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}>
                    {project.frontmatter.title}
                    <animated.div style={{
                        maxWidth: '1000px',
                        minWidth: '40%',
                        opacity: styles.opacity,
                        transform: styles.imgY.interpolate( y => `translateY(${y}px)`)
                        }}
                        onClick={ e => e.stopPropagation() }
                        >
                    
                        <Img sizes={{...project.frontmatter.image.childImageSharp.sizes, aspectRatio: 1.618/1}} />
                    </animated.div>
                </div>
            </Modal>)
    }

    return (
        <Transition native
        from={{ 
            opacity: 0,
            imgY: '150'
        }}
        enter={{ 
            opacity: 1,
            imgY: '0'
        }} 
        leave={{ 
            opacity: 0, 
            pointerEvents: 'none',
            imgY: '150' 
        }}
        >
            {visible && Hello}
        </Transition>
    )
}

export {ProjectModal}