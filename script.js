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


// script dos botoes da apresentacao
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


/* Script para o banner*/
let currentBanner = 1;
function rotateBanner() {
    const bannerTitulo1 = document.querySelector('.banner-titulo1');
    const bannerTitulo2 = document.querySelector('.banner-titulo2');
    const bannerTitulo3 = document.querySelector('.banner-titulo3');
    const bannerTitulo4 = document.querySelector('.banner-titulo4');
    const bannerTexto1 = document.querySelector('.banner-texto1');
    const bannerTexto2 = document.querySelector('.banner-texto2');
    const bannerTexto3 = document.querySelector('.banner-texto3');
    const bannerTexto4 = document.querySelector('.banner-texto4');

    if (currentBanner === 1) {
        bannerTitulo1.classList.remove('show');
        bannerTitulo2.classList.add('show');
        bannerTexto1.classList.remove('show');
        bannerTexto2.classList.add('show');
        currentBanner = 2;
    } else if  (currentBanner === 2) {
        bannerTitulo2.classList.remove('show');
        bannerTitulo3.classList.add('show');
        bannerTexto2.classList.remove('show');
        bannerTexto3.classList.add('show');
        currentBanner = 3;        
    } else if (currentBanner === 3) {
        bannerTitulo3.classList.remove('show');
        bannerTitulo4.classList.add('show');
        bannerTexto3.classList.remove('show');
        bannerTexto4.classList.add('show');
        currentBanner = 4;
    } else {
        bannerTitulo4.classList.remove('show');
        bannerTitulo1.classList.add('show');
        bannerTexto4.classList.remove('show');
        bannerTexto1.classList.add('show');
        currentBanner = 1;
    }
}
setInterval(rotateBanner, 6000);
