import React from 'react'
import {Title} from '../Elements'

const TitleBlock = ( {title, subtitle} ) => {
    return (
        <>
            <Title size='1'>{title}</Title>
            <Title size='5'>{subtitle}</Title>
        </>
    )
}

export {TitleBlock}