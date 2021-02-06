console.log("hi");

$(document).ready(function() {
    const tloginBtn = $("form.login");
    
    tloginBtn.on("submit", function(event) {
        event.preventDefault();
        const temail = $("input#email-input");
        const tpassword = $("input#password-input");

        let trainerData = {
            email: temail.val().trim(),
            password: tpassword.val().trim()
        };

        if(!trainerData.email || !trainerData.password) {
            return alert("email and password fields are both required");
        }

        loginTrainer(trainerData.email, trainerData.password);
        temail.val("");
        tpassword.val("");
    });

    function loginTrainer (email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data) {
            console.log("redirect to the trainer's page")
            //window.location.replace("/trainerpage")
        }).catch(handleErr);
    };

    function handleErr(err) {
        console.log(err)
    };
});