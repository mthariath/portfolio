import React from 'react';
import {FlavorContext, flavors} from '../Utils'
import {Stripes, Logo} from '../Elements'


const Footer = ( props ) => (
    <FlavorContext.Consumer>
    {flavor => {
        return (
            <footer style={{
                gridArea: 'footer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: flavors[flavor].pale,
                padding: '3rem',
                marginTop: '2rem',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Stripes flip/>
                <div css={{'@media (max-width: 1024px)': {width: '10vw'}, width: '5vw'}}><Logo /></div>
                <p>&copy;&nbsp;{(new Date()).getFullYear()}</p>
            </footer>
        )
    }}
    </FlavorContext.Consumer>
)

export {Footer};