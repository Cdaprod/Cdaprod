/* docs/assets/js/scripts.js */

/* Smooth Scrolling for Anchor Links */
document.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60, // Adjust based on fixed header height
          behavior: 'smooth'
        });
      }
    });
  });
});