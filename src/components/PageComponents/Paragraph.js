import React from 'react'
import classes from './Paragraph.module.css'

const Paragraph = ( {children} ) => {
    return (
        <p className={classes.Paragraph}>
            {children}
        </p>
    )
}

export default Paragraph;