const hamburger = document.querySelector("#hamburger");
const navbar = document.getElementById("nav-menu");

// //navbar ketika di scroll
window.onscroll = function () {
  const header = document.getElementById("header");
  const fixed = header.offsetTop;

  if (window.pageYOffset > fixed) {
    header.classList.add("navbar-fixed");
    header.classList.remove("absolute");
  } else {
    header.classList.add("absolute");
    header.classList.remove("navbar-fixed");
  }
};

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navbar.classList.toggle("animasi-navbar");
  navbar.classList.toggle("hidden");
});
