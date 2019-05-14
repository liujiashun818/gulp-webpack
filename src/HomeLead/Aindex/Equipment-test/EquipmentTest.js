import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import EquipmentTestTxt from './EquipmentTestTxt';
import EquipmentTestPicture from './EquipmentTestPicture';

var EquipmentTest = React.createClass({
  render: function() {
    return (
    		<div className ='Equipment-test'>
				<p className='Equipment-test-top'></p>
				<div className ='Equipment-test-cnt'>
						<div className ='Equipment-test-cnt-left'>
								<EquipmentTestPicture/>
						</div>
						<div className ='Equipment-test-cnt-right'>
						  <EquipmentTestTxt/>	
						</div>
				</div>
			</div>	
  )}
});
export default EquipmentTest
