/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define competitions service
 */

/** import modules */

var CompetitionActions = require('../actions/competitionActions');
var Request = require('../utils/handlerRequest');

var _baseUrl = 'http://vote-api-cfdez89-1.c9users.io';

function getCompetitions(){
    var url = _baseUrl + '/api/competitions';
    Request.get(url)
    .success(function(response){
        var competitions = JSON.parse(response);
            //response.status? console.log("bueno"):console.log("malo") ;
        for(var i=0; i<competitions.data.length; i++){
            CompetitionActions.addCompetition(competitions.data[i]);
            
        }
    })
    .fail(function(response){
       console.log('error...'); 
    });
}

function getCompetition(id){
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
    });
}



module.exports = {
    getCompetitionsData: getCompetitions,
    getCompetitionData: getCompetition
};