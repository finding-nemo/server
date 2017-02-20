'use strict';
//bring in the http module
const http = require('http');
//create a server instance and assign it to a variable
http.createServer((req, res) => {
  //first response will be the headers using res.writeHead
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  //content to be displayed on the page 
  res.end('Hello World\n');
  //add a listen object with a port number (1333) and a host(127.0.0.1 localhost)
}).listen(1333, '127.0.0.1');