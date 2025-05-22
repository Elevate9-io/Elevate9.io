document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar-wrapper a');
  const sections = document.querySelectorAll('.content-section');
  
  // Function to highlight the current section's nav item
  function highlightNav() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });
    
    sidebarLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }
  
  // Highlight on scroll
  window.addEventListener('scroll', highlightNav);
  
  // Highlight on page load
  highlightNav();
  
  // Smooth scroll for sidebar links (now centers the section)
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - (window.innerHeight / 2) + (targetSection.clientHeight / 2),
        behavior: 'smooth'
      });
    });
  });
});