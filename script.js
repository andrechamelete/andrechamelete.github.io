// script.js
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const left = document.querySelectorAll('.impar');
    left.forEach(el => observer.observe(el));
});
