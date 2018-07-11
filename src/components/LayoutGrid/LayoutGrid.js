import React from 'react';
import classes from './LayoutGrid.module.css';
import {FlavorContext, flavors} from '../../Utils/FlavorContext'

  

function LayoutGrid(props) { 
	return (
		<FlavorContext.Consumer>
			{flavor => {
				const css = {
					'& *::selection': {
						background: flavors[flavor].main,
						color: flavors[flavor].bold
					}
				}
				return (
					<div css={css} className={classes.Grid}> 
						{props.children}
					</div>
				)
			}}
		</FlavorContext.Consumer>
	)
};

export default LayoutGrid;