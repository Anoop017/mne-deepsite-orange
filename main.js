// Modern, mobile-friendly navigation and animation JS for MNE Components
document.addEventListener('DOMContentLoaded', function () {
  // Mobile menu toggle
  const menuBtn = document.querySelector('[aria-controls="mobile-menu"]');
  const menu = document.getElementById('mobile-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('block');
      } else {
        menu.classList.remove('block');
        menu.classList.add('hidden');
      }
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        // Close mobile menu if open
        if (menu && !menu.classList.contains('hidden')) {
          menu.classList.remove('block');
          menu.classList.add('hidden');
        }
      }
    });
  });

  // Animation on scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll('.slide-up, .scale-in, .rotate-in, .fade-in');
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.92;
      if (elementPosition < screenPosition) {
        element.classList.add('animated');
      }
    });
  };
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
  animateOnScroll();
});
