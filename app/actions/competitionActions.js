/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define competitions actions
 */

/** import libs dependencies */
var Flux = new McFly();

var CompetitionActions = Flux.createActions({
    addCompetition: function(data){
       return {
          actionType: 'ADD_COMPETITION',
          data: data
       }
    },
    addSelectedCompetition: function(data){
       return {
          actionType: 'ADD_SELECTED_COMPETITION',
          data: data
       }
    }
});

module.exports = CompetitionActions;