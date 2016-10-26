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
var Title = require('../common/title.react');

/** import bootstrap component modules */
var Label = require('react-bootstrap/lib/Label');

/** import modules */
var CompetitionStore = require('../../stores/competitionStore');
var CompetitionService = require('../../services/competitionService');



function getCompetitionState(){
  return CompetitionStore.getCompetition();
}

/** competition details component */
var CompetitionDetail = React.createClass({
    mixins: [CompetitionStore.mixin],
    getInitialState: function(){
        return getCompetitionState();
    },
    componentDidMount: function(){
        var _this  = this;
        setInterval(CompetitionService.getCompetitionData(this.props.params.id), 1000);
        console.log(getCompetitionState());
        _this.setState(getCompetitionState());
        
    },
    storeDidChange: function() {
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
                    <Title title={this.state.name}/>
                    <h3>{this.state.description}</h3>
                    <h4>Limmit number of projects: <Label>{this.state.projects_limmit}</Label></h4>
                    <h4>Competition evaluation method: {this.state.evaluation_method}</h4>
                    <h4>Competition start date: {this.state.start_date}</h4>
                    <h4>Competition end date: {this.state.end_date}</h4>
                    <h4>Vote period start date: {this.state.vote_period_start}</h4>
                    <h4>Vote period end date: {this.state.vote_period_end}</h4> 
                    <br></br>
                    <span>
                        <Link to={'/competitions/'+ this.props.params.id +'/projects' }>View projects</Link>
                    </span> 
                    <br></br>
                </div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = CompetitionDetail;