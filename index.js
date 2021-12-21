const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector(".nav__content");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__content--visible")
})
