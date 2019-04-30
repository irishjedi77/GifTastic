$(document).ready(function () {

    var topics = ["alpaca", "rabbit", "dog", "cat", "sloth", "loris", "parakeet", "sugar glider", "chinchilla", "owl", "monkey", "otter", "goat", "hedgehog"];
    console.log(topics.length);

    function displayAnimalInfo() {
        var animal = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=5IPB1bMdVXx5cQKoz1qaSB7b0nmZJy2z&limit=5";

        // Creating an AJAX call for the specific animal button being clicked
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // Creating a div to hold the animal
            var animalDiv = $("<div class= 'animals'>");

            // Storing the rating data

            for (let i = 0; i < response.data.length; i++) {

                //   console.log(response.data);

                var rated = response.data[i].rating;
                var imgURL = response.data[i].images.original_still.url;
                var imgAnimate = response.data[i].images.original.url;
                var pOne = $("<p>").text("Rating: " + rated);
                console.log(rated);
                console.log(imgAnimate);


                //Displaying the rating
                animalDiv.append(pOne);

                // Creating an element to hold the image
                var image = $("<img>")
                    .attr("src", imgURL)
                    .attr("data-still", imgURL)
                    .attr("data-animate", imgAnimate)
                    .attr("data-state", "still")


                // Displaying the image
                animalDiv.append(image);

                $("#animals-view").prepend(animalDiv);
            }
        });



        $(document).on("click", "img", function () {
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
            }
        });


    }

    // Function for displaying animal data
    function renderButtons() {

        // Deleting the animals prior to adding new animals
        $("#buttons-view").empty();

        // Looping through the array of animals
        for (var i = 0; i < topics.length; i++) {

            var a = $("<button>");
            // Adding a class of animal-btn to our button
            a.addClass("animal-btn");
            // Adding a data-attribute
            a.attr("data-name", topics[i]);
            // Providing the initial button text
            a.text(topics[i]);
            // Adding the button to the buttons-view div
            $("#buttons-view").append(a);
        }
    }

    // This function handles events where a topic button is clicked
    $("#add-animal").on("click", function (event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var animal = $("#animal-input").val().trim();

        // Adding animal from the textbox to our array
        topics.push(animal);

        // Calling renderButtons which handles the processing of our animal array
        renderButtons();

    });

    // Adding a click event listener to all elements with a class of "animal-btn"
    $(document).on("click", ".animal-btn", displayAnimalInfo);

    // Calling the renderButtons function to display the intial buttons
    renderButtons();



});
