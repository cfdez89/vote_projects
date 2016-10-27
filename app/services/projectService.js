/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define project service
 */

/** import modules */

var ProjectActions = require('../actions/projectActions');
var Request = require('../utils/handlerRequest');

var _baseUrl = 'http://vote-api-cfdez89-1.c9users.io';

function getProjects(id){
    var url = _baseUrl + '/api/competitions/'+id+'/projects';
    Request.get(url)
    .success(function(response){
        var projects = JSON.parse(response);
            //response.status? console.log("bueno"):console.log("malo") ;
        for(var i=0; i<projects.data.length; i++){
            ProjectActions.addProject(projects.data[i]);
            
        }
    })
    .fail(function(response){
       console.log('error...'); 
    });
}

function getProject(id){/*
    console.log(id);
    var url = _baseUrl + '/api/competitions/' + id;
    Request.get(url)
    .success(function(response){
        var competition = JSON.parse(response);
            //response.status? console.log("bueno"):console.log("malo") ;
             console.log('desde servicio');
       console.log(competition);
        CompetitionActions.addSelectedCompetition(competition.data);
        
    })
    .fail(function(response){
       console.log('error...'); 
    });*/
}



module.exports = {
    getProjectsData: getProjects,
    getProjectData: getProject
};