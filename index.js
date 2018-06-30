
var express = require('express');
var app = express();
let bodyparser = require('bodyparser');
app = require('./routes/')(app);

let db = require('./db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// // set the view engine to ejs
// app.set('view engine', 'ejs');

// // make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));

// // set the home page route
// app.get('/', function(req, res) {

//     // ejs render automatically looks in the views folder
//     return res.json({hello:"world"});
// });

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});


