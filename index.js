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

    if (currentBanner === 1) {
        bannerTitulo1.classList.replace('state1', 'state2');
        bannerTitulo2.classList.replace('state3', 'state1');
        bannerTitulo4.classList.replace('state2', 'state3');
        currentBanner = 2;
    } else if  (currentBanner === 2) {
        bannerTitulo1.classList.replace('state2', 'state3');
        bannerTitulo2.classList.replace('state1', 'state2');
        bannerTitulo3.classList.replace('state3', 'state1');
        currentBanner = 3;        
    } else if (currentBanner === 3) {
        bannerTitulo4.classList.replace('state3', 'state1');
        bannerTitulo2.classList.replace('state2', 'state3');
        bannerTitulo3.classList.replace('state1', 'state2');
        currentBanner = 4;
    } else {
        bannerTitulo4.classList.replace('state1', 'state2');
        bannerTitulo1.classList.replace('state3', 'state1');
        bannerTitulo3.classList.replace('state2', 'state3');
        currentBanner = 1;
    }
}
setInterval(rotateBanner, 6000);