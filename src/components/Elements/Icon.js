import React from 'react'
import {Chip} from './Chip'

const Icon = ({children, type}) => {
    const icons = [
        'icon-linux', 
        'icon-trello', 
        'icon-gulp', 
        'icon-adobephotoshop', 
        'icon-adobeindesign', 
        'icon-adobeillustrator', 
        'icon-googleanalytics', 
        'icon-graphql', 
        'icon-vuejs', 
        'icon-webpack', 
        'icon-python', 
        'icon-git', 
        'icon-github', 
        'icon-react', 
        'icon-sass', 
        'icon-html5', 
        'icon-css3', 
        'icon-javascript', 
        'icon-nodejs', 
        'icon-terminal',
        'icon-netlify',
        'icon-heroku',
        'icon-amazon',
        'icon-docker',
        'icon-stripe',
        'icon-firebase',
        'icon-mongodb',
        'icon-php',
        'icon-ruby',
        'icon-npm',
        'icon-gatsby'
    ]

    const iconClass = icons.find(icon=>(icon.includes(type)));
    const wrapperCss = {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '3rem',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s cubic-bezier(.82,.22,.44,1.52)',
        '&:hover': {
            transform: 'scale(1.05)'
        },
        '@media (max-width: 1024px)': {
            fontSize: '2rem'
        }
    }
    return (
        <div css={wrapperCss}>
            <span className={iconClass} />
            {children && <Chip>{children}</Chip>}
        </div>
    )
}



export {Icon}