document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const links = document.querySelectorAll(".nav-links li a");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("show");
        });
    }

    // Highlight the active page
    links.forEach(link => {
        if (window.location.pathname.includes(link.getAttribute("href"))) {
            link.classList.add("active");
        }
    });
});
