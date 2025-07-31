document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // --- INITIAL PAGE LOAD ---
    // Load the home page by default
    loadPage('home');

    // --- NAVIGATION HANDLING ---
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageName = link.dataset.page;
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.innerHTML = `<i data-lucide="menu"></i>`;
                lucide.createIcons();
            }
            
            loadPage(pageName);
        });
    });

    // --- MOBILE MENU TOGGLE ---
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Change icon based on menu state
        if (navMenu.classList.contains('active')) {
            mobileMenuToggle.innerHTML = `<i data-lucide="x"></i>`;
        } else {
            mobileMenuToggle.innerHTML = `<i data-lucide="menu"></i>`;
        }
        lucide.createIcons(); // Re-render the new icon
    });

    /**
     * Loads page content dynamically into the main content area.
     * @param {string} pageName - The name of the page to load (e.g., 'home', 'about').
     */
    async function loadPage(pageName) {
        try {
            // 1. Fetch the new content
            const response = await fetch(`${pageName}.html`);
            if (!response.ok) {
                throw new Error(`Could not load page. Status: ${response.status}`);
            }
            const html = await response.text();

            // 2. Inject the new content using innerHTML
            contentArea.innerHTML = html;

            // 3. Update active link state
            updateActiveLink(pageName);

            // 4. Re-initialize Lucide icons for the new content
            lucide.createIcons();

            // 5. Scroll to the top of the page
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // 6. Re-attach form listener if on the contact page
            if (pageName === 'contact') {
                attachContactFormListener();
            }

        } catch (error) {
            console.error('Failed to load page:', error);
            contentArea.innerHTML = `<section class="container" style="text-align: center;"><h2>Page Not Found</h2><p>Sorry, we couldn't find the page you were looking for.</p></section>`;
        }
    }

    /**
     * Updates the 'active' class on navigation links.
     * @param {string} pageName - The currently active page.
     */
    function updateActiveLink(pageName) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === pageName) {
                link.classList.add('active');
            }
        });
    }

    /**
     * Attaches a listener to the contact form for submission simulation.
     */
    function attachContactFormListener() {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');

        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                formStatus.textContent = 'Sending message...';
                formStatus.style.color = 'var(--primary-color)';

                // Simulate a network request
                setTimeout(() => {
                    formStatus.textContent = 'Thank you! Your message has been sent.';
                    formStatus.style.color = 'green';
                    contactForm.reset();
                    // Clear the message after a few seconds
                    setTimeout(() => formStatus.textContent = '', 4000);
                }, 1500);
            });
        }
    }
});
