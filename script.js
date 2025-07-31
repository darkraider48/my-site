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
            lucide.createIcons();
            window.scrollTo({ top: 0, behavior: 'auto' });

            if (pageName === 'contact') {
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

    // --- FORMSPREE CONTACT FORM LOGIC ---
    function attachContactFormListener() {
        const form = document.getElementById('contact-form');
        const status = document.getElementById('form-status');

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
                    status.style.color = '#16a34a'; // Green color
                    form.reset();
                    setTimeout(() => status.textContent = '', 4000);
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.textContent = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            status.textContent = "Oops! There was a problem submitting your form";
                        }
                        status.style.color = '#dc2626'; // Red color
                    })
                }
            }).catch(error => {
                status.textContent = "Oops! There was a problem submitting your form";
                status.style.color = '#dc2626'; // Red color
            });
        }
        
        if (form) {
            form.addEventListener("submit", handleSubmit);
        }
    }
});
