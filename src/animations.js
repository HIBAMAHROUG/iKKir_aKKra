const STORE_KEY = 'ikkir:anim';
const REVEAL = '.lesson-section, .quiz-section, .present-section, .tense-section, .tense-quiz, .english-section, .english-quiz, .seventh-section, .fifth-section, .reading-section, .reading-quiz, .fourth-section, .environment-section, .conjugation-grid span, .adjective-grid span, .ending-grid span, .grammar-table span, .grammar-table div, .word-grid span, .tense-cards span, .time-cards span, .number-strip span, .arabic-grid span, .vocabulary-review span, .seventh-table span, .job-grid span, .time-grid span, .form-card, .level-card, .subject-card, .info-item, .info-level, .auth-card, .info-card, .info-hero, [class$="-score"], .score-box, .__none__, [class$="-correction"], .correction, .__none__, .info-steps li, .contact-list li, .site-footer__inner > *, .dialogue, .reading-story, .environment-story, .seventh-reading';
const POP = '.conjugation-grid span, .adjective-grid span, .ending-grid span, .grammar-table span, .grammar-table div, .word-grid span, .tense-cards span, .time-cards span, .number-strip span, .arabic-grid span, .vocabulary-review span, .seventh-table span, .job-grid span, .time-grid span, [class$="-score"], .score-box, .__none__, .info-item, .info-level';
const SCORE = '[class$="-score"], .score-box, .__none__';
const RIGHT = new Set(["correct","is-correct","qz-feedback--ok"]);
const COLORS = ['#1f7a4d', '#e4a72c', '#0e7490', '#f3c76b', '#8a4b08', '#c5dfcf'];
const EMOJI = ['\u2B50', '\u2728', '\u{1F389}', '\u{1F388}'];
const BG = ['\u2B50', '\u270F\uFE0F', '\u{1F4DA}', '\u{1F524}', '\u{1F388}', '\u2728', '\u{1F308}', '\u{1F34E}', '\u{1F522}', '\u{1F9E9}'];

const root = document.documentElement;
let lastInput = 0;
const enabled = () => root.dataset.anim === 'on';
const recent = () => performance.now() - lastInput < 2500;
const rand = (a, b) => a + Math.random() * (b - a);

function readPref() {
  try { return localStorage.getItem(STORE_KEY); } catch { return null; }
}
function writePref(v) {
  try { localStorage.setItem(STORE_KEY, v); } catch { /* storage unavailable */ }
}

/* ---------- Confetti / sparkles ---------- */
export function burst(x, y, count = 14, emoji = false) {
  if (!enabled() || !document.body.animate) return;
  for (let i = 0; i < count; i += 1) {
    const p = document.createElement('span');
    p.className = 'confetti-piece';
    if (emoji && i % 3 === 0) {
      p.textContent = EMOJI[i % EMOJI.length];
      p.style.fontSize = `${rand(16, 26)}px`;
    } else {
      const s = rand(7, 12);
      p.style.width = `${s}px`;
      p.style.height = `${s * rand(0.5, 1)}px`;
      p.style.background = COLORS[i % COLORS.length];
      p.style.borderRadius = Math.random() < 0.4 ? '50%' : '2px';
    }
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    document.body.appendChild(p);
    const dx = rand(-140, 140);
    const up = rand(70, 190);
    const fall = rand(30, 150);
    const rot = rand(-540, 540);
    p.animate(
      [
        { transform: 'translate(0,0) rotate(0deg)', opacity: 1 },
        { transform: `translate(${dx * 0.6}px, ${-up}px) rotate(${rot * 0.5}deg)`, opacity: 1, offset: 0.4 },
        { transform: `translate(${dx}px, ${fall}px) rotate(${rot}deg)`, opacity: 0 },
      ],
      { duration: rand(900, 1500), easing: 'cubic-bezier(.2,.7,.3,1)' },
    ).onfinish = () => p.remove();
  }
}

