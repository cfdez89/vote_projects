/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is the home page component
 */

/** import libs dependencies */

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/** import bootstrap component modules */
var Jumbotron = require('react-bootstrap/lib/Jumbotron');

/** import components */
var Competitions = require('../competitions/competitions.react');


/** home component */
var Home = React.createClass({
    getInitialState: function(){
        return {

        }
    },
    setStyles: function(){
        return {
            textAlign: 'center'
        }
    },
    render: function(){
        return (
            <div className="container-fluid">
                <Jumbotron style={this.setStyles()}>
                    <h1>Competitions</h1>
                    <p>You can see all competitions by status here.</p>
                </Jumbotron>
                <Competitions/>
            </div>
        )
    }
});

module.exports = Home;