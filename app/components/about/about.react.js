/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show about page
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap component modules */
var Col = require('react-bootstrap/lib/Col');
var Form = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
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
                    <h1>About Vote app</h1>
                    <hr></hr>
                    <h3>Developed by <Label>Carlos Fernandez Jimenez</Label></h3>
                    <h4>With React JS Tecnology</h4>
                    <h4>Version 1.0</h4>
                    <h4>2016</h4>
                </div>
            </div>
        )
    }
});

module.exports = About;