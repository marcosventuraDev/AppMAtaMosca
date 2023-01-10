let altura = 0
let largura = 0
let vidas = 1
let tempo = 10

//capitura o tamanho da tela
function ajustaTAmanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    //console.log(altura,largura)
}

ajustaTAmanhoPalcoJogo()


//implementando cronometro
var cronometro = setInterval(function () {
    tempo -= 1

    if (tempo < 0) {
        clearInterval(cronometro)
        clearInterval(criaMosca)
    } else {

        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)
//cronometro Fim


function posicaoRandomica() {

    //removar mosquito anterior caso exista
    if (document.getElementById('mosca')) {
        document.getElementById('mosca').remove();

        if (vidas > 3) {
            window.location.href = 'fimDeJogo.html'
        } else {
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png";

            vidas++
        }

    }


    let positionX = Math.floor(Math.random() * largura) - 90;
    let positionY = Math.floor(Math.random() * altura) - 90;

    positons = [positionX, positionY];

    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;



    //criando a mosta de forma programática

    let mosca = document.createElement('img');
    mosca.src = './imagens/mosca.png';
    mosca.className = tamanhoAleatorio() + " " + ladoAleatorio();
    mosca.style.position = 'absolute';
    mosca.style.left = positionX + 'px';
    mosca.style.top = positionY + 'px';
    mosca.id = 'mosca';
    mosca.onclick = function () {
        this.remove()
    }

    document.body.appendChild(mosca);
    tamanhoAleatorio();
}

function tamanhoAleatorio() {
    let classe = Math.floor(Math.random() * 3);
    console.log(classe);

    switch (classe) {
        case 0:
            return 'mosca1';
        case 1:
            return 'mosca2';
        case 2:
            return 'mosca3';
    }
}

function ladoAleatorio() {
    let classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';

    }
}