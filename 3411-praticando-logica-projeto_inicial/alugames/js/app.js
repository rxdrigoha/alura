function alterarStatus(id) {
    let gameClickado = document.getElementById(`game-${id}`);
    let img = gameClickado.querySelector('.dashboard__item__img');
    let botao = gameClickado.querySelector('.dashboard__item__button');

    if (img.classList.contains('dashboard__item__img--rented')) {
        img.classList.remove('dashboard__item__img--rented'); 
    } else {
        img.classList.add('dashboard__item__img--rented');
    }

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
    }
}
