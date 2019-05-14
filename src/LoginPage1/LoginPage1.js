import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import './LoginPage1.css';
 const LoginPage1 = React.createClass({
        render:function () {
            return(
            	<div className="login-bg-1">
                <header className='logo'></header>
                <section className='mid'>	                
	               		 <div className='top yangshi'>
		               		 <span className=''>账号登录</span> 
		               		 <Link to="/LoginPage2">
		               		   <img className='top-saoma-txt' src={require('../images/erweima02_03.png')} />
		               		  </Link>
	               		  	  <b className='login-tip'>登录名或者密码不正确</b>
	               		 </div>
	               		<div className='biaodan yangshi' >
	               			<form action="" method="" onSubmit="">
	               			<p className="form_box">
								<label className="lab">用户名</label>
							    <input type="text" id="user"  placeholder='请输入用户名' className='in-box'/>
							    <span id="user_box"></span>
							</p>
							<p className="form_btn">
								<Link to="/HomeLead"><input type="submit" className="btn" value='登&nbsp;录' /></Link>								
							</p>
							<p className="form_box form_box_psd">
								<label className="lab">密码</label>
								<input type="password" ref="LoginPagePwd" placeholder='请输入密码' className='in-box'/>
									<img className="pwd_box" ref='LoginPagePwd_box' onClick={this.showHidden} src={require('../images/psd-shou_03.png')} />
									<img className="hid_pwd_box" ref='LoginPageHid_Pwd_box' onClick={this.showHidden} src={require('../images/psd-hid_03.png')} />
							</p>							
							</form>	
	               		</div>	               		
	               		<div className='bottom'> 
	               			<div className="bottom-left">
		               				<input className="" type="checkbox" id="rememberMe"/>
									<span className='botton-left-txt'>记住密码</span>   											
							</div>
							<div className='bottom-right'>
							<a className='bottom-right-txt' href="">忘记密码</a>
							<span className='login-line'></span>
							<Link to="/Register" className='bottom-right-txt'>注&nbsp;册</Link>
							</div>
	               		</div>          	
                </section>
                <footer className='foot'>
                <p>Copyright © 2006-2016北京思维实创科技股份有限公司</p>
                <p>联系电话：<a>400-1046-146</a></p>
                </footer>
            </div>)
        },
      
         showHidden: function() {
		        var LoginPagePwd = this.refs.LoginPagePwd; 
		        var LoginPagePwd_box = this.refs.LoginPagePwd_box;
		        var LoginPageHid_Pwd_box =this.refs.LoginPageHid_Pwd_box;		     
		        if(LoginPagePwd_box.style.display=='none'){
		        	 LoginPagePwd_box.style.display=' block';
		        	 LoginPageHid_Pwd_box.style.display='none';
		        	 LoginPagePwd.type='text';
		        }else{
		        	LoginPagePwd_box.style.display='none';
		        	LoginPageHid_Pwd_box.style.display='block'; 
		        	LoginPagePwd.type='password';
		        }
		    },
  })
export default LoginPage1