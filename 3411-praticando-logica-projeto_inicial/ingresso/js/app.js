function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso');
    let qtdCompra = document.getElementById('qtd');

    if(tipoIngresso.value == 'Pista') {
        comprarPista(qtdCompra);
    }
    if(tipoIngresso.value == 'Cadeira inferior') {
        comprarPista(qtdCompra.value);
    }
    if(tipoIngresso.value == 'Cadeira superior') {
        comprarPista(qtdCompra.value);
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
    let qtdPista = document.getElementById('qtd-Inferior')
}
function comprarSuperior(qtdCompra) {
    let qtdPista = document.getElementById('qtd-superior')
}