let titulo = document.querySelector('h1');
titulo.innerHTML='Hora do Desafio';

function verificarClick() {
    console.log('O botao foi clicado')
}

function iniciarAlerta() {
    console.log('Eu amo JS')
}

function exibirPrompt() {
    let nomedacidade = prompt('Escolha uma cidade do Brasil:')
    alert('Estive em ${nomedacidade} e lembrei de voce')
}