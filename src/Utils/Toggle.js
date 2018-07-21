import React, {Component} from 'react'

class Toggle extends Component {
    state = {
        visible: false
    }

    handleToggle = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        const {children} = this.props;
        return children({
                    visible: this.state.visible,
                    toggle: this.handleToggle
                });
    }
}

export default Toggle 