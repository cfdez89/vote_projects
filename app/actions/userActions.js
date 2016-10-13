/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define user actions
 */

/** import libs dependencies */
var Flux = new McFly();

var UserActions = Flux.createActions({
    addUser: function(data){
       return {
          actionType: 'ADD_USER',
          data: data
       }
    },
    updateUserStatus: function(data){
        return {
            actionType: 'UPDATE_USER_STATUS',
            data: data
        }
    }
});

module.exports = UserActions;