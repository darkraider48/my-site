/* General & Typography */
:root {
    --primary-color: #3b82f6; /* Blue-500 */
    --primary-color-dark: #2563eb; /* Blue-600 */
    --secondary-color: #1f2937; /* Gray-800 */
    --text-color: #4b5563; /* Gray-600 */
    --light-bg: #f9fafb; /* Gray-50 */
    --white-bg: #ffffff;
    --border-color: #e5e7eb; /* Gray-200 */
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--secondary-color);
    line-height: 1.6;
    background-color: var(--light-bg);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section {
    padding: 6rem 0;
}

h1, h2, h3 {
    font-weight: 700;
    line-height: 1.2;
    color: var(--secondary-color);
}

h1 { font-size: 3rem; }
h2 { font-size: 2.5rem; }
h3 { font-size: 1.5rem; }

.btn {
    display: inline-block;
    padding: 0.75rem 2rem;
    font-weight: 600;
    text-decoration: none;
    border-radius: 9999px;
    transition: all 0.3s ease-in-out;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--white-bg);
    border: 2px solid var(--primary-color);
}

.btn-primary:hover {
    background-color: var(--primary-color-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

/* Header & Nav */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background-color: var(--white-bg);
    box-shadow: var(--shadow);
    z-index: 1000;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color-dark);
}

.logo i {
    color: var(--primary-color);
    width: 2rem;
    height: 2rem;
}

.nav-menu {
    display: flex;
    gap: 2.5rem;
    list-style: none;
}

.nav-link {
    font-weight: 500;
    color: var(--text-color);
    text-decoration: none;
    position: relative;
    padding-bottom: 0.25rem;
}

.nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: var(--primary-color);
    transition: width 0.3s ease-in-out;
}

.nav-link:hover::after {
    width: 100%;
}

.menu-toggle {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    background: linear-gradient(to right, #3b82f6, #4f46e5);
    color: var(--white-bg);
    padding-top: 6rem;
}

.hero-content h1 {
    font-size: 4rem;
    color: var(--white-bg);
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    color: rgba(255, 255, 255, 0.9);
}

/* About Section */
.about {
    background-color: var(--white-bg);
    text-align: center; /* Center align all content within about */
}

.about-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
}

.about-intro h2 {
    margin-bottom: 1.5rem;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}

.about-card {
    background-color: var(--light-bg);
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
    text-align: center;
    transition: transform 0.3s ease-in-out;
}

.about-card:hover {
    transform: translateY(-5px);
}

.about-card i {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.about-card h3 {
    margin-bottom: 0.75rem;
}

.founders-section {
    margin-bottom: 4rem;
    text-align: center;
}

.founders-section h3 {
    margin-bottom: 2rem;
}

.founder-card {
    display: inline-block; /* For horizontal alignment */
    margin: 1rem;
    padding: 1.5rem;
    background-color: var(--white-bg);
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
    max-width: 280px;
    text-align: center;
    vertical-align: top; /* Align cards at the top */
}

.founder-card img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid var(--primary-color);
}

.founder-card h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color-dark);
}

.founder-card p {
    font-size: 0.95rem;
    color: var(--text-color);
}

.csr-section {
    text-align: left; /* Align CSR text left */
    max-width: 900px;
    margin: 0 auto;
}

.csr-section h3 {
    margin-bottom: 1.5rem;
    text-align: center; /* Center the CSR heading */
}

.csr-section ul {
    list-style: none;
    padding-left: 0;
}

.csr-section li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    color: var(--text-color);
}

.csr-section li i {
    color: #22c55e; /* Green-500 */
    margin-right: 0.75rem;
    flex-shrink: 0;
    margin-top: 0.2rem;
}


/* Products Section */
.products {
    background-color: var(--light-bg);
    text-align: center;
}

