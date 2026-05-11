(function () {
  'use strict';

  // ===== 価格切替タブ =====
  const toggleBtns = document.querySelectorAll('.pricing-toggle__btn');
  const cycleContents = document.querySelectorAll('[data-cycle-content]');

  if (toggleBtns.length && cycleContents.length) {
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cycle = btn.dataset.cycle;

        toggleBtns.forEach((b) => {
          const isActive = b.dataset.cycle === cycle;
          b.classList.toggle('is-active', isActive);
          b.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });

        cycleContents.forEach((c) => {
          c.hidden = c.dataset.cycleContent !== cycle;
        });
      });

      // キーボード（左右矢印）でタブ移動
      btn.addEventListener('keydown', (e) => {
        const tabs = Array.from(toggleBtns);
        const idx = tabs.indexOf(btn);
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
          e.preventDefault();
          const next = e.key === 'ArrowRight'
            ? tabs[(idx + 1) % tabs.length]
            : tabs[(idx - 1 + tabs.length) % tabs.length];
          next.focus();
          next.click();
        }
      });
    });
  }

  // ===== スクロールフェードイン =====
  if ('IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.fade-in');
    if (targets.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
      );
      targets.forEach((t) => observer.observe(t));
    }
  } else {
    document.querySelectorAll('.fade-in').forEach((t) => t.classList.add('is-visible'));
  }
})();
