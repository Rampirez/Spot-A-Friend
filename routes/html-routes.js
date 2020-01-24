// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/start.html"));
  });

  // Route to the cms page
  app.get("/setup", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/profileSetup.html"));
  });

  // blog route loads blog.html
  app.get("/quiz", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/quiz.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/home.html"));
  });

};
