import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';

var ShowHide = React.createClass({
	componentDidMount:function(){
		$('.hidenshow').click(function(){
		$(this).hide(500);
		$('.systemleft').hide(1000);
		$('.showshow2').show(1000);
	})
	$('.showshow2').click(function(){
		$(this).hide(500);
		$('.systemleft').show(1000);
		$('.hidenshow').show(1500);
	})	
	},
	render:function(){
		return (
			<div className=''> 
			              <div className='hidenshow'>
						    <span className='clickhidn'>&lt;</span>
						 </div>
						 						 
						  <div className='showshow2'>
					     	<span className='clickshow2'>&gt;</span>
						 </div>
			
			</div>
		)}
});
export default ShowHide	
