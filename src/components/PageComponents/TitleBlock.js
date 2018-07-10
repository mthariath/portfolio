import React from 'react'
import classes from './TitleBlock.module.css'
import Title from './Title'

const TitleBlock = ( {title, subtitle} ) => {
    return (
        <>
            <Title size='1'>{title}</Title>
            <Title size='5'>{subtitle}</Title>
        </>
    )
}

export default TitleBlock