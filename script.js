/* =============================================
   HORÁRIO DE AULAS — script.js
   Kuromi x My Melody Theme
   ============================================= */

// ---- DADOS DO HORÁRIO ----
const schedule = [
  {
    day: 'Segunda-feira',
    dayShort: 'SEG',
    jsDay: 1, // 0 = Dom, 1 = Seg …
    subject: 'Banco de Dados',
    abbr: 'BD',
    emoji: '🗄️',
    accent: '#7c4fa0',
    badgeBg: 'rgba(124, 79, 160, 0.28)',
    badgeColor: '#c9b1e8',
    badgeBorder: 'rgba(201, 177, 232, 0.35)',
    tag: 'Estruturas & Consultas',
  },
  {
    day: 'Terça-feira',
    dayShort: 'TER',
    jsDay: 2,
    subject: 'Sistemas Operacionais',
    abbr: 'SO',
    emoji: '💻',
    accent: '#5a2d82',
    badgeBg: 'rgba(90, 45, 130, 0.28)',
    badgeColor: '#b088d4',
    badgeBorder: 'rgba(176, 136, 212, 0.35)',
    tag: 'Processos & Kernel',
  },
  {
    day: 'Quarta-feira',
    dayShort: 'QUA',
    jsDay: 3,
    subject: 'Estrutura de Dados',
    abbr: 'ED',
    emoji: '🌲',
    accent: '#9b6dcc',
    badgeBg: 'rgba(155, 109, 204, 0.25)',
    badgeColor: '#d4b8f0',
    badgeBorder: 'rgba(212, 184, 240, 0.3)',
    tag: 'Algoritmos & Lógica',
  },
  {
    day: 'Quinta-feira',
    dayShort: 'QUI',
    jsDay: 4,
    subject: 'Redes de Computadores',
    abbr: 'REDES',
    emoji: '🌐',
    accent: '#c04080',
    badgeBg: 'rgba(192, 64, 128, 0.25)',
    badgeColor: '#f2a8c4',
    badgeBorder: 'rgba(242, 168, 196, 0.35)',
    tag: 'Protocolos & Infra',
  },
  {
    day: 'Sexta-feira',
    dayShort: 'SEX',
    jsDay: 5,
    subject: 'Engenharia de Requisitos',
    abbr: 'ENG REQ',
    emoji: '📋',
    accent: '#e07aaa',
    badgeBg: 'rgba(224, 122, 170, 0.22)',
    badgeColor: '#fcd5e5',
    badgeBorder: 'rgba(252, 213, 229, 0.3)',
    tag: 'Análise & Documentação',
  },
  {
    day: 'Sábado',
    dayShort: 'SÁB',
    jsDay: 6,
    subject: 'Programação para Web I',
    abbr: 'WEB I',
    emoji: '🕸️',
    accent: '#a855c8',
    badgeBg: 'rgba(168, 85, 200, 0.25)',
    badgeColor: '#e2d4f5',
    badgeBorder: 'rgba(226, 212, 245, 0.3)',
    tag: 'HTML · CSS · JS',
  },
];

// ---- HELPERS ----
function getTodayJsDay() {
  return new Date().getDay(); // 0=Dom … 6=Sáb
}

function getCurrentSemesterLabel() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-12
  const sem = month <= 6 ? '1º' : '2º';
  return `${sem} semestre · ${year}`;
}

// ---- RENDER HEADER INFO ----
document.getElementById('semester-label').textContent = getCurrentSemesterLabel();

// ---- TODAY BANNER ----
function renderTodayBanner(todayDay) {
  const banner = document.getElementById('today-banner');
  const text = document.getElementById('today-text');

  const todayEntry = schedule.find(s => s.jsDay === todayDay);

  if (todayEntry) {
    text.textContent = `Hoje é ${todayEntry.day} — Você tem ${todayEntry.subject}! Bora estudar ✨`;
  } else if (todayDay === 0) {
    text.textContent = 'Hoje é Domingo — Descansa, você merece! 💤';
    banner.style.background = 'linear-gradient(90deg, #2c1f2e, #3a2045, #2c1f2e)';
  } else {
    text.textContent = 'Nenhuma aula hoje — aproveita o dia livre! 🎀';
    banner.style.background = 'linear-gradient(90deg, #2c1f2e, #3a2045, #2c1f2e)';
  }
}

