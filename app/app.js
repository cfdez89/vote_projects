/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is the app entry point
 */

/** import libs dependencies */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var BrowserHistory = ReactRouter.browserHistory;
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;



/** import component modules */
var VoteApp = require('./components/layout/voteApp.react');
var LogIn = require('./components/log_in/logIn');

/** app routes */

ReactDOM.render((
    <Router history={BrowserHistory}> 
        <Route path="/" component={VoteApp}></Route>
        <Route path="/login" component={LogIn}></Route>
       
    </Router>
), document.getElementById('main'));