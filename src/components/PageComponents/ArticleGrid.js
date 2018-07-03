import React from 'react'
import classes from './ArticleGrid.module.css'
import TitleBlock from './TitleBlock'

const ArticleGrid = ( {children, title, subtitle} ) => {
    return (
        <div className={classes.Grid}>
            <div style={{gridArea: 'title'}}>
                <TitleBlock title={title} subtitle={subtitle}/>
            </div>
            
        
            {children}
        </div>
    )
}

export default ArticleGrid;