import React, {Component} from 'react'
import LayoutGrid from '../LayoutGrid/LayoutGrid'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'
import Background from '../Background/Background'
import {FlavorContext} from '../../Utils/FlavorContext'


class Page extends Component {
    render ( ) {
        let color='';
        // if(this.props.location === '/')
        color = this.props.location === '/' ? 'teal' 
                : this.props.location.includes('portfolio') ? 'lavender'
                :  this.props.location.includes('blog') ? 'lavender'
                :  this.props.location.includes('about') ? 'lavender'
                :  this.props.location.includes('contact') ? 'lavender' : 'teal';
        return (
            <FlavorContext.Provider value={color}>
                <LayoutGrid location={this.props.location}>
                    <Background />
                    <Logo />
                    <Nav location = {this.props.location} />
                    <div style={{gridArea: 'main'}} className = {this.props.mainClass}>
                        {this.props.children}
                    </div>
                </LayoutGrid>
            </FlavorContext.Provider>
        )
    }
}

export default Page;