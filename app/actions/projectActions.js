/** 
 * App for emit vote to projects 
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define project actions
 */

/** import libs dependencies */
var Flux = new McFly();

var ProjectActions = Flux.createActions({
    addProject: function(data){
       return {
          actionType: 'ADD_PROJECT',
          data: data
       }
    },
    addSelectedProject: function(data){
       return {
          actionType: 'ADD_SELECTED_PROJECT',
          data: data
       }
    }
});

module.exports = ProjectActions;