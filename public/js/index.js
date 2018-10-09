var socket = io();

socket.on("connect", function() {
    console.log("connected to server");

    // socket.emit('createEmail', {
    //     to : "micheal@gmail.com",
    //     text : "Hey Buddy"
    // });

    socket.emit("createMessage", {
        from : "Andrew",
        text : "hey Dude"
    });
});

socket.on("disconnect", function() {
    console.log("disconnected to server");
});

// socket.on('newEmail', function(email) {
//     console.log("New Email ", email);
// });

socket.on('newMessage', function(message) {
    console.log("New Message ", message);
});
