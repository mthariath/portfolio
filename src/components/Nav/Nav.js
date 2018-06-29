import React from 'react';
import classes from './Nav.module.css';
import Button from '../Button/Button';
import {Link} from 'gatsby'

const Nav = ( props ) => (
    <ul className={classes.Nav}>
        <li className={classes.NavItem}><Link to='/'><Button color='teal' Large={true}>Home</Button></Link></li>
        <li className={classes.NavItem}><Link to='/portfolio/'><Button color='lavender' Large={true}>Portfolio</Button></Link></li>
        <li className={classes.NavItem}><Link to='/blog/'><Button color='teal' Large={true}>Blog</Button></Link></li>
        <li className={classes.NavItem}><Link to='/about/'><Button color='teal' Large={true}>About</Button></Link></li>
        <li className={classes.NavItem}><Link to='/contact/'><Button color='teal' Large={true}>Contact</Button></Link></li>

    </ul>
)

export default Nav;