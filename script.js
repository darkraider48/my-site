document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.getElementById('header');
    const loader = document.getElementById('loader');

    // --- SCROLL & HEADER HANDLING ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- INITIAL PAGE LOAD ---
    showLoader();
    loadPage('home').finally(hideLoader);
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
                showLoader();
                loadPage(pageName).finally(hideLoader);
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
            setupScrollAnimations();
            lucide.createIcons();
            window.scrollTo({ top: 0, behavior: 'auto' });

            if (pageName === 'contact') {
                attachContactFormListener();
            }
        } catch (error) {
            console.error('Failed to load page:', error);
            contentArea.innerHTML = `<section class="container reveal" style="text-align: center;"><h2>Page Not Found</h2><p>Sorry, we couldn't find the page you were looking for.</p></section>`;
            setupScrollAnimations(); // Animate in the error message too
        }
    }

    // --- UI & ANIMATION HELPERS ---
    function showLoader() { loader.style.opacity = '1'; loader.style.display = 'flex'; }
    function hideLoader() { loader.style.opacity = '0'; setTimeout(() => loader.style.display = 'none', 500); }

    function updateActiveLink(pageName) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageName);
        });
    }

    function setupScrollAnimations() {
        const revealElements = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        revealElements.forEach(el => observer.observe(el));
    }

    // --- CONTACT FORM LOGIC ---
    function attachContactFormListener() {
        const contactForm = document.getElementById('contact-form');
        const formStatus = document.getElementById('form-status');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                formStatus.textContent = 'Sending...';
                formStatus.style.color = 'var(--accent-color)';
                setTimeout(() => {
                    formStatus.textContent = 'Message Sent! Thank you.';
                    formStatus.style.color = 'var(--accent-color)';
                    contactForm.reset();
                    setTimeout(() => formStatus.textContent = '', 4000);
                }, 1500);
            });
        }
    }
});
