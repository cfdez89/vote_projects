/** 
 * App for emit vote to projects in Fundatec
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define competitions store
 */

/** import libs dependencies */
var Flux = new McFly();

/** define global competitions data */
var _data = {
    competitions: [],
    selectedCompetition: {}
};


function getCompetitions(){
    return _data.competitions; 
}

function addCompetition(data){
    _data.competitions.push(data);
    console.log('desde store compe');
    console.log(_data.competitions);
}

function addSelectedCompetition(data){
    _data.selectedCompetition = data;
    console.log('desde store selected');
    console.log(_data.selectedCompetition);
}


var CompetitionStore = Flux.createStore({
    getCompetitions: function(){
        return _data.competitions;
    },
    getCompetition: function(){
        return _data.selectedCompetition;
    }

}, function(payload){
    switch(payload.actionType){
        case 'ADD_COMPETITION':
            addCompetition(payload.data);
            CompetitionStore.emitChange();
            break; 
        case 'ADD_SELECTED_COMPETITION':
            addSelectedCompetition(payload.data);
            CompetitionStore.emitChange();
            break;
    }
});

module.exports = CompetitionStore;

