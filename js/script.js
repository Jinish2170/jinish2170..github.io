// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!mobileMenu.contains(e.target) && e.target !== menuToggle) {
    mobileMenu.classList.remove('active');
  }
});
