import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import AssetStatus from '../Aindex/Asset-status/AssetStatus';
import EquipmentToday from '../Aindex/Equipment-today/EquipmentToday';

import WorkOrderMangr from './WorkOrderMangr/WorkOrderMangr';
import DutyManagement from './DutyManagement/DutyManagement';
import WillWorkOrderSort from './WillWorkOrderSort/WillWorkOrderSort';

import EquipmentTest from '../Aindex/Equipment-test/EquipmentTest';
import './Yunwei.css';
const YunWei = React.createClass({
			render:function(){
				return(
					<div className='yunweiHome'>
						<div className='leftYunwei'>
							<AssetStatus />
							<WorkOrderMangr />
							<DutyManagement />
						</div>
						<div className='rightYunwei'>
						  <EquipmentToday />
						  <WillWorkOrderSort />
						  <EquipmentTest />
						</div>
					</div>
					)
			}
		})
export default YunWei		