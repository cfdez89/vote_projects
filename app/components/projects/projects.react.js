/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show all projects by competition
 */

/** import libs dependencies */
var React = require('react');

/** import components */
var CompetitionList = require('../competitions/competitionList.react');

/** import bootstrap component modules */
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');

/** component global data */
var _data = {
  competitions: [
    {
      id:1,
      title: 'Electronic Competition',
      description: 'Find and share new ideas related to electronics.',
      start_date: '03/11/2016',
      picture: 'app/images/electronic.jpeg'
    },
    {
      id:2,
      title: 'Chemistry Competition',
      description: 'Find and share new ideas related to chemistry.',
      start_date: '12/12/2016',
      picture: 'app/images/chemistry.jpeg'
    }
  ]
};

function getProjectsState(){
  return _data.competitions;
}

/** projects component */
var Projects = React.createClass({
    getInitialState() {
        return {
            competitions: getProjectsState()
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
                <h1>Project</h1>
                <br></br>
                <h5>des</h5>
                <hr></hr>
                
           
            </div>
        
        );
    }
});

module.exports = Projects;