// ---- RENDER CARDS ----
function renderCards() {
  const grid = document.getElementById('schedule-grid');
  const todayDay = getTodayJsDay();

  grid.innerHTML = '';

  schedule.forEach((item, index) => {
    const isToday = item.jsDay === todayDay;
    const card = document.createElement('article');
    card.className = 'card' + (isToday ? ' is-today' : '');
    card.style.animationDelay = `${0.08 * index + 0.4}s`;
    card.style.setProperty('--card-accent', item.accent);

    card.innerHTML = `
      ${isToday ? '<div class="today-badge">✦ hoje ✦</div>' : ''}
      <div class="card-badge" style="
        --badge-bg: ${item.badgeBg};
        --badge-color: ${item.badgeColor};
        --badge-border: ${item.badgeBorder};
        background: ${item.badgeBg};
        color: ${item.badgeColor};
        border-color: ${item.badgeBorder};
      ">
        ${item.emoji} ${item.abbr}
      </div>
      <h2 class="card-day">${item.day}</h2>
      <p class="card-subject">${item.subject}</p>
      <span class="card-tag">${item.tag}</span>
      <span class="card-corner-deco" aria-hidden="true">${item.emoji}</span>
    `;

    grid.appendChild(card);
  });

  renderTodayBanner(todayDay);
}

