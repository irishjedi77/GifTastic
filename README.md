# GifTastic

This project uses the GIPHY API to make a dynamic web page that populates with animal gifs of your choice. 14 animals are pre-selected, but users can add additional animals by inputing the animal of their choice into the form. 

Javascript is used to make an AJAX call to the GIPHY API and jQuery is used to change the HTML of the site. Bootstrap was used to created the page buttons and form. 

An array of strings was created containing the names of 14 animals. When users input a new animal, that new animal is added to the array. Javascript loops through the array and JQuery appends a new button for that animal to the page. 

When the user clicks on a button, the page should grab 5 static, non-animated gif images from the GIPHY API and place them on the page.

When the user clicks one of the still GIPHY images, the gif will animate (it can take some time for the gifs to load from the GIPHY API and become clickable). If the user clicks the gif again, it stops animation.

The rating for each gif is displayed directly above the gif and this information is obtained from the GIPHY API. 

# Demo 
https://irishjedi77.github.io/GifTastic/

Created by: Erin Lyden 
