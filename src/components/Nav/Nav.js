import React from 'react';
import classes from './Nav.module.css';
import Button from '../Button/Button';
import {Link} from 'gatsby'

const Nav = ( props ) => (
    <ul className={classes.Nav}>
        <li className={classes.NavItem}><Link to='/'><Button color='teal' Active={ props.location === '/' ? true : null } Large={true}>Home</Button></Link></li>
        <li className={classes.NavItem}><Link to='/portfolio/'><Button color='lavender' Active={ props.location.includes('portfolio') ? true : null } Large={true}>Portfolio</Button></Link></li>
        <li className={classes.NavItem}><Link to='/blog/'><Button color='orange' Active={ props.location.includes('blog') ? true : null } Large={true}>Blog</Button></Link></li>
        <li className={classes.NavItem}><Link to='/about/'><Button color='cherry' Active={ props.location === '/about/' ? true : null } Large={true}>About</Button></Link></li>
        <li className={classes.NavItem}><Link to='/contact/'><Button color='teal' Active={ props.location === '/contact/' ? true : null } Large={true}>Contact</Button></Link></li>
    </ul>
)

export default Nav;