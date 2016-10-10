/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show signup page
 */

/** import libs dependencies */
var React = require('react');

/** import bootstrap component modules */
var Col = require('react-bootstrap/lib/Col');
var Form = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var FormControl = require('react-bootstrap/lib/FormControl');
var Button = require('react-bootstrap/lib/Button');
/** import components */


function getSignupState(){
    return {};
}

/* signup component */
var SignUp = React.createClass({
    getInitialState: function(){
        return getSignupState();
    },
    render:function() {
        return (
            <div className="container-fluid">  
                <div className="header small-12 medium-12 large-12 columns"> 
                    <h1>SignUp</h1>
                    <br></br>
                </div>
                <div>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={4} md={4} lgOffset={4} lg={4}>
                                <FormControl type="text" placeholder="Username" />
                                <br></br>
                                <FormControl type="password" placeholder="Password" />
                                <br></br>
                                <FormControl type="password" placeholder="Confirm password" />
                                <br></br>
                                <Button bsStyle="primary">Register</Button>
                                <br></br>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
});

module.exports = SignUp;