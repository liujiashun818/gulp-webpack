import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import CompletionUnitTopToady from './CompletionUnitTopToady';
import CompletionUnitTopWeek from './CompletionUnitTopWeek';
import CompletionUnitTopMonth from './CompletionUnitTopMonth';

var CompletionUnitTopList = React.createClass({
	getInitialState:function(){
					return{
						page:'CompletionUnitTopToady'
					}
					},
					componentDidMount:function(){
					$('.CompletionUnitTopToady').css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'})
                    $(".CompletionUnitTopToady").click(function(){    
					      $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
					   })
                    $(".CompletionUnitTopWeek").click(function(){
					     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
					    })
                    $(".CompletionUnitTopMonth").click(function(){
					     $(this).css({'background':'white','color':'#66c877','height':'32px','margin-top':'18px'}).siblings().css({'background':'#eaedf1','color':'black','height':'28px','color':'#666666','margin-top':'22px'})
					   
                    })
                    },
  render: function() {
  	var page = this.state.page;
					var content = [];
					 switch(page){
					 	case 'CompletionUnitTopToady':
					 	content.push(<CompletionUnitTopToady key='CompletionUnitTopToady'/>)
					 	break;
					 	case 'CompletionUnitTopWeek':
					 	content.push(<CompletionUnitTopWeek key='CompletionUnitTopWeek'/>)
					 	break;
					 	case 'CompletionUnitTopMonth':
					 	content.push(<CompletionUnitTopMonth key='CompletionUnitTopMonth'/>)
					 	break;
					   }	
    return (
    		<div className='Completion-unit-top'>
    		    <div className='CompletionUnitTopList'>
			         	<ul >
			         		<li className='CompletionUnitTopToady' onClick={this.toggle.bind(this,'CompletionUnitTopToady')}>本日</li>
			         		<li className='CompletionUnitTopWeek'  onClick={this.toggle.bind(this,'CompletionUnitTopWeek')}>本周</li>
			         		<li className='CompletionUnitTopMonth' onClick={this.toggle.bind(this,'CompletionUnitTopMonth')}>本月</li>
			         	</ul>
			      </div>   	
			         	<div className ='Completion-unit-cnt'>
			         		<div className ='Completion-unit-cnt-left'>
			         		    <ul>
			         							<li>思维思创</li>
												<li>北京数字认证</li>
												<li>中国电信</li>
												<li>连锦春利特</li>
												<li>合纵天恒</li>
												<li>真视通</li>
												<li>西嘉万维</li>
												<li>大唐高鸿</li>
												<li>紫光软件</li>
												<li>宏业五方</li>	
									</ul>
			         		</div>
			         	
			         	    <div className='Completion-unit-cnt-right'>
			         	       {content} 
			         	       
				         	    <div className='Completion-unit-cnt-right-bottom'>
				         	        <ul>
				         	        	
					         	        <li><span className='Completiontxtleft'>0</span> <span className='Completiontxtright'>50</span></li>
					         	        <li>100</li>
					         	        <li>150</li>
					         	        <li>200</li>
					         	        <li>250</li>
				         	        	<li>300</li>
					         	        <li>350</li>
					         	        <li>400</li>
				         	        
				         	        </ul>
				         	    </div>
			         	    
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
export default CompletionUnitTopList
