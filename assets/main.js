document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  toggle.hidden = false;
  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
    toggle.querySelector('span').textContent = '+';
  }
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('open', open);
    toggle.querySelector('span').textContent = open ? '−' : '+';
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  matchMedia('(min-width: 768px)').addEventListener('change', closeMenu);
}
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
