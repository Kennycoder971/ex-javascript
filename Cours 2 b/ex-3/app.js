const timeInput = document.querySelector('#time')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')


let time = Number(timeInput.value)
let timer
function start () {
  timer = setInterval(function() {

    if(time > 0) {
        time --  
    } else if(time <= 0) {
        time = 0
    }
    
    timeInput.value = time
  },1000)
}

function stop () {
    clearInterval(timer)
}
function reset () {
    time = 0
    timeInput.value = time
}

timeInput.addEventListener('input', (e) => {
    time = Number(e.target.value)
})

startBtn.addEventListener('click',start)
stopBtn.addEventListener('click',stop)
resetBtn.addEventListener('click',reset)