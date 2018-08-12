// Shorthand for $( document ).ready()
$(function () {
    $('.burger_link').on("click", function (event) {
        var id = $(this).data('id');
        var newBellyState = {
            devoured: 1
        };
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBellyState
        }).then(
            function () {
                console.log("changed ate");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".burger-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bur_in").val().trim(),
            devoured: $("#eat_val").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});