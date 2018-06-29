import React, {Component} from 'react'
import LayoutGrid from '../LayoutGrid/LayoutGrid'
import Nav from '../Nav/Nav'
import Logo from '../Logo/Logo'
import Background from '../Background/Background'
import {FlavorContext, flavors} from '../../Utils/FlavorContext'


class Page extends Component {
    render ( ) {
        return (
            <FlavorContext.Provider value={this.props.color}>
                <LayoutGrid>
                    <Background />
                    <Logo />
                    <Nav />
                    <div style={{gridArea: 'main'}}>
                        {this.props.children}
                    </div>
                </LayoutGrid>
            </FlavorContext.Provider>
        )
    }
}

export default Page;