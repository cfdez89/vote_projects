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

/** import bootstrap component modules */
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');
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
                        <Nav pullRight>
                            <NavItem eventKey={1} href="/">Home</NavItem>
                            <NavItem eventKey={2} href="#">Sign up</NavItem>
                            <NavItem eventKey={3} href="/login">Log in</NavItem>
                            <NavItem eventKey={4} href="#">About</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>
        )
    }
});

module.exports = NavMenu;