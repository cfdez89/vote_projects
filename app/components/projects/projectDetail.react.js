/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show project details
 */

/** import libs dependencies */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/** import modules */
//var CompetitionStore = require('../../stores/competitionStore');
//var CompetitionService = require('../../services/competitionService');


/** import bootstrap component modules */
var Label = require('react-bootstrap/lib/Label');
var Image = require('react-bootstrap/lib/Image');

/** import components */
var Title = require('../common/title.react');

  var data ={
      id:1,
      competitionId:1,
      name: 'Electronic Project',
      votes:3,
      description: 'Find and share new ideas related to electronics.',
      picture: 'app/images/electronic.jpeg'
    };

function getProjectState(){
  return data;//CompetitionStore.getCompetition();
}

/** project details component */
var ProjectDetail = React.createClass({
   // mixins: [CompetitionStore.mixin],
    getInitialState: function(){
        return getProjectState();
    },
    componentDidMount: function(){
        var _this  = this;
       // setInterval(CompetitionService.getCompetitionData(this.props.params.id), 1000);
        //console.log(getCompetitionState());
        _this.setState(getProjectState());
        
    },
    storeDidChange: function() {
        this.setState(getProjectState());
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
                    <Image src={this.state.picture} alt="242x200" rounded />
                    <br></br>
                    <h3>{this.state.description}</h3>
                    <h3>Votes number: <Label>{this.state.votes}</Label></h3> 
                    <br></br>
                </div>
            </div>
        );
    }
});

module.exports = ProjectDetail;