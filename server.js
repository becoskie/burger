
var express = require("express");
var bodyParser = require("body-parser");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
var app = express();
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burger_controller.js");
// Serve index.handlebars to the root route.
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
