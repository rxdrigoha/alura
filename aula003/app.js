// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número de 1 a 10';

let numeroSecreto = gerarNumeroAleatorio();

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTexto('h1', 'Jogo do número secreto');
exibirTexto('p', 'Escolha um número de 1 a 1000');

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute ==    numeroSecreto);
}
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 1000 + 1); // Errei: "math" Consertei: "Math"
}