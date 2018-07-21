import React from 'react';
import classes from './Button.module.css';
import {FlavorContext, flavors} from '../../Utils/FlavorContext'
import {Link} from 'gatsby'


const Button = ( props ) => {

    // const classArr = [];
    const variants = ['Large', 'Block', 'Small', 'Icon', 'Active'];
    let buttonClasses = [classes.Button]
    buttonClasses = buttonClasses.concat(variants.filter(variant => props[variant]).map(variant => classes[variant]));

    return (
    <FlavorContext.Consumer>
    {flavor => {
        const css = {
            '&::after': {
                background: props.color ? flavors[props.color].button : flavors[flavor].button
            }
        }
        const buttonProps = {
            css: css,
            className: buttonClasses.join(' ')
        }
        const button = (
            <button {...buttonProps} onClick={props.onClick}>
                {props.children}
            </button>
        )
        return props.link ? (<a href={props.link} target={props.blank ? '_blank' : '_self'} {...buttonProps}>{props.children}</a>) : 
               props.to ? <Link to={props.to} {...buttonProps}>{props.children}</Link> : button;
    }}
    
    </FlavorContext.Consumer>


    );
}
export default Button;