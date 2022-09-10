// Getting Ref
const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  console.log(event);
  let valueInput = event.currentTarget.value;

  if (valueInput !== '') {
    outputEl.innerHTML = valueInput;
  } else {
    outputEl.innerHTML = 'Anonymous';
  }
});
