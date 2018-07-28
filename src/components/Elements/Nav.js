import React from 'react';
import classes from './Nav.module.css';
import {Button} from '../Elements';

const Nav = ( props ) => (
    <ul className={classes.Nav}>
        <li className={classes.NavItem}><Button to='/' colorr='teal' Active={ props.location === '/' ? true : null } Large={true}>Home</Button></li>
        <li className={classes.NavItem}><Button to='/portfolio' colorr='lavender' Active={ props.location.includes('portfolio') ? true : null } Large={true}>Portfolio</Button></li>
        <li className={classes.NavItem}><Button to='/blog/' colorr='orange' Active={ props.location.includes('blog') ? true : null } Large={true}>Blog</Button></li>
        <li className={classes.NavItem}><Button to='/about/' colorr='cherry' Active={ props.location === '/about/' ? true : null } Large={true}>About</Button></li>
        <li className={classes.NavItem}><Button to='/contact/' colorr='teal' Active={ props.location === '/contact/' ? true : null } Large={true}>Contact</Button></li>
    </ul>
)

export {Nav};