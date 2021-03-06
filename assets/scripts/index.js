'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
const authEvents = require('./auth/events.js');
const choreEvents = require('./chores/events.js');

$( function() {
  authEvents.addHandlers();
  choreEvents.addHandlers();
});
