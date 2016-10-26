/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show about page
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap component modules */
var Label = require('react-bootstrap/lib/Label');


/* about component */
var About = React.createClass({
    setStyles: function(){
        return {
            textAlign: 'center'
        }
    },
    render:function() {
        return (
            <div className="container-fluid">  
                <div className="header small-12 medium-12 large-12 columns" style={this.setStyles()}> 
                    <h1>About Vote</h1>
                    <hr></hr>
                    <h3>Developed by <Label>Carlos Fernández Jiménez</Label></h3>
                    <h4>With React JS Tecnology</h4>
                    <h4>Version 1.0</h4>
                    <h4>2016</h4>
                </div>
            </div>
        )
    }
});

module.exports = About;