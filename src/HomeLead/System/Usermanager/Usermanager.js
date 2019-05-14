import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';



var Usermanager = React.createClass({
	haldclick:function(event){
		event.stopPropagation()
		event.preventDefault()
/*------用户管理编辑权限---------*/
				var setRRspanImg = this.refs.setRRspanImg11;
				console.log(setRRspanImg)
				setRRspanImg.click(function(){
					$('.bianjiMengban').css({'display':'block'})
					}
				);	
				$('.newtopX,.newCox').click(function(){
					$('.bianjiMengban').css({'display':'none'})
				});
			
					$('.user_delete').click(function(){
					$('.bianjiMengban').css({'display':'block'})
					}
				);	
				$('.newtopX,.newCox').click(function(){
					$('.bianjiMengban').css({'display':'none'})
				});

	},

	componentDidMount:function(){ 
				$('.onload').click(function(){
					  window.location.reload();
				});
				/*----新建用户--*/
                $('#new_user').click(function(){
				$('.newMengban').css({'display':'block'})
					});  	
				$('.newtopX,.newCox').click(function(){
				$('.newMengban').css({'display':'none'})
				}); 	
				/*------用户管理编辑----------*/	
			/*------------------------- 分页------------------*/
			const $num = 15;
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
						$('.usermanagerCtn').append("<tr><td>"+data[i].name+"</td><td>"+data[i].nametrue+"</td><td>"+data[i].qunZhu+"</td><td>"+data[i].orginName+"</td><td class='sectionrightright'><span onclick=haldclick() ref='setRRspanImg11' class='setRRspan userBJ'><img class='setRRspanImg' src='./img/images/系统-1用户管理_06.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_08.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg'  src='./img/images/系统-1用户管理_03.png'/></span></td></tr>")
						}
					}
					$('.listPages>li').click(function() {
						var $index = $(this).index();
						$('.usermanagerCtn').empty();
						$(this).css({background:'#009fcc',color:'white'}).siblings().css({background:'white',color:'black'}).parent('.listPages').siblings('.listPagesEnd').css({background:'white',color:'black'});
				
						for (var i = 0 + ($num * $index); i < $num * (1 + $index); i++) {
							if (data[i]) {
						$('.usermanagerCtn').append("<tr><td>"+data[i].name+"</td><td>"+data[i].nametrue+"</td><td>"+data[i].qunZhu+"</td><td>"+data[i].orginName+"</td><td class='sectionrightright'><span class='setRRspan userBJ'><img  class='setRRspanImg' src='./img/images/系统-1用户管理_06.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_08.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg'  src='./img/images/系统-1用户管理_03.png'/></span></td></tr>")
							
                            
							}
						}
					})
					$('.listPagesEnd').click(function(){
						$(this).css({background:'#009fcc',color:'white'}).siblings('.listPages').children('li').css({'background':'white',color:'black'});
						$('.usermanagerCtn').empty();
						var $page = Math.ceil(data.length/$num)-1;
						for (var i = 0 + ($num * $page); i < $num * (1 + $page); i++){
							if (data[i]) {
                            $('.usermanagerCtn').append("<tr><td>"+data[i].name+"</td><td>"+data[i].nametrue+"</td><td>"+data[i].qunZhu+"</td><td>"+data[i].orginName+"</td><td class='sectionrightright'><span class='setRRspan userBJ'><img  class='setRRspanImg' src='./img/images/系统-1用户管理_06.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg' src='./img/images/系统-1用户管理_08.png'/></span><span class='setRRspan'><img  class='setRRspanBj setRRspanImg'  src='./img/images/系统-1用户管理_03.png'/></span></td></tr>")
							}
						}
					})
				}
			})
	
              },
			componentDidUpdate:function(){
				
				$('.userBJ').click(function(){
					console.log($('.userBJ'))
					$('.bianjiMengban').css({'display':'block'})
					}
				);	
				$('.newtopX,.newCox').click(function(){
				$('.bianjiMengban').css({'display':'none'})
				}
				);
				
				
			},

  render: function() {
    return (
    		<div className = 'usermanager'>
    					<div className='usermangerMegnban'></div>
				     	<div className='usermanagerNav'>
		    							  <div className='usermanagerNavLeft'>
		    							  	<a></a>
		   									用户管理信息
		    							  </div>
				    						<div className='usermanagerNavRight'>
					    						<p className='usermanagerNavRightP'> <input className='newJiao'  id="new_user" type="button" value="新建用户" /></p>
									       		<p className='usermanagerNavRightP'> <input  className='onload' id="" type="button" value="刷新" /></p>
					    					  <p className='usermanagerNavRightP'>
													       		 <input id="NavtxtWords" name="txtWords" type="text" />
													       		 <input id="NavSearch" type="button" value="查询" />
										       		   </p>
				    						</div>
    						</div>
    							
    						<section className='sectionOut'>
    									<div className='sectionleft'></div>
    									<div className='sectionright'> 
    									<table className="table table-striped table-hover">
																			  <thead className='userTableTop'>
																			    <tr>
																			      <th >用户名</th>
																			      <th>姓名</th>
																			      <th>群组</th>
																			      <th>角色名称</th>
																			      <th className='sectionrightTwoRight'>操作</th>
																			    </tr>
																			  </thead>
																			  <tbody className='usermanagerCtn'></tbody>
										</table>
							    						      <footer className='sectionFooter'>
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
    											</div>
    			
    						</section>	
		    </div>				
  )},
  
  
});
export default Usermanager
