import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute} from 'react-router';
import Usermanager from '../Usermanager/Usermanager';
import MchangePsd from '../../Mengban/MchangePsd'
var ChangePsd = React.createClass({
	
  render: function() {
    return (
    	<div>
    		<Usermanager/>
    		<MchangePsd/>
    	
    	</div>
    		
  )}
});
export default ChangePsd
