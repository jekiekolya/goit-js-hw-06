// Getting Ref
const bodyEl = document.querySelector('body');
const btnEl = document.querySelector('button.change-color');
const textColorEl = document.querySelector('span.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnEl.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  textColorEl.textContent = `${randomColor}`;
});
