document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }

    // 2. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                // Close mobile menu if open
                if(navLinks.classList.contains('active')){
                    navLinks.classList.remove('active');
                }

                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Simple Form Handling (Prevent Refresh for Demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            // Simulate sending
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                alert('Thank you! Your message has been received. We will contact you shortly.');
                contactForm.reset();
                btn.innerText = 'Message Sent';
                btn.style.backgroundColor = '#7CB342'; // Success Green
                btn.style.borderColor = '#7CB342';
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.backgroundColor = ''; 
                    btn.style.borderColor = ''; 
                    btn.style.opacity = '1';
                }, 3000);
            }, 1000);
        });
    }

    // 4. Header Scroll Effect (Optional shadow on scroll)
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "none";
        }
    });
});