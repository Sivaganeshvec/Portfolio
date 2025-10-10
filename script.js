// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Skills reveal on scroll
document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll('.skill');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
    });
  }, { threshold: 0.2 });

  skills.forEach(skill => observer.observe(skill));

  // Generate floating particles for hero background
  const heroBg = document.querySelector('.hero-bg');
  for (let i = 0; i < 50; i++) { // more particles
    const span = document.createElement('span');
    span.style.left = Math.random() * 100 + '%';
    span.style.top = Math.random() * 100 + '%';
    span.style.width = span.style.height = Math.random() * 10 + 5 + 'px';
    span.style.animationDuration = Math.random() * 15 + 10 + 's';
    span.style.background = `rgba(0,188,212,${Math.random() * 0.5 + 0.2})`;
    heroBg.appendChild(span);
  }
});
