(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const navLinks = nav ? [...nav.querySelectorAll('a[href^="#"]')] : [];

  const setMenu = (open) => {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };

  menuToggle?.addEventListener('click', () => {
    const open = menuToggle.getAttribute('aria-expanded') !== 'true';
    setMenu(open);
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  const updateHeader = () => {
    header?.classList.toggle('is-sticky', window.scrollY > 70);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const revealNodes = [...document.querySelectorAll('[data-reveal]')];
  revealNodes.forEach((node) => {
    const delay = Number(node.dataset.revealDelay || 0);
    node.style.setProperty('--reveal-delay', `${delay}ms`);
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });

    revealNodes.forEach((node) => revealObserver.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
  }

  const countdown = document.querySelector('[data-countdown]');
  if (countdown) {
    const target = new Date(countdown.dataset.date).getTime();
    const dayEl = countdown.querySelector('[data-days]');
    const hourEl = countdown.querySelector('[data-hours]');
    const minuteEl = countdown.querySelector('[data-minutes]');

    const renderCountdown = () => {
      const distance = target - Date.now();
      if (!Number.isFinite(distance) || distance <= 0) {
        if (dayEl) dayEl.textContent = '00';
        if (hourEl) hourEl.textContent = '00';
        if (minuteEl) minuteEl.textContent = '00';
        return;
      }

      const days = Math.floor(distance / 86_400_000);
      const hours = Math.floor((distance % 86_400_000) / 3_600_000);
      const minutes = Math.floor((distance % 3_600_000) / 60_000);

      if (dayEl) dayEl.textContent = String(days).padStart(2, '0');
      if (hourEl) hourEl.textContent = String(hours).padStart(2, '0');
      if (minuteEl) minuteEl.textContent = String(minutes).padStart(2, '0');
    };

    renderCountdown();
    window.setInterval(renderCountdown, 30_000);
  }

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && sections.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navLinks.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, { rootMargin: '-25% 0px -62% 0px', threshold: [0.05, 0.2, 0.5] });

    sections.forEach((section) => sectionObserver.observe(section));
  }
})();
