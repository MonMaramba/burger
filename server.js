var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

//to serve static content for the app from the public directory
app.use(express.static("./public"));

//To parse application from  www-form-url-encoded
app.use(bodyParser.urlencoded({ extended: true}));
// To parse json objects
app.use(bodyParser.json());

// handlebars setup
var exphbs = require("express-handlebars");


app.engine("handlebars", exphbs({ dafaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

//To start the server and listen to client requests
app.listen(PORT, function(){
    // Server-side logging for when server starts
    console.log("Server listening on: http://localhost: " + PORT);
});