/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show all projects
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap component modules */
var Grid = require('react-bootstrap/lib/Grid');
var Row = require('react-bootstrap/lib/Row');


/** import components */
var ProjectItem = require('../projects/ProjectItem.react');


/* project list component */
var ProjectList = React.createClass({
    renderProjectItem:function(project){
        return <ProjectItem  key={project} index={project} data={this.props.data[project]} />
    },
    render:function(){
        return (
            <Grid>
                <Row>
                    <br></br>
                    {Object.keys(this.props.data).map(this.renderProjectItem)}
                    <br></br>
                </Row>
            </Grid>
        )
    }
});

module.exports = ProjectList;