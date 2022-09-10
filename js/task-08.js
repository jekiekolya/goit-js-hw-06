// Getting Ref
const formEl = document.querySelector('.login-form');

// Create Obj
const dataForm = {};
// Add event listener
formEl.addEventListener('submit', event => {
  // Reset to default
  event.preventDefault();

  // Getting ref for inputs
  const {
    elements: { email, password },
  } = event.currentTarget;

  // Get value from inputs
  let emailValue = email.value;
  let passwordValue = password.value;

  // Checked input field
  if (emailValue === '' || passwordValue === '') {
    return alert('All field in form, must be completed');
  }

  // Add value to Obj
  dataForm.email = emailValue;
  dataForm.password = passwordValue;
  console.log(dataForm);

  // Reset form
  formEl.reset();
});
