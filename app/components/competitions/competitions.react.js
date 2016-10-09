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

/** component global data */
var _data = {
  competitions: [
    {
      title: 'Electronic Competition',
      description: 'Find and share new ideas related to electronics.',
      start_date: '03/11/2016',
      picture: 'app/images/electronic.jpeg'
    },
    {
      title: 'Chemistry Competition',
      description: 'Find and share new ideas related to chemistry.',
      start_date: '12/12/2016',
      picture: 'app/images/chemistry.jpeg'
    }
  ]
};

function getCompetitionsState(){
  return _data.competitions;
}

/** competitions component */
var Competitions = React.createClass({
  getInitialState() {
    return {
        selectedTab: 1,
        competitions: getCompetitionsState()
    }
  },
  handleSelect(selectedTab) {
    this.setState({selectedTab});
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