.products-content h2 {
    margin-bottom: 3rem;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.product-card {
    background-color: var(--white-bg);
    padding: 2rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
    transition: transform 0.3s ease-in-out;
}

.product-card:hover {
    transform: translateY(-5px);
}

.product-card i {
    width: 3.5rem;
    height: 3.5rem;
    color: var(--primary-color);
    margin-bottom: 1.5rem;
}

.product-card h3 {
    margin-bottom: 0.75rem;
}

/* Quality Section */
.quality {
    background-color: var(--white-bg);
}

.quality-content h2 {
    text-align: center;
    margin-bottom: 3rem;
}

.quality-grid {
    display: flex;
    align-items: center;
    gap: 3rem;
}

.quality-text {
    flex: 1;
}

.quality-text ul {
    list-style: none;
    margin-top: 1.5rem;
}

.quality-text li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.quality-text li i {
    color: #22c55e; /* Green-500 */
    margin-right: 0.75rem;
    flex-shrink: 0;
}

.quality-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.quality-image img {
    max-width: 100%;
    height: auto;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
}

/* Contact Section */
.contact {
    background-color: var(--light-bg);
    text-align: center;
}

.contact-content h2 {
    margin-bottom: 3rem;
}

.contact-flex {
    display: flex;
    gap: 3rem;
    justify-content: center;
}

.contact-form-card,
.contact-info-card {
    background-color: var(--white-bg);
    padding: 2.5rem;
    border-radius: 0.75rem;
    box-shadow: var(--shadow);
    text-align: left;
}

.contact-form-card {
    flex: 1;
    max-width: 500px;
}

.contact-form-card h3,
.contact-info-card h3 {
    margin-bottom: 1.5rem;
}

#contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

#contact-form input,
#contact-form textarea {
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 0.5rem;
    transition: all 0.2s ease-in-out;
}

#contact-form input:focus,
#contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.25);
}

#form-status {
    margin-top: 1rem;
    text-align: center;
    font-weight: 500;
}

.contact-info-card {
    flex: 1;
    max-width: 400px;
}

.contact-info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-info-item i {
    color: var(--primary-color);
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
}

/* Footer */
.footer {
    background-color: #111827; /* Gray-900 */
    color: #d1d5db; /* Gray-300 */
    padding: 2.5rem 0;
    text-align: center;
}

.footer .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    font-weight: 700;
}

.footer-logo i {
    color: var(--primary-color);
}

.footer-links {
    display: flex;
    gap: 1.5rem;
}

.footer-links a {
    color: #9ca3af; /* Gray-400 */
    text-decoration: none;
    transition: color 0.2s ease-in-out;
}

.footer-links a:hover {
    color: var(--primary-color);
}

/* --- Transition Effects --- */
/* Keyframe for fade-in animation */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Keyframe for fade-out animation */
@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-20px); }
}

/* Class for content when it's about to fade out */
.fade-out {
    animation: fadeOut 0.3s ease-out forwards;
}

/* Class for content when it's fading in */
.fade-in {
    animation: fadeIn 0.5s ease-in-out forwards;
}

/* Responsive Design */
@media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }

    .nav-menu {
        display: none;
        flex-direction: column;
        width: 100%;
        text-align: center;
        gap: 0.5rem;
        position: absolute;
        top: 4.5rem;
        left: 0;
        background-color: var(--white-bg);
        box-shadow: var(--shadow);
    }
    
    .nav-menu.active {
        display: flex;
    }

    .nav-link {
        padding: 0.75rem 1.5rem;
        border-bottom: 1px solid var(--border-color);
    }

    .nav-link::after {
        display: none;
    }

    .menu-toggle {
        display: block;
    }

    .about-content {
        flex-direction: column;
    }

    .quality-grid {
        flex-direction: column-reverse;
    }

    .contact-flex {
        flex-direction: column;
        gap: 1.5rem;
    }

    .hero {
        padding: 4rem 0;
    }

    .founder-card {
        margin: 1rem auto; /* Center individual founder cards */
    }
}
