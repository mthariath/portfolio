import React from 'react'
import classes from './Paragraph.module.css'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'

const Paragraph = ( {children, Small} ) => {
    const classList = [classes.Paragraph, Small && classes.Small]
    return (
        <FlavorContext.Consumer>
            {flavor =>{

                return (
                    <p className={classList.join(' ')}>
                        {children}
                    </p>
                )
            }}
        </FlavorContext.Consumer>
        
    )
}

export default Paragraph;