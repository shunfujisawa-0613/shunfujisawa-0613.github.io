document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for nav links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Form validation for the newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Perform validation checks, for example, check if email is valid
            let emailInput = document.getElementById('newsletter-email');
            if (emailInput && emailInput.value.includes('@')) {
                // Replace this with actual form submission code
                console.log('Email is valid. Form submitted.');
            } else {
                // Show an error message to the user
                alert('Please enter a valid email address.');
            }
        });
    }

    // Responsive menu toggle for smaller screens
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.querySelector('nav ul');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.getElementById('hamburgerMenu');
    var navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        // Toggle class to show or hide the nav links
        navLinks.classList.toggle('active');
    });
});
