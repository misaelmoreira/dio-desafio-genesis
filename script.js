// inicializando variaveis vazias.
let order = [];
let clickedOrder = [];
let score = 0;

//definindo valores das cores
// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul


const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')


//criando ordem de numeros aleatorio.
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random()* 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);           
    }
}


// acende a proxima cor.
let lightColor = (element, number) => {
    number = number * 500;

    setTimeout (() => {
         element.classList.add('selected')                
    }, number - 250);  
        
    setTimeout (() => {
         element.classList.remove('selected')                
    });                   
}


// checa se os botoes clicados são os mesmos da ordem gerada no jogo.
let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nivel!`);
        nextLevel();
    }
}


//funcao para o clique do usuario.
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);  
}


// função que retorna a cor para função ordem de numeros aleatorios
let createColorElement = (color) => {
    if (color == 0 ) {
        return green;
    } else if (color == 1) {
        return red;                
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}


//função proximo nivel do jogo
let nextLevel =  () => {
    score++;
    shuffleOrder();
}


//função para gameOver.
let gameOver = () => {
    alert(`Pontuação: ${score}!\n Você perdeu o jogo!\n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickOrder = [];

    playGame();
}

//função inicio de jogo
let playGame = () => {
    alert('Bem Vindo ao Gênesis! Iniciando um novo jogo!')
    score = 0;

    nextLevel();    
}


//evento de clicks das cores.
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);


// iniciando o jogo.
playGame();