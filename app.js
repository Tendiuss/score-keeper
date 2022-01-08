const h2 = document.querySelector('h2')
const selectScore = document.querySelector('#scores')
const p1btn = document.querySelector('#p1Increase')
const p2btn = document.querySelector('#p2Increase')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetBtn =  document.querySelector('#reset')


let selectedScore = 5
let p1score = 0
let p2score = 0


p1btn.addEventListener('click', () => {
    p1score++
    p1Display.innerText = p1score
    if (p1score === selectedScore) {
        p1Display.classList.add('winner')
        p2Display.classList.add('loser')
        disableButtons()
    } 
})

p2btn.addEventListener('click', () => {
    p2score++
    p2Display.innerText = p2score
    if (p2score === selectedScore) {
        p1Display.classList.add('loser')
        p2Display.classList.add('winner')
        disableButtons()
    } 
})

selectScore.addEventListener('change', function(){
    selectedScore = parseInt(this.value);
})

resetBtn.addEventListener('click', () => {
    p1score = 0
    p2score = 0
    p1Display.innerText = 0
    p2Display.innerText = 0
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser',)
    p1btn.classList.remove('disabled')
    p2btn.classList.remove('disabled')
    enableButtons()
})



function disableButtons() {
    p1btn.disabled = true
    p2btn.disabled = true
    p1btn.classList.add('disabled')
    p2btn.classList.add('disabled')
}

function enableButtons() {
    p1btn.disabled = false
    p2btn.disabled = false
}


