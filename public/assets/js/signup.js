$(document).ready(function() {
    const signUpBtn = $("");
    const userEmail = $("");
    const userPassword = $("");
    const isTrainer = $("");
    // THIS IS WHERE I STOPPED

    signUpBtn.on("click", function(event) {
        event.preventDefault();
        let newUser = {
            email: userEmail.val().trim(),
            password: userPassword.val().trim(),
            trainer: isTrainer.val()
        };

        if(!newUser.email || !newUser.password) {
            return alert("email and passsword fields are required");
        };

        newUserSignUp(newUser.email, newUser.password);
       // userEmail.val("");
      //  userPassword.val("");
        
    });

    function newUserSignUp(email, password) {
        $.post("api/signup", {
            email: email,
            password: password
        }).then(function(data) {
            console.log("redirect to trainer or client page now")
          //  window.location.replace("/welcomepage");
        }).catch(handleErr);
    };

    function handleErr(err) {
        console.log(err)
    };
});