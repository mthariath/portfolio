import React from 'react';
import classes from './Button.module.css';
import {FlavorContext, flavors} from '../../Utils/FlavorContext'


const Button = ( props ) => {

    // const classArr = [];
    const variants = ['Large', 'Block', 'Small', 'Icon', 'Active'];
    let buttonClasses = [classes.Button, 'hello']
    buttonClasses = buttonClasses.concat(variants.filter(variant => props[variant]).map(variant => classes[variant]));

    return (
    <FlavorContext.Consumer>
    {flavor => {
        const css = {
            '&::after': {
                background: props.color ? flavors[props.color].button : flavors[flavor].button
            }
        }

        return (
        <div css={css} className={buttonClasses.join(' ')}>
            {props.children}<br />
        </div>
        )
    }}
    
    </FlavorContext.Consumer>


    );
}
export default Button;