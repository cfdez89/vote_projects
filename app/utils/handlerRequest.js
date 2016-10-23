/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for handler request
 */

/** import libs dependencies */
var $ = require('jquery');

function getJson(url){
    return $.ajax({
        url: url,
        method: 'GET'
    });
}

function postJson(url, data){
    return $.ajax({
        url: url,
        data: data,
        method: 'POST'
    });  
}

function putJson(url, data){
    return $.ajax({
        url: url,
        data: data,
        method: 'PUT'
    });
}

function deleteJson(url){
    return $.ajax({
        url: url,
        method: 'DELETE'
    });
}

module.exports = {
    get: getJson,
    post: postJson,
    put: putJson,
    delete: deleteJson
};

 /*
    $.get(url, data, function(response) {
        return response;
    });*/
/*
$.get('/api/humans', function (result) {
      for (var key in result) {
        for(var conv in result[key].conversations){
          result[key].conversations[conv].time = new Date(result[key].conversations[conv].time)
        }
      }
      this.setState({'humans': result});
      db = this.state;
    }.bind(this));
    */