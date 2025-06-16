// Theme toggle
const toggle = document.getElementById('theme-toggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
  }
});
// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('.nav-list');
menuToggle.addEventListener('click', () => {
  navList.classList.toggle('mobile-active');
});


// Academia abstract on hover
document.querySelectorAll('.card-grid.academia-grid .card').forEach(card => {
  const display = document.getElementById('abstract-display');
  if (!display) return;
  card.addEventListener('mouseenter', () => {
    const text = card.getAttribute('data-abstract') || '';
    display.innerText = text;
  });
  card.addEventListener('mouseleave', () => {
    display.innerHTML = '<em>Hover over a degree above to read its abstract.</em>';
  });
});
