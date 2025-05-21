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
    alert(`Estive em ${nomedacidade} e lembrei de voce`)
}

function somaNumero() {
    let firstNumber = parseInt(prompt('Digite o primeiro número:'));
    let secondNumber = parseInt(prompt('Digite o segundo numero:'));
    let resultado = firstNumber + secondNumber;
    alert(`A soma de ${firstNumber} + ${secondNumber} é igual a ${resultado}`); }