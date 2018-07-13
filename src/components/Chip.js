import React from 'react'
import {FlavorContext, flavors} from '../Utils/FlavorContext'

const Chip = ({children, margin}) => {
    return (
        <FlavorContext.Consumer>
            {flavor => {
                const css = {
                    background: flavors[flavor].fade,
                    fontSize: '0.72rem',
                    fontWeight: '600',
                    textAlign: 'center',
                    display: 'inline-block',
                    padding: '.1rem .3rem',
                    borderRadius: '2px',
                    margin: margin ? '0.3rem 0.5rem 0 0' : '0',
                    textTransform: 'uppercase'
                }
                return (<div css={css}>{children}</div>);
            }}
        </FlavorContext.Consumer>
    )
    
}

export default Chip