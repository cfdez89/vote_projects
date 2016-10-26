/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show all competition projects 
 */

/** import libs dependencies */
var React = require('react');

/** import components */
var ProjectList = require('../projects/projectList.react');

/** import bootstrap component modules */
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');

/** component global data */
var _data = {
  projects: [
    {
      id:1,
      competitionId:1,
      title: 'Electronic Competition',
      description: 'Find and share new ideas related to electronics.',
      start_date: '03/11/2016',
      picture: '/projects/app/images/electronic.jpeg'
    },
    {
      id:2,
      competitionId:2,
      title: 'Chemistry Competition',
      description: 'Find and share new ideas related to chemistry.',
      start_date: '12/12/2016',
      picture: '/projects/app/images/chemistry.jpeg'
    }
  ]
};

function getProjectsState(){
  return _data.projects;
}

/** projects component */
var Projects = React.createClass({
    getInitialState() {
        return {
            projects: getProjectsState()
        }
    },
    setStyles: function(){
        return {
            textAlign: 'center'
        }
    },
    render() {
        return (
            <div style={this.setStyles()}>
                <h1>Projects</h1>
                <hr></hr>
                <ProjectList data={this.state.projects}/>
            </div>
        );
    }
});

module.exports = Projects;