// ---- KUROMI & MY MELODY SVG PLACEHOLDERS ----
// Gera SVGs inline caso os arquivos externos não existam
function injectCharacterSVGs() {
  const kuromiEl = document.getElementById('kuromi-img');
  const melodyEl = document.getElementById('melody-img');

  // SVG estilizado da Kuromi (gótico, preto e lilás)
  const kuromiSVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140" fill="none">
      <!-- Body -->
      <ellipse cx="60" cy="95" rx="32" ry="38" fill="#1a1118"/>
      <!-- Head -->
      <ellipse cx="60" cy="55" rx="34" ry="32" fill="#1a1118"/>
      <!-- Skull bow -->
      <g>
        <ellipse cx="60" cy="25" rx="18" ry="10" fill="#7c4fa0"/>
        <ellipse cx="43" cy="25" rx="9" ry="7" fill="#9b6dcc"/>
        <ellipse cx="77" cy="25" rx="9" ry="7" fill="#9b6dcc"/>
        <circle cx="60" cy="25" r="5" fill="#c9b1e8"/>
        <!-- Skull detail on bow -->
        <circle cx="60" cy="25" r="3" fill="#f5efe6"/>
        <circle cx="58" cy="24" r="0.8" fill="#1a1118"/>
        <circle cx="62" cy="24" r="0.8" fill="#1a1118"/>
        <path d="M58 27 Q60 28.5 62 27" stroke="#1a1118" stroke-width="0.7" fill="none"/>
      </g>
      <!-- Ears -->
      <ellipse cx="30" cy="40" rx="9" ry="12" fill="#1a1118"/>
      <ellipse cx="90" cy="40" rx="9" ry="12" fill="#1a1118"/>
      <ellipse cx="30" cy="40" rx="5" ry="7" fill="#3d1a50"/>
      <ellipse cx="90" cy="40" rx="5" ry="7" fill="#3d1a50"/>
      <!-- Eyes (angry/cute) -->
      <ellipse cx="48" cy="55" rx="7" ry="8" fill="#f5efe6"/>
      <ellipse cx="72" cy="55" rx="7" ry="8" fill="#f5efe6"/>
      <circle cx="49" cy="56" r="4.5" fill="#1a1118"/>
      <circle cx="73" cy="56" r="4.5" fill="#1a1118"/>
      <circle cx="50.5" cy="54.5" r="1.5" fill="#f5efe6"/>
      <circle cx="74.5" cy="54.5" r="1.5" fill="#f5efe6"/>
      <!-- Angry brows -->
      <path d="M42 46 Q48 43 54 46" stroke="#7c4fa0" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M66 46 Q72 43 78 46" stroke="#7c4fa0" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <!-- Nose -->
      <ellipse cx="60" cy="63" rx="3" ry="2" fill="#2c1f2e"/>
      <!-- Mouth -->
      <path d="M53 70 Q60 74 67 70" stroke="#7c4fa0" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Cheek blush -->
      <ellipse cx="42" cy="66" rx="6" ry="3" fill="#f2a8c4" opacity="0.4"/>
      <ellipse cx="78" cy="66" rx="6" ry="3" fill="#f2a8c4" opacity="0.4"/>
      <!-- Tail -->
      <path d="M92 100 Q108 90 104 115" stroke="#1a1118" stroke-width="5" fill="none" stroke-linecap="round"/>
      <circle cx="104" cy="116" r="5" fill="#7c4fa0"/>
    </svg>
  `;

  // SVG estilizado da My Melody (rosa, doce)
  const melodySVG = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 140" fill="none">
      <!-- Cloak/body -->
      <ellipse cx="60" cy="98" rx="36" ry="36" fill="#f2a8c4"/>
      <!-- Hood -->
      <ellipse cx="60" cy="55" rx="38" ry="36" fill="#f2a8c4"/>
      <!-- Inner face area -->
      <ellipse cx="60" cy="60" rx="26" ry="28" fill="#fff8f2"/>
      <!-- Bunny ears on hood -->
      <ellipse cx="38" cy="28" rx="10" ry="18" fill="#f2a8c4"/>
      <ellipse cx="82" cy="28" rx="10" ry="18" fill="#f2a8c4"/>
      <ellipse cx="38" cy="28" rx="5" ry="11" fill="#fcd5e5"/>
      <ellipse cx="82" cy="28" rx="5" ry="11" fill="#fcd5e5"/>
      <!-- Eyes (sweet dots) -->
      <ellipse cx="50" cy="60" rx="5" ry="6" fill="#1a1118"/>
      <ellipse cx="70" cy="60" rx="5" ry="6" fill="#1a1118"/>
      <circle cx="51.5" cy="58.5" r="1.5" fill="#f5efe6"/>
      <circle cx="71.5" cy="58.5" r="1.5" fill="#f5efe6"/>
      <!-- Nose -->
      <ellipse cx="60" cy="67" rx="3.5" ry="2.5" fill="#e07aaa"/>
      <!-- Smile -->
      <path d="M52 73 Q60 79 68 73" stroke="#e07aaa" stroke-width="2" fill="none" stroke-linecap="round"/>
      <!-- Cheek blush -->
      <ellipse cx="44" cy="70" rx="7" ry="4" fill="#f2a8c4" opacity="0.7"/>
      <ellipse cx="76" cy="70" rx="7" ry="4" fill="#f2a8c4" opacity="0.7"/>
      <!-- Flower accessory -->
      <circle cx="85" cy="45" r="7" fill="#fcd5e5"/>
      <circle cx="85" cy="45" r="3.5" fill="#f2a8c4"/>
      <circle cx="85" cy="38" r="3.5" fill="#fcd5e5"/>
      <circle cx="85" cy="52" r="3.5" fill="#fcd5e5"/>
      <circle cx="78" cy="45" r="3.5" fill="#fcd5e5"/>
      <circle cx="92" cy="45" r="3.5" fill="#fcd5e5"/>
      <!-- Ribbon -->
      <path d="M30 95 Q60 120 90 95" stroke="#e07aaa" stroke-width="3" fill="none" stroke-linecap="round"/>
    </svg>
  `;

  kuromiEl.outerHTML = `<div class="char-svg" id="kuromi-img">${kuromiSVG}</div>`;
  melodyEl.outerHTML = `<div class="char-svg" id="melody-img">${melodySVG}</div>`;

  // Aplica animação ao container SVG
  const charSVGs = document.querySelectorAll('.char-svg');
  charSVGs.forEach((el, i) => {
    el.style.animation = `charFloat 4s ease-in-out infinite ${i * 2}s`;
    el.style.display = 'block';
    el.style.filter = 'drop-shadow(0 4px 16px rgba(201, 177, 232, 0.5))';
    el.style.width = '100%';
  });
}

// Adiciona estilo para .char-svg
const charStyle = document.createElement('style');
charStyle.textContent = `
  .char-svg {
    display: block;
    width: 100%;
    animation: charFloat 4s ease-in-out infinite;
    filter: drop-shadow(0 4px 16px rgba(201, 177, 232, 0.5));
  }
  .char-svg svg { width: 100%; height: auto; }
`;
document.head.appendChild(charStyle);

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {
  injectCharacterSVGs();
  renderCards();
});
