var express = require('express')
var app = express()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

// You should create a public directory in your project folder and
// place all your static files there and the below app.use() will
// serve all files and sub-directories contained within it.
app.use('', express.static(__dirname));

app.get('/', (request, response) => {
    console.log("Got an HTTP request")
    response.sendFile(__dirname + '/index.html')
})

io.on("connection", (socketclient) => {
    console.log("A new Socket.io client is connected. ID= " + socketclient.id);
});



const port = process.env.PORT || 8080
var server = http.listen(port, () => {
        console.log(`App listening on port ${server.address().port}`)
})
    

