import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import './LoginPage2.css'
const LoginPage2 = React.createClass({
        render:function () {
            return(<div className="login-bg">             
                <header className='logo'></header>
                <section className='mid'>	                
	               		 <div className='top yangshi'>
	               		 <span className=''>扫码登录</span>
	               		 <Link className='top-saoma-txt' to="/LoginPage1">
	               		 	<img src={require('../images/miasnok01_03.png')} />
	               		 </Link>
	               		 </div>
	               		<div className='biaodan yangshi' action="" method="" onSubmit="">
	               			<div className='erm-fang'></div>
	               		</div>
	               		
	               		<div className='bottom'> 
	               			<div className="bottom-left-erwm">
	               				<p>
									<span className='botton-left-txt'>打开手机智能IT运维平台,扫一扫登录</span>
	               				</p>
								
							</div>
							<div className='bottom-right'>	
							<Link to="/Register" className='bottom-right-txt'>注&nbsp;册</Link>
							</div>
	               		</div>          	
                </section>
                <footer className='foot'>
                <p>Copyright © 2006-2016北京思维实创科技股份有限公司</p>
                <p>联系电话：<a>400-1046-146</a></p>
                </footer>
            </div>)
        }
   })
export default LoginPage2