// Getting Ref
const inputEl = document.querySelector('#validation-input');

// Get LengthInput and convert to number
const inputLengthEl = Number(inputEl.getAttribute('data-length'));

// Add event listener
inputEl.addEventListener('blur', event => {
  let inputLength = event.currentTarget.value.length;

  if (inputLength === inputLengthEl) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
