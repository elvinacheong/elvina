document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("navbar");
    const home = document.querySelector(".home");

    window.onscroll = function() {
        if (window.pageYOffset >= home.offsetHeight - navbar.offsetHeight) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    };
});
