import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import './WorkOrderMangr.css'
const WorkOrderMangr = React.createClass({
			render:function(){
				return(
					<div className="workordermager">	
						<nav className='topWorkordermager'></nav>
						<section className='centerWorkordermager'>
							<div> 
								  <div>
									  <p className='numWorkOder'>14</p>
									  <p className='txtWorkOder'>待向应</p>
								  </div>
							  		<p className='aleadyFeipei'>已经分配100</p>
							</div>
						  	<div>
						  		  <div>
									  <p className='numWorkOder'>16</p>
									  <p className='txtWorkOder'>待完成</p>
								  </div>
							  	<p className='aleadyFeipei'>已经分配100</p>
						  	
						  	
						  	</div>
						
						</section>
						<footer className='footWorkordermager'>
						 	<div>
						 		  <div>
									  <p className='numWorkOder'>8</p>
									  <p className='txtWorkOder'>待关闭</p>
								  </div>
							  	<p className='aleadyFeipei'>已经分配100</p>
						 	
						 	</div>
						    <div className='newCreatOder'>
						    	 <div>
									<input className='inptcreatOder' type='button' value='新建工单'/>
								  </div>
						    	
						    	<p className='aleadyFeipei'>已建设100</p>
						    </div>
						</footer>
					</div>
					)
			}
		})
export default WorkOrderMangr	