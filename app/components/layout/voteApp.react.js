/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is the app controller view
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap components module */
var Navigation = require('../layout/navigation.react');
var Footer = require('../layout/footer.react');


/** main controller view component */
var VoteApp = React.createClass({
    getInitialState: function(){
        return {}
    },
    render:function(){
        return (
            <div>
                <Navigation/>
                <div className="content">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
});

module.exports = VoteApp;