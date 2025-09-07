const mobileMenu = document.querySelector(".mobile-menu");
const mobileNav = document.getElementById("mobileNav");

mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

function closeMobileMenu() {
  mobileMenu.classList.remove("active");
  mobileNav.classList.remove("active");
}
