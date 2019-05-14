import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import CompletionUnitTopList from './CompletionUnitTopList';

var CompletionUnit = React.createClass({
  render: function() {
    return (
   				 <div className = 'Completion-unit'>
					 				<CompletionUnitTopList/>
					 				
									<ul className="Completion-unit-bottom">
											<li >
												<span className="Completion-unit-bottom-grey"></span> 
												&nbsp;
												<span >工单总数</span>
											</li>	
											
											<li>
												<span className="Completion-unit-bottom-pink"></span>
												&nbsp;<span >工单完成数</span>
											</li>
											
									</ul>	
				</div>		
  )}
});
export default CompletionUnit
