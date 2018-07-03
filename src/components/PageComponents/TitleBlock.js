import React from 'react'
import classes from './TitleBlock.module.css'

const TitleBlock = ( {title, subtitle} ) => {
    return (
        <>
            <p className={classes.Title}>{title}</p>
            <p className={classes.Subtitle}>{subtitle}</p>
        </>
    )
}

export default TitleBlock