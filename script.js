const toggle = document.querySelector('.mobile-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', links.classList.contains('open') ? 'true' : 'false');
  });
}

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});

const evalForm = document.querySelector('#evaluation-form');
if (evalForm) {
  evalForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const success = document.querySelector('#form-success');
    if (success) success.hidden = false;
    evalForm.scrollIntoView({behavior:'smooth', block:'start'});
  });
}
