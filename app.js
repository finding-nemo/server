'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  res.writeHead(200, { 'Content-Type': 'text/html' });
  //add encoding 'utf8' because fs.readFileSync returns a buffer by default. We need to convert the buffer to a string so we can manipulate it BEFORE we pass it to the response (res).
  let html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
  //create a variable that holds a string of data
  let message = 'Hello World...';
  //use the .replace method to replace the placeholder {Message} with the variable that was created. This is where we manipulate the string data that we will pass to res.end().
  html = html.replace('{Message}', message);
  res.end(html);

}).listen(1333, '127.0.0.1');