import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import ShowHide from '../System/ShowHide/ShowHide';
import FauleManger from './FauleManger/FauleManger';
import ComplaintManger from './ComplaintManger/ComplaintManger';
import TaskMager from './TaskMager/TaskMager';
import SlaManger from './SlaManger/SlaManger';
import KBM from './KBM/KBM';
import Announcements from './Announcements/Announcements';
import PerformanceManger from './PerformanceManger/PerformanceManger';
import WatchManger from './WatchManger/WatchManger';
import DutyCalendarManger from './DutyCalendarManger/DutyCalendarManger';
import ReportManagement from './ReportManagement/ReportManagement';
import './Assets.css';
		const Assets = React.createClass({
			getInitialState:function(){
					return{
						page:'FauleManger'
					}
					},
			componentDidMount:function(){
				var flag =true;
				var flag1  =true;
				$('.fatherEventMangrHide').click(function(){
					 $(".hidEventMangr").slideToggle("slow"); 
					 $(this).addClass("hoverOn").siblings().removeClass("hoverOn")
					 if(flag){
					 	 $('#lightEventM').hide();
					 	 $('#dimEventM').show();
					 	flag = false;
					 }else{
					 	 $('#lightEventM').show();
					 	  $('#dimEventM').hide();
					 	flag = true;
					 };		
				});					
				$('.dutyMangerclick').click(function(){
					 $(".hidReportManger").slideToggle("slow");
					 $(this).addClass("hoverOn").siblings().removeClass("hoverOn")
					  if(flag1){
					 	 $('.imgright').eq(1).hide();
					 	 $('.imgrightHid').eq(1).show();
					 	flag1 = false;
					 }else{
					 	 $('.imgright').eq(1).show();
					 	   $('.imgrightHid').eq(1).hide();
					 	flag1 = true;
					 };		
				});				
				$('.systemleftlist>li').mouseover(function(){
					$(this).children('.imgleft').eq(0).hide();
					$(this).children('.imgleft').eq(1).show();
				});
				$('.systemleftlist>li').mouseout(function(){
					$(this).children('.imgleft').eq(0).show();
					$(this).children('.imgleft').eq(1).hide();
				});
				$('.hoverEvenManger').mouseover(function(){
					$(this).children('.imgright2').eq(0).hide();
					$(this).children('.imgright2').eq(1).show();
				});	
				$('.hoverEvenManger').mouseout(function(){
					$(this).children('.imgright2').eq(0).show();
					$(this).children('.imgright2').eq(1).hide();
				});								
				$('.systemleftlist>li').click(function () {
					 $(this).addClass("hoverOn").siblings().removeClass("hoverOn");
					 $('.hoverEvenManger').removeClass("hoverOn");
					 
					 $(this).children('b').addClass("bColor");
					 $('.hoverEvenManger').children('b').removeClass("bColor");
					 $(this).siblings('li').children('b').removeClass("bColor");
					 $(this).children('.imgright2').eq(0).hide();
					$(this).children('.imgright2').eq(1).show();
			    });			     
			 	$('.hoverEvenManger').click(function () {			
			 		 $(this).addClass("hoverOn").siblings().removeClass("hoverOn")
			 		 $('.systemleftlist>li').removeClass("hoverOn")
			 		 $(this).children('b').addClass("bColor");
			 		 $(this).siblings('.hoverEvenManger').children('b').removeClass("bColor");
					 $('.systemleftlist>li').children('b').removeClass("bColor");	
					 $(this).children('.imgright2').eq(0).hide();
					$(this).children('.imgright2').eq(1).show();
			    });			 			 				
			},
			render:function(){
				var page = this.state.page;
					var content = [];
					 switch(page){
					
					 	case 'FauleManger':
					 	content.push(<FauleManger key='FauleManger'/>)
					 	break;
					 	case 'ComplaintManger':
					 	content.push(<ComplaintManger key='ComplaintManger'/>)
					 	break;
					 	case 'TaskMager':
					 	content.push(<TaskMager key='TaskMager'/>)
					 	break;
					 	case 'SlaManger':
					 	content.push(<SlaManger key='SlaManger'/>)
					 	break;
					 	case 'KBM':
					 	content.push(<KBM key='KBM'/>)
					 	break;
					 	case 'Announcements':
					 	content.push(<Announcements key='Announcements'/>)
					 	break;
					 	case 'PerformanceManger':
					 	content.push(<PerformanceManger key='PerformanceManger'/>)
					 	break;
					 	case 'WatchManger':
					 	content.push(<WatchManger key='WatchManger'/>)
					 	break;
					 	case 'DutyCalendarManger':
					 	content.push(<DutyCalendarManger key='DutyCalendarManger'/>)
					 	break;
					 	case 'ReportManagement':
					 	content.push(<ReportManagement key='ReportManagement'/>)
					 	break;
				};
				return(
					<div className='yuwei2'>
						<div className='systemleft'>
							<div className='systemTop'>
							   <b>运维管理</b>
							</div>
							<section>
									<ul className='systemleftlist'>
										<li className='fatherEventMangrHide' onClick={this.toggle.bind(this,'FauleManger')} >
										  <img className='imgleft' src={require('./images/lefticon0.png')} />
										  <img className='imgleft imgleftLight' src={require('./images/lefticon0a.png')} />
												<b>事件管理</b>
										  <img className='imgright' id='lightEventM' src={require('./images/lefticon0ba.png')}/>
										  <img className='imgrightHid' id='dimEventM' src={require('./images/lefticon0b.png')}/>
										</li>
										     <div className='hidEventMangr'>
												 <div className='hoverEvenManger fauleManger' onClick={this.toggle.bind(this,'FauleManger')}>
												    <img className='imgright2' src= {require('./images/lefticon1.png')}/>
												    <img className='imgright2 imgrightHid2 ' src= {require('./images/lefticon1a.png')}/>	
													 <b className='hoverHidShow'>故障管理</b>
												 </div>
											     <div className='hoverEvenManger taskMager' onClick={this.toggle.bind(this,'TaskMager')}>
											           <img className='imgright2' src={require('./images/lefticon2.png')}/>
											           <img className='imgright2 imgrightHid2' src= {require('./images/lefticon2a.png')}/>
												       <b className='hoverHidShow'>任务管理</b>
											     </div>
											     <div className='hoverEvenManger complaintManger' onClick={this.toggle.bind(this,'ComplaintManger')}>
												     <img className='imgright2' src= {require('./images/lefticon3.png')}/>
												     <img className='imgright2 imgrightHid2' src= {require('./images/lefticon3a.png')}/>
												     <b className='hoverHidShow'>投诉管理</b>	
											     </div>
										     </div>
										<li onClick={this.toggle.bind(this,'SlaManger')}>
											<img className='imgleft'  src= {require('./images/lefticon4.png')}/>
											<img className='imgleft imgleftLight'  src={require('./images/lefticon4a.png')}/>
											<b>SLA管理</b>
										</li>										
										<li onClick={this.toggle.bind(this,'KBM')}>
											<img className='imgleft'  src= {require('./images/lefticon5.png')}/>
											<img className='imgleft imgleftLight'  src= {require('./images/lefticon5a.png')}/>
											
											<b>知识库管理</b>
										</li>										
										<li onClick={this.toggle.bind(this,'Announcements')}>
											<img className='imgleft'  src= {require('./images/lefticon6.png')}/>
											<img className='imgleft imgleftLight'  src={require('./images/lefticon6a.png')}/>
											
											<b>公告管理</b>
										</li>										
										<li onClick={this.toggle.bind(this,'PerformanceManger')}>
											<img className='imgleft'  src= {require('./images/lefticon7.png')}/>
											<img className='imgleft imgleftLight'  src= {require('./images/lefticon7a.png')}/>
											<b>绩效管理</b>
										</li>										
										<li className='dutyMangerclick' onClick={this.toggle.bind(this,'WatchManger')}>
											<img className='imgleft'  src= {require('./images/lefticon8.png')}/>
											<img className='imgleft imgleftLight'  src= {require('./images/lefticon8a.png')}/>
											<b>值班管理</b>
											 <img className='imgright'  src={require('./images/lefticon0ba.png')}/>
											 <img className='imgrightHid' src= {require('./images/lefticon0b.png')}/>
										</li>
											<div className='hidReportManger'>
												 <div className='hoverEvenManger watchManger' onClick={this.toggle.bind(this,'WatchManger')}>
												     <img className='imgright2' src={require('./images/lefticon0.png')}/>
												     <img className='imgright2 imgrightHid2' src={require('./images/lefticon9a.png')}/>
													 <b className='hoverHidShow'>值班表管理</b> 	
												 </div>
											     <div className='hoverEvenManger dutyCalendarManger' onClick={this.toggle.bind(this,'DutyCalendarManger')}>
												       <img className='imgright2' src={require('./images/lefticon10.png')}/>	
												       <img className='imgright2 imgrightHid2' src={require('./images/lefticon10a.png')}/>	
												      <b className='hoverHidShow'>值班日历管理</b>
											     </div>
											</div>
										<li onClick={this.toggle.bind(this,'ReportManagement')}>
											<img className='imgleft' id='abc' src={require('./images/lefticon11.png')}/>
											<img className='imgleft imgleftLight' id='abv' src={require('./images/lefticon11a.png')}/>	
											<b>报表管理</b>
										</li>																						
							        </ul>														
							</section>
						</div>						
						<ShowHide />
						<div className='rightYunwei2'>{content}</div>
					</div>
				)},
				toggle:function(page){
				this.setState({
					page:page
				})
			},
		});
export default Assets