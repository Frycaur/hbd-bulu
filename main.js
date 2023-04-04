// Get the pop-up message element
const popUpMessage = document.getElementById("pop-up-message");

// Get the button to open the pop-up message
const popUpButton = document.getElementById("pop-up");

// Get the button to close the pop-up message
const closeButton = document.getElementById("close");

// When the user clicks the button, show the pop-up message
popUpButton.addEventListener("click", function() {
	popUpMessage.style.display = "block";
});

// When the user clicks the close button, hide the pop-up message
closeButton.addEventListener("click", function() {
	popUpMessage.style.display = "none";
});
