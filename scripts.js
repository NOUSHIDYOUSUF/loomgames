document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const heroText = document.querySelector('.hero h2');
    heroText.style.opacity = 0;
    heroText.style.transform = 'translateY(-20px)';

    window.addEventListener('load', () => {
        heroText.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
    });
});
