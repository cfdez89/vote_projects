/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show competition details
 */

/** import libs dependencies */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/** import components */
//var CompetitionList = require('../competitions/competitionList.react');

/** import bootstrap component modules */
//var Tabs = require('react-bootstrap/lib/Tabs');
//var Tab = require('react-bootstrap/lib/Tab');

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

/** competition details component */
var CompetitionDetail = React.createClass({
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
            <div className="container-fluid">
                <div style={this.setStyles()}>
                    <h1>ti</h1>
                    <hr></hr>
                    <br></br>
                    <h4>descripcion aca</h4>
                    <br></br>
                    <p>Cantidad máxima de proyectos: 
                    <br></br>Metodológia de evaluación de la competencia: 
                    <br></br>Fecha de inicio de competencia: 
                    <br></br>Fecha de fin de competencia: 
                    <br></br>Fecha de incio de recepcion de votaciones: 
                    <br></br>Fecha de fin de votaciones: </p>
                    <br></br>
                    <span>
                        <Link to={'/competitions/'+'1'+'/projects' }>View projects</Link>
                    </span> 
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = CompetitionDetail;