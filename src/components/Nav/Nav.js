import React from 'react';
import classes from './Nav.module.css';
import Button from '../Button/Button';

const Nav = ( props ) => (
    <ul className={classes.Nav}>
        <li className={classes.NavItem}><Button to='/' color='teal' Active={ props.location === '/' ? true : null } Large={true}>Home</Button></li>
        <li className={classes.NavItem}><Button to='/portfolio' color='lavender' Active={ props.location.includes('portfolio') ? true : null } Large={true}>Portfolio</Button></li>
        <li className={classes.NavItem}><Button to='/blog/' color='orange' Active={ props.location.includes('blog') ? true : null } Large={true}>Blog</Button></li>
        <li className={classes.NavItem}><Button to='/about/' color='cherry' Active={ props.location === '/about/' ? true : null } Large={true}>About</Button></li>
        <li className={classes.NavItem}><Button to='/contact/' color='teal' Active={ props.location === '/contact/' ? true : null } Large={true}>Contact</Button></li>
    </ul>
)

export default Nav;