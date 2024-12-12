// script.js
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    toggleButton.textContent = 'Switch to Light Theme';
  } else {
    toggleButton.textContent = 'Switch to Dark Theme';
  }
});
