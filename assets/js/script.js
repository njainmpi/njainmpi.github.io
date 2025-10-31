
// Theme toggle
const toggle = document.getElementById('themeToggle');
if (toggle) {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'light') document.body.classList.add('light-mode');
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const newTheme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
  });
}
