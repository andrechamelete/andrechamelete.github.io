const titulos = document.querySelectorAll('.titulos h2');
const explicacoes = document.querySelectorAll('.explicacao');

titulos.forEach(titulo => {
    titulo.addEventListener('click', function() {
        const explicacaoId = this.getAttribute('data-explicacao');
        const explicacao = document.getElementById(explicacaoId);

        // No modo desktop, mostra a explicação no lado direito
        if (window.innerWidth > 768) {
            explicacoes.forEach(exp => {
                exp.classList.remove('active');
            });
            explicacao.classList.add('active');
        } else {
            // No modo responsivo (abaixo de 768px)
            // Esconde todas as explicações primeiro
            explicacoes.forEach(exp => {
                exp.classList.remove('active');
            });

            // Move a explicação logo abaixo do título e a exibe
            this.insertAdjacentElement('afterend', explicacao);
            explicacao.classList.add('active');
        }
    });
});
