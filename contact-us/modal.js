// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("submitBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// UTILITY FUNCTIONS

// funtion to close modal
let closeModal = function() {
    modal.style.display = "none";
}

// funtion to open modal
let openModal = function() {
    modal.style.display = "block";
}

// HELPERS

// When the user clicks on the button, open the modal
// btn.onclick = openModal();

// When the user clicks on <span> (x), close the modal
// span.onclick = closeModal();

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) closeModal();
}

let delaySend = function(sec) {
    // show confirmation modal
    openModal();

    // automatically close and send the form after 3 seconds
    setTimeout(closeModal, sec*1000); 
    document.contactForm.submit();
}