let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  console.log(count);
  countEl.innerText = count;
}

let paragraphText = document.getElementById("save-el");

function save() {
  console.log("paragraphText");
  let savedEntries = count + " - ";
  paragraphText.textContent += savedEntries;
  count = 0;
  countEl.innerText = count;
}
