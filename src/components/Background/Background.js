import React, {Component} from 'react'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'


class Background extends Component {
    render ( ) {
        return (
            <FlavorContext.Consumer>
            {flavor=>{
                const css = {
                    background: flavors[flavor].bg,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1

                }
                return (
                    <div css={css}></div>
                )
            }}
        </FlavorContext.Consumer>
        )
        
        
    }
}

export default Background;