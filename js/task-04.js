// Getting Ref
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const counterValueEl = document.querySelector('#value');

let counterValue = 0;

btnDecrement.addEventListener('click', () => {
  counterValue -= 1;
  counterValueEl.innerHTML = counterValue;
});

btnIncrement.addEventListener('click', () => {
  counterValue += 1;
  counterValueEl.innerHTML = counterValue;
});
