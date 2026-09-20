const CARDS = '.form-card, .level-card, .subject-card, .info-item, .info-level';
const MAX_TILT = 9; // degrés : mets 5 pour un effet plus discret

export function initTilt() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let active = null;

  const reset = (el) => {
    el.style.removeProperty('--rx');
    el.style.removeProperty('--ry');
    el.classList.remove('is-tilting');
  };

  document.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      const el = e.target instanceof Element ? e.target.closest(CARDS) : null;

      if (active && active !== el) {
        reset(active);
        active = null;
      }
      if (!el) return;

      el.classList.add('tilt-3d');
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--ry', `${(px - 0.5) * 2 * MAX_TILT}deg`);
      el.style.setProperty('--rx', `${(0.5 - py) * 2 * MAX_TILT}deg`);
      el.classList.add('is-tilting');
      active = el;
    },
    { passive: true },
  );

  document.addEventListener('pointerout', (e) => {
    if (!e.relatedTarget && active) {
      reset(active);
      active = null;
    }
  });
}