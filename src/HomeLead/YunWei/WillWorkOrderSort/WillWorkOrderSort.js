import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import './WillWorkOrderSort.css'
var WillWorkOrderSort = React.createClass({
	componentDidMount:function(){					
			$.ajax({
				type: 'get',
				url: '/api/willOrderSort',
				dataType: 'json',
				success: function(data) {
					console.log('data  sss')
					console.log(data)
					data.sort(function(a,b){return b.num-a.num});
					for(var i=0;i<10;i++){
						var numOrderWork =data[i].num;
						var nameOrderWork =data[i].name;						
						var topi = (numOrderWork/20*100-'10')+'%';
						$('.cantianWorkOder').append('<div style="bottom:'+topi+'" class="numMainRightWork numMainRightWork'+i+'">'+data[i].num+'</div>');
						$('.footMainRightWork').append('<div class="footMainRightWork'+i+'">'+data[i].name+'</div>');	
						
						$('.numMainRightWork').eq(0).addClass("changBig");	
						$('.numMainRightWork').hover(function(){
						var subIndex = $(this).index();
						$(this).addClass("changBig").siblings().removeClass("changBig");					
						$('.ctnMainRightWork>section').eq(subIndex).addClass("bjtShow").siblings().removeClass("bjtShow");			
					});		
					}
								
				},
			
			});
	},
  render: function() {
    return (
    			<div className = 'willworkoder'>
						<nav className='topWorkordermager'></nav>
						<div className='mainWorkodermager'>
							<div className='mainLeftWork'></div>
							<div className='mainRightWork'>
								<div className='ctnMainRightWork'>
								<div className='cantianWorkOder'>		
								</div>
									<div className='ctnMainRightWorkLine ctnMainRightWorkLine1'></div>
									<div className='ctnMainRightWorkLine ctnMainRightWorkLine2'></div>
									<div className='ctnMainRightWorkLine'></div>
									<div className='ctnMainRightWorkLine'></div>
									<div className='ctnMainRightWorkLine'></div>
									<div className='ctnMainRightWorkLine'></div>
									<div className='ctnMainRightWorkLine'></div>
									<div className='ctnMainRightWorkLine'></div>
									<div className='ctnMainRightWorkLine'></div>
							
									         <section className='bjtMainRightwork bjtShow bjtMainRightwork0'></section>
											<section className='bjtMainRightwork bjtMainRightwork1'></section>
											<section className='bjtMainRightwork bjtMainRightwork2'></section>
											<section className='bjtMainRightwork bjtMainRightwork3'></section>
											<section className='bjtMainRightwork bjtMainRightwork4'></section>
											<section className='bjtMainRightwork bjtMainRightwork5'></section>
											<section className='bjtMainRightwork bjtMainRightwork6'></section>
											<section className='bjtMainRightwork bjtMainRightwork7'></section>
											<section className='bjtMainRightwork bjtMainRightwork8'></section>
											<section className='bjtMainRightwork bjtMainRightwork9'></section>
								</div>
								<footer className='footMainRightWork'></footer>
							</div>
						
						</div>
					
				</div>	
  )}
});
export default WillWorkOrderSort
