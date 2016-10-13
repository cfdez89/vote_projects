/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is the navigation component
 */

/** import libs dependencies */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var IndexLink = ReactRouter.IndexLink;

/** import bootstrap component modules */
var Navbar = require('react-bootstrap/lib/Navbar');
var NavDropdown = require('react-bootstrap/lib/NavDropdown');
var MenuItem = require('react-bootstrap/lib/MenuItem');

/** navigation component */
var NavMenu = React.createClass({
    getInitialState: function(){
        return {}
    },
    render:function(){
        return (
            <nav className="container-fluid">
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                        <a href="#">Vote</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <ul className="nav navbar-nav navbar-right">
                            <li><IndexLink to="/">Home</IndexLink></li>
                            <li><Link to="/signup">Sign up</Link></li>
                            <li><Link to="/login">Log in</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        )
    }
});

module.exports = NavMenu;