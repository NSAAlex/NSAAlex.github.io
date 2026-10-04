// Show / hide the menu on small screens
var menuButton = document.getElementById("menuToggleBtn");
var mainNav = document.getElementById("mainNav");

menuButton.onclick = function () {
  mainNav.classList.toggle("open");
};