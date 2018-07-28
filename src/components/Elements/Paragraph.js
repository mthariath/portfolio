import React from 'react'
import classes from './Paragraph.module.css'

const Paragraph = ( {children, Small} ) => {
    const classList = [classes.Paragraph, Small && classes.Small]
    return (
        <p className={classList.join(' ')}>
            {children}
        </p>
        
    )
}

export {Paragraph};