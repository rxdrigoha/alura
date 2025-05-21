let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 1000');

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou, parabéns.'); //Errei: Esqueci de botar o T em maiusculo //
    } else {        
        if (chute < numeroSecreto) {
            exibirTextoNaTela('h2', 'O número secreto é maior.');
        } else {
            exibirTextoNaTela('h2', 'O número secreto é menor.');
        }
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 1000 + 1);
}












