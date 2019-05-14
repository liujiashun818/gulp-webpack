import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import AssetStatus from './Asset-status/AssetStatus';
import EquipmentToday from './Equipment-today/EquipmentToday';
import Rank from './Rank/Rank';
import CompletionUnit from './Completion-unit/CompletionUnit';
import SingleClass from './Single-class/SingleClass';
import EquipmentTest from './Equipment-test/EquipmentTest';
import './Aindex.css'
const Aindex = React.createClass({
			render:function(){
				return(
						<div className='index-page'>
							<div className='leftAindex'>
								<AssetStatus/>
								<Rank/>
								<SingleClass/>
							</div>
							<div className='rightAindex'>
									<EquipmentToday/>
									<CompletionUnit/>	
									<EquipmentTest/>	
							</div>								
						</div>
					)
			},	
			
		})
export default Aindex