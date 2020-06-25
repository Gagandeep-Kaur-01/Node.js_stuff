//Write file event using eventemitter:

var fs = require('fs');  //imported fs
var events = require('events');
var eventEmitter = new events.EventEmitter();
//const fs = require('fs');

var stu = function stu()  {
let student = {
	name : 'Sonakshi',
	age: 23,
	gender: 'Male',
	department: 'English',
	car: 'Honda'
};


let data = JSON.stringify(student, null, 2);
fs.writeFileSync('student.json',data);
}
eventEmitter.addListener('connection', stu);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Student file listening to connection event");

// Fire the connection event
eventEmitter.emit('connection');

// Remove the binding of listner1 function
eventEmitter.removeListener('connection', stu);
console.log("Student file will not listen now.");

// Fire the connection event
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Student file listening to connection event");

console.log("Program Ended.");
