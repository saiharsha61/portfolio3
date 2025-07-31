// Smooth scroll (for older browsers)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const el = document.querySelector(this.getAttribute('href'));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple contact form handler
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for your message! (To send real emails, use a service like Formspree.)');
      form.reset();
    });
  }
});
