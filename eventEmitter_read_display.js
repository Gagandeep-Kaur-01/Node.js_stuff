//Create/Read/write event using eventemitter:

var events = require("events"); //imported events
var fs = require('fs');  //imported fs

var eventsEmitter = new events.EventEmitter();
//created an object of event emitter class

eventsEmitter.on('read',readFileContent); 
//Binded "read" event with "readFileContent" Event Handler function
//using on() method of EventEmitter class.

eventsEmitter.on('display',displayFileContent);
//Binded "display" event with "displayFileContent" Event Handler function
//using on() method of EventEmitter class.

eventsEmitter.on('finished',finished);
//Binded "finished" event with "finished" Event Handler function 
//using on() method of EventEmitter class.

eventsEmitter.emit('read','student_1.json');
// raised a "read" event by passing filename "student_1.json" 
//as input using emit( method of EventEmitter class)"

function readFileContent(fileName){
    console.log("Reading " + fileName + " file started:");
    fs.readFile(fileName, 'utf8', readFile);
}

function  displayFileContent(data){
    console.log("File Data:");
    console.log(data);
    eventsEmitter.emit('finished');
}

function finished(){
  console.log("Reading and Printing File content job is done successfully.");
}

function readFile(err,data,fileName) {
    console.log("Reading " + fileName + " file done successfully.");
    eventsEmitter.emit('display',data);
}
