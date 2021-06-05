let btn = document.getElementById("bookBtn");
let modal = document.getElementById("signUpModal");
let span = document.getElementsByClassName("close")[0];    

// UTILITY FUNCTIONS

// funtion to open modal
let openModal = function() {
    // console.log('ok');
    if(modal) modal.style.display = "block";
    else {
        modal = document.getElementById("signUpModal");
        modal.style.display = "block";
    };
}
// funtion to close modal
let closeModal = function() {
    modal ? modal.style.display = "none" : null;
}

// HELPERS

// When the user clicks on the button, open the modal
btn ? btn.onclick = openModal() : null;

// When the user clicks on <span> (x), close the modal
span ? span.onclick = closeModal() : null;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) closeModal();
}