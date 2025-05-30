function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtdCompra = parseInt(document.getElementById('qtd').value);

    if (!qtdCompra || qtdCompra <= 0) {
        alert('Por favor, insira uma quantidade válida maior que 0.');
        return;
    }

    if(tipoIngresso.value == 'pista') {     
        comprarPista(qtdCompra);
    }
    else if(tipoIngresso.value == 'inferior') {
        comprarInferior(qtdCompra);
    }
    else if (tipoIngresso.value == 'superior') {
        comprarSuperior(qtdCompra);
    }
}


function comprarPista(qtdCompra) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtdCompra > qtdPista) {
        alert('Não há numero suficiente de ingressos disponiveis para efetuar sua compra');
    } else {
        qtdPista = qtdPista - qtdCompra;
        document.getElementById('qtd-pista').textContent = qtdPista; 
        alert('Compra feita');       
    }
}
function comprarInferior(qtdCompra) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtdCompra > qtdInferior) {
        alert('Não há numero suficiente de ingressos disponiveis para efetuar sua compra');
    } else {
        qtdInferior = qtdInferior - qtdCompra;
        document.getElementById('qtd-inferior').textContent = qtdInferior; 
        alert('Compra feita');       
    }
}
function comprarSuperior(qtdCompra) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtdCompra > qtdSuperior) {
        alert('Não há numero suficiente de ingressos disponiveis para efetuar sua compra');
    } else {
        qtdSuperior = qtdSuperior - qtdCompra;
        document.getElementById('qtd-superior').textContent = qtdInferior; 
        alert('Compra feita');       
    }
}