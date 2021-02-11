$(function() {
    $(".change-devour").on("click", function(event) {
      
      var id = $(this).data("id");
      var newDevour = $(this).data("newdevour");

      var newDevourState = {
        devoured: newDevour
      };
console.log(newDevourState);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#burger").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });



});
