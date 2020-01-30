var currentUser = {
  username: localStorage.getItem("currentUser")
};
var myQuiz;
var allQuizzes = [];
var finalFriends;

lookupQuizzes(currentUser);

function lookupMyQuiz(username) {
  $.get("/spotAFriends/quizAnswers/" + username, function(data) {
    if (data) {
      myQuiz = data;
      console.log(myQuiz);
      return data;
    }
  });
}

function lookupQuizzes(currentUser) {
  lookupMyQuiz(currentUser.username);
  $.get("/spotAFriends/quizAnswers/my/" + currentUser.username, function(data) {
    if (data) {
      allQuizzes = data;
      var friends = compareQuizzes(allQuizzes, myQuiz);
      console.log(myQuiz);
      console.log(friends);
      finalFriends = friends;

      $("#friend1").html(
        "<h2>Name: " +
          finalFriends[0].username +
          "<br><br>Friendship Level: " +
          finalFriends[0].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend2").html(
        "<h2>Name: " +
          finalFriends[1].username +
          "<br><br>Friendship Level: " +
          finalFriends[1].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend3").html(
        "<h2>Name: " +
          finalFriends[2].username +
          "<br><br>Friendship Level: " +
          finalFriends[2].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend4").html(
        "<h2>Name: " +
          finalFriends[3].username +
          "<br><br>Friendship Level: " +
          finalFriends[3].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend5").html(
        "<h2>Name: " +
          finalFriends[4].username +
          "<br><br>Friendship Level: " +
          finalFriends[4].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend6").html(
        "<h2>Name: " +
          finalFriends[5].username +
          "<br><br>Friendship Level: " +
          finalFriends[5].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend7").html(
        "<h2>Name: " +
          finalFriends[6].username +
          "<br><br>Friendship Level: " +
          finalFriends[6].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend8").html(
        "<h2>Name: " +
          finalFriends[7].username +
          "<br><br>Friendship Level: " +
          finalFriends[7].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend9").html(
        "<h2>Name: " +
          finalFriends[8].username +
          "<br><br>Friendship Level: " +
          finalFriends[8].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
      $("#friend10").html(
        "<h2>Name: " +
          finalFriends[9].username +
          "<br><br>Friendship Level: " +
          finalFriends[9].friendPoints +
          "</h2><br><button type='button' class='btn btn-primary animated infinite flash slow'><i class='fa fa-envelope'></i> Message them!</button>"
      );
    }
  });
}

function compareQuizzes(allData, myData) {
  var friendMatches = [];
  console.log("--------------------------------");
  console.log(myData);
  console.log("--------------------------------");
  for (var i = 0; i < allData.length; i++) {
    var points = 0;
    if (myData[0].Question1 == allData[i].Question1) {
      points++;
    }
    if (myData[0].Question2 == allData[i].Question2) {
      points++;
    }
    if (myData[0].Question3 == allData[i].Question3) {
      points++;
    }
    if (myData[0].Question4 == allData[i].Question4) {
      points++;
    }
    if (myData[0].Question5 == allData[i].Question5) {
      points++;
    }
    if (myData[0].Question6 == allData[i].Question6) {
      points++;
    }
    if (myData[0].Question7 == allData[i].Question7) {
      points++;
    }
    if (myData[0].Question8 == allData[i].Question9) {
      points++;
    }
    if (myData[0].Question9 == allData[i].Question9) {
      points++;
    }
    if (myData[0].Question10 == allData[i].Question10) {
      points++;
    }
    if (myData[0].Question11 == allData[i].Question11) {
      points++;
    }
    if (myData[0].Question12 == allData[i].Question12) {
      points++;
    }

    friendMatches.push({
      username: allData[i].username,
      friendPoints: points
    });
  }

  friendMatches.sort(function(a, b) {
    return b.friendPoints - a.friendPoints;
  });

  friendMatches = friendMatches.slice(0, 10);

  console.log(friendMatches);
  return friendMatches;
}







