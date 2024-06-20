//scrollup button
const scrollUp = document.querySelector("#scroll-up");
//dark-light-theme
const checkbox = document.querySelector("#checkbox");
//nav menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("ul");
const navLink = document.querySelectorAll("#nav-link");

//scrollup button
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

//dark-light-theme
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

//nav menu
hamburger.addEventListener("click", openMenu);
function openMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}