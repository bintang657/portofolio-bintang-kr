// Navbar active on scroll
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if(scrollY >= sectionTop) current = section.getAttribute('id');
  });
  navLinks.forEach(link => { link.classList.remove('active'); if(link.getAttribute('href') === '#' + current) link.classList.add('active'); });
});

// Dark/Light Mode
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Contact form
document.getElementById('contact-form').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Message sent! I will contact you soon.');
});

// Carousel
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
let index = 0;

function updateCarousel(){
  track.style.transform = `translateX(-${index*320}px)`;
}

nextBtn.addEventListener('click', () => { index = (index + 1) % items.length; updateCarousel(); });
prevBtn.addEventListener('click', () => { index = (index - 1 + items.length) % items.length; updateCarousel(); });

// Parallax hero
window.addEventListener('scroll', () => {
  const parallax = document.querySelector('[data-parallax]');
  parallax.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});
