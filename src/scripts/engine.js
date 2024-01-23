// Estado inicial do jogo
const state = {
    // Elementos visuais do jogo
    view: {
        squares: document.querySelectorAll(".square"), // Array de quadrados
        enemy: document.querySelector(".enemy"), // Elemento inimigo
        timeleft: document.querySelector("#time-left"), // Elemento de contagem regressiva
        score: document.querySelector("#score"), // Elemento de pontuação
    },

    // Valores iniciais do jogo
    values: {
        gameVelocity: 1000, // Velocidade do jogo (intervalo para exibir quadrados inimigos)
        hitposition: 0, // Posição do quadrado que precisa ser clicado
        result: 0, // Pontuação do jogador
        currenTime: 6000000, // Tempo inicial para a contagem regressiva
    },

    // Ações ou timers associados ao jogo
    actions: {
        timerID: setInterval(randomSquare, 1000), // Timer para exibir quadrados aleatórios
        countDownTimerID: setInterval(countDown, 1000), // Timer para a contagem regressiva
    }
};

// Função para reproduzir som ao clicar em um quadrado
function playSound() {
    let audio = new Audio("./src/images/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}

// Função para resetar o jogo após o fim do jogo
function resetGame() {
    state.values.result = 0; // Reinicia a pontuação do jogador
    state.values.currenTime = 60; // Reinicia o tempo
    state.view.score.textContent = state.values.result; // Atualiza a exibição da pontuação
    state.view.timeleft.textContent = state.values.currenTime; // Atualiza a exibição do tempo

    // Reinicia os timers para exibir quadrados e a contagem regressiva
    state.actions.timerID = setInterval(randomSquare, 1000);
    state.actions.countDownTimerID = setInterval(countDown, 1000);

    // Adiciona novamente os ouvintes de eventos aos quadrados
    addListenerHitBox();
}

// Função para a contagem regressiva do jogo
function countDown() {
    state.values.currenTime--; // Reduz o tempo
    state.view.timeleft.textContent = state.values.currenTime; // Atualiza a exibição do tempo

    // Verifica se o tempo acabou
    if (state.values.currenTime <= 0) {
        clearInterval(state.actions.countDownTimerID); // Para o timer de contagem regressiva
        clearInterval(state.actions.timerID); // Para o timer de exibição de quadrados
        alert("Game Over! O seu resultado foi: " + state.values.result);

        // Chama a função de reset ao clicar em OK no alerta de Game Over
        resetGame();
    }
}

// Função para exibir um quadrado aleatório como inimigo
function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitposition = randomSquare.id;
}

// Função para adicionar ouvintes de eventos aos quadrados
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            // Verifica se o quadrado clicado é o correto
            if (square.id === state.values.hitposition) {
                state.values.result++; // Aumenta a pontuação do jogador
                state.view.score.textContent = parseInt(state.values.result); // Atualiza a exibição da pontuação
                state.values.hitposition = null; // Reinicia a posição do acerto
                playSound(); // Reproduz o som para um acerto bem-sucedido
            }
        });
    });
}

// Inicializa o jogo adicionando eventos aos quadrados
function initialize() {
    addListenerHitBox();
}

// Inicia o processo de inicialização do jogo
initialize();
