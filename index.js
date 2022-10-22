let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;

let message = "";

if (sum <= 20) {
  message = "Do you want to draw a new card?";
  console.log(message);
} else if (sum === 21) {
  message = "You've got blackjack!";
  console.log(message);
  hasBlackjack = true;
} else {
  message = "You are out of the game";
  console.log(message);
  isAlive = false;
}

console.log(hasBlackjack);
