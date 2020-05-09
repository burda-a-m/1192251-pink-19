var main_nav = document.querySelector(".main-nav");
var btn_nav_toggle = document.querySelector(".main-nav__toggle");

main_nav.classList.remove("main-nav--nojs");

btn_nav_toggle.addEventListener("click", function () {
  if (main_nav.classList.contains("main-nav--closed")) {
    main_nav.classList.remove("main-nav--closed");
    main_nav.classList.add("main-nav--opened")
  } else {
    main_nav.classList.remove("main-nav--opened");
    main_nav.classList.add("main-nav--closed")
  }
});
