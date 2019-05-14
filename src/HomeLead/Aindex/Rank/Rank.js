
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import antd from 'antd';
import { Progress } from 'antd';


var Rank = React.createClass({
  render: function() {
    return (
    		<div className = 'Satisfaction-ranking'>
    						<p className='Satisfaction-ranking-top'></p>
									<div className ='Satisfaction-ranking-cnt'>
										<ul className='Satisfaction-ranking-cnt-left'>
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
										<div className='Satisfaction-ranking-cnt-right'> 
												<Progress percent={90} strokeWidth={15} />
										    <Progress percent={80} strokeWidth={15} />
										    <Progress percent={70} strokeWidth={15} />
										    <Progress percent={60} strokeWidth={15} />
												<Progress percent={50} strokeWidth={15} />
												<Progress percent={40} strokeWidth={15} />
										    <Progress percent={33} strokeWidth={15} />
										    <Progress percent={20} strokeWidth={15} />
										    <Progress percent={10} strokeWidth={15} />
										    <Progress percent={30} strokeWidth={15} />
										</div>
																 	 
									</div> 
				</div>					
  )}
});
export default Rank
