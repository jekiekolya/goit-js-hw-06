function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Getting Ref
const inputEl = document.querySelector('input[type="number"]');
const boxEl = document.querySelector('#boxes');
const createBtnEl = document.querySelector('button[data-create]');
const destroyBtnEl = document.querySelector('button[data-destroy]');

let stringStructure = '';
let arrayStructure = [];
// Function for create structure HTML
function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let widthBlock = 30 + 10 * i;
    let heightBlock = 30 + 10 * i;
    let randomColor = getRandomHexColor();
    stringStructure += `<div style="width: ${widthBlock}px; height:${heightBlock}px; background-color: ${randomColor}"></div>`;
  }

  // Another way for create structure
  // for (let i = 0; i < amount; i += 1) {
  //   let divEl = document.createElement('div');
  //   let randomColor = getRandomHexColor();
  //   divEl.style.width = `${30 + 10 * i}px`;
  //   divEl.style.height = `${30 + 10 * i}px`;
  //   divEl.style.backgroundColor = randomColor;
  //   arrayStructure.push(divEl);
  // }
}

// Add event listener for getting number from input
let numberInput;
inputEl.addEventListener('input', event => {
  numberInput = event.currentTarget.value * 1;
});

// Add event listener for create NEW boxes
createBtnEl.addEventListener('click', () => {
  boxEl.innerHTML = '';
  stringStructure = '';
  createBoxes(numberInput);
  boxEl.insertAdjacentHTML('beforeend', stringStructure);
});

// Add event listener for destroy boxes
destroyBtnEl.addEventListener('click', () => {
  boxEl.innerHTML = '';
  stringStructure = '';
});
