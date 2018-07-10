import React from 'react'
import classes from './ArticleGrid.module.css'
import TitleBlock from './TitleBlock'
import { Fade } from 'react-reveal'

const ArticleGrid = ( {children, title, subtitle} ) => {
    return (
        <Fade right cascade>
            <div className={classes.Grid}>
                
                <div style={{gridArea: 'title'}}>
                    <TitleBlock title={title} subtitle={subtitle}/>
                </div>
                
            
                {children}
            </div>
        </Fade>
    )
}

export default ArticleGrid;