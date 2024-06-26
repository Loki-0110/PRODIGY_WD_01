// Change background color on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Change font color on hover
const navItems = document.querySelectorAll('.nav-item a');
navItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.color = '#fbc02d'; // Amber
    });
    item.addEventListener('mouseout', () => {
        item.style.color = 'white';
    });
});
