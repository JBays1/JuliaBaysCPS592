// In the terminal to run locally: $ node local.js
// Name: Julia Bays
// Overview: in this file we run express,socket.io, and JQuery to run/test progrm locally on personal machine
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static(__dirname));

app.get('/', (request, response) => {
    console.log("Got an HTTP request");
    response.sendFile(path.join(__dirname, '/index.html'));
});

io.on("connection", (socketclient) => {
    console.log("A new Socket.io client is connected. ID= " + socketclient.id);
});

// Can view locally in port 8080
const port = process.env.PORT || 8080;
var server = http.listen(port, () => {
    console.log(`App listening on port ${server.address().port}`);
});

