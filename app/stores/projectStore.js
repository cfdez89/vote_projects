/** 
 * App for emit vote to projects 
 * By Carlos Fernandez Jimenez
 * Using ES5, React, McFly(flux), Bootstrap
 * This module is for define project store
 */

/** import libs dependencies */
var Flux = new McFly();

/** define global competitions data */
var _data = {
    projects: [],
    selectedProject: {}
};


function getProjects(){//sobra
    return _data.projects; 
}

function addProject(data){
    _data.projects.push(data);
    console.log('desde store project');
    console.log(_data.projects);
}

function addSelectedProject(data){
    _data.selectedProject = data;
    console.log('desde store selected project');
    console.log(_data.selectedProject);
}


var ProjectStore = Flux.createStore({
    getProjects: function(){
        return _data.projects;
    },
    getProject: function(){
        return _data.selectedProject;
    }

}, function(payload){
    switch(payload.actionType){
        case 'ADD_PROJECT':
            addProject(payload.data);
            ProjectStore.emitChange();
            break; 
        case 'ADD_SELECTED_PROJECT':
            addSelectedProject(payload.data);
            ProjectStore.emitChange();
            break;
    }
});

module.exports = ProjectStore;