import React from 'react';
import classes from './LayoutGrid.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const {enter, enterActive, exitActive, exit} = classes

class TransitionHandler extends React.Component {
	shouldComponentUpdate() {
	  return this.props.location.pathname === window.location.pathname;
	}
  
	render() {
	  return this.props.children;
	}
  }
  

function LayoutGrid(props) { 
	return (
		<TransitionGroup>
			<CSSTransition
			classNames={{enter, enterActive, exit, exitActive}}
			timeout={{ enter: 500, exit: 500 }}
			key={props.location.pathname}
			>
				<TransitionHandler location={props.location}>
					<div className={classes.Grid}> 
						{props.children}
					</div>
				</TransitionHandler>
		</CSSTransition>
	</TransitionGroup>
	)
};

export default LayoutGrid;