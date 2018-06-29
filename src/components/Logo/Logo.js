import React from 'react';

const Logo = ( props ) => {
    return (
        <div style={{gridArea: 'logo', margin: '.2rem'}}>
            <svg xmlns="http://www.w3.org/2000/svg"  style={{isolation: 'isolate'}} viewBox="0 0 544.535 881.575" height="100%">
                <g id="logo">
                    <rect x="0" y="0" width="544.535" height="881.575" transform="matrix(1,0,0,1,0,0)" fill="rgb(0,0,0)"/>
                    <path d=" M 432.856 69.827 L 111.679 69.827 L 273.364 254.733 L 432.856 69.827 Z " fill="rgb(130,213,196)"/>
                    <path d=" M 73.919 114.834 L 73.919 440.787 L 470.617 440.787 L 470.617 114.834 L 273.352 340.216 L 73.919 114.834 Z " fill="rgb(206,239,218)" vectorEffect="non-scaling-stroke" strokeWidth="1" stroke="rgb(0,0,0)" strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
                    <rect x="73.919" y="516.771" width="165.061" height="294.977" transform="matrix(1,0,0,1,0,0)" fill="rgb(169,221,201)"/>
                    <rect x="305.556" y="516.771" width="165.061" height="294.977" transform="matrix(1,0,0,1,0,0)" fill="rgb(123,255,227)"/>
                </g>
            </svg>
        </div>
        
    )
}

export default Logo;