
// Define initial data points
var _data = {
    "user":"carlos",
    "chats":[
        {"emisor":'carlos', "message": 'What are you right now?'},
        {"emisor":'diego', "message": 'In this moment, i going to Heredia'}
    ]
}

/* get user name and chat messages */
function getChat(){
    return _data; 
}

function addMessage(emisor, message){
    _data.chats.push({"emisor": emisor, "message": message});
}

module.exports = {
    getChat: getChat(),
    addMessage: addMessage
};