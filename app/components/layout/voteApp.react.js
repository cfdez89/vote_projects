/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is the app controller view
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap components module */
var NavMenu = require('../layout/navMenu.react');
var Home = require('../home/home.react');


/** main controller view component */
var VoteApp = React.createClass({
    getInitialState: function(){
        return {}
    },
    render:function(){
        return (
            <div>
                <NavMenu/>
                <Home/>
            </div>
        )
    }
});

module.exports = VoteApp;