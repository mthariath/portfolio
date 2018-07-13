import React from 'react'
import {FlavorContext, flavors} from '../Utils/FlavorContext'

const Chip = ({children}) => {
    return (
        <FlavorContext.Consumer>
            {flavor => {
                const css = {
                    background: flavors[flavor].fade,
                    fontSize: '0.72rem',
                    fontWeight: '100',
                    display: 'inline-block',
                    padding: '.1rem .2rem',
                    borderRadius: '2px',
                    margin: '0.3rem 0.5rem 0 0',
                    textTransform: 'uppercase'
                }
                return (<div css={css}>{children}</div>);
            }}
        </FlavorContext.Consumer>
    )
    
}

export default Chip