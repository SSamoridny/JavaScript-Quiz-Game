var gameScore = 0

var correct = document.querySelector('#correct')

var startButton = document.querySelector('#start-btn')
var answerOne = document.querySelector('#answer-buttons1')
var answerTwo = document.querySelector('#answer-buttons2')
var answerThree = document.querySelector('#answer-buttons3')
var answerFour = document.querySelector('#answer-buttons4')
var answerFive = document.querySelector('#answer-buttons5')
var beginH1 = document.querySelector('.controls')
var endOfGame = document.querySelector('.gameOver')
var correctTotal = document.querySelector('.gameScore')
correctTotal.innerHTML = gameScore


var questionContainer1 = document.querySelector('.question1')
var questionContainer2 = document.querySelector('.question2')
var questionContainer3 = document.querySelector('.question3')
var questionContainer4 = document.querySelector('.question4')
var questionContainer5 = document.querySelector('.question5')


//Start Button
startButton.addEventListener('click', startGame)

function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    beginH1.classList.add('hide')
    questionContainer1.classList.remove('hide')
    countDownToStart()
}



//Countdown timer
var countdown = 21

function countDownToStart() {
    countdown--
  
    if(countdown >= 0){
    document.querySelector('.countDown').innerHTML = countdown
      setTimeout ( countDownToStart, 1000)
    } else {
        var gameEnd = document.querySelector('.end')
        gameEnd.classList.remove('hide')
    }
}
var questionIndex = 1

questionContainer1.addEventListener('click', checkAnswer)

function checkAnswer(event) {
        console.log(event.target.classList)
    if( event.target.classList.contains('correct') ){
        console.log('You are correct')
        gameScore++
        correctTotal.innerHTML = gameScore
    } else {
        console.log('Wrong')
        countdown -= 5
    }


    //console.log('Check Answer', event.target.id)
    document.querySelector(`.question${questionIndex}`).classList.add('hide')
    document.querySelector(`.question${questionIndex}`).removeEventListener('click', checkAnswer )
    questionIndex++
    document.querySelector(`.question${questionIndex}`).classList.remove('hide')
    document.querySelector(`.question${questionIndex}`).addEventListener('click', checkAnswer)
    
}

//High Score List

var scoreList = JSON.parse( localStorage.scoreList || "[]" )
scoreList.push(gameScore)
localStorage.scoreList = JSON.stringify( scoreList )
var scoreList = JSON.parse( localStorage.scoreList || "[]" )
var userList = JSON.parse( localStorage.userList || "[]" )
for( var i=0; i<scoreList.length; i++ ){
   var activeScore = scoreList[i]
   var activeUser = userList[i]
   // display...
}
