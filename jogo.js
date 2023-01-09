let altura = 0
let largura = 0


function ajustaTAmanhoPalcoJogo(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    //console.log(altura,largura)
}

ajustaTAmanhoPalcoJogo()


let positionX = Math.floor(Math.random() * largura ) - 90
let positionY = Math.floor(Math.random() * altura) - 90

positionX = positionX < 0 ? 0 : positionX
positionY = positionY < 0 ? 0 : positionY



//criando a mosta de forma programática

let mosca = document.createElement('img')
mosca.src = './imagens/mosca.png'
mosca.className = 'mosca'
mosca.style.position = 'absolute'
mosca.style.left = positionX + 'px'
mosca.style.top = positionY + 'px'

document.body.appendChild(mosca)