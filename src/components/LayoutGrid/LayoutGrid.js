import React from 'react';
import classes from './LayoutGrid.module.css';





function LayoutGrid(props) { 
	return (
	<div className={classes.Grid}> 
		{props.children}
	</div>
	)
};

export default LayoutGrid;