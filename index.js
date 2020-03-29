function toggle_ham() {
    let nav = document.querySelector(".nav-items");
    nav.classList.toggle("disp-block");
    let contact_button = document.querySelector(".contact-button");
    contact_button.classList.toggle("disp-block")
    let nav_link = document.querySelectorAll(".nav-link");
    nav_link.forEach(myFunction)

    function myFunction(nav) {
        nav.classList.toggle("disp-block")
    }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}