let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function startGame() {
  sumEl.textContent += " " + sum;
  cardsEl.textContent += " " + firstCard + " " + secondCard;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got blackjack!";
    hasBlackjack = true;
  } else {
    message = "You are out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
}
