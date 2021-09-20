let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const p1Score = document.getElementById("plyaer1-score");
const p2Score = document.getElementById("plyaer2-score");
const p1Dice = document.getElementById("dice-1");
const p2Dice = document.getElementById("dice-2");
const turn = document.getElementById("player-turn");
const rollBtn = document.getElementById("dice-btn");
const resetBtn = document.getElementById("reset-btn");

rollBtn.addEventListener("click", function () {
  let num = Math.floor(Math.random() * 6 + 1);
  if (player1Turn === true) {
    player1Score += num;
    p1Dice.textContent = num;
    p1Score.textContent = player1Score;
    p1Dice.classList.remove("active");
    p2Dice.classList.add("active");
    turn.textContent = "Player 2 turn";
    player1Turn = false;
  } else {
    player2Score += num;
    p2Dice.textContent = num;
    p2Score.textContent = player2Score;
    p2Dice.classList.remove("active");
    p1Dice.classList.add("active");
    turn.textContent = "Player 1 turn";
    player1Turn = true;
  }

  if (player1Score >= 20) {
    turn.textContent = "PLAYER 1 HAS WON!!🎊";
    rollBtn.display = false;
    resetBtn.display = true;
    showDisplayButton();
  } else if (player2Score >= 20) {
    turn.textContent = "PLAYER 2 HAS WON!!🎊";
    rollBtn.display = false;
    resetBtn.display = true;
    showDisplayButton();
  }
});
resetBtn.addEventListener("click", function () {
  reset();
});
function reset() {
  player1Score = 0;
  player2Score = 0;
  player1Turn = true;
  p1Dice.textContent = "-";
  p1Score.textContent = 0;
  p2Dice.textContent = "-";
  p2Score.textContent = 0;
  turn.textContent = "Player 1 turn";
  p2Dice.classList.remove("active");
  p1Dice.classList.add("active");
  rollBtn.style.display = "block";
  resetBtn.style.display = "none";
}

function showDisplayButton() {
  rollBtn.style.display = "none";
  resetBtn.style.display = "block";
}
