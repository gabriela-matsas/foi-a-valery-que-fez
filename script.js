// Foi a Valery Que Fez — Site Principal

// Ano do rodapé sempre atualizado
const footYear = document.getElementById('footYear');
if (footYear) footYear.textContent = new Date().getFullYear();

// Menu mobile (hamburguer)
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.classList.toggle('open', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Categorias do cardápio — sanfona (abre/fecha lista, só ativo em telas menores via CSS)
document.querySelectorAll('.cat-header').forEach(header => {
  header.addEventListener('click', () => {
    header.closest('.cat').classList.toggle('open');
  });
});

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Animação de entrada ao rolar
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.about, .cats, .gallery, .encinfo, .depoimentos, .contact-cta').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// Depoimentos — rolagem lateral com as setinhas (computador)
const depGrid = document.querySelector('.dep-grid');
const depBtns = document.querySelectorAll('.dep-nav button');
if (depGrid && depBtns.length) {
  const atualizaSetas = () => {
    const max = depGrid.scrollWidth - depGrid.clientWidth - 2;
    depBtns.forEach(btn => {
      const fim = btn.dataset.dir === 'prev' ? depGrid.scrollLeft <= 2 : depGrid.scrollLeft >= max;
      btn.disabled = fim;
    });
  };
  depBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = depGrid.querySelector('.dep');
      const passo = card ? card.offsetWidth + 16 : 320;
      depGrid.scrollBy({ left: btn.dataset.dir === 'next' ? passo : -passo, behavior: 'smooth' });
    });
  });
  depGrid.addEventListener('scroll', atualizaSetas, { passive: true });
  window.addEventListener('resize', atualizaSetas);
  atualizaSetas();
}
