

const scrollbtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollbtn.classList.toggle("active", window.scrollY > 500);
});

// onclick function in html Element
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// new Animation NavBar
const NavMenu = document.querySelector(".MenuBtn");
const hambergun = document.querySelector(".fa-bars");

hambergun.addEventListener("click", () => {
  hambergun.classList.toggle("fa-xmark");
  NavMenu.classList.toggle("active");
});
