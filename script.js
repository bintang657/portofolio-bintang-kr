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

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    filterBtns.forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const category = btn.getAttribute('data-filter');
    portfolioItems.forEach(item=>{
      if(category==='all'||item.getAttribute('data-category')===category){item.style.display='block';}
      else{item.style.display='none';}
    });
  });
});

// Portfolio Modal
const modal = document.createElement('div'); modal.id='modal'; modal.innerHTML='<span class="close">&times;</span><img src="">';
document.body.appendChild(modal);
const modalImg = modal.querySelector('img');
const closeBtn = modal.querySelector('.close');
document.querySelectorAll('.portfolio-item .view-btn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const src = e.target.parentElement.querySelector('img').src;
    modal.style.display='flex';
    modalImg.src = src;
  });
});
closeBtn.addEventListener('click', ()=>{modal.style.display='none';});
modal.addEventListener('click', e=>{if(e.target===modal) modal.style.display='none';});

// Hero fade-in animation
window.addEventListener('load', ()=>{
  document.querySelectorAll('.fade-in').forEach((el,i)=>{
    setTimeout(()=>el.style.opacity='1', i*500);
  });
  document.querySelectorAll('.fade-in-delay').forEach((el,i)=>{
    setTimeout(()=>el.style.opacity='1', 1000+i*500);
  });
  document.querySelectorAll('.fade-in-delay2').forEach((el,i)=>{
    setTimeout(()=>el.style.opacity='1', 2000+i*500);
  });
});

// Testimonials Slider
let testimonialIndex=0;
const testimonials = document.querySelectorAll('.testimonial-item');
function showTestimonial(i){
  testimonials.forEach(t=>t.classList.remove('active'));
  testimonials[i].classList.add('active');
}
showTestimonial(testimonialIndex);
setInterval(()=>{
  testimonialIndex = (testimonialIndex+1)%testimonials.length;
  showTestimonial(testimonialIndex);
},4000);

// Back to top button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', ()=>{
  if(window.scrollY>300){backToTop.style.display='block';}else{backToTop.style.display='none';}
});
backToTop.addEventListener('click', ()=>{window.scrollTo({top:0,behavior:'smooth'});});

// Parallax hero
window.addEventListener('scroll', () => {
  const parallax = document.querySelector('[data-parallax]');
  parallax.style.transform = `translateY(${window.scrollY * 0.3}px)`;
});
