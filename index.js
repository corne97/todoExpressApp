const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server (server);


app.get('/', (req, res) =>{
res.sendFile(__dirname + '/index.html');
});

io.on('connection', (Socket)=> {
console.log('a user has been connected');
});

server.listen(3000, ()=>{
    console.log('listening in *:3000');
});