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