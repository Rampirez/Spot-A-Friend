
    $(document).ready(function() {
      
      // This WILL work because we are listening on the 'document',
      // for a click on an element with an ID of #test-element
      $(document).on("click", "#newFriend", function(event) {
        event.preventDefault();
        window.location.href = "/setup";
      });

      $(document).on("click", "#logIn", function(event) {
        
        event.preventDefault();
        usernameInput = $("#username")
          .val()
          .trim();
          var passwordInput = $("#password").val().trim();
        $.get("/spotAFriends/users/" + usernameInput + "/" + passwordInput, function(data) {
          if (!data || !data.length) {
            alert("User doesn't exist, please try again.");
          } else {
            var passwordMatch = data[0].password;
            
            if (passwordMatch != true) {
              alert("User exists, password doesn't match.");
            } else {
              localStorage.setItem("currentUser", usernameInput);
              window.location.href = "/home";
            }
          }
        });
      });
    });