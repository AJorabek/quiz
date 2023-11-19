let time = document.querySelector("#player__time");
let player_score = document.querySelector("#player__score");
let ques__id = document.querySelector("#question__id");
let answerDiv = document.querySelector("#answers");
let start__game = document.getElementById("start__game");
let nextQues = document.querySelector("#next__game");
let question__wrapper = document.getElementById("question__wrapper");
let nextgame=document.getElementById('next__game')

// Variables
let score = 0;
let quest_id = 0;
let gamecount = -1;
let leftTime = 10;
let answer1 = document.createElement("button");
let answer2 = document.createElement("button");
let array = [
  {
    id: 1,
    question: "Qora rangiga zid rang ?",
    answers: ["Qizil", "Oq"],
    correctAns: "Oq",
  },
  {
    id: 2,
    question: "Qora rangiga zid rang ?",
    answers: ["Qizil", "Oq"],
    correctAns: "Oq",
  },
  {
    id: 3,
    question: "Qora rangiga zid rang ?",
    answers: ["Qizil", "Oq"],
    correctAns: "Oq",
  },
  {
    id: 4,
    question: "Qora rangiga zid rang ?",
    answers: ["Qizil", "Oq"],
    correctAns: "Oq",
  },
  {
    id: 5,
    question: "Qora rangiga zid rang ?",
    answers: ["Qizil", "Oq"],
    correctAns: "Oq",
  },
  {
    id: 6,
    question: "Qora rangiga zid rang ?",
    answers: ["Qizil", "Oq"],
    correctAns: "Oq",
  },
];

start__game.addEventListener("click", () => {
  nextQues.classList.remove("hidden");
  time.classList.remove("hidden");
  start__game.classList.add("hidden");
  question__wrapper.classList.remove("hidden");
  startGame();
});
function startGame() {
  gamecount += 1;
  if (gamecount <= 6) {
    ques__id.textContent = array[gamecount].id;
  } else {
    nextQues.disabled = true;
  }
  answer1.innerHTML = `
    ${array[gamecount].answers[0]}
    `;
  answer2.innerHTML = `
    ${array[gamecount].answers[1]}
    `;
  answerDiv.append(answer1, answer2);
  timeInt();
}
nextQues.addEventListener("click", () => {
    answer2.classList.remove('true_ans')
    answer1.classList.remove('error_ans')
    leftTime=10;
    time.textContent='Time left: '+leftTime;
    answer1.disabled = false;
    answer2.disabled = false;
  startGame();
  if(answer1.classList.contains('true_ans')){
    score+=1
    player_score.textContent=`Score: ${score}`
} else if(answer2.classList.contains('true_ans')){
    score+=1
    player_score.textContent=`Score: ${score}`
}
  if(gamecount==6){
    nextgame.classList.add('hidden')
    start__game.classList.remove('hidden')
  }
});

function timeInt() {

  let inId = setInterval(() => {
    leftTime = leftTime - 1;
    time.textContent = `Time left: ${leftTime}`;
    if (leftTime === 0) {
      clearInterval(inId);
      answer1.disabled = true;
      answer2.disabled = true;
    }
  }, 1000);
}
answer1.addEventListener('click',(e)=>{
    let inputE=e.target.textContent;
    checkAns(inputE);
    console.log(inputE);
})
answer2.addEventListener('click',(e)=>{
    let inputE=e.target.textContent;
    checkAns(inputE);
    console.log(inputE);
})
function checkAns(answerinput){
    if(answerinput===array[gamecount].correctAns){
        nextQues()
        answer2.classList.add('true_ans')
    } else{
        answer1.classList.add('error_ans')
        answer2.classList.add('true_ans')
    }
}
function newGame(){
    let score = 0;
let quest_id = 0;
let gamecount = -1;
let leftTime = 10;
}