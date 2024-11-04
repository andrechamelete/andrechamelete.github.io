// Seleciona todos os elementos com a classe .etapa-servico
const etapasServico = document.querySelectorAll('.etapa-servico');

etapasServico.forEach(etapa => {
    etapa.addEventListener('click', function() {
        const textoEtapa = this.querySelector('.texto-etapa');
        
        // Verifica se o elemento clicado já possui a classe .act
        if (textoEtapa.classList.contains('act')) {
            // Remove a classe .act e reseta o width
            textoEtapa.classList.remove('act');
            this.style.width = ''; // Retorna ao tamanho original
        } else {
            // Remove a classe .act de todos os elementos .texto-etapa e reseta o width de outros .etapa-servico
            etapasServico.forEach(e => {
                e.querySelector('.texto-etapa').classList.remove('act');
                e.style.width = ''; // Reseta o width para o valor original
            });
            
            // Adiciona a classe .act e muda o width para 100% no elemento clicado
            textoEtapa.classList.add('act');
            this.style.width = '100%'; // Expande para 100%
        }
    });
});
