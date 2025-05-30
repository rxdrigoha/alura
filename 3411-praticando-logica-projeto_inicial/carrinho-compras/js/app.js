let total = 0;
function adicionar() {
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    let valProduto = produto.split('R$')[1];
    let nProduto = produto.split('-')[0];
    let addTotal = quantidade * parseFloat(valProduto);

    let addCarrinho = document.getElementById('lista-produtos');
    addCarrinho.innerHTML = `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nProduto} <span class="texto-azul">R$${valProduto}</span>
        </section>`;
    total = total + addTotal;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${total}`;

}

function limpar() {
 total = 0;
let addCarrinho = document.getElementById('lista-produtos');
    addCarrinho.innerHTML = '';
let campoTotal = document.getElementById('valor-total');
campoTotal.textContent = 'R$ 0';
}