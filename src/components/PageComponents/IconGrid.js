import React from 'react'


const IconGrid = ({flex, children}) => {
    const css = flex ? {
        alignSelf: 'stretch',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        padding: '2rem 1rem',
        '& *': {
            margin: '.5rem'
        }   
    } : {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(4.1rem, 1fr))',
        gridAutoRows: '1fr',
        gridColumnGap: '2rem',
        gridRowGap: '3rem',
        alignSelf: 'stretch',
        padding: '2rem 1rem 3rem',
        '@media(max-width: 1024px)': {
            gridColumnGap: '1rem',
            gridRowGap: '2rem'
        }

    }

    return (
            <div css={css}>
                {children}
            </div>
    )
}

export default IconGrid