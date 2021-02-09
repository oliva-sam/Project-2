console.log("hi");

$(document).ready(function () {

////////// ADD GOAL ////////////    
    $("#goalBtn").on("click", function (event) {
        event.preventDefault();

        let newGoal = {
            goals: $("#userGoal").val().trim(),
            complete: 0
        };

        $.post("/api/client", {
            goals: newGoal.goals,
            complete: newGoal.completed
        })
            .then(function () {
                console.log("New Goal Added...");
                location.reload();
            })
            .catch(function (err) {
                console.log(err);
                alert("There was an error")
            })
    });

///////////// COMPLETE GOAL /////////////    
    $(".completeBtn").on("click", function (event) {
        let id = $(this).data("id");

        $.put("api/client/" + id, {
            complete: 1
        })
            .then(function () {
                console.log(`You have completed ${id}...`);
                location.reload();
            })
            .catch(function (err) {
                console.log(err);
                alert("There was an error")
            })
    });

///////////// DELETE GOAL //////////////
    $(".deleteBtn").on("click", function (event) {
        let id = $(this).data("id");

        $.delete("api/client/" + id, {
        }).then(
            function () {
                console.log(`You have deleted ${id}...`);
                location.reload();
            }
        )
        .catch(function (err) {
            console.log(err);
            alert("There was an error")
        })

    });

});