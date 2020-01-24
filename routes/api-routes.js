// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the todos
  app.get("/spotAFriends/posts", function(req, res) {
    // Write code here to retrieve all of the todos from the database and res.json them
    // back to the user
    db.Post.findAll({ order: [['createdAt', 'ASC']]}).then(function(data) {
      res.json(data);
    });
  }); 

  app.get("/spotAFriend/posts/:userID", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Post.findAll({
      where: {
        userID: req.params.userID
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // POST route for saving a new todo. We can create todo with the data in req.body
  app.post("/spotAFriends/posts", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Post.create({
      text: req.body.text,
      username: req.body.username,
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/spotAFriends/users", function(req, res) {
    // Write code here to create a new todo and save it to the database
    // and then res.json back the new todo to the user
    db.Users.create({
      username: req.body.username,
      password: req.body.password,
      photo: req.body.photo,
      gender: req.body.gender
    }).then(function(data) {
      res.json(data);
    });
  });

  app.get("/spotAFriends/users/:username", function(req, res) {
    // Add sequelize code to find all posts where the category is equal to req.params.category,
    // return the result to the user with res.json
    db.Users.findAll({
      where: {
        username: req.params.username
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
