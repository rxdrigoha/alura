let amigos = [];

function adicionar() {
let amigo = document.getElementById('nome-amigo');

if (amigos.includes(amigo.value)) {
    alert('Nome ja existe na lista!');
    return;
}



let listaAmigos = document.getElementById('lista-amigos');
amigos.push(amigo.value);
if (listaAmigos.textContent == '') {
    listaAmigos.textContent = amigo.value;
} else {
    listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
}
amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('É necessário pelo menos 4 amigos para realizar o sorteio.');
        return;
    }


    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        let proximo = (i + 1) % amigos.length;
        sorteio.innerHTML += amigos[i] + ' --> ' + amigos[proximo] + '<br>';
    }
}

function embaralhar(amigos) {
    for (let i = amigos.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';                     
}