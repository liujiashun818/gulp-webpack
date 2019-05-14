import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import './NewUser.css'
var NewUser = React.createClass({
	componentDidMount:function(){ 
          var tiaojian=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
			$('#user_name').blur(function() {
				var reg = /^[a-zA-Z]{5,14}$/;
				if(reg.test($(this).val())) {
					$('#name_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#name_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			
			$('#user_pasd1').blur(function() {
				var reg = /^[0-9a-zA-Z]{6,14}$/;
				if(reg.test($(this).val())) {
					$('#psd1_tic1').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#psd1_tic1').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			$('#user_pasd2').blur(function() {
				if($('#user_pasd2').val()===''||$('#user_pasd2').val()==null) {
					$('#psd1_tic2').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#psd1_tic2').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			
			$('#qunZhu').blur(function() {
				if($('#qunZhu').val()===''||$('#qunZhu').val()==null) {
					$('#qunZhu_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#qunZhu_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			$('#jiaose').blur(function() {
				if($('#jiaose').val()===''||$('#jiaose').val()==null) {
					$('#jiaose_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#jiaose_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			$('#user_name2').blur(function() {
				var reg = /^[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\U00020000-\U0002CEAF]{2,4}$/;
				
				if(reg.test($(this).val())) {
					$('#name2_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#name2_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			
			$('#user-email').blur(function() {
				var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				
				if(reg.test($(this).val())) {
					$('#email_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#email_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			
			$('#user-phone').blur(function() {
				var reg = /^[1][358][0-9]{9}$/;
				if(reg.test($(this).val())) {
					$('#phone_tic').css('visibility','hidden');
					tiaojian[0]=1;
				} else {
					$('#phone_tic').css('visibility','visible');
					tiaojian[0]=0;
				}
			})
			
			$('#user-area').blur(function() {
				var reg = /^[1][358][0-9]{9}$/;
				if($('#user-area').val()===''||$('#user-area').val()==null) {
					$('#area_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#area_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			$('#school').blur(function() {
				if($('#school').val()===''||$('#school').val()==null) {
					$('#school_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#school_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			$('#bumen').blur(function() {
				if($('#bumen').val()===''||$('#bumen').val()==null) {
					$('#bumen_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#bumen_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			
			$('#zhiwei').blur(function() {
				if($('#zhiwei').val()===''||$('#zhiwei').val()==null) {
					$('#zhiwei_tic').css('visibility','visible');
					tiaojian[0]=1;
				} else {
					$('#zhiwei_tic').css('visibility','hidden');
					tiaojian[0]=0;
				}
			})
			$('from').submit(function(){
				for(var i=0;i<tiaojian.length;i++){
					if(tiaojian[i]==0){
					return false;
					}			
				}
			})
                    },

  render: function() {
    return (
    		<div className="newMengban">
			<div className="newMengbanCenter">
				<div className="newtop">
					<span className="newtopTxt">新建用户</span>
					<span className="newtopX">&times;</span>
				</div>
				<div className='newForm'>
					<form className="">
						<div className="fromLeft ">
							<p>
								<label htmlFor ="user">用户名<b>*</b></label>
								<input type="text" name="userID" id='user_name'  />
								<span className="user_box" id="name_tic">5-14个字符</span>

							</p>
							<p>
								<label htmlFor ="user">密码<b>*</b></label>
								<input type="password"id='user_pasd1' />
								<span className="user_box" id="psd1_tic1">6~14个字符，支持数字和字母</span>

							</p>
							<p>
								<label htmlFor ="user">确认密码<b>*</b></label>
								<input type="password" id='user_pasd2'/>
								<span className="user_box" id="psd1_tic2">两次密码输入不一致</span>

							</p>
							<p>
								<label htmlFor ="user">群组<b>*</b></label>
								<select id="qunZhu" className="selectBg" >
								    <option value="" > </option>
									<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
									<option   value="北京中光电公司" > 北京中光电公司</option>
									<option   value="真视通公司" >真视通公司 </option>
								</select>	
								<span className="user_box" id="qunZhu_tic">选择群组</span>

							</p>
							<p>
								<label htmlFor ="user">角色<b>*</b></label>
								
								<select id="jiaose" className="selectBg" >
								    <option   value="" > </option>
									<option   value="管理员" >管理员</option>
									<option   value="运维" > 运维</option>
									<option   value="运维" >运维 </option>
								</select>	
								
								
								<span className="user_box" id="jiaose_tic">选择角色</span>

							</p>
							<p>
								<label htmlFor ="user">姓名<b>*</b></label>
								<input type="text" id='user_name2' />
								<span className="user_box" id="name2_tic">2-4个汉字</span>

							</p>
							<p>
								<label htmlFor ="user">邮箱<b>*</b></label>
								<input type="email" id='user-email' />
								<span className="user_box" id="email_tic">邮箱格式不正确</span>

							</p>
						</div>
						<div className="fromMid"></div>
						<div className="fromRight">
							<p>
								<label htmlFor ="user">电话<b>*</b></label>
								<input type='number' value='' id='user-phone' step='' />
								<span className="user_box" id="phone_tic">手机号码格式不正确</span>
							</p>
							<p>
								<label htmlFor ="user">区域<b>*</b></label>
					
									<select id="user-area" className="selectBg" >
								    <option  value="" > </option>
									<option   value="朝阳区" >朝阳区</option>
									<option   value="海淀区" > 海淀区</option>
									<option   value="东城区" >东城区 </option>
								</select>	
								
								<span className="user_box" id="area_tic">选择区域</span>
							</p>
							<p>
								<label htmlFor ="user">单位<b>*</b></label>
							
								<select id="school" className="selectBg" >
								    <option value="" > </option>
									<option   value="实验小学" >实验小学</option>
									<option   value="北京大学" > 北京大学</option>
									<option   value="清华大学" >清华大学 </option>
								</select>	
								
								<span className="user_box" id="school_tic">所在单位名称</span>
							</p>
							<p>
								<label htmlFor ="user">部门<b>*</b></label>
								
								<select id="bumen" className="selectBg" >
								    <option   value="" > </option>
									<option   value="研发部" >研发部</option>
									<option   value="技术部" > 技术部</option>
									<option   value="财务部" >财务部 </option>
								</select>	
								
								<span className="user_box" id="bumen_tic">选择群组</span>
							</p>
							<p>
								<label htmlFor ="user">职位<b>*</b></label>
								
								<select id="zhiwei" className="selectBg" >
								    <option value="" > </option>
									<option   value="研发部" >技术部</option>
									<option   value="技术部" > zjjjj</option>
									<option   value="财务部" >财务部 </option>
								</select>	
								<span className="user_box" id="zhiwei_tic">选择职位</span>
							</p>
							<p>
								<label htmlFor ="user">主管人<b>*</b></label>
								<input type="text" id='leader' />
								<span className="user_box" id="leader_tic">选择主管人</span>
							</p>
							<p>
								<label htmlFor ="user">状态<b>*</b></label>
								<input type="text" id='zhuangTai'  />
								<span className="user_box" id="zhuangTai_tic">选择状态</span>

							</p>
						</div>
						<div className="fromBottom">
							<span className="newCox">取消</span>

							<span className="newSure">
								<input type="submit"  placeholder="提交" />
							</span>
						</div>
					</form>

				</div>

			</div>
		</div>			
  )}
});
export default NewUser
