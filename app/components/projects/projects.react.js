/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show all competition projects 
 */

/** import libs dependencies */
var React = require('react');

/** import components */
var Title = require('../common/title.react');
var ProjectList = require('../projects/projectList.react');

/** import bootstrap component modules */
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');

/** import modules */
var ProjectStore = require('../../stores/projectStore');
var ProjectService = require('../../services/projectService');

function getProjectsState(){
  return ProjectStore.getProjects();
}

/** projects component */
var Projects = React.createClass({
    mixins: [ProjectStore.mixin],
    getInitialState() {
        return {
            projects: getProjectsState()
        }
    },
    componentDidMount: function(){
        var _this  = this;
        setInterval(ProjectService.getProjectsData(this.props.params.id), 1000);
        console.log(getProjectsState());
        _this.setState(getProjectsState());
        
    },
    storeDidChange: function() {
        this.setState(getProjectsState());
    },
    setStyles: function(){
        return {
            textAlign: 'center'
        }
    },
    render() {
        return (
            <div style={this.setStyles()}>
                <Title title='Projects'/>
                <ProjectList id={this.props.params.id} data={this.state.projects}/>
            </div>
        );
    }
});

module.exports = Projects;