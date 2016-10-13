/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define user service
 */

/** import modules */

var UserActions = require('../actions/userActions');
var Request = require('../utils/handlerRequest');

var _baseUrl = 'http://vote-api-cfdez89-1.c9users.io';

function addUser(data){
    var url = _baseUrl + '/api/signup';
    Request.post(url, data)
    .success(function(response){
        //var competitions = JSON.parse(response);
            //response.status? console.log("bueno"):console.log("malo") ;
            console.log('desde service');
            console.log(response.success);
        UserActions.updateUserStatus(response.success);
    })
    .fail(function(response){
       console.log('error...'); 
    });
}



module.exports = {
    addUserData: addUser
};