const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
  toggleBtn.setAttribute('aria-expanded', !isExpanded);
  navLinks.classList.toggle('active');
});

/* Smooth Scrolling for Navigation Links */
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // Adjusted for navbar height
                behavior: 'smooth'
            });
        }
    });
});

/* Project Carousel Functionality */
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
const carousel = document.querySelector('.carousel');
let currentIndex = 0;

const totalItems = document.querySelectorAll('.carousel-item').length;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

/* Theme Toggle with Local Storage */
const themeToggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

/* Smooth Scrolling with Offset */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = document.querySelector('.navbar').offsetHeight;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = target.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

/* Contact Form Submission */
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
        .then(() => {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.style.color = 'green';
            contactForm.reset();
        }, (error) => {
            formMessage.textContent = 'Failed to send message. Please try again.';
            formMessage.style.color = 'red';
        });
});

/* GSAP Animations */
gsap.from('.nav-links a', { opacity: 0, y: -20, delay: 0.3, stagger: 0.1 });
gsap.from('.hero-section h1', { opacity: 0, y: 50, duration: 1 });
gsap.from('.hero-section p', { opacity: 0, y: 50, duration: 1, delay: 0.3 });
gsap.from('.hero-section .btn', { opacity: 0, y: 50, duration: 1, delay: 0.6 });
