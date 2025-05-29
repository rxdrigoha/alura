function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    if (!alerta(de, ate)) {
        return; // Interrompe a execução se a validação falhar
    }
    if (!validarQuantidade(quantidade, de, ate)) {
        return; // Interrompe a execução se a validação falhar
    }

    let listaDeNumerosSorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (listaDeNumerosSorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }
        listaDeNumerosSorteados.push(numero);
    }

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${listaDeNumerosSorteados}</label>`;   
alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains('container__botao-desabilitado')) { 
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao'); 
        
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao();
}

function alerta(de, ate) {
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    if (de >= ate) {
        alert('Preencha todos os campos de modo certo');
        return false;
    }
    return true;
}

function validarQuantidade(quantidade, de, ate) {
    let intervalo = ate - de + 1;
    if (quantidade > intervalo) {alert('Quantidade de Numeros Sorteados inválida'); return false;} return true;
}