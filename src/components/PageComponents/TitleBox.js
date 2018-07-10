import React from 'react'
import Title from './Title'

const TitleBox = ( props ) => {
    const css = {
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        boxShadow: '0px 0px 100px 0px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem', 
        margin: '4rem 6vw'
    }
    return (
        <div css={css}>
            <Title size='6' underline>{props.title}</Title>
            <div css={{padding: '1rem'}}>
                {props.children}
            </div>
        </div>
    )
}

export default TitleBox;