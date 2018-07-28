import React from 'react'
import PropTypes from 'prop-types'
import {Title} from '../Elements'
import {IconGrid} from '../Layout'

const TitleBox = ( props ) => {
    const css = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        boxShadow: '0px 0px 100px 0px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 3rem', 
        margin: '4rem 6vw',
        '@media (max-width: 1024px)': {
            padding: '0.5rem'
        }
    }

    const innerCss ={padding: '2rem 1rem', alignSelf: 'stretch'};
    return (
        <div css={css}>
            {props.title && <Title size={6} underline>{props.title}</Title>}
            
            <div css={innerCss}>
                {props.grid ? <IconGrid flex>{props.children}</IconGrid> : props.children}
            </div>
        </div>
    )
}

TitleBox.propTypes = {
    grid: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node.isRequired
}

export {TitleBox};