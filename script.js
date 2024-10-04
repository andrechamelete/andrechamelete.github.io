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

// Seleciona o ícone de menu e o próprio menu
const menuToggle = document.querySelector('.menu-toggle');
const listaMenu = document.querySelector('.lista-menu');

// Adiciona o evento de clique
menuToggle.addEventListener('click', function() {
    // Alterna a classe 'active' para mostrar ou esconder o menu
    listaMenu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    // Verifica se o clique foi fora da lista de menu e do botão de toggle
    if (!listaMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        // Se o menu estiver aberto, fecha-o removendo a classe 'active'
        if (listaMenu.classList.contains('active')) {
            listaMenu.classList.remove('active');
        }
    }
});

const missao = document.querySelector('.missao');
const publico = document.querySelector('.publico');
const resultado = document.querySelector('.resultado');
const idMissao = document.querySelector('.titulo-oQue');
const idpublico = document.querySelector('.titulo-publico');
const idResultado = document.querySelector('.titulo-resultado');

idMissao.addEventListener('click',function() {
    missao.classList.toggle('active');
    publico.classList.remove('active');
    resultado.classList.remove('active');
});

idpublico.addEventListener('click',function() {
    publico.classList.toggle('active');
    missao.classList.remove('active');
    resultado.classList.remove('active');
});

idResultado.addEventListener('click',function() {
    resultado.classList.toggle('active');
    missao.classList.remove('active');
    publico.classList.remove('active');
});