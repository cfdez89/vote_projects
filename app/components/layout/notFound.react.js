/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show not found page
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap component modules */
var Label = require('react-bootstrap/lib/Label');


/* not found component */
var NotFound = React.createClass({
    setStyles: function(){
        return {
            textAlign: 'center'
        }
    },
    render:function() {
        return (
            <div className="container-fluid">  
                <div className="header small-12 medium-12 large-12 columns" style={this.setStyles()}> 
                    <h1>Error <Label>404</Label></h1>
                    <hr></hr>
                    <h2>The page you are looking for can´t be found</h2>
                </div>
            </div>
        )
    }
});

module.exports = NotFound;