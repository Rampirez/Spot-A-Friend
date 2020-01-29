// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");
var bcrypt = require("bcryptjs");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all posts made by all users from the most recent to least
  app.get("/spotAFriends/posts", function(req, res) {
    db.Post.findAll({ order: [["createdAt", "ASC"]] }).then(function(data) {
      res.json(data);
    });
  });

  //GET route for all posts made by a specific user
  //currently not in use
  app.get("/spotAFriend/posts/:userID", function(req, res) {
    db.Post.findAll({
      where: {
        userID: req.params.userID
      }
    }).then(function(data) {
      res.json(data);
    });
  });

  // POST route for posting a text post. Must be editted to include song posts.
  app.post("/spotAFriends/posts", function(req, res) {
    db.Post.create({
      text: req.body.text,
      username: req.body.username,
      spotifyURL: req.body.spotifyURL
    }).then(function(data) {
      res.json(data);
    });
  });


  //POST route used for creating a new user
  app.post("/spotAFriends/users", function(req, res) {
    //bcryptjs code to hash passwords saved in database
    //-----------------------------------------------------------
    var salt = bcrypt.genSaltSync(10);
    var hashedPassword = bcrypt.hashSync(req.body.password, salt);
    //-----------------------------------------------------------
    db.Users.create({
      username: req.body.username,
      password: hashedPassword,
      imageURL: req.body.imageURL,
      gender: req.body.gender,
      bio: req.body.bio
    }).then(function(data) {
      res.json(data);
    });
  });

  app.post("/spotAFriends/quizAnswers", function(req, res) {
    db.quizAnswers.create({
      username: req.body.username,
      Question1: req.body.Question1,
      Question2: req.body.Question2,
      Question3: req.body.Question3,
      Question4: req.body.Question4,
      Question5: req.body.Question5,
      Question6: req.body.Question6,
      Question7: req.body.Question7,
      Question8: req.body.Question8,
      Question9: req.body.Question9,
      Question10: req.body.Question10,
      Question11: req.body.Question11,
      Question12: req.body.Question12
    }).then(function(data) {
      res.json(data);
    });
  });


  //GET Route to login from the start page
  app.get("/spotAFriends/users/:username/:password", function(req, res) {
    db.Users.findAll({
      where: {
        username: req.params.username
      }
    }).then(function(data) {
      // This code compares the hashed password saved in the database.
      // If the password is correct, it returns a "true" variable in place of
      // the password.
      var passwordMatch = bcrypt.compareSync(req.params.password, data[0].password);
      if (passwordMatch != true){
        data[0].password = false;
      }
      else {
        data[0].password = true;
      }
      res.json(data);
    });
  });

  // GET Route to aquire a user using only the username, not password.
  app.get("/spotAFriends/users/:username", function(req, res) {
    db.Users.findAll({
      where: {
        username: req.params.username
      }
    }).then(function(data) {
      res.json(data);
    });
  });
};
