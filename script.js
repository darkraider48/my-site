document.addEventListener('DOMContentLoaded', function() {

    const contentArea = document.getElementById('content-area');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const footerLinks = document.querySelectorAll('.footer-links a');

    // Function to load content into the main area with transitions
    async function loadPage(pageName) {
        // 1. Fade out current content
        if (contentArea.firstElementChild) { // Check if there's content to fade out
            contentArea.firstElementChild.classList.add('fade-out');
            // Wait for fade-out animation to complete before changing content
            await new Promise(resolve => setTimeout(resolve, 300)); // Match CSS fadeOut duration
        }

        try {
            const response = await fetch(`${pageName}.html`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const htmlContent = await response.text();
            contentArea.innerHTML = htmlContent;

            // 2. Fade in new content
            if (contentArea.firstElementChild) {
                contentArea.firstElementChild.classList.add('fade-in');
                // Remove fade-in class after animation to allow future transitions
                contentArea.firstElementChild.addEventListener('animationend', function handler() {
                    this.classList.remove('fade-in');
                    this.removeEventListener('animationend', handler);
                });
            }
            
            // Re-render Lucide icons after new content is loaded
            lucide.createIcons();
            // Scroll to the top of the loaded content
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // If the loaded page is 'contact', re-attach form listener
            if (pageName === 'contact') {
                attachContactFormListener();
            }

        } catch (error) {
            console.error('Error loading page:', error);
            contentArea.innerHTML = `<section class="section container" style="text-align: center; padding: 100px 0;">
                                        <h2>Page Not Found</h2>
                                        <p>Sorry, the content you're looking for could not be loaded.</p>
                                    </section>`;
            // Ensure any error message also fades in
            if (contentArea.firstElementChild) {
                contentArea.firstElementChild.classList.add('fade-in');
            }
        }
    }

    // Function to attach contact form listener (needs to be called after content is loaded)
    function attachContactFormListener() {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');

        if (contactForm) {
            contactForm.addEventListener('submit', function(event) {
                event.preventDefault(); // Prevent the form from refreshing the page

                // Simulate form submission
                formStatus.textContent = 'Sending message...';
                formStatus.style.color = '#3b82f6'; // Blue for pending

                setTimeout(() => {
                    formStatus.textContent = 'Thank you for your message! We will get back to you soon.';
                    formStatus.style.color = '#10b981'; // Green color for success
                    contactForm.reset();
                }, 1500);
            });
        }
    }

    // Mobile menu toggle functionality
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.dataset.lucide = 'x';
        } else {
            icon.dataset.lucide = 'menu';
        }
        lucide.createIcons(); // Re-render icon
    });

    // Handle navigation clicks (for both header and footer links)
    [...navLinks, ...footerLinks].forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const page = this.dataset.page;
            if (page) {
                loadPage(page);
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.dataset.lucide = 'menu';
                    lucide.createIcons();
                }
            }
        });
    });

    // Load the home page content when the website first loads
    loadPage('home');
});
