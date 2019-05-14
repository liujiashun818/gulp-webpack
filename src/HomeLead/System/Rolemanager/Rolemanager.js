import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';

var Rolemanager = React.createClass({
  	componentDidMount:function(){ 
  		$('.onload').click(function(){
					  window.location.reload();
		});
		$('.newJiao').click(function(){
			$('.newRole').css({display:'block'});
		});
		$('.newtopX,.newCox').click(function(){
				$('.newRole').css({'display':'none'})
		}); 
                    /*------------------------- 分页------------------*/
			const $num = 14;
			$.ajax({
				type: 'get',
				url: './json/userManager.json',
				dataType: 'json',
				success: function(data) {
					var $page = Math.ceil(data.length/$num);
					var pageVal =data.length;
					$('#listPagesToalnum').html(pageVal);
					$('.listPagesEnd').html($page);
					for (var i = 0; i < $page; i++) {
						$('.listPages').append('<li class="listPagesli">'+(i+1)+'</li>');
					$('.listPagesli').eq(0).css({background:'#009fcc',color:'white'});
					};
					for (var i = 0; i < $num; i++) {
						if (data[i]) {
						$('.orginsTbody').append("<tr><td>"+data[i].orginName+"</td><td class='sectionrightright'><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_06.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_08.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg'  src='./img/images/系统-1用户管理_03.png'/></span></td></tr>")
						}
					}
					$('.listPages>li').click(function() {
						var $index = $(this).index();
						$('.orginsTbody').empty();
						$(this).css({background:'#009fcc',color:'white'}).siblings().css({background:'white',color:'black'}).parent('.listPages').siblings('.listPagesEnd').css({background:'white',color:'black'});
				
						for (var i = 0 + ($num * $index); i < $num * (1 + $index); i++) {
							if (data[i]) {
							$('.orginsTbody').append("<tr><td>"+data[i].orginName+"</td><td class='sectionrightright'><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_06.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_08.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg'  src='./img/images/系统-1用户管理_03.png'/></span></td></tr>")
                            
							}
						}
					})
					$('.listPagesEnd').click(function(){
						$(this).css({background:'#009fcc',color:'white'}).siblings('.listPages').children('li').css({'background':'white',color:'black'});
						$('.orginsTbody').empty();
						var $page = Math.ceil(data.length/$num)-1;
						for (var i = 0 + ($num * $page); i < $num * (1 + $page); i++){
							if (data[i]) {
							$('.orginsTbody').append("<tr><td>"+data[i].orginName+"</td><td class='sectionrightright'><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_06.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_08.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg'  src='./img/images/系统-1用户管理_03.png'/></span></td></tr>")
                            
							}
						}
					})
				}
			})
	/*------------*/
                    },
  render: function() {
    return (
    		<div className = 'Rolemanager'>
    						<div className='usermanagerNav'>
		    							  <div className='usermanagerNavLeft'>
		    							  	<a></a>
		    									角色管理
		    							  </div>
				    						<div className='usermanagerNavRight'>
					    								   <p className='usermanagerNavRightP'> <input className='newJiao' id="" type="button" value="新建角色" /></p>
									       		     <p className='usermanagerNavRightP'> <input  className='onload' id="" type="button" value="刷新" /></p>
					    										<p className='usermanagerNavRightP'>
													       		 <input id="NavtxtWords" name="txtWords" type="text" />
													       		 <input id="NavSearch" type="button" value="查询" />
										       		    </p>
				    					
				    						</div>
    						</div>
    						<section className='section1'>
	    						<section className='sectionleftOne'> </section>
	    						<section className='sectionrightTwo'> 
	    										<table className="table table-striped table-hover">
																 <thead>
																	 <tr>
																	    <th>角色名称</th>
																		<th className='sectionrightTwoRight'>操作</th>
																	 </tr>
																 </thead>
																<tbody className='orginsTbody'>
																		<tr>
																			<td>管理员</td>
																			<td></td>
																		</tr>
																				 
																</tbody>
											    </table>
	    								
	    								
	    								
	    								<footer className='orginsFooter'>
				    						      	  <div className='orginsFooterLeft'>
					    						      		<div className='fuhao'>&lt;</div>
					    						      		<div className='listPages'> </div>
					    						      		<div className='listPagellipsis'>...</div>
					    						      		<div className='listPagesEnd'></div>
					    						      		<div className='fuhao'>&gt; </div>
					    						      		<div className='listPagesToal'>
					    						      		共计<span id='listPagesToalnum'></span>条
					    						      		</div>
				    						      	</div>
				    						      </footer>
	    						</section>	
    						</section>
		    </div>				
  )},
});
export default Rolemanager
