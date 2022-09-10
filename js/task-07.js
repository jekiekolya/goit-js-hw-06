// GetRef
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

// Add event listener
inputEl.addEventListener('input', event => {
  let fontSizeValue = event.currentTarget.value;

  textEl.style.fontSize = `${fontSizeValue}px`;
});
