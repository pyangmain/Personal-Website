const startButton = document.getElementById('start-button')
const stopButton = document.getElementById('stop-button')
const sumButton = document.getElementById('sum-button')
startButton.addEventListener('click', startGame)
stopButton.addEventListener('click', stopGame)
sumButton.addEventListener('click', checkAnswer)
let gamePlaying = false;
let totalSum = 0;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startGame() {
    let x = document.getElementById("final-sum");
    let y = document.getElementById("game-result");
    x.style.display = "none"
    y.style.display = "none"
    gamePlaying = true;
    let pastNum = 0;
    const time = document.getElementById('game-time').value
    const timeBetweenNumbers = document.getElementById('time-between-numbers').value
    const lowerBound = Math.floor(document.getElementById('lower-bound').value) 
    const upperBound = Math.ceil(document.getElementById('upper-bound').value) + 1
    for(let i = 0; i < time/timeBetweenNumbers; i++) {
        if(!gamePlaying) {
            document.getElementById('num-box').innerHTML = ''
            return
        }
        await sleep(timeBetweenNumbers * 1000)
        let randomNum = Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound)
        if(i != 0) {
            while(pastNum == randomNum) {
                randomNum = Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound)
            }
        }
        pastNum = randomNum;
        totalSum += randomNum
        document.getElementById('num-box').innerHTML = randomNum
    }
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}

function stopGame(){
    gamePlaying = false; 
}

function checkAnswer() {
    let x = document.getElementById("game-result")
    if(document.getElementById('sum-input').value == totalSum) {
        x.style.color = "green";
        document.getElementById('game-result').innerHTML = "Correct! The sum was: " + totalSum
    } else {
        x.style.color = "black"
        document.getElementById('game-result').innerHTML = "Incorrect. The sum was: " + totalSum
    }
    x.style.display = "block";
    totalSum = 0;
}

