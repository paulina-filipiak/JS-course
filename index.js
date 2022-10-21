let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count = count + 1;
  console.log(count);
  countEl.innerText = count;
}

function save() {
  console.log(count);
}
