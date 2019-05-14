import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import YunWei from './YunWei/YunWei';	
import Aindex from './Aindex/Aindex';	
import Assets from './Assets/Assets';	
import NetWork from './NetWork/NetWork';	
import Equipment from './Equipment/Equipment';	
import System from './System/System';

import NewUser from './Mengban/NewUser';
import UserBj from './Mengban/UserBj';
import UserQx from './Mengban/userQx';
import UserDet from './Mengban/userDet';
import NewRole from './Mengban/NewRole';
import NewOrgin from './Mengban/NewOrgin';
import './HomeLead.css';
const HomeLead = React.createClass({
			getInitialState:function(){
				return{
					page:'Aindex'
				}
			},
			componentDidMount:function(){ 
					$(".top-left-nav1").css('background', '#009fcc');		
                    $(".top-left-nav").click(function(){
                    	  $(this).each(function(){
					      $(this).css({'background':'#009fcc',"color":"white"}).siblings().css({"background":"#00adda","color":"#ddf7fe"});
					    })	
                    });
                    $('.top-right>li').click(function(){
                    	$(this).each(function(){
					    $(this).css({'background':'#009fcc',"color":"white"}).siblings().css({"background":"#00adda","color":"#ddf7fe"});
                    })
                    });  
                    $("#searchLead").click(function(){
                    	$('.top-search-hidden').animate({
						      height:'toggle'
						    });
                    });      
                    $("#phoneLead").click(function(){
                    	$('.top-phone-hidden').animate({
						      height:'toggle'
						    });
                    });
                    $("#newsLead").click(function(){
                    	$('.top-news-hidden').animate({
						      height:'toggle'
						    });
                    });
                    $("#loaderLead").click(function(){
                    	$('.top-loader-hidden').animate({
						      height:'toggle'
						    });
                    });     
                    },
			render:function(){
				 var page = this.state.page;
				 var content = [];
				 switch(page){
				 	case 'Aindex':
				 	content.push(<Aindex key='Aindex' />)
				 	break;
				 	case 'YunWei':
				 	content.push(<YunWei key='YunWei' />)
				 	break;
				 	case 'Assets':
				 	content.push(<Assets key='Assets'/>)
				 	break;
				 	case 'NetWork':
				 	content.push(<NetWork key='NetWork' />)
				 	break;
				 	case 'Equipment':
				 	content.push(<Equipment key='Equipment' />)
				 	break;
				 	case 'System':
				 	content.push(<System key='System' />)
				 	break;
				 }				
				 return(
				 		<div className = 'homledcontainer'>	
				 			<div className='top'>	
				 				<div className='top-left'>
					 				<ul>
					 					<li className='top-left-nav top-left-nav1' onClick={this.toggle.bind(this,'Aindex')}>首页</li>
					 					<li className='top-left-nav' onClick={this.toggle.bind(this,'YunWei')}>运维</li>
					 					<li className='top-left-nav' onClick={this.toggle.bind(this,'Assets')}>资产</li>
					 					<li className='top-left-nav' onClick={this.toggle.bind(this,'NetWork')}>网络</li>
					 					<li className='top-left-nav' onClick={this.toggle.bind(this,'Equipment')}>设备</li>
					 					<li className='top-left-nav' onClick={this.toggle.bind(this,'System')}>系统</li>		 					
					 				</ul>
				 				</div>
				 			<div className='top-right'>
				 				<ul>
				 					<li className='search' id='searchLead' ref='search' onClick={this.onClick1} >
				 					       <a className='top-right-txt' >搜索</a>
				 					</li>
				 					<li className='phone' id='phoneLead' ref='phone' onClick={this.onClick2}>
				 					<a className='top-right-txt' >手机版</a>
				 					</li>
				 					<li className='news' id='newsLead' ref='news' onClick={this.onClick3}>
				 					<span className='news-list'>
				 					<a id='new-list-val'>3</a>
				 					</span>
				 					</li>
				 					<li className='top-right-last' id='loaderLead' ref='topRightLast' onClick={this.onClick4}>
				 					<a className='top-right-loader'>Loader</a>
				 					</li>
				 				</ul>	
				 			</div>
				 		</div>
				 			<div className='top-search-hidden' ref='topsearchhidden' >
				 				<input type='text' id='top-search-hidden-search' placeholder='&nbsp;&nbsp;搜索'/>
				 				<input type='submit' id='top-search-hidden-button' value=''/>
				 			</div>
				 			<div className='top-phone-hidden' ref='topPhoneHidden'>
				 			</div>				 			
				 			<div className='top-news-hidden' ref='topNewsHidden'>
				 			<li></li>
				 			</div>
				 			<div className='top-loader-hidden' ref='topLoaderHidden'>
				 			
				 			<Link className='top-loader-hidden-txt' to="/LoginPage1">退出</Link>
				 			</div>			 			
				 						
				 			<div className='mid'>{content}</div>
				 			<NewUser />
				 			<UserBj/>
				 			<UserQx />
				 			<UserDet />
				 			<NewRole />
				 			<NewOrgin />
				 		</div>
				 	)
			},
			toggle:function(page){
//				var page = this.state.page;
				this.setState({
					page:page
				})
			},
		})
export default HomeLead


