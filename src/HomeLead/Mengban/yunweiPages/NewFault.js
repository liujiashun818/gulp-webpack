import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';

import FaultNew from './newFaultpag/faultNew';
import FaultHanding from './newFaultpag/faultHanding';
import FaultEvaluation from './newFaultpag/faultEvaluation';
import FaultFlow from './newFaultpag/faultFlow';
import './NewFault.css';
var NewFault= React.createClass({
	getInitialState:function(){
					return{
						page:'faultNew'
					}
					},
	componentDidMount:function(){
				$('.topLeftNewFault>li').click(function(){
					$(this).css({'color':'#349ef0','borderBottom':'4px solid #349ef0'}).siblings('li').css({'color':'#999999','borderBottom':'none'})
				})
	},
  render: function() {
  	 var page = this.state.page;
				 var content = [];
				 switch(page){
				 	case 'faultNew':
				 	content.push(<FaultNew key='faultNew' />)
				 	break;
				 	case 'faultHanding':
				 	content.push(<FaultHanding key='faultHanding' />)
				 	break;
				 	case 'faultEvaluation':
				 	content.push(<FaultEvaluation key='faultEvaluation'/>)
				 	break;
				 	case 'faultFlow':
				 	content.push(<FaultFlow key='faultFlow' />)
				 	break;
				 };
    return (
     <div className='FaultnewBj'>
   		<div className="NewFault">
   			<div className='NewFaultCenter'>
		   		<header className=''>
		   		            <ul className='topLeftNewFault'>
							     <li className='topLeftNewFaultClick'  onClick={this.toggle.bind(this,'faultNew')}>故障新建</li>
								 <li className=''  onClick={this.toggle.bind(this,'faultHanding')}>故障处理</li>
								 <li className=''  onClick={this.toggle.bind(this,'faultEvaluation')}>故障评价</li>
								 <li className=''  onClick={this.toggle.bind(this,'faultFlow')}>故障流转</li>
							</ul>
							 <ul className='topRightNewFault'>
								 <li>
								   <button  type="button" className='printNewFault'>打印</button>
								 </li>
								 <li>
								   <button type="button" className='sureNewFault'>保存</button>
								 </li>
							 </ul>
		   		</header>
   			<section className=''>{content}</section>
		 </div>
		</div>
		</div>
  )},
  	toggle:function(page){
				this.setState({
					page:page
				})
			},
});
export default NewFault
