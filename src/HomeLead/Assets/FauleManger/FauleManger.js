import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import { Table, Icon, Switch, Radio,Input,Form,Button,Pagination} from 'antd';
import 'antd/dist/antd.css';
import './FauleManger.css';
			const FormItem = Form.Item;		
     		const data = [];		
			function onChange(pagination, filters, sorter) {
			  
			};	
			 const rowSelection = {
				  onChange: (selectedRowKeys, selectedRows) => {	
				  },
				  onSelect: (record, selected, selectedRows) => {
				  },
				  onSelectAll: (selected, selectedRows, changeRows) => {
				  },
				};	
			 $.ajax({
				type: 'get',
				url: './api/fauleManger',
				dataType: 'json',
				success: function(fauleMangerData) {  	
					for (var i = 0;i<fauleMangerData.length;i++) {		
					  data.push({
					  	key:i,
					    jobNum: fauleMangerData[i].jobNum,
					    jobThem: fauleMangerData[i].jobThem,
					    serviceLevel: fauleMangerData[i].serviceLevel,
					    schoolName:fauleMangerData[i].schoolName,
					    creatPeople:fauleMangerData[i].creatPeople,
					    creatData:fauleMangerData[i].creatData,
					    dealingPeople:fauleMangerData[i].dealingPeople,
					    residualTime:fauleMangerData[i].residualTime,
					    residualSolutionTime:fauleMangerData[i].residualSolutionTime,
					    singleType:fauleMangerData[i].singleType,
					    score:fauleMangerData[i].score,
					    states:fauleMangerData[i].states,
					    action:fauleMangerData[i].action,
					  });
					  
					};
				}
			});
			
const FauleManger = React.createClass({
			 getInitialState() {
			    return {
			      selectedRowKeys: [], 
			      loading: false,
			      filterDropdownVisible: false,
			      data,
			      searchText: '',
			    };
			 },	
		    onInputChange(e) {
				    this.setState({ searchText: e.target.value });
				  },
		     onSearch() {
			    const { searchText } = this.state;
			    const reg = new RegExp(searchText, 'gi');
			    this.setState({
			      filterDropdownVisible: false,
			      data: data.map((record) => {
			        const match = record.schoolName.match(reg);
			        if (!match) {
			          return null;
			        }
			        return {
			          ...record,
			          jobNum: (
			            <span>
			              {record.jobNum.split(reg).map((text, i) => (
			                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
			              ))}
			            </span>
			          ),
			          schoolName: (
			            <span>
			              {record.schoolName.split(reg).map((text, i) => (
			                i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
			              ))}
			            </span>
			          ),
			        };
			      }).filter(record => !!record),
			    });
             },
			 start() {
		       this.setState({ loading: true });
			    setTimeout(() => {
			      this.setState({
			        selectedRowKeys: [],
			        loading: false,
			      });
			    }, 1000);    	    
			  },
		onSelectChange(selectedRowKeys) {
		    this.setState({ selectedRowKeys });
		 },				
		componentDidMount:function(){
			 state = {
			    bordered: true,
			    loading: true,
			    pagination: false,
			    size: 'default',
			    expandedRowRender,
			    title,
			    footer,
			    rowSelection: {},
			    scroll: undefined,
			 };	 			
         },
		componentDidMount:function(){
					var moreCondions = true;
					$('.moreConditions').click(function(){
							 $(".OnMoreConditions").animate({
								      height:'toggle'
								    });
							 if(moreCondions){
									$(this).animate({'height':'40','line-height':'40','fontSize':'16'},20)						
							 	  moreCondions = false;
							 }else{
							   	$('.moreConditions').animate({'height':'30','line-height':'30','fontSize':'14','border':'none'},2000)						
							   	moreCondions = true;
							 };		
			 		});		
					for(var i=0;i< $('.handleYunweiDoRight').length;i++){
						console.log($('.handleYunweiDoRight').length)
						  $('.roamYunweiDoRight').eq(i).mousemove(function(){	
						   $(this).siblings('.roamYunweiDoRightTic').show()
					    });	
					     $('.roamYunweiDoRight').eq(i).mouseout(function(){	
						   $(this).siblings('.roamYunweiDoRightTic').hide()
					    });	
					     $('.handleYunweiDoRight').eq(i).mousemove(function(){	
						   $(this).siblings('.handleYunweiDoRightTic').show()
					    });
					     $('.handleYunweiDoRight').eq(i).mouseout(function(){	
						   $(this).siblings('.handleYunweiDoRightTic').hide()
					    });	
					}
					    
		},		
  render: function() {
  		const columns = [{
			  title: '工单号',
			  dataIndex: 'jobNum',
			  key: 'jobNum',
			  render: text => <a href="#">{text}</a>,
			  onFilter: (value, record) => record.jobNum.indexOf(value) === 0,
              sorter: (a, b) => a.jobNum.length - b.jobNum.length,
              filterDropdownVisible: this.state.filterDropdownVisible,
              onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }),
			}, {
			  title: '工单主题',
			  dataIndex: 'jobThem',
			  key: 'jobThem',
			  filterMultiple: true,
			  onFilter: (value, record) => record.jobThem.indexOf(value) === 0,
			  sorter: (a, b) => a.jobThem.length - b.jobThem.length,
			  filterDropdownVisible: this.state.filterDropdownVisible,
              onFilterDropdownVisibleChange: visible => this.setState({ filterDropdownVisible: visible }),
			}, {
			  title: '服务级别',
			  dataIndex: 'serviceLevel',
			  key: 'serviceLevel',
			  onFilter: (value, record) => record.serviceLevel.indexOf(value) === 0,
              sorter: (a, b) => a.serviceLevel.length - b.serviceLevel.length,
			}, {
			  title: '学校名称',
			  dataIndex: 'schoolName',
			  key: 'schoolName',
			  filterMultiple: true,
			  onFilter: (value, record) => record.schoolName.indexOf(value) === 0,
			  sorter: (a, b) => a.schoolName.length - b.schoolName.length,
			  render: text => <a href="#">{text}</a>,
			}, {
			  title: '创建人',
			  dataIndex: 'creatPeople',
			  key: 'creatPeople',
			  onFilter: (value, record) => record.creatPeople.indexOf(value) === 0,
			  sorter: (a, b) => a.creatPeople.length - b.creatPeople.length,
			}, {
			  title: '创建日期',
			  dataIndex: 'creatData',
			  key: 'creatData',
			  onFilter: (value, record) => record.creatData.indexOf(value) === 0,
			  sorter: (a, b) => a.creatData.length - b.creatData.length,
			}, {
			  title: '处理人',
			  dataIndex: 'dealingPeople',
			  key: 'dealingPeople',
			  onFilter: (value, record) => record.dealingPeople.indexOf(value) === 0,
			  sorter: (a, b) => a.dealingPeople.length - b.dealingPeople.length,
			}, {
			  title: '剩余响应时间',
			  dataIndex: 'residualTime',
			  key: 'residualTime',
			  onFilter: (value, record) => record.residualTime.indexOf(value) === 0,
			  sorter: (a, b) => a.residualTime.length - b.residualTime.length,
			}, {
			  title: '剩余解决时间',
			  dataIndex: 'residualSolutionTime',
			  key: 'residualSolutionTime',
			  onFilter: (value, record) => record.residualSolutionTime.indexOf(value) === 0,
			  sorter: (a, b) => a.residualSolutionTime.length - b.residualSolutionTime.length,
			}, {
			  title: '工单类型',
			  dataIndex: 'singleType',
			  key: 'singleType',
			  onFilter: (value, record) => record.singleType.indexOf(value) === 0,
			  sorter: (a, b) => a.singleType.length - b.singleType.length,
			}, {
			  title: '评分',
			  dataIndex: 'score',
			  key: 'score',
			  onFilter: (value, record) => record.score.indexOf(value) === 0,
			  sorter: (a, b) => a.score.length - b.score.length,
			}, {
			  title: '状态',
			  dataIndex: 'states',
			  key: 'states',
			  onFilter: (value, record) => record.states.indexOf(value) === 0,
			  sorter: (a, b) => a.states.length - b.states.length,
			}, {
			  title: '操作',
			  width:100,
			  textAlign:'center',
			  key: 'action',
			  render: (text, record) => (
			      <span>
			      		<span className='handleYunweiDoRightTic'>处理</span>
			      		<span className='commentYunweiDoRightTic'>评论</span>
			      		<span className='closeYunweiDoRightTic'>关闭</span>
			      		<span className='handleYunweiDoRight'><img src='../images/yunweiDoRight_03.png'/></span>
			      		<span className='commentYunweiDoRight'><img src='../images/yunweiDoRight_10.png'/></span>
			      		<span className='closeYunweiDoRight'><img src='../images/yunweiDoRight_12.png'/></span>
			      		
			      		<span className='roamYunweiDoRightTic'>流转</span>
				    	<span className='roamYunweiDoRight'><img src='../images/yunweiDoRight_06.png'/></span>
			       </span>
			     
			  ),
			  
			}];
     const state = this.state;
     const { loading, selectedRowKeys } = this.state;
     const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
    		<div className ='rightFauleManger'>
    			 <aside className='asideFauleManger'></aside>
    			 <section className='sectionFauleManger'>
	    			 	<nav className='navFauleManger'>
	    			 		        <div className='usermanagerNavLeft'>
	    			 		        	<div className='fauleMangerline'><span></span></div>
		    							  	<div className='txtFauleMangerleft'>运维管理&nbsp;<span>&nbsp;(代办<a id=''>22</a>)&nbsp;</span> </div>		   									   
		    							  </div>
				    						<div className='usermanagerNavRight'>
				    								 <p className='usermanagerNavRightP exportFauleManger'></p>
					    						   <p className='usermanagerNavRightP'> 
					    						  <Link to="/NewFault"  target="view_window" >
					    						         <input className='newJiao'  id="" type="button" value="故障新建" />
					    						   </Link>
					    						  {/*  <a href='/' target="view_window"> <input className='newJiao'  id="" type="button" value="故障新建" /></a>*/}
					    						   </p>
									       		 <p className='usermanagerNavRightP'>
									       		 <Button className='onload' type="primary" onClick={this.start}  loading={loading}>刷新</Button>
									       		 </p>
					    					     <p className='usermanagerNavRightP moreConditionsP'><input  className='moreConditions' id="" type="button" value="更多条件" /></p>
					    					     <p className='usermanagerNavRightP TxtFauleManger custom-filter-dropdown'>
					    					     			    <Input
														          	className='ctnTxtFauleManger' 
														            placeholder="请输入关键字"
														            value={this.state.searchText}
														            onChange={this.onInputChange}
														            onPressEnter={this.onSearch}
														          />
														          <Button className='SeachFauleManger' type="primary" onClick={this.onSearch}>查询</Button>
													    
										         </p>
				    						</div>    			 	
	    			 	</nav>
	    			 		<div className='OnMoreConditions'>
	    			 								<form className="FromMoreCon">
			    			 								<div className='fromMoreCondiv leftFromMoreCon'>
						    			 										<p>
																						<label htmlFor ="user">工单号</label>
																						<input type="text" id=''  />
																					</p>
																				 <p>
																						<label htmlFor ="user">服务级别</label>
																						<select id="" className="selectBg" >
																						    <option value="" > </option>
																								<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
																								<option   value="北京中光电公司" > 北京中光电公司</option>
																								<option   value="真视通公司" >真视通公司 </option>
																						</select>	
																					</p>
																					 <p>
																						<label htmlFor ="user">处理人</label>
																						<select id="" className="selectBg" >
																						    <option value="" > </option>
																								<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
																								<option   value="北京中光电公司" > 北京中光电公司</option>
																								<option   value="真视通公司" >真视通公司 </option>
																						</select>	
																					</p>
			    			 								</div>
			    			 								<div className='fromMoreCondiv midFromMoreCon'>
			    			 										      <p>
																						<label htmlFor ="user">工单主题</label>
																						<input type="text" id=''  />
																					</p>
																					 <p>
																						<label htmlFor ="user">创建人</label>
																						<input type="text" id=''  />
																					</p>
																					<p>
																						<label htmlFor ="user">工单类型</label>
																						<select id="" className="selectBg" >
																						    <option   value="" > </option>
																								<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
																								<option   value="北京中光电公司" > 北京中光电公司</option>
																								<option   value="真视通公司" >真视通公司 </option>
																						</select>	
																					</p>
																					 <div className='midMoreConBotm'>
																					 		<div className='midMoreConBotmdiv'>
																					 				 <input id='clearMoreCon' type="button" value="取消"/>
																									 <input className='inputMidMoreCon' type="button" value="重置"/>
																									 <input type="button" value="查询"/>
																					 		
																					 		</div>
																						
																					</div>
			    			 								</div>
			    			 								<div className='fromMoreCondiv rightFromMoreCon'>
			    			 											<p>
																						<label htmlFor ="user">状态</label>
																						<select id="" className="selectBg" >
																						    <option value="" > </option>
																								<option   value="北京思维思创科技股份有限公司" >北京思维思创科技股份有限公司</option>
																								<option   value="北京中光电公司" > 北京中光电公司</option>
																								<option   value="真视通公司" >真视通公司 </option>
																						</select>	
																					</p>
																					 <p>
																						<label htmlFor ="user">学校名称</label>
																						<input type="text" id=''  />
																					</p>
																					 <p>
																						<label htmlFor ="user">创建日期</label>
																						<input type="text" id=''  />
																					</p>
			    			 								</div>
	    			 								</form>
	    			 						</div>
	    			 	
	    				<section className='mainFauleManger'>
	    				
			    			<div className="components-table-demo-control-bar">
		                         <Form inline></Form>
		                    </div>
		                <Table {...this.state} onChange={onChange} pagination={{ pageSize: 20}} rowSelection={rowSelection} columns={columns} dataSource={this.state.data} />	
	    				</section>
    				</section>   					            	
		    </div>				
  )}
});
export default FauleManger