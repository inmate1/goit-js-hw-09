const feedbackForm = document.querySelector('.feedback-form');
const inputField = feedbackForm.querySelector('input');
const textareaField = feedbackForm.querySelector('textarea');
const FORM_KEY = 'feedback-form-state';

feedbackForm.addEventListener('input', handleInput);
feedbackForm.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const userEmail = inputField.value.trim();
  const userMessage = textareaField.value.trim();
  const localData = {
    email: userEmail,
    message: userMessage,
  };
  localStorage.setItem(FORM_KEY, JSON.stringify(localData));
}

const savedMessage = localStorage.getItem(FORM_KEY);
if (savedMessage) {
  const savedValue = JSON.parse(savedMessage);
  inputField.value = savedValue.email;
  textareaField.value = savedValue.message;
}

function handleSubmit(event) {
  event.preventDefault();
  const element = event.target.elements;
  if (
    element.email.value.trim() === '' ||
    element.message.value.trim() === ''
  ) {
    return;
  }
  console.log({
    email: element.email.value.trim(),
    message: element.message.value.trim(),
  });

  event.target.reset();
  localStorage.removeItem(FORM_KEY);
}

const btn = feedbackForm.querySelector('button');
btn.onmouseover = () => {
  btn.style.backgroundColor = '#6c8cff';
};
btn.onmouseout = () => {
  btn.style.backgroundColor = '#4e75ff';
};

inputField.addEventListener('click', onPlaceholder);
function onPlaceholder(event) {
  inputField.setAttribute('placeholder', 'Type area');
}
