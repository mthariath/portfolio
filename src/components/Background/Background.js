import React, {Component} from 'react'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'
// import Stripes from './Stripes'

class Background extends Component {
    render ( ) {
        return (
            <FlavorContext.Consumer>
            {flavor=>{
                const colors = [];
                for(const colorKey in flavors[flavor]){
                    colors.push(flavors[flavor][colorKey]);
                }

                const css = {
                    backgroundColor: flavors[flavor].bg,
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundSize: '150vw',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 0',
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='isolation:isolate' viewBox='0 0 1280 800' width='1280' height='800'%3E%3Cdefs%3E%3CclipPath id='_clipPath_9JHGqTrrZ8G9m82yBsBhy6Kyp3HVFCFZ'%3E%3Crect width='1280' height='800'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg clip-path='url%28%23_clipPath_9JHGqTrrZ8G9m82yBsBhy6Kyp3HVFCFZ%29'%3E%3Cg id='Rect1'%3E%3Crect x='550.179' y='86.16' width='795.744' height='39' transform='matrix%280.902,0.432,-0.578,0.832,156.306,-391.544%29' opacity='0.2' fill='${colors[2]}'/%3E%3C/g%3E%3Cg id='Rect2'%3E%3Crect x='600.749' y='52.16' width='795.744' height='44' transform='matrix%280.902,0.432,-0.578,0.832,141.618,-419.129%29' opacity='0.3' fill='${colors[2]}'/%3E%3C/g%3E%3Cg id='Rect3'%3E%3Crect x='642.891' y='10.16' width='795.744' height='42' transform='matrix%280.902,0.432,-0.578,0.832,121.475,-444.416%29' opacity='0.45' fill='${colors[2]}'/%3E%3C/g%3E%3Cg id='Rect4'%3E%3Crect x='691.054' y='-27.84' width='795.744' height='51' transform='matrix%280.902,0.432,-0.578,0.832,104.238,-471.633%29' opacity='0.4' fill='${colors[3]}'/%3E%3C/g%3E%3Cg id='Rect5'%3E%3Crect x='756.073' y='-58.84' width='795.744' height='54' transform='matrix%280.902,0.432,-0.578,0.832,92.705,-504.96%29' opacity='0.65' fill='${colors[0]}'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    

                }
                return (
                    <div css={css}>
                        {/* <Stripes /> */}
                    </div>
                )
            }}
        </FlavorContext.Consumer>
        )
        
        
    }
}

export default Background;