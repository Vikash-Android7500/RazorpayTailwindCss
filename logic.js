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


// NavBar Menu
// const toggleMenu = () => {
//   const mdMobile = document.querySelector("#MenuBtn");
//     if (mdMobile.getAttribute('class') === 'hidden') {
//       mdMobile.setAttribute(
//         "class",
//         "fixed right-[-100%] top-[70px] flex flex-col bg-white w-full p-10 rounded-md duration-300"
//       );
//     }
//     else {
//       mdMobile.setAttribute("class", "hidden");
//     }
// }


// new Animation NavBar
const NavMenu = document.querySelector(".MenuBtn");
const hambergun = document.querySelector(".fa-bars");

hambergun.addEventListener('click', () => {
  hambergun.classList.toggle('fa-xmark');
  NavMenu.classList.toggle('active');
});