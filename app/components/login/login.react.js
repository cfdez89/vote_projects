/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show login page
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
var Title = require('../common/title.react');

function getLoginState(){
    return {};//LoginStore.getLogin;
}

/**
 *  {
      title: 'Voto electrónico',
      description: 'Realizar el voto de manera electrónica para reducir tiempos de espera.',
      start_date: '03/11/2016',
      picture: 'app/images/electronic.jpeg'
    },
    {
      title: 'Tabla periodica',
      description: 'Realizar una aplicación móvil para aprender sobre los elementos químicos.',
      start_date: '12/12/2016',
      picture: 'app/images/chemistry.jpeg'
    }
 */

/* login component */
var LogIn = React.createClass({
    getInitialState: function(){
        return getLoginState();
    },
    render:function() {
        return (
            <div className="container-fluid">  
                <div className="header small-12 medium-12 large-12 columns"> 
                    <Title title='Log In'/>
                </div>
                <div>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col xsOffset={2} xs={8} smOffset={3} sm={6} mdOffset={4} md={4} lgOffset={4} lg={4}>
                                <FormControl type="text" placeholder="Username" />
                                <br></br>
                                <FormControl type="password" placeholder="Password" />
                                <br></br>
                                <Button bsStyle="primary">Enter</Button>
                                <br></br>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        )
    }
});

module.exports = LogIn;