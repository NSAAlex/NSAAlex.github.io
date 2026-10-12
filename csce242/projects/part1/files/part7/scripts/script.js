//Show / hide the menu on small screens
var menuButton = document.getElementById("menuToggleBtn");
var mainNav = document.getElementById("mainNav");

menuButton.onclick = function () {
  mainNav.classList.toggle("open");
};

//"Show more" / "Show less" buttons on the cards
// Clicking the button shows or hides the extra text inside the same card.
// (threats.js also uses this function for the cards built from the JSON file)
function toggleCard() {
  var more = this.parentElement.querySelector(".card-more");
  more.classList.toggle("show");

  if (more.classList.contains("show")) {
    this.innerHTML = "Show less";
  } else {
    this.innerHTML = "Show more";
  }
}

// Cyber Threat card feature

const threatCards = document.querySelectorAll(".info-card");

threatCards.forEach(function (card) {
  const button = card.querySelector(".card-link");

  if (!button) return;

  button.addEventListener("click", function () {
    card.classList.toggle("card-active");
  });
});
