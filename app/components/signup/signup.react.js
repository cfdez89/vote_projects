/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show signup page
 */

/** import libs dependencies */
var React = require('react');
var ReactRouter = require('react-router');
var BrowserHistory = ReactRouter.browserHistory;

/** import bootstrap component modules */
var Col = require('react-bootstrap/lib/Col');
var Form = require('react-bootstrap/lib/Form');
var FormGroup = require('react-bootstrap/lib/FormGroup');
var Button = require('react-bootstrap/lib/Button');
/** import components */

/** import modules */
var UserStore = require('../../stores/userStore');
var UserActions = require('../../actions/userActions'); 
var UserService = require('../../services/userService');


function getSignupState(){
    return UserStore.getUser();
}

/* signup component */
var SignUp = React.createClass({
    mixins: [UserStore.mixin],
    getInitialState: function(){
        return getSignupState();
    },
    storeDidChange: function() {
        this.setState(getSignupState());
        this.verifyUserCredentials(this.state.isValid);
    },
    handleUsernameInput: function(event){
        event.preventDefault();
        UserActions.addUser({
            username: event.target.value,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        });
    },
    handlePasswordInput: function(event){
        event.preventDefault();
        UserActions.addUser({
            username: this.state.username,
            password: event.target.value,
            confirmPassword: this.state.confirmPassword
        });
    },
    handleConfirmPasswordInput: function(event){
        event.preventDefault();
        UserActions.addUser({
            username: this.state.username,
            password: this.state.password,
            confirmPassword: event.target.value
        });
    },
    verifyUserCredentials: function(status){
        status? BrowserHistory.push('/login'): console.log('Not valid');
    },
    signUp: function(event){
        event.preventDefault();
        UserService.addUserData(this.state);
       // this.refs.username.value = '';
        //this.refs.password.value = '';
        //this.refs.confirmPassword.value = '';
    },
    render:function() {
        return (
            <div className="container-fluid">  
                <div className="header small-12 medium-12 large-12 columns"> 
                    <h1>Sign Up</h1>
                    <hr></hr>
                    <br></br>
                </div>
                <div>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={4} md={4} lgOffset={4} lg={4}>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Username" 
                                    ref="username" 
                                    defaultValue={this.state.username}
                                    onChange={this.handleUsernameInput} 
                                    required={true}
                                />
                                <br></br>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Password" 
                                    ref="password"
                                    defaultValue={this.state.password}
                                    onChange={this.handlePasswordInput} 
                                    required={true}
                                />
                                <br></br>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    placeholder="Confirm password" 
                                    ref="confirmPassword"
                                    defaultValue={this.state.confirmPassword}
                                    onChange={this.handleConfirmPasswordInput} 
                                    required={true}
                                    />
                                <br></br>
                                <Button 
                                    bsStyle="primary" 
                                    onClick={this.signUp}
                                    required={true}>
                                    Register
                                </Button>
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