import React from 'react'
import ReactDOM from 'react-dom'




const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // The portal element is inserted in the DOM tree after
    // the Modal's children are mounted, meaning that children
    // will be mounted on a detached DOM node. If a child
    // component requires to be attached to the DOM tree
    // immediately when mounted, for example to measure a
    // DOM node, or uses 'autoFocus' in a descendant, add
    // state to Modal and only render the children when Modal
    // is inserted in the DOM tree.
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }

  render() {
    console.log(`opacity: ${this.props.styles.backdropOpacity}`)
    const Backdrop = ({children, toggle}) => (
        <div onClick={toggle} css={{
            position: 'fixed',
            top: 0,
            left: 0,
            bottom: 0, 
            right: 0,
            width: '100vw',
            height: '100vh',
            background: `rgba(0, 0, 0, ${this.props.styles.backdropOpacity})`,
            pointerEvents: this.props.styles.pointerEvents
        }}
        >
            {children}
        </div>
        
    )

    return ReactDOM.createPortal(
      <Backdrop style={{color: 'white'}}  toggle={this.props.toggle}>asdf</Backdrop>,
      this.el,
    );
  }
}

export {Modal}