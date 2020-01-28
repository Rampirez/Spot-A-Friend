$(document).ready(function() {
  $(document).on("click", "#submitAccount", function(event) {
    event.preventDefault();
    var usernameInput = $("#username").val().trim();
    var passwordInput = $("#password").val().trim();
    var photoInput = $("#photo").val().trim();
    var genderInput = $("#gender").val().trim();
    var bioInput = $("#userBio").val().trim();

    var currentUserInfoCarry = usernameInput;

    

    var newUser = {
      username: usernameInput,
      password: passwordInput,
      imageURL: photoInput,
      gender: genderInput,
      bio: bioInput
    };

    
    localStorage.setItem('currentUser', currentUserInfoCarry);

    submitUser(newUser);

    window.location.href = "/quiz";
  });

  function submitUser(User) {
    $.post("/spotAFriends/users", User, function() {

    });
  }
});
