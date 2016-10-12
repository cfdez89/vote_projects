/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define competitions store
 */

/** import libs dependencies */
var Flux = new McFly();

/** define global competitions data */
var _competitions = [];

function getCompetitions(){
    return _competitions; 
}

function addCompetition(data){
    _competitions.push(data);
    console.log('desde store');
    console.log(_competitions);
}


var CompetitionStore = Flux.createStore({
    getCompetitions: function(){
        return _competitions;
    }

}, function(payload){
    switch(payload.actionType){
        case 'ADD_COMPETITION':
            addCompetition(payload.data);
            CompetitionStore.emitChange();
            break; 
    }
});

module.exports = CompetitionStore;

