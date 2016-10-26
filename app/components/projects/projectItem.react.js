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

/* project item component */
var ProjectItem = React.createClass({
    render:function(){
        return (
            <Col xs={12} md={6} lg={4}>
                <Thumbnail>
                    <Image src={this.props.data.picture} alt="242x200" rounded />
                    <br></br>
                    <h3>{this.props.data.name}</h3>
                    <p>Description: {this.props.data.short_description}</p>
                    <span>
                        <Link to={'/competitions/'+this.props.data.competitionId+'/projects/'+this.props.data.id}>View project</Link>
                    </span>  
                </Thumbnail>
             </Col>
        )
    }
});

module.exports = ProjectItem;