document.addEventListener('DOMContentLoaded', () => {
  // Theme toggle
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('.scroll-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60,
          behavior: 'smooth'
        });
      } else {
        // Navigate to index.html#author if on another page
        window.location.href = 'index.html#' + targetId;
      }
    });
  });
});