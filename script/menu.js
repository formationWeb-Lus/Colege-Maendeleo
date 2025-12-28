// menu.js
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.menu-close');
  const navMenu = document.querySelector('.nav-menu');

  menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });

  menuClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) navMenu.classList.remove('active');
  });
});

