import React, {Component} from 'react'
import LayoutGrid from '../LayoutGrid/LayoutGrid'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'
import Background from '../Background/Background'
import Footer from '../Footer/Footer'
import {Fade} from 'react-reveal'

import {FlavorContext} from '../../Utils/FlavorContext'


class Page extends Component {
    render ( ) {
        let color='';
        // if(this.props.location === '/')
        color = this.props.location === '/' ? 'teal' 
                : this.props.location.includes('portfolio') ? 'lavender'
                :  this.props.location.includes('blog') ? 'orange'
                :  this.props.location.includes('about') ? 'cherry'
                :  this.props.location.includes('contact') ? 'lavender' : 'teal';
        return (
            <FlavorContext.Provider value={color}>
                <Fade>
                    <LayoutGrid>
                        <Background />
                        <Logo />
                        <Nav location = {this.props.location} />
                        <div style={{gridArea: 'main', zIndex: '100'}} className = {this.props.mainClass}>
                            {this.props.children}
                        </div>
                        <Footer />
                    </LayoutGrid>
                </Fade>
            </FlavorContext.Provider>
        )
    }
}

export default Page;