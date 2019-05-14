import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { Router, Route, Link, IndexRoute,hashHistory} from 'react-router'
import LoginPage1 from './LoginPage1/LoginPage1'; //普通登录页
import LoginPage2 from './LoginPage2/LoginPage2';//扫码登录页
import Homelead from './Homelead/HomeLead';//领导首页
import Register from './Register/register';//注册页面
import Equipment from './Homelead/Equipment/Equipment';
import Aindex from './Homelead/Aindex/Aindex';
import NetWork from './Homelead/NetWork/NetWork';
import System from './Homelead/System/System';
import YunWei from './Homelead/YunWei/YunWei';
import NewFault from './Homelead/Mengban/yunweiPages/NewFault';

const App = React.createClass({
    render() {
        return (
            <div> 
                {this.props.children}
            </div>
        )
    },
     componentDidMount(){

	

//     fetch('/api/users')
//          .then(function(response){
//               return response.json()
//          })
//          .then(function(data){
//              console.log(data)
//          })
    }

})
$(document).ready(function () {

ReactDOM.render((
    <Router history={hashHistory}> 
        <Route path="/" component={App} >
            <IndexRoute component={LoginPage1} />  
            <Route path="LoginPage1"  component={LoginPage1}></Route>
        	<Route path="LoginPage2"  component={LoginPage2}></Route>
        	<Route path="Homelead"    component={Homelead}></Route>
        	<Route path="Register"    component={Register}></Route>
        	<Route path="Equipment"   component={Equipment}></Route>
        	<Route path="Aindex"      component={Aindex}></Route>
        	<Route path="NetWork"     component={NetWork}></Route>
        	<Route path="System"      component={System}></Route>
        	<Route path="YunWei"      component={YunWei}></Route>
            <Route path="NewFault"    component={NewFault}></Route>
        	
        </Route>
    </Router>
), document.getElementById("app"))
});