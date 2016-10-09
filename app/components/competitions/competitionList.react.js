/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show all competitions by status
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap component modules */
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');

/** import components */
var CompetitionItem = require('../competitions/competitionItem.react');


/* competition list component */
var CompetitionList = React.createClass({
    renderCompetitionItem:function(competition){
        return <CompetitionItem  key={competition} index={competition} data={this.props.data[competition]} />
    },
    render:function(){
        return (
            <Grid>
                <Row>
                    <br></br>
                    {Object.keys(this.props.data).map(this.renderCompetitionItem)}
                    <br></br>
                </Row>
            </Grid>
        )
    }
});

module.exports = CompetitionList;