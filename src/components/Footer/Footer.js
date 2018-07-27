import React from 'react';
import {FlavorContext, flavors} from '../../Utils/FlavorContext'
import Logo from '../Logo/Logo'
import {Stripes} from '../Elements'
// import classes from './Footer.module.css';
// import Button from '../Button/Button';
// import {Link} from 'gatsby'

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

export default Footer;