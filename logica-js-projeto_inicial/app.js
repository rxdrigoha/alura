console.log('Arquivo app.js carregado!');

function exibirOla() {
    console.log('Olá, mundo!');
  }
  function exibirNome() {
    let nome = prompt('Qual é o seu nome?');
    console.log(`Olá, ${nome}!`);   
  }

  function exibirDobro() {
    let numeroI = parseInt(prompt('Digite um número:'));
    let resultado = numeroI * 2;
    alert(`O dobro de ${numeroI} é ${resultado}`);
  }

  function exibirMedia() {
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let numero3 = parseInt(prompt('Digite o terceiro número:'));
    let resultado = (numero1 + numero2 + numero3) / 3;
    alert(`A média de ${numero1}, ${numero2} e ${numero3} é ${resultado}`);
  }

  function exibirMaior() {
    let numero1= parseInt(prompt('Digite o 1 numero:'))
    let numero2= parseInt(prompt('Digite o 2 numneero:'))
    let resultado = Math.max(numero1, numero2);
    alert(`O maior numero entre ${numero1} e ${numero2} é ${resultado}`);
  }

  function exibirPropriaDobragem {
    let numero= parseInt(prompt('Digite 1 numero:'))
    let resultaado = numero * numero;
    alert(`O resultado de ${numero} x ${numero} é ${resultado}`);
  }