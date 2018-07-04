import React from 'react';
import {FlavorContext, flavors} from '../../Utils/FlavorContext'
import ReactTransitionGroup from 'react-addons-transition-group'

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

const Stripes = ( props ) => {
    return (
        <FlavorContext.Consumer>
            {flavor => {
                const colors = [];
                for(const colorKey in flavors[flavor]){
                    colors.push(flavors[flavor][colorKey]);
                }
                const css = {
                    transition: 'all 0.3s cubic-bezier(.82,.22,.44,1.52)'
                }
                let cssStyles = colors.map(color=> ({...css, fill: color}));






                return (
                    <ReactTransitionGroup component={FirstChild}>
                        <div style={{
                            position: 'absolute',
                            margin: '0',
                            width: '100%',
                            height: '100%',
                            top: '0',
                            left: '0'
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{isolation: 'isolate'}} viewBox="0 0 1280 800" width="100%" height="100%">
                                <defs>
                                    <clipPath id="_clipPath_9JHGqTrrZ8G9m82yBsBhy6Kyp3HVFCFZ">
                                        <rect width="100vw" height="100vh"/>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#_clipPath_9JHGqTrrZ8G9m82yBsBhy6Kyp3HVFCFZ)" >
                                <g id="Rect1">
                                    <rect x="550.179" y="86.16" width="795.744" height="45.973" transform="matrix(0.902,0.432,-0.578,0.832,156.306,-391.544)" fill="rgb(0,0,0)"/></g>
                                    <g id="Rect2"><rect x="600.749" y="52.16" width="795.744" height="45.973" transform="matrix(0.902,0.432,-0.578,0.832,841.618,-419.129)" fill="rgb(0,0,0)"/></g>
                                    <g id="Rect3"><rect x="642.891" y="10.16" width="795.744" height="45.973" transform="matrix(0.902,0.432,-0.578,0.832,821.475,-444.416)" fill="rgb(0,0,0)"/></g>
                                    <g id="Rect4"><rect x="691.054" y="-27.84" width="795.744" height="45.973" transform="matrix(0.902,0.432,-0.578,0.832,804.238,-471.633)" fill="rgb(0,0,0)"/></g>
                                    <g id="Rect5"><rect x="756.073" y="-58.84" width="795.744" height="45.973" transform="matrix(0.902,0.432,-0.578,0.832,792.705,-504.96)" fill="rgb(0,0,0)"/></g>
                                </g>
                            </svg>
                        </div>
                    </ReactTransitionGroup>
                )
            }}
        
        </FlavorContext.Consumer>
    )
}

export default Stripes;