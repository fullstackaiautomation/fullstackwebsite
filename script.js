// Full Stack AI Automation - Interactive Scripts with Theme Toggle
// Modern, clean interactions - NO gimmicks

document.addEventListener('DOMContentLoaded', function() {

    // ===== THEME TOGGLE FUNCTIONALITY =====
    const themeToggle = document.querySelector('.theme-toggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);

    // Update toggle button icon based on current theme
    function updateToggleIcon() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        if (themeToggle) {
            themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
            themeToggle.setAttribute('aria-label',
                currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            );
        }
    }

    // Initialize toggle icon
    updateToggleIcon();

    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateToggleIcon();

            // Optional: Add a subtle animation
            this.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }

    // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== NAVBAR SCROLL EFFECT =====
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add shadow when scrolled
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px var(--color-shadow-hover)';
        } else {
            navbar.style.boxShadow = '0 2px 10px var(--color-shadow)';
        }

        lastScroll = currentScroll;
    });

    // ===== CARD HOVER EFFECT ENHANCEMENT =====
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });

    // ===== SCROLL REVEAL ANIMATION =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections for subtle reveal
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });

    // ===== LOGO CLICK TO HOME =====
    const logo = document.querySelector('.logo-placeholder');
    if (logo) {
        logo.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // ===== FORM VALIDATION =====
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ff0000';
                } else {
                    input.style.borderColor = 'var(--color-primary)';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    console.log('Full Stack AI Automation - Theme toggle enabled ✓');
});

// ===== ROI CALCULATOR UTILITY =====
function calculateROI(hoursSaved, hourlyRate, implementationCost) {
    const weeklySavings = hoursSaved * hourlyRate;
    const annualSavings = weeklySavings * 52;
    const roi = ((annualSavings - implementationCost) / implementationCost) * 100;

    return {
        weeklySavings,
        annualSavings,
        roi: Math.round(roi)
    };
}

// Export for use in other pages
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { calculateROI };
}
