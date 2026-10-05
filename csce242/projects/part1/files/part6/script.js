// Mobile navigation
const menuButton = document.getElementById("menuToggleBtn");
const mainNav = document.getElementById("mainNav");

if (menuButton && mainNav) {
  menuButton.addEventListener("click", function () {
    mainNav.classList.toggle("open");
  });
}

// Cyber Threat card feature
const threatCards = document.querySelectorAll(".info-card");

threatCards.forEach(function (card) {
  const learnMore = card.querySelector(".card-link");
  if (!learnMore) return;

  learnMore.addEventListener("click", function () {
    const isActive = card.classList.toggle("card-active");
    learnMore.textContent = isActive ? "Show Less ↑" : "Learn more →";
  });
});