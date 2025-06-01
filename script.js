// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu toggle functionality
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

function toggleMenu() {
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : 'auto';
}

function closeMenu() {
    menuToggle.classList.remove('active');
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

menuToggle.addEventListener('click', toggleMenu);
sidebarOverlay.addEventListener('click', closeMenu);

// Close menu on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMenu();
    }
});

// Create floating spices animation
function createSpice() {
    const spice = document.createElement('div');
    spice.className = 'spice';
    spice.style.left = Math.random() * 100 + '%';
    spice.style.animationDelay = Math.random() * 15 + 's';
    spice.style.animationDuration = (Math.random() * 10 + 10) + 's';
    document.querySelector('.floating-spices').appendChild(spice);

    setTimeout(() => {
        spice.remove();
    }, 25000);
}

// Create spices periodically
setInterval(createSpice, 2000);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 1s ease-out forwards';
        }
    });
}, observerOptions);

// Observe menu items for animation
document.querySelectorAll('.menu-item').forEach(item => {
    observer.observe(item);
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const parallax = scrolled * 0.5;
    hero.style.transform = `translateY(${parallax}px)`;
});