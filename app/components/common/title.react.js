/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show main page title 
 */

/** import libs dependencies */
var React = require('react');

/** title component */
var Title = React.createClass({
    setStyles: function(){
        return {
            textAlign: 'center'
        }
    },
    render() {
        return (
            <div style={this.setStyles()}>
                <h1>{this.props.title}</h1>
                <hr></hr>
                <br></br>
            </div>
        );
    }
});

module.exports = Title;