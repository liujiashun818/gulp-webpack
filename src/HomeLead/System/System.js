import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';	
import Usermanager from './Usermanager/Usermanager';
import Rolemanager from './Rolemanager/Rolemanager';
import Orginsmanager from './Orginsmanager/Orginsmanager';
import DataSmanager from './DataSmanager/DataSmanager';
import Systemmanager from './Systemmanager/Systemmanager';
import DataDic from './DataDic/DataDic';
import ChangePsd from './ChangePsd/ChangePsd';
import ShowHide from './ShowHide/ShowHide';
import './Sytem.css';
var System = React.createClass({
	getInitialState:function(){
					return{
						page:'Usermanager'
					}
					},
	componentDidMount:function(){
			$('.systemleftlist>li').click(function () {
					$(this).addClass("hoverOn").siblings().removeClass("hoverOn")
			 });	
			 
			 $('.clickDataDictionary').click(function(){
			 	 $('.dataDictionary').show();
			 	 
			 })
			  $('.clickDataDictionary').siblings('li').click(function(){
			  	$('.dataDictionary').hide();
			  })
					},
			render:function(){
				var page = this.state.page;
					var content = [];
					 switch(page){
					 	case 'Usermanager':
					 	content.push(<Usermanager key='Usermanager'/>)
					 	break;
					 	case 'Rolemanager':
					 	content.push(<Rolemanager key='Rolemanager'/>)
					 	break;
					 	case 'Orginsmanager':
					 	content.push(<Orginsmanager key='Orginsmanager'/>)
					 	break;
					 	case 'DataSmanager':
					 	content.push(<DataSmanager key='DataSmanager'/>)
					 	break;
					 	case 'Systemmanager':
					 	content.push(<Systemmanager key='Systemmanager'/>)
					 	break;
					 	case 'DataDic':
					 	content.push(<DataDic key='DataDic'/>)
					 	break;
					 	case 'ChangePsd':
					 	content.push(<ChangePsd key='ChangePsd'/>)
					 	break;					 	
				}
				
				
				return(
					<div className='systemIndex'>
						<div className='systemleft'>
							<div className='systemTop'>
							   <a>系统设置</a>
							</div>
							<section>
									<ul className='systemleftlist'>
										<li className='hoverOn' onClick={this.toggle.bind(this,'Usermanager')}>
										
										<img src='img/images/SystemYong_03.png' />
										
										<a>用户管理</a>
										</li>
										
										<li onClick={this.toggle.bind(this,'Rolemanager')}>
										<img src='img/images/SytesmJiao_03.png' />
									
										<a>角色管理</a>
										</li>
										
										<li onClick={this.toggle.bind(this,'Orginsmanager')}>
										<img src='img/images/zhuzSytem_03.png' />
										
										<a>组织机构管理</a>
										</li>
										
										<li onClick={this.toggle.bind(this,'DataSmanager')}>
										<img src='img/images/shuyuanSyestm_03.png' />
										
										<a>数据源管理</a>
										</li>
										
										<li onClick={this.toggle.bind(this,'Systemmanager')}>
										<img src='img/images/xiTjSyestm_03.png' />
										
										<a>系统检测</a>
										</li>
										
										<li className='clickDataDictionary' onClick={this.toggle.bind(this,'DataDic')}>
										<img src='img/images/shuzidainSystem_03.png' />
										
										<a>数据字典</a>
										</li>
										
										<li onClick={this.toggle.bind(this,'ChangePsd')}>
										<img src='img/images/xiugaiSystem_03.png' />										
										<a>修改密码</a>
										</li>
							  </ul>
							</section>
						
						</div>
						 <ShowHide />
						 <div className='dataDictionary'>我是数据字典</div>
					     <div className='systemright'>{content}</div>
					</div>
				)},
			toggle:function(page){
				this.setState({
					page:page
				})
			},
		});
export default System	