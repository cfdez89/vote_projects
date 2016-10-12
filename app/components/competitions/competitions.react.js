/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show all compettions 
 */

/** import libs dependencies */
var React = require('react');

/** import components */
var CompetitionList = require('../competitions/competitionList.react');

/** import bootstrap component modules */
var Tabs = require('react-bootstrap/lib/Tabs');
var Tab = require('react-bootstrap/lib/Tab');

/** import modules */
var CompetitionStore = require('../../stores/competitionStore');

function getCompetitionsState(){
  return CompetitionStore.getCompetitions();
}

/** competitions component */
var Competitions = React.createClass({
    mixins: [CompetitionStore.mixin],
    getInitialState() {
        return {
            selectedTab: 1,
            competitions: getCompetitionsState()
        }
    },
    storeDidChange: function(){
        this.setState({
            competitions: getCompetitionsState()
        });
    },
    handleSelect(selectedTab){
      console.log(selectedTab);
        this.setState({
            selectedTab
        });
    },
    render() {
        return (
            <Tabs activeKey={this.state.selectedTab} onSelect={this.handleSelect} id="competitionsTabs">
                <Tab eventKey={1} title="Unpublished"><CompetitionList data={this.state.competitions}/></Tab>
                <Tab eventKey={2} title="Pending"><CompetitionList data={this.state.competitions}/></Tab>
                <Tab eventKey={3} title="Started"><CompetitionList data={this.state.competitions}/></Tab>
                <Tab eventKey={4} title="Finished"><CompetitionList data={this.state.competitions}/></Tab>
            </Tabs>
        );
    }
});

module.exports = Competitions;