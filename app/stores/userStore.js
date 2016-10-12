/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define user store
 */

/** import libs dependencies */
var Flux = new McFly();

/** define global user data */
var _user = {
    username:'',
    password:'',
    confirmPassword:''
}

function getUser(){
    return _user; 
}

function addUser(data){
    console.log('desde store');
    console.log(data);
    _user.username = data.username;
    _user.password = data.password;
    _user.confirmPassword = data.confirmPassword;
}

var UserStore = Flux.createStore({
    getUser: function(){
        return _user;
    }

}, function(payload){
    switch(payload.actionType){
        case 'ADD_USER':
            addUser(payload.data);
            UserStore.emitChange();
            break; 
    }
});

module.exports = UserStore;