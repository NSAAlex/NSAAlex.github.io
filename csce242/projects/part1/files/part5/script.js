// Mobile nav toggle: opens/closes the slide-in menu and
// keeps the aria-expanded attribute in sync for accessibility.
const menuToggleBtn = document.getElementById('menuToggleBtn');
const mainNav = document.getElementById('mainNav');

menuToggleBtn.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close the menu automatically once a link is clicked
mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggleBtn.setAttribute('aria-expanded', 'false');
  });
});