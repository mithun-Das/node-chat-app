const path = require('path');
const publicPath = path.join( __dirname , '../public');
const port = process.env.PORT || 3000 ;
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
// var server = http.createServer(function(req,res) {
//
// });

var app = express();
var server = http.createServer(app);
var io = socketIO(server);
// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

var userNumber = 0;
io.on("connection", (socket) => {
      userNumber = userNumber + 1;
      console.log("New user Connected.Now total user = ",userNumber );

      socket.emit('newEmail', {
          from : "mithun",
          text : "Hey!!! What's up",
          createdAt: 1234
      });

      socket.on('createEmail', (newEmail) => {
          console.log("New Email : ", newEmail);
      });

      socket.on('createMessage', (message) => {
          console.log('createMessage', message);
      });

      socket.emit("newMessage", (message) => {
          console.log("New Message : ", message);
      });

      socket.on("disconnect", () => {
          console.log("User is disconnected");
      });

});

console.log(publicPath);

server.listen(port, () => {
    console.log("Server running at port ", port);
});

app.use(express.static(publicPath));
