// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eaten").on("click", function(event) {
    var id = $(this).data("id");
    var neweat = $(this).data("neweat");

    var newEatState = {
      eaten: neweat
    };

    // Send the PUT request.
    $.ajax("/api/goods/" + id, {
      type: "PUT",
      data: newEatState
    }).then(function() {
      console.log("changed eat to", neweat);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    const newGood = {
      name: $("#ca")
        .val()
        .trim(),
      eaten: $("[name=eaten]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/goods", {
      type: "POST",
      data: newGood
    }).then(function() {
      console.log("created new good");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-sugar").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/goods/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted good", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
