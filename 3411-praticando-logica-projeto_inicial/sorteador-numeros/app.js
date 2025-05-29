function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    alerta();

    let listaDeNumerosSorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (listaDeNumerosSorteados.includes(numero))
            numero = obterNumeroAleatorio(de, ate); 
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

function alerta() {
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);
    if (de >= ate) {
        alert('Preencha todos os campos de modo certo')
        return;
        
    }
}