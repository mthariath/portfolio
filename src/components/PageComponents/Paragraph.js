import React from 'react'
import classes from './Paragraph.module.css'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'

const Paragraph = ( {children} ) => {
    return (
        <FlavorContext.Consumer>
            {flavor =>{
                const css ={
                    '&::selection, & *::selection': {
                        background: flavors[flavor].main,
                        color: flavors[flavor].bold
                    }
                }
                return (
                    <p css={css} className={classes.Paragraph}>
                        {children}
                    </p>
                )
            }}
        </FlavorContext.Consumer>
        
    )
}

export default Paragraph;