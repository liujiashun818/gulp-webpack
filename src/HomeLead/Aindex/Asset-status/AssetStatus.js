import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import Chartist from 'chartist';
import ChartistGraph from 'react-chartist';

var AssetStatus = React.createClass({
	componentDidMount:function(){
		
	},
	
  render: function() {
		var data = {
		  labels: ['在线', '维修', '库存'],
		  series: [50, 30, 20]
		};
		
		var options = {
		  labelInterpolationFnc: function(value) {
		    return value
		  }
		};
		
		var responsiveOptions = [
		  ['screen and (min-width: 640px)', {
		    chartPadding: 30,
		    labelOffset: 100,
		    labelDirection: 'explode',
		    labelInterpolationFnc: function(value) {
		      return value;
		    }
		  }],
		  ['screen and (min-width: 1024px)', {
		    labelOffset: 80,
		    chartPadding: 20
		  }]
		];	
		new Chartist.Pie('.ct-chart', data, options, responsiveOptions);
    return (
    		<div className = 'Asset-status'>
									<p className='Asset-status-top'></p>
									<div className ='Asset-status-cnt'>
										<ChartistGraph style={{paddingTop:20}} className='ct-chart' options={responsiveOptions} options={options} data={data} type={"Pie"} />
									</div>
										<ul className="Asset-status-bottom">
											<li >
												<span className="Asset-status-roll green"></span> 
												<span >在线</span>
												<span ><input type="text" id="zaixian" defaultValue="50"/>
												%</span>
											</li>			
											<li>
												<span className="Asset-status-roll pink"></span>
												<span >库存</span>
												<span ><input type="text" id='kucun' defaultValue="20" />%
												</span>
											</li>
											<li className='Asset-status-bottom-last'>
												<span className="Asset-status-roll purple"></span>
												<span >维修</span>
												<span ><input type="text" id='weixiu' defaultValue="30"/>%
												</span>
											</li>		
										</ul>	
									
								</div>				
  )}
});
export default AssetStatus
