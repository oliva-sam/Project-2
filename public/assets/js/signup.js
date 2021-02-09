console.log("hi");

$(document).ready(function () {
  //////////// SIGN UP  ////////////
  const signUpBtn = $("form.signup");
  const userEmail = $("input#email-input");
  const userPassword = $("input#password-input");
  // let isTrainer = $("input#checkbox-input")[0].checked;

  signUpBtn.on("submit", function (event) {
    event.preventDefault();
    let newUser = {
      email: userEmail.val().trim(),
      password: userPassword.val().trim(),
      // goals: "15 min. walk",
    };

    if (!newUser.email || !newUser.password) {
      return alert("email and password fields are both required");
    }

    // console.log(newUser.email);
    // console.log(newUser.password);

    newUserSignUp(newUser.email, newUser.password);
    userEmail.val("");
    userPassword.val("");
    // code to reset checkbox TBD
  });

  function newUserSignUp(email, password, goals) {
    $.post("/signup", {
      email: email,
      password: password,
      // goals: goals,
    })
      .then(function (data) {
        console.log("redirect to client page now");
        window.location.replace("/client");
      })
      .catch(function (err) {
        console.log(err);
        alert("You already have an account");
      });
  }

  //////////// LOG IN ////////////
  const tloginBtn = $("form.login");

  tloginBtn.on("submit", function (event) {
    event.preventDefault();
    const emailLog = $("input#emailLog-input");
    const passwordLog = $("input#passwordLog-input");

    let clientData = {
      email: emailLog.val().trim(),
      password: passwordLog.val().trim(),
    };

    if (!clientData.email || !clientData.password) {
      return alert("email and password fields are both required");
    }

    loginClient(clientData.email, clientData.password);
    emailLog.val("");
    passwordLog.val("");
  });

  function loginClient(email, password) {
    $.post("/api/login", {
      email: email,
      password: password,
    })
      .then(function (data) {
        console.log("redirect to the client's page");
        window.location.replace("/client");
      })
      .catch(handleLogInErr);
  }

  function handleLogInErr(err) {
    console.log(err);
    alert("Incorrect password or email");
  }
});
