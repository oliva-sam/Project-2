console.log("hi");

$(document).ready(function() {
    const tloginBtn = $("form.login");
    
    tloginBtn.on("submit", function(event) {
        event.preventDefault();
        const cemail = $("input#email-input");
        const cpassword = $("input#password-input");

        let clientData = {
            email: cemail.val().trim(),
            password: cpassword.val().trim()
        };

        if(!clientData.email || !clientData.password) {
            return alert("email and password fields are both required");
        }

        loginClient(clientData.email, clientData.password);
        cemail.val("");
        cpassword.val("");
    });

    function loginClient (email, password) {
        $.post("/api/login", {
            email: email,
            password: password
        }).then(function(data) {
            console.log("redirect to the client's page")
            //window.location.replace("/trainerpage")
        }).catch(handleErr);
    };

    function handleErr(err) {
        console.log(err)
    };
});