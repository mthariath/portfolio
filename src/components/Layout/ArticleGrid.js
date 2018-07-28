import React from 'react'
import classes from './ArticleGrid.module.css'
import {TitleBlock} from '../Elements'
import { Fade } from 'react-reveal'

const ArticleGrid = ( {children, title, subtitle, transition} ) => {
    return (
        <Fade bottom = {transition} cascade={transition}>
            <div className={classes.Grid}>
                
                <div style={{gridArea: 'title'}}>
                    <TitleBlock title={title} subtitle={subtitle}/>
                </div>
                
            
                {children}
            </div>
        </Fade>
    )
}

export {ArticleGrid};