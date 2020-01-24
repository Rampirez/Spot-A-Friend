$(document).ready(function() {
  var currentUser = localStorage.getItem('currentUser');

  getCurrentUserData(currentUser);
  $(document).on("click", "#shareButton", function(event) {
    event.preventDefault();
    var textInput = $("#textInput");
    var currentUserID = localStorage.getItem("userID");
    var currentUser = localStorage.getItem("currentUser");

    var newPost = {
      text: textInput.val().trim(),
      username: currentUser.val().trim(),
      userID: currentUserID.val().trim()
    };

    console.log(newPost);

    submitPost(newPost);
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
  function getPostData(id) {
    $.get("/spotAFriends/posts/" + id, function(data) {
      if (data) {
        // If this post exists, prefill our cms forms with its data
        titleInput.val(data.title);
        bodyInput.val(data.body);
        postCategorySelect.val(data.category);
        // If we have a post with this id, set a flag for us to know to update the post
        // when we hit submit
        updating = true;
      }
    });
  }
});
