const form = document.querySelector('#login-form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const togglePassword = document.querySelector('#toggle-password');
const feedback = document.querySelector('#form-feedback');

email.addEventListener('input', () => {
  const wrap = email.closest('.input-wrap');
  wrap.classList.toggle('valid', email.validity.valid && email.value.length > 0);
});

togglePassword.addEventListener('click', () => {
  const show = password.type === 'password';
  password.type = show ? 'text' : 'password';
  togglePassword.textContent = show ? 'HIDE' : 'SHOW';
  togglePassword.setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  password.focus();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  feedback.classList.remove('error');

  if (!email.validity.valid || !password.validity.valid) {
    feedback.textContent = 'Please enter a valid email and a password of at least 6 characters.';
    feedback.classList.add('error');
    return;
  }

  feedback.textContent = 'Demo only: your form looks valid, but no account was signed in.';
});

document.querySelector('#forgot-link').addEventListener('click', (event) => {
  event.preventDefault();
  feedback.classList.remove('error');
  feedback.textContent = 'Password reset is a demo link. Connect a backend to enable password recovery.';
});

document.querySelector('#signup-link').addEventListener('click', (event) => {
  event.preventDefault();
  feedback.classList.remove('error');
  feedback.textContent = 'Account creation is a demo link. Add a sign-up page or backend to enable it.';
});
