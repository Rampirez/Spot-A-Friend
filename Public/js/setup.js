$(document).ready(function() {
  $(document).on("click", "#submitAccount", function(event) {
    event.preventDefault();
    var usernameInput = $("#username");
    var passwordInput = $("#password");
    var photoInput = $("#photo");
    var genderInput = $("#gender");

    var newUser = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
      photo: photoInput.val(),
      gender: genderInput.val().trim()
    };

    console.log(newUser);

    submitUser(newUser);

    window.location.href = "/quiz";
  });

  function submitUser(User) {
    $.post("/spotAFriends/users", User, function() {
        
    });
  }
});
