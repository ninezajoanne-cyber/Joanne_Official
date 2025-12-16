document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only handle internal links (starting with #)
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);

                if (targetSection) {
                    // Scrolls to the section smoothly
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Button to Scroll to Projects Section
    const viewProjectsBtn = document.getElementById('view-projects-btn');
    const portfolioSection = document.getElementById('portfolio');

    if (viewProjectsBtn && portfolioSection) {
        viewProjectsBtn.addEventListener('click', () => {
            portfolioSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // 3. Contact Form Submission Handling (Basic Example)
    // NOTE: For a real website, you must use a backend service (like Netlify Forms, Formspree, or a custom API)
    // to actually receive the emails. This is just for front-end demonstration.
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Stop the default form submission

            // In a real application, you would send the data here using fetch()
            // Example: fetch('/submit-form', { method: 'POST', body: new FormData(e.target) });

            alert('Thank you for your message! I will get back to you shortly.');

            // Reset the form after successful submission
            contactForm.reset();
        });
    }
});