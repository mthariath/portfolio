import React from 'react';
import {FlavorContext, flavors} from '../../Utils/FlavorContext'
import classes from './Footer.module.css';
import Button from '../Button/Button';
import {Link} from 'gatsby'

const Footer = ( props ) => (
    <FlavorContext.Consumer>
    {flavor => {
        return (
            <footer style={{
                gridArea: 'footer',
                backgroundColor: flavors[flavor].pale
            }}>
                Hi there!!!!
            </footer>
        )
    }}
    </FlavorContext.Consumer>
)

export default Footer;