function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let listaDeNumerosSorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (listaDeNumerosSorteados.includes(numero))
            numero = obterNumeroAleatorio(de, ate); 
        listaDeNumerosSorteados.push(numero);

    }

let resultado = document.getElementById("resultado");
resultado.innerHTML = `<label class="texto_paragrafo">Números sorteados: ${listaDeNumerosSorteados}</label>`;   
alterarStatusBotao();      

}

function obterNumeroAleatorio(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

function alterarStatusBotao() {
    let botao = document.getElementById("btn-reiniciar");
    if (botao.classList.contains('container_botao-desabilitado')) { 
        botao.classList.remove('container_botao-desabilitado');
        botao.classList.add('container-botao'); 
        
    } else {
        botao.classList.remove('container_botao');
        botao.classList.add('container-botao-desabilitado');

    }
}