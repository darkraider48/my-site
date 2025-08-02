document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // --- INITIAL PAGE LOAD ---
    loadPage('home');
    lucide.createIcons();

    // --- NAVIGATION & MENU HANDLING ---
    document.body.addEventListener('click', (e) => {
        const navLink = e.target.closest('.nav-link');
        if (navLink) {
            e.preventDefault();
            const pageName = navLink.dataset.page;
            if (pageName) {
                if (navMenu.classList.contains('active')) {
                    closeMobileMenu();
                }
                loadPage(pageName);
            }
        }
    });

    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.innerHTML = navMenu.classList.contains('active') ? `<i data-lucide="x"></i>` : `<i data-lucide="menu"></i>`;
        lucide.createIcons();
    });

    function closeMobileMenu() {
        navMenu.classList.remove('active');
        mobileMenuToggle.innerHTML = `<i data-lucide="menu"></i>`;
        lucide.createIcons();
    }

    // --- DYNAMIC PAGE LOADING ---
    async function loadPage(pageName) {
        try {
            const response = await fetch(`${pageName}.html`);
            if (!response.ok) throw new Error(`Could not load page.`);
            
            const html = await response.text();
            contentArea.innerHTML = html;
            updateActiveLink(pageName);
            setupScrollAnimations(); // Setup animations for new content
            lucide.createIcons();
            window.scrollTo({ top: 0, behavior: 'auto' });

            if (pageName === 'contact' || pageName === 'newsroom') {
                attachContactFormListener();
            }
        } catch (error) {
            console.error('Failed to load page:', error);
            contentArea.innerHTML = `<section class="container" style="text-align: center;"><h2>Page Not Found</h2><p>Sorry, we couldn't find the page you were looking for.</p></section>`;
        }
    }

    function updateActiveLink(pageName) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageName);
        });
    }

    // --- ADVANCED SCROLL ANIMATION LOGIC ---
    function setupScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // Stop observing after it's visible
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        revealElements.forEach(el => {
            observer.observe(el);
        });
    }

    // --- FORMSPREE CONTACT FORM LOGIC ---
    function attachContactFormListener() {
        const form = document.querySelector('#contact-form, #newsletter-form');
        if (!form) return;
        
        const status = form.querySelector('#form-status');

        async function handleSubmit(event) {
            event.preventDefault();
            const data = new FormData(event.target);
            status.textContent = 'Sending...';
            status.style.color = 'var(--primary-color)';

            fetch(event.target.action, {
                method: form.method,
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.textContent = "Thanks for your submission!";
                    status.style.color = '#16a34a';
                    form.reset();
                    setTimeout(() => status.textContent = '', 4000);
                } else {
                    response.json().then(data => {
                        status.textContent = data.errors ? data.errors.map(e => e.message).join(", ") : "Oops! There was a problem.";
                        status.style.color = '#dc2626';
                    });
                }
            }).catch(() => {
                status.textContent = "Oops! There was a problem submitting your form";
                status.style.color = '#dc2626';
            });
        }
        
        form.addEventListener("submit", handleSubmit);
    }
});
