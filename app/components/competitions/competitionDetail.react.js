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
/** import modules */
var CompetitionStore = require('../../stores/competitionStore');
var CompetitionService = require('../../services/competitionService');



function getCompetitionState(){
  return CompetitionStore.getCompetition();
}

/** competition details component */
var CompetitionDetail = React.createClass({
    getInitialState: function(){
        return getCompetitionState();
    },
    componentDidMount: function(){
        var _this  = this;
        setInterval(CompetitionService.getCompetitionData(this.props.params), 2000);
        console.log(getCompetitionState());
       // _this.setState(getCompetitionState());
        
    },
    storeDidChange: function() {
        console.log(this.state);
        this.setState(getCompetitionState());
    },
    setStyles: function(){
        return {
            textAlign: 'center'
        }
    },
    render: function() {
        return (
            <div className="container-fluid">
                <div style={this.setStyles()}>
                    <h1>{this.state.name}</h1>
                    <hr></hr>
                    <br></br>
                    <h4>{this.state.description}</h4>
                    <br></br>
                    <p>Cantidad máxima de proyectos: {this.state.projects_limmit}
                    <br></br>Metodológia de evaluación de la competencia: {this.state.evaluation_method}
                    <br></br>Fecha de inicio de competencia: {this.state.start_date}
                    <br></br>Fecha de fin de competencia: {this.state.end_date}
                    <br></br>Fecha de incio de recepcion de votaciones: {this.state.vote_period_end}
                    <br></br>Fecha de fin de votaciones: {this.state.vote_period_start}</p> 
                    <br></br>
                    <span>
                        <Link to={'/competitions/'+ this.props.params +'/projects' }>View projects</Link>
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