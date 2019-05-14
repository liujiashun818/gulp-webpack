import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import antd from 'antd';
import { Calendar } from 'antd';
import { dateCellRender } from 'antd';
import { monthCellRender } from 'antd';
import 'antd/dist/antd.css';
import './DutyManagement.css';


const DutyManagement = React.createClass({
	componentDidMount:function(){
/*		locale:function(){
			 let locale = {
		  timezoneOffset: 8 * 60,
		  firstDayOfWeek: 1,
		  minimalDaysInFirstWeek: 1,
		  lang: {		    
		    yearFormat: 'yyyy\'年\'',
		    monthFormat: 'M\'月\'',
		    dateFormat: 'yyyy\'年\'M\'月\'d\'日\'',
		    format: {
		      eras: ['公元前', '公元'],
		      months: ['一月', '二月', '三月', '四月', '五月', '六月',
		      '七月', '八月', '九月', '十月', '十一月', '十二月'],
		      shortMonths: ['一月', '二月', '三月', '四月', '五月', '六月',
		      '七月', '八月', '九月', '十月', '十一月', '十二月'],
		      weekdays: ['星期天', '星期一', '星期二', '星期三', '星期四',
		      '星期五', '星期六'],
		      shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五',
		      '周六'],
		      veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
		    }
		  }
		};		
		};	*/
	},
	

			render:function(){
				return(
					<div className='dutyManger'>
						<nav className='topWorkordermager'></nav>
						<section >
						<Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
						</section>
						<footer >
							<span><b>+</b>&nbsp;<a>新建值班表</a></span>
						</footer>
				    </div>
					)
			}
		})
export default DutyManagement	