
/* import dependencies */
import React from 'react';

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


/* Footer component */
var Footer = React.createClass({
    render:function(){
        return (
            <footer className="container-fluid">
                <div className="footer">
                    <div className="footer-container">
                        <br></br>
                        <p className="footer-title">Vote projects</p>
                        <br></br>
                        <p className="footer-links">
                            <span>
                                <Link to="/">Home</Link> 
                            </span> 
                            -·-
                            <span>
                                <Link to="/signup">Sign up</Link> 
                            </span> 
                            -·- 
                            <span>
                                <Link to="/login">Log in</Link> 
                            </span> 
                            -·- 
                            <span>
                                <Link to="/about">About</Link> 
                            </span> 
                        </p>
                        <br></br>
                        <p className="footer-copyright">Vote projects &copy; 2016</p>
                        <br></br>
                    </div>
                </div>
            </footer>
        )
    }
});

module.exports = Footer;