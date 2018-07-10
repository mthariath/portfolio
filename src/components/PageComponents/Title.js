import React from 'react'
import classes from './Title.module.css'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'

const Title = ( props ) => {
    return (
    <FlavorContext.Consumer>
    {flavor => {
        const css = {
            '&::after': {
                background: props.color ? flavors[props.color].button : flavors[flavor].button
            }
        }
        switch (props.size){
            case '1':
                return (<h1 css={css} className={[classes.Title1, props.underline ? classes.Underline : null].join(' ')}>{props.children}</h1>);
            case '2':
                return (<h2 css={css} className={[classes.Title2, props.underline ? classes.Underline : null].join(' ')}>{props.children}</h2>);            
            case '3':
                return (<h3 css={css} className={[classes.Title3, props.underline ? classes.Underline : null].join(' ')}>{props.children}</h3>);
            case '4':
                return (<h4 css={css} className={[classes.Title4, props.underline ? classes.Underline : null].join(' ')}>{props.children}</h4>);
            case '5':
                return (<h5 css={css} className={[classes.Title5, props.underline ? classes.Underline : null].join(' ')}>{props.children}</h5>);
            case '6':
                return (<h6 css={css} className={[classes.Title6, props.underline ? classes.Underline : null].join(' ')}>{props.children}</h6>);
            default:
                return (<h3 css={css} className={[classes.Title3, props.underline ? classes.Underline : null].join(' ')}>{props.children}</h3>);
        }
    }}    

    </FlavorContext.Consumer>)
}

export default Title;