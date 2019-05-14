import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';

var EquipmentTodayCtn = React.createClass({
  render: function() {
    return (
    			<div className ='Equipment-today-cnt'>
    			
						<div className='Equipmenttodaycntleft'>
							<ul>
								<li>100%</li>
								<li>75%</li>
								<li>50%</li>
								<li>25%</li>
								<li>0</li>
							</ul>
						
						</div>
						
						<div className='Equipmenttodaycntright'>							
							<div className='Equipmenttodaycntrightctn'>						
								<div className='trightctnPic'>
								
									    <div className='bjEquipmenttodaycntrightctnLine1'></div>
											 <div className='bjEquipmenttodaycntrightctnLine2'></div>
											  <div className='bjEquipmenttodaycntrightctnLine3'></div>
											   <div className='bjEquipmenttodaycntrightctnLine4'></div>
											   <div className='bjEquipmenttodaycntrightctnLine5'></div>
								   <div>
								   		<div>
											         <span className='PicPinToal toalcolor'></span>
		                                    <span className='PicToalOnlin toalOnlincolor'></span>
		                                    <span className='PicToalPstop  toalPstopcolor'></span>
		                               
									    </div>
								   </div>
                                    <div> 
                                    <div>
	                                    <span className='PicRouter toalcolor'></span>
	                                    <span className='PicOnlinRouter toalOnlincolor'></span>
	                                    <span className='PicPstopRouter toalPstopcolor'></span>
	                                
                                    </div>
                                    </div>
                                     <div>
                                     <div>
	                                      <span className='PicSwitch toalcolor'></span>
	                                    <span className='PicOnlinSwitch toalOnlincolor'></span>
	                                    <span className='PicPstopSwitch toalPstopcolor'></span>
                                    </div>
                                    </div>
                                    
                                      <div>
                                      <div>
	                                      <span className='PicFirewall toalcolor'></span>
	                                    <span className='PicOnlinFirewall toalOnlincolor'></span>
	                                    <span className='PicPstopFirewall toalPstopcolor'></span>
                                    </div>
                                    </div>
                                       <div>
                                       <div>
                                     	  <span className='PicServe toalcolor'></span>
	                                    <span className='PicOnlinServe toalOnlincolor'></span>
	                                    <span className='PicPstopServe toalPstopcolor'></span>
                                    </div>
                                    </div>
                                    <div>
                                    <div>
	                                    <span className='PicOther toalcolor'></span>
	                                    <span className='PicOnlinOther toalOnlincolor'></span>
	                                    <span className='PicPstopOther toalPstopcolor'></span>
                                    </div>
                                    </div>      
								 </div> 	
							</div>
							
							<div className='Equipmenttodaycntrightbottom'>
								<ul>
									<li>设备总数</li>
									<li>路由器</li>
									<li>交换机</li>
									<li>防火墙</li>
									<li>服务器</li>
									<li>其它</li>
							  	</ul>
							</div>
						</div>
						
				</div>
							
  )}
});
export default EquipmentTodayCtn
