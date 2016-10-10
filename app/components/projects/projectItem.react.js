/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show specified project
 */

/** import libs dependencies */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/** import bootstrap component modules */
var Thumbnail = require('react-bootstrap/lib/Thumbnail');
var Image = require('react-bootstrap/lib/Image');
var Col = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');

/* competition item component */
var CompetitionItem = React.createClass({
    render:function(){
        return (
            <Col xs={12} md={6} lg={4}>
                <Thumbnail>
                    <Image src={this.props.data.picture} alt="242x200" rounded />
                    <br></br>
                    <h3>{this.props.data.title}</h3>
                    <p>Description: {this.props.data.description}</p>
                    <p>Start date at: {this.props.data.start_date}</p>
                    <span>
                        <Link to={'/competitions/'+this.props.data.id+'/projects' }>View projects</Link>
                    </span>  
                </Thumbnail>
             </Col>
        )
    }
});

module.exports = CompetitionItem;/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for show specified competition
 */

/** import libs dependencies */
var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

/** import bootstrap component modules */
var Thumbnail = require('react-bootstrap/lib/Thumbnail');
var Image = require('react-bootstrap/lib/Image');
var Col = require('react-bootstrap/lib/Col');
var Button = require('react-bootstrap/lib/Button');

/* competition item component */
var CompetitionItem = React.createClass({
    render:function(){
        return (
            <Col xs={12} md={6} lg={4}>
                <Thumbnail>
                    <Image src={this.props.data.picture} alt="242x200" rounded />
                    <br></br>
                    <h3>{this.props.data.title}</h3>
                    <p>Description: {this.props.data.description}</p>
                    <p>Start date at: {this.props.data.start_date}</p>
                    <span>
                        <Link to={'/competitions/'+this.props.data.id+'/projects' }>View projects</Link>
                    </span>  
                </Thumbnail>
             </Col>
        )
    }
});

module.exports = CompetitionItem;