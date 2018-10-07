const path = require('path');
const publicPath = path.join( __dirname , '../public');

const express = require('express');
var app = express();

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now());
//   next();
// });

console.log(publicPath);

app.listen(3000, () => {
    console.log("Server running at port ", 3000);
});

app.use(express.static(publicPath));
