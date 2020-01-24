$(document).ready(function() {
  var currentUser = localStorage.getItem("currentUser");

  getCurrentUserData(currentUser);
  getPostData();

  $(document).on("click", "#shareButton", function(event) {
    event.preventDefault();
    var textInput = $("#textInput").val().trim();
    var currentUser = localStorage.getItem("currentUser");

    var newPost = {
      text: textInput,
      username: currentUser
    };

    console.log(newPost);

    submitPost(newPost);
    location.reload();
  });

  function submitPost(Post) {
    $.post("/spotAFriends/posts", Post, function() {});
  }
  function getCurrentUserData(username) {
    $.get("/spotAFriends/users/" + username, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        $("#currentUser").text("@" + data[0].username);
        console.log(data);
      }
    });
  }
  function getPostData() {
    $.get("/spotAFriends/posts", function(data) {
      if (data) {
        for (var i = 0; i < data.length; i++) {
          $("#appendCard").prepend(
            '<div class="card gedf-card"><div class="card-header"><div class="d-flex justify-content-between align-items-center"><div class="d-flex justify-content-between align-items-center"><div class="mr-2"><img class="rounded-circle" width="45" src="" alt="" /></div><div class="ml-2"><div class="h5 m-0">@' +
              data[i].username +
              '</div></div></div></div></div><div class="card-body"><div class="text-muted h7 mb-2"><i class="fa fa-clock-o"></i>' +
              data[i].createdAt +
              '</div><p class="card-text">' +
              data[i].text +
              "</p></div></div>"
          );
        }
      }
    });
  }
});
