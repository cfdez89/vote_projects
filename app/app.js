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
var IndexRoute = ReactRouter.IndexRoute;
var IndexLin = ReactRouter.IndexLin;
    

/** import component modules */
var Index = require('./components/layout/index.react');
var NotFound = require('./components/notFound/notFound.react');
var Home = require('./components/home/home.react');
var LogIn = require('./components/login/login.react');
var SignUp = require('./components/signup/signup.react');
var About = require('./components/about/about.react');
var CompetitionDetail = require('./components/competitions/competitionDetail.react');
var Projects = require('./components/projects/projects.react');
var ProjectDetail = require('./components/projects/projectDetail.react');

/** import modules */
var CompetitionService = require('./services/competitionService');
/** Load initial data from api */
CompetitionService.getCompetitionsData();
/** app routes */

ReactDOM.render((
    <Router history={BrowserHistory}> 
        <Route path="/" component={Index}>
            <IndexRoute component={Home}/>
            <Route path="/login" component={LogIn}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/about" component={About}/>
            <Route path="/competitions/:id" component={CompetitionDetail}>
                <Route path="/competitions/:id/projects" component={Projects}>
                   
                </Route>
            </Route> 
            <Route path="/competitions/:competitionId/projects/:id"  component={ProjectDetail}/>
            <Route path="*" component={NotFound}/>
        </Route>  
    </Router>
), document.getElementById('main'));