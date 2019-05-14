import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import AllWorkOrder from './AllWorkOrder';
import OvertimeWorkOrder from './OvertimeWorkOrder';
import DissatisfiedWorkOrder from './DissatisfiedWorkOrder';

var SingleClass = React.createClass({
			getInitialState:function(){
					return{
						page:'OvertimeWorkOrder'
					}
					},
			  render: function() {
			  		var page = this.state.page;
					var content = [];
					 switch(page){
					 	case 'AllWorkOrder':
					 	content.push(<AllWorkOrder key='AllWorkOrder'/>)
					 	break;
					 	case 'OvertimeWorkOrder':
					 	content.push(<OvertimeWorkOrder key='OvertimeWorkOrder' />)
					 	break;
					 	case 'DissatisfiedWorkOrder':
					 	content.push(<DissatisfiedWorkOrder key='DissatisfiedWorkOrder'/>)
					 	break;
					   }					 
			    return (
			    		<div className ='Single-class' id='leandTab'>
								<ul className='Single-class-top'>
								 	<li className='AllWorkOrder' onClick={this.toggle.bind(this,'AllWorkOrder')}>
										 		<p className='AllWorkOrdertxt'>150</p>
										 		<span>所有工单</span> 	
								 	</li>
								 	<li className='overtimeorder' onClick={this.toggle.bind(this,'OvertimeWorkOrder')}>
									 	 
										 		<p className='overtimeordertxt'>20</p>
										 		<span>超时工单</span>
								 	</li>
								 	<li className='DissatisfiedWorkOrder' onClick={this.toggle.bind(this,'DissatisfiedWorkOrder')}>
									 
										 		<p className='DissatisfiedWorkOrdertxt'>150</p>
										 		<span>不满意工单</span>
								 	</li>
								</ul>
								
								<div className='Single-class-txt'>{content}</div>
						  </div>			
			  )},			  		  
			  toggle:function(page){
				this.setState({
					page:page
				})
			},
			  
});
export default SingleClass