function celebrate(el) {
  const r = el.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + Math.min(r.height / 2, 120), 26, true);
  [250, 500].forEach((delay) =>
    setTimeout(() => burst(rand(0.2, 0.8) * window.innerWidth, window.innerHeight * 0.35, 18, true), delay),
  );
}

/* ---------- Reveal on scroll ---------- */
let io = null;

function prepare(node) {
  if (!io || !enabled() || node.nodeType !== 1) return;
  const list = [];
  if (node.matches(REVEAL)) list.push(node);
  node.querySelectorAll(REVEAL).forEach((el) => list.push(el));
  list.forEach((el) => {
    if (el.dataset.rv) return;
    el.dataset.rv = '1';
    const idx = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
    el.style.setProperty('--i', String(Math.min(idx, 12)));
    el.classList.add('reveal');
    if (el.matches(POP)) el.classList.add('reveal--pop');
    io.observe(el);
  });
}

function onMutations(records) {
  records.forEach((r) => {
    if (r.type === 'childList') {
      r.addedNodes.forEach((n) => prepare(n));
      const s = r.target.nodeType === 1 ? r.target.closest(SCORE) : null;
      if (s && recent()) {
        const text = s.textContent.trim();
        if (text && s.dataset.done !== text) {
          s.dataset.done = text;
          celebrate(s);
        }
      }
    } else if (r.type === 'attributes' && recent()) {
      const el = r.target;
      const before = (r.oldValue || '').split(/\s+/);
      const gained = Array.from(el.classList).filter((c) => !before.includes(c));
      if (gained.some((c) => RIGHT.has(c))) {
        const b = el.getBoundingClientRect();
        burst(b.left + b.width / 2, b.top + b.height / 2, 16, true);
      }
    }
  });
}

/* ---------- Extras ---------- */
function initBackground() {
  if (document.querySelector('.kid-bg')) return;
  const wrap = document.createElement('div');
  wrap.className = 'kid-bg';
  wrap.setAttribute('aria-hidden', 'true');
  for (let i = 0; i < 14; i += 1) {
    const s = document.createElement('span');
    s.textContent = BG[i % BG.length];
    s.style.setProperty('--x', `${rand(2, 96)}%`);
    s.style.setProperty('--size', `${rand(22, 44)}px`);
    s.style.setProperty('--dur', `${rand(22, 40)}s`);
    s.style.setProperty('--delay', `${-rand(0, 30)}s`);
    s.style.setProperty('--sway', `${rand(-90, 90)}px`);
    wrap.appendChild(s);
  }
  document.body.appendChild(wrap);
}

function initProgress() {
  const bar = document.createElement('div');
  bar.id = 'scroll-progress';
  bar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(bar);
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    ticking = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

function initToggle() {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.className = 'anim-toggle';
  btn.title = 'Activer ou d\u00e9sactiver les animations';
  const paint = () => {
    const on = enabled();
    btn.setAttribute('aria-pressed', String(on));
    btn.textContent = `\u{1F388} Animations ${on ? 'ON' : 'OFF'}`;
  };
  btn.addEventListener('click', () => {
    root.dataset.anim = enabled() ? 'off' : 'on';
    writePref(root.dataset.anim);
    paint();
    if (enabled()) prepare(document.body);
  });
  paint();
  document.body.appendChild(btn);
}

/* ---------- Start ---------- */
export function initAnimations() {
  if (typeof window === 'undefined' || window.__ikkirAnim) return;
  window.__ikkirAnim = true;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.dataset.anim = readPref() ?? (reduced ? 'off' : 'on');

  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
  }

  initBackground();
  initProgress();
  initToggle();

  new MutationObserver(onMutations).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class'],
    attributeOldValue: true,
  });
  prepare(document.body);

  document.addEventListener('pointerdown', (e) => {
    lastInput = performance.now();
    const t = e.target instanceof Element ? e.target.closest('button, summary, [role="button"], a[class*="button"], label') : null;
    if (t && !t.classList.contains('anim-toggle')) burst(e.clientX, e.clientY, 7);
  });
  document.addEventListener('keydown', () => {
    lastInput = performance.now();
  });
}