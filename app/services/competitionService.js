/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define competitions service
 */

/** import modules */

var CompetitionActions = require('../actions/competitionActions');
var Request = require('../utils/handlerRequest');

var baseUrl = 'http://vote-api-cfdez89-1.c9users.io';

function getCompetitions(){
    var url = baseUrl + '/api/competitions';
    Request.get(url)
    .success(function(response){
            //response.status? console.log("bueno"):console.log("malo") ;
        for(var i=0; i<response.data.length; i++){
            CompetitionActions.addCompetition(response.data[i]);
            
        }
    })
    .fail(function(response){
       console.log('error...'); 
    });
}



module.exports = {
    getCompetitionData: getCompetitions
};