// script do menu
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

const menuToggle = document.querySelector('.menu-toggle');
const listaMenu = document.querySelector('.lista-menu');

menuToggle.addEventListener('click', function() {
    listaMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    
    if (!listaMenu.contains(event.target) && !menuToggle.contains(event.target)) {
    
        if (listaMenu.classList.contains('active')) {
            listaMenu.classList.remove('active');
        }
    }
});