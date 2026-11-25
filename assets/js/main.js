/* BM Serviços & Soluções — interações da landing page */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ---- WhatsApp: número e mensagem inicial centralizados ---- */
  var WHATSAPP_NUMERO = '5538999387632';
  var WHATSAPP_MENSAGEM = 'Olá! Conheci a BM Serviços & Soluções pelo site e gostaria de conhecer melhor os serviços oferecidos.';
  var waUrl = 'https://wa.me/' + WHATSAPP_NUMERO + '?text=' + encodeURIComponent(WHATSAPP_MENSAGEM);
  document.querySelectorAll('.js-whatsapp').forEach(function (a) { a.href = waUrl; });

  /* ---- Ano no rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* ---- Menu hambúrguer ---- */
  var header = document.querySelector('.site-header');
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('menu');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('is-open', open);
  }

  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); toggle.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (nav.classList.contains('is-open') && !header.contains(e.target)) setMenu(false);
  });
  window.matchMedia('(min-width: 960px)').addEventListener('change', function (mq) {
    if (mq.matches) setMenu(false);
  });

  /* ---- Sombra do cabeçalho + botão flutuante ---- */
  var hero = document.getElementById('inicio');
  var waFloat = document.querySelector('.wa-float');
  var cta = document.getElementById('contato');
  var ticking = false;

  function onScroll() {
    var y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 4);
    var pastHero = y > hero.offsetTop + hero.offsetHeight - 120;
    // some ao chegar na chamada para ação (que já tem o botão) e no rodapé
    var beforeCta = cta.getBoundingClientRect().top > window.innerHeight;
    waFloat.classList.toggle('is-visible', pastHero && beforeCta);
    ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { window.requestAnimationFrame(onScroll); ticking = true; }
  }, { passive: true });
  onScroll();

  /* ---- Link ativo no menu ---- */
  var links = {};
  nav.querySelectorAll('ul a').forEach(function (a) { links[a.getAttribute('href').slice(1)] = a; });

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting && links[en.target.id]) {
          Object.keys(links).forEach(function (k) { links[k].classList.remove('is-active'); });
          links[en.target.id].classList.add('is-active');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ['inicio', 'servicos', 'sobre', 'contato'].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    /* ---- Animações de entrada ---- */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-in'); });
  }
})();
