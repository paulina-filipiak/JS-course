let num1 = 8;
let num2 = 2;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

let sumRender = document.getElementById("sum-el");

// Create four functions: add(), subtract(), divide(), multiply()
let sum = 0;

function add() {
  sum = num1 + num2;
  sumRender.innerText += sum;
}

function substract() {
  sum = num1 - num2;
  sumRender.innerText += sum;
}
function divide() {
  sum = num1 / num2;
  sumRender.innerText += sum;
}
function multiply() {
  sum = num1 * num2;
  sumRender.innerText += sum;
}

// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"
