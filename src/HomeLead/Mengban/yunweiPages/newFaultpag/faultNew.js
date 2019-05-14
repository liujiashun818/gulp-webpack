import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import './faultNewAll.css';
		const FaultNew = React.createClass({					
			componentDidMount:function(){
			
			},
			render:function(){	
				return(
				
					<div className='Faultnew'>
						        <h1>基本信息</h1>
								<form id="fileupload" action="//jquery-file-upload.appspot.com/" method="POST" enctype="multipart/form-data">
									<div className='FaultnewFormtop1'>
										<span className='FaultnewFormtopleft'>
											<label htmlFor="user" className='newFormPlable'>工单号<b>*</b></label>
											<input type="text" name="userID" id='' />
										</span>
										<span className='FaultnewFormtopright'>
											<label htmlFor="user" className='newFormPlable'>工单主题<b>*</b></label>
											<input type="text" name="userID" id='' />
										</span>
									</div>
									<div className='FaultnewFormtop2'>
									     
											 <label htmlFor="user" className='newFormPlable'>工单描述<b>*</b></label>
											 <textarea className='textareaFaultNew'></textarea>
										
									</div>
								
								  <div className='faultNewSolution'>
										<p className='faultNewSolutionP'><a>解决方案</a></p>
										<ol className='faultNewSolutionLeft'>
											<li>
												<a>学校无法上网</a>
												<p> 我不知的什么原因,学校不可以上网,清你们给我解决一下好代码对对对的的的的 的,马上洁净区解决</p>
											</li>
											<li>
												<a>学校无法上网</a>
												<p> 我不知的什么原因,学校不可以上网,清你们给我解决一下好代码对对对的的的的 的,马上洁净区解决</p>
											 </li>
										</ol>
									    <ol className='faultNewSolutionRight'>
									    		<li>
												<a>学校无法上网</a>
												<p> 我不知的什么原因,学校不可以上网,清你们给我解决一下好代码对对对的的的的 的,马上洁净区解决</p>
											</li>
											<li>
												<a>学校无法上网</a>
												<p> 我不知的什么原因,学校不可以上网,清你们给我解决一下好代码对对对的的的的 的,马上洁净区解决</p>
											 </li>
									    </ol>
								   </div>
								 
								   <div className='fromMidFlaultNew1'>
									   <div className='fromLeft'>
									             <p>
													<label htmlFor ="user">项目名称<b>*</b></label>
													<select id="qunZhu" className="selectBg" >
													    <option value="" > </option>
														<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
														<option   value="北京中光电公司" > 北京中光电公司</option>
														<option   value="真视通公司" >真视通公司 </option>
													</select>	
													<span className="user_box" id="qunZhu_tic">选择群组</span>
												</p>
												<p>
													<label htmlFor ="user">请求用户<b>*</b></label>
													<input type="password"id='user_pasd1' />
													<span className="user_box" id="psd1_tic1">6~14个字符，支持数字和字母</span>
												</p>
												<p>
													<label htmlFor ="user">区域<b>*</b></label>
													<select id="qunZhu" className="selectBg" >
													    <option value="" > </option>
														<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
														<option   value="北京中光电公司" > 北京中光电公司</option>
														<option   value="真视通公司" >真视通公司 </option>
													</select>	
													<span className="user_box" id="qunZhu_tic">选择群组</span>
												</p>
											
												<p>
													<label htmlFor ="user">单位名称<b>*</b></label>
													<input type="password"id='user_pasd1' />
													<span className="user_box" id="psd1_tic1">6~14个字符，支持数字和字母</span>
												</p>
												<p>
													<label htmlFor ="user">负责人<b>*</b></label>
													<input type="text" id='user_name2' />
													<span className="user_box" id="name2_tic">2-4个汉字</span>
												</p>
												<p>
													<label htmlFor ="user">单位地址<b>*</b></label>
													<input type="email" id='user-email' />
													<span className="user_box" id="email_tic">邮箱格式不正确</span>				
												</p>
												<p>
													<label htmlFor ="user">群组细类<b>*</b></label>
													<select id="qunZhu" className="selectBg" >
													    <option value="" > </option>
														<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
														<option   value="北京中光电公司" > 北京中光电公司</option>
														<option   value="真视通公司" >真视通公司 </option>
													</select>	
													<span className="user_box" id="qunZhu_tic">选择群组</span>				
												</p>
											</div >
											
											<div className="fromRight">
											   <p>
													<label htmlFor ="user">来源<b>*</b></label>
										
														<select id="user-area" className="selectBg" >
													    <option  value="" > </option>
														<option   value="朝阳区" >朝阳区</option>
														<option   value="海淀区" > 海淀区</option>
														<option   value="东城区" >东城区 </option>
													</select>	
													<span className="user_box" id="area_tic">选择区域</span>
												</p>
												<p>
													<label htmlFor ="user">电话<b>*</b></label>
													<input type='number' value='' id='user-phone' step='' />
													<span className="user_box" id="phone_tic">手机号码格式不正确</span>
												</p>
												<p>
													<label htmlFor ="user">子区域<b>*</b></label>
										
														<select id="user-area" className="selectBg" >
													    <option  value="" > </option>
														<option   value="朝阳区" >朝阳区</option>
														<option   value="海淀区" > 海淀区</option>
														<option   value="东城区" >东城区 </option>
													</select>	
													<span className="user_box" id="area_tic">选择区域</span>
												</p>
												<p>
													<label htmlFor ="user">单位类型<b>*</b></label>
												
													<select id="school" className="selectBg" >
													    <option value="" > </option>
														<option   value="实验小学" >实验小学</option>
														<option   value="北京大学" > 北京大学</option>
														<option   value="清华大学" >清华大学 </option>
													</select>	
													<span className="user_box" id="school_tic">所在单位名称</span>
												</p>
												<p>
													<label htmlFor ="user">负责人电话<b>*</b></label>
													<input type="text" id='leader' />
													<span className="user_box" id="bumen_tic">选择群组</span>
												</p>
												<p>
													<label htmlFor ="user">故障大类<b>*</b></label>
													<select id="zhiwei" className="selectBg" >
													    <option value="" > </option>
														<option   value="研发部" >技术部</option>
														<option   value="技术部" > zjjjj</option>
														<option   value="财务部" >财务部 </option>
													</select>	
													<span className="user_box" id="zhiwei_tic">选择职位</span>
												</p>
												<p>
													<label htmlFor ="user">故障类型<b>*</b></label>
													
													<select id="zhiwei" className="selectBg" >
													    <option value="" > </option>
														<option   value="研发部" >技术部</option>
														<option   value="技术部" > zjjjj</option>
														<option   value="财务部" >财务部 </option>
													</select>	
													<span className="user_box" id="zhiwei_tic">选择职位</span>
												</p>
											</div>
										</div>
										
										  <div className='fromMidFlaultNew2'>
										 <div className='titleServiceLevel'>服务级别</div>		   
								   		<div className="fromLeft">
										   <p>
												<label htmlFor ="user">服务级别</label>
									
													<select id="user-area" className="selectBg" >
												    <option  value="" > </option>
													<option   value="朝阳区" >朝阳区</option>
													<option   value="海淀区" > 海淀区</option>
													<option   value="东城区" >东城区 </option>
												</select>	
												<span className="user_box" id="area_tic">选择区域</span>
											</p>
											<p>
												<label htmlFor ="user">服务大类<b>*</b></label>
									
													<select id="user-area" className="selectBg" >
												    <option  value="" > </option>
													<option   value="朝阳区" >朝阳区</option>
													<option   value="海淀区" > 海淀区</option>
													<option   value="东城区" >东城区 </option>
												</select>	
												<span className="user_box" id="area_tic">选择区域</span>
											</p>
											<p>
												<label htmlFor ="user">预约时间<b>*</b></label>
												<input type="text" id='leader' />
												<span className="user_box" id="bumen_tic">选择群组</span>
											</p>
											<p>
												<label htmlFor ="user">预约解决时间</label>
												<input type="text" id='leader' />
												<span className="user_box" id="bumen_tic">选择群组</span>
											</p>
										</div>
								   		
								   		
								   		
								   		
								   		<div className="fromRight">
										   <p>
												<label htmlFor ="user">服务项<b>*</b></label>
									
													<select id="user-area" className="selectBg" >
												    <option  value="" > </option>
													<option   value="朝阳区" >朝阳区</option>
													<option   value="海淀区" > 海淀区</option>
													<option   value="东城区" >东城区 </option>
												</select>	
												<span className="user_box" id="area_tic">选择区域</span>
											</p>
											<p>
												<label htmlFor ="user">服务细项<b>*</b></label>
									
													<select id="user-area" className="selectBg" >
												    <option  value="" > </option>
													<option   value="朝阳区" >朝阳区</option>
													<option   value="海淀区" > 海淀区</option>
													<option   value="东城区" >东城区 </option>
												</select>	
												<span className="user_box" id="area_tic">选择区域</span>
											</p>
											<p>
												<label htmlFor ="user">预计响应时间</label>
												<input type="text" id='leader' />
												<span className="user_box" id="bumen_tic">选择群组</span>
											</p>
										
								        </div>
								        </div>
								        
								        
								        
								        <div className='photoFaultNew'>
								        	<p className='photoFaultNewBtn'>
								        		<button className=''>人员流转</button>
								        	    <button className='' id='' style={{'border':'1px solid #349ef0','background':'white','color':'#349ef0'}}>上传图片</button>
								        	    <span>可以上传3张图片,每张图片大小不得小于3M.附件的格式有:gif,png,jpg,pbm;</span>
								        	</p>
								        	<p className='photoFaultNewFoot'> {/*<input className='clickPhotoImg' type="file" name="img" accept="image/png,image/gif,image/jpg,image/bmp" />*/}<input className='photoFaultNewFootTxt' type='text'/><input className='photoFaultNewFootBtn' type='button' value='删除'/></p>
								        	<p className='photoFaultNewFoot'><input className='photoNameFaultNew' type='text'/></p>
								        	<p className='photoFaultNewFoot'>
								        			我是进度条
								        	
								        	
								        	</p>
								        </div>
								     {/*   <div className='uploader'>
											    <div className="fileupload-buttonbar">
											        <div className="fileupload-buttons">
											            <span className="fileinput-button">
											                <span>Add files...</span>
											                <input type="file" name="files[]" multiple/>
											            </span>
											            <span className="fileupload-process"></span>
											        </div>
											        <div className="fileupload-progress fade" style="display:none">
											            <div className="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100"></div>
											            <div className="progress-extended">&nbsp;</div>
											        </div>
											    </div>
											    <table role="presentation"><tbody className="files"></tbody></table>
										
								       </div>*/}
								</form>
								
					</div>
					
				)},

		});
export default FaultNew
