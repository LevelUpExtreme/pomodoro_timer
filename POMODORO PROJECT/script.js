const display = document.getElementById(`display`);
const startBtn = document.getElementById(`start`);
const pauseBtn = document.getElementById(`pause`);
const resetBtn = document.getElementById(`reset`);

let inicial = 25 * 60;
let segundos = inicial;
let timer = null;

function formatar(s) {
    const min = String(Math.floor(s/60)).padStart(2, '0')
    const sec = String(Math.floor(s % 60)).padStart(2, '0')
    return `${min}:${sec}`
}

function mostrarNaTela() {
    const timeElement = display.querySelector('.text-8xl') || display;
    timeElement.textContent = formatar(segundos);
    
    // Atualizar barra de progresso
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        const percentage = (segundos / inicial) * 100;
        progressBar.style.width = `${percentage}%`;
    }
}

function contagem() {
    if(segundos > 0) {
        segundos--
        mostrarNaTela()
        document.title = `${formatar(segundos)} - POMODORO`
    
    }else {
        clearInterval(timer)
        timer = null;
        document.title = "00:00 - Tempo Esgotado!"
        
        // Adicionar efeito visual quando terminar
        const timerDisplay = document.querySelector('.timer');
        if (timerDisplay) {
            timerDisplay.classList.add('animate-bounce-gentle');
            setTimeout(() => {
                timerDisplay.classList.remove('animate-bounce-gentle');
            }, 2000);
        }
    }
}

function start() {
    if(timer) return 
    mostrarNaTela()
    timer = setInterval(contagem, 1000)
    
    // Efeito visual no botão
    startBtn.classList.add('animate-pulse');
    pauseBtn.classList.remove('animate-pulse');
}

function pause() {
    if(!timer) return
    clearInterval(timer)
    timer = null;
    
    // Efeito visual no botão
    startBtn.classList.remove('animate-pulse');
    pauseBtn.classList.add('animate-pulse');
}

function reset() {
    clearInterval(timer)
    timer = null;
    segundos = inicial;
    mostrarNaTela() 
    document.title = "POMODORO";
    
    // Remover efeitos visuais
    startBtn.classList.remove('animate-pulse');
    pauseBtn.classList.remove('animate-pulse');
    
    // Efeito visual no reset
    resetBtn.classList.add('animate-bounce');
    setTimeout(() => {
        resetBtn.classList.remove('animate-bounce');
    }, 500);
}

startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
resetBtn.addEventListener('click', reset)

mostrarNaTela();
document.title = "POMODORO"