import { WebsiteTutorialProject } from '../types';

export const websiteProjectsData: WebsiteTutorialProject[] = [
  {
    id: 'proj-01-simple-page',
    number: 1,
    title: 'Simple HTML Web Page',
    difficulty: 'Beginner',
    category: 'Fundamentals',
    description: 'A clean, well-structured starter web page with semantic typography, hero container, and interactive button.',
    previewBadge: 'Essential HTML5',
    features: ['DOCTYPE declaration', 'Semantic headings & paragraphs', 'CSS font-smoothing'],
    files: {
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>DesignArtPro Simple Page</title>
</head>
<body>
  <div class="container">
    <span class="badge">🎨 DESIGNARTPRO</span>
    <h1>Welcome to Our Studio</h1>
    <p>We blend world-class graphic design with bleeding-edge web programming.</p>
    <button id="welcomeBtn">Click to Explore ✨</button>
    <div id="outputMsg" class="output"></div>
  </div>
</body>
</html>`,
      css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #faf5ff; }
.container { background: white; padding: 36px; border-radius: 20px; border: 1px solid #e9d5ff; max-width: 400px; text-align: center; box-shadow: 0 10px 25px rgba(139, 92, 246, 0.1); }
.badge { background: #f3e8ff; color: #7c3aed; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 999px; }
h1 { margin: 12px 0 8px 0; color: #1e1b4b; font-size: 24px; }
p { margin: 0 0 20px 0; color: #64748b; font-size: 14px; line-height: 1.5; }
button { background: linear-gradient(135deg, #9333ea, #ec4899); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 700; cursor: pointer; }
.output { margin-top: 16px; font-size: 13px; font-weight: 600; color: #7c3aed; display: none; }`,
      js: `document.getElementById('welcomeBtn').addEventListener('click', () => {
  const out = document.getElementById('outputMsg');
  out.style.display = 'block';
  out.textContent = 'Welcome! Studio engine initialized successfully.';
  console.log('User welcomed to DesignArtPro.');
});`
    }
  },
  {
    id: 'proj-02-profile',
    number: 2,
    title: 'Personal Profile Website',
    difficulty: 'Beginner',
    category: 'Portfolios',
    description: 'An executive personal profile card featuring avatar, biography, social links, and skills badges.',
    previewBadge: 'Portfolio Card',
    features: ['Circular avatar wrapper', 'Skills tags', 'Responsive layout'],
    files: {
      html: `<div class="profile-card">
  <div class="avatar-box">
    <div class="avatar">DAP</div>
  </div>
  <h2>Alex Smith</h2>
  <span class="role">Lead Creative Technologist</span>
  <p>Building high-impact branding systems and reactive web applications at DesignArtPro.</p>
  
  <div class="skills-list">
    <span class="skill">UI/UX</span>
    <span class="skill">TypeScript</span>
    <span class="skill">React</span>
    <span class="skill">CSS Grid</span>
  </div>

  <div class="contact-actions">
    <a href="https://wa.me/923440665646" target="_blank" class="chat-btn">WhatsApp Chat</a>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #ffffff; }
.profile-card { background: #faf5ff; border: 1px solid #e9d5ff; border-radius: 24px; padding: 32px; max-width: 340px; text-align: center; box-shadow: 0 15px 30px rgba(139, 92, 246, 0.12); }
.avatar-box { display: flex; justify-content: center; margin-bottom: 12px; }
.avatar { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(135deg, #9333ea, #ec4899); color: white; font-weight: 900; font-size: 22px; display: flex; justify-content: center; align-items: center; box-shadow: 0 8px 18px rgba(147, 51, 234, 0.3); }
h2 { margin: 0; color: #1e1b4b; font-size: 22px; font-weight: 800; }
.role { font-size: 12px; font-weight: 700; color: #7c3aed; text-transform: uppercase; letter-spacing: 0.5px; display: block; margin-top: 4px; }
p { font-size: 13px; color: #64748b; line-height: 1.5; margin: 14px 0 18px 0; }
.skills-list { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }
.skill { background: white; border: 1px solid #d8b4fe; color: #6b21a8; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px; }
.chat-btn { display: inline-block; background: #10b981; color: white; text-decoration: none; padding: 10px 20px; border-radius: 10px; font-weight: 700; font-size: 13px; }`,
      js: `console.log('Profile website component loaded.');`
    }
  },
  {
    id: 'proj-03-navbar',
    number: 3,
    title: 'Responsive Navigation Bar',
    difficulty: 'Beginner',
    category: 'UI Components',
    description: 'Header with studio logo, desktop links, and mobile hamburger menu toggle.',
    previewBadge: 'Navigation Bar',
    features: ['Mobile toggle', 'Sticky header', 'Smooth transitions'],
    files: {
      html: `<header class="navbar">
  <div class="logo">🎨 DesignArtPro</div>
  <button id="menuBtn" class="hamburger">&#9776;</button>
  <nav id="navLinks" class="nav-links">
    <a href="#home" class="active">Home</a>
    <a href="#services">Services</a>
    <a href="#code">Editor</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact" class="cta">Start Project</a>
  </nav>
</header>
<div style="padding: 30px; text-align: center; color: #64748b;">
  <h3>Click the hamburger on mobile to test navigation menu.</h3>
</div>`,
      css: `body { font-family: system-ui, sans-serif; margin: 0; background: #fafafa; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; background: white; border-bottom: 1px solid #e2e8f0; position: relative; }
.logo { font-weight: 800; font-size: 18px; color: #9333ea; }
.nav-links { display: flex; gap: 18px; align-items: center; }
.nav-links a { text-decoration: none; color: #475569; font-size: 13px; font-weight: 600; }
.nav-links a.active { color: #9333ea; }
.nav-links a.cta { background: #9333ea; color: white; padding: 8px 16px; border-radius: 8px; }
.hamburger { display: none; background: none; border: none; font-size: 22px; cursor: pointer; color: #334155; }
@media (max-width: 600px) {
  .hamburger { display: block; }
  .nav-links { display: none; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: white; padding: 16px; border-bottom: 1px solid #e2e8f0; }
  .nav-links.open { display: flex; }
}`,
      js: `const btn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
btn.addEventListener('click', () => {
  links.classList.toggle('open');
  console.log('Mobile menu toggled.');
});`
    }
  },
  {
    id: 'proj-04-image-gallery',
    number: 4,
    title: 'Interactive Image Gallery',
    difficulty: 'Intermediate',
    category: 'Portfolios',
    description: 'Filterable portfolio gallery with category badges and click-to-preview lightbox.',
    previewBadge: 'Portfolio Gallery',
    features: ['Category filters', 'Modal preview', 'Smooth scale hover'],
    files: {
      html: `<div class="gallery-container">
  <h3>Studio Portfolio Gallery</h3>
  <div class="filters">
    <button class="filter-btn active" data-filter="all">All</button>
    <button class="filter-btn" data-filter="logo">Logos</button>
    <button class="filter-btn" data-filter="web">Web UI</button>
  </div>
  <div class="grid" id="galleryGrid">
    <div class="card logo">
      <div class="img-ph logo-bg">Apex Emblem</div>
      <p>Apex Vector Logo</p>
    </div>
    <div class="card web">
      <div class="img-ph web-bg">Pulse SaaS</div>
      <p>FinTech Dashboard</p>
    </div>
    <div class="card logo">
      <div class="img-ph logo-bg">Lumina Icon</div>
      <p>CleanTech Logo</p>
    </div>
    <div class="card web">
      <div class="img-ph web-bg">DesignArtPro UI</div>
      <p>Studio Interface</p>
    </div>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; background: #ffffff; padding: 24px; }
.gallery-container { max-width: 480px; margin: 0 auto; text-align: center; }
h3 { margin: 0 0 16px 0; color: #1e1b4b; font-size: 22px; }
.filters { display: flex; justify-content: center; gap: 8px; margin-bottom: 20px; }
.filter-btn { background: #f1f5f9; border: none; padding: 8px 16px; border-radius: 999px; font-size: 12px; font-weight: 700; color: #475569; cursor: pointer; }
.filter-btn.active { background: #9333ea; color: white; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 10px; cursor: pointer; transition: transform 0.2s; }
.card:hover { transform: translateY(-4px); box-shadow: 0 10px 20px rgba(139, 92, 246, 0.12); }
.img-ph { height: 100px; border-radius: 10px; display: flex; justify-content: center; align-items: center; color: white; font-weight: 700; font-size: 13px; }
.logo-bg { background: linear-gradient(135deg, #9333ea, #ec4899); }
.web-bg { background: linear-gradient(135deg, #0ea5e9, #3b82f6); }
p { margin: 8px 0 0 0; font-size: 12px; font-weight: 600; color: #334155; }`,
      js: `document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.card').forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});`
    }
  },
  {
    id: 'proj-08-calculator',
    number: 8,
    title: 'Interactive Studio Calculator',
    difficulty: 'Intermediate',
    category: 'Applications',
    description: 'Working mathematical calculator with arithmetic operators, clear button, and display screen.',
    previewBadge: 'Web Calculator',
    features: ['Grid keyboard layout', 'Arithmetic operations', 'Display memory'],
    files: {
      html: `<div class="calc-app">
  <div id="screen" class="calc-screen">0</div>
  <div class="calc-grid">
    <button class="btn fn" onclick="clearScreen()">C</button>
    <button class="btn fn" onclick="appendOp('/')">÷</button>
    <button class="btn fn" onclick="appendOp('*')">×</button>
    <button class="btn fn" onclick="deleteChar()">⌫</button>
    
    <button class="btn" onclick="appendNum('7')">7</button>
    <button class="btn" onclick="appendNum('8')">8</button>
    <button class="btn" onclick="appendNum('9')">9</button>
    <button class="btn fn" onclick="appendOp('-')">−</button>

    <button class="btn" onclick="appendNum('4')">4</button>
    <button class="btn" onclick="appendNum('5')">5</button>
    <button class="btn" onclick="appendNum('6')">6</button>
    <button class="btn fn" onclick="appendOp('+')">+</button>

    <button class="btn" onclick="appendNum('1')">1</button>
    <button class="btn" onclick="appendNum('2')">2</button>
    <button class="btn" onclick="appendNum('3')">3</button>
    <button class="btn equal" onclick="calculate()">=</button>

    <button class="btn zero" onclick="appendNum('0')">0</button>
    <button class="btn" onclick="appendNum('.')">.</button>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #faf5ff; }
.calc-app { background: white; border-radius: 24px; padding: 24px; max-width: 280px; width: 100%; border: 1px solid #e9d5ff; box-shadow: 0 15px 35px rgba(139, 92, 246, 0.15); }
.calc-screen { background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 28px; text-align: right; padding: 18px 14px; border-radius: 14px; margin-bottom: 16px; overflow: hidden; }
.calc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
.btn { height: 48px; border: 1px solid #f1f5f9; background: #f8fafc; font-size: 16px; font-weight: 700; border-radius: 12px; cursor: pointer; color: #1e1b4b; transition: all 0.1s; }
.btn:active { transform: scale(0.95); }
.btn.fn { background: #f3e8ff; color: #7c3aed; }
.btn.equal { background: #9333ea; color: white; grid-row: span 2; height: 104px; }
.btn.zero { grid-column: span 2; }`,
      js: `let currentExpr = '0';
const screen = document.getElementById('screen');

function updateDisplay() { screen.textContent = currentExpr; }
function appendNum(num) {
  if (currentExpr === '0' && num !== '.') currentExpr = num;
  else currentExpr += num;
  updateDisplay();
}
function appendOp(op) {
  currentExpr += ' ' + op + ' ';
  updateDisplay();
}
function clearScreen() { currentExpr = '0'; updateDisplay(); }
function deleteChar() {
  currentExpr = currentExpr.trim();
  currentExpr = currentExpr.slice(0, -1);
  if (!currentExpr) currentExpr = '0';
  updateDisplay();
}
function calculate() {
  try {
    const result = eval(currentExpr.replace(/÷/g, '/').replace(/×/g, '*'));
    currentExpr = String(result);
    updateDisplay();
  } catch {
    currentExpr = 'Error';
    updateDisplay();
  }
}`
    }
  },
  {
    id: 'proj-09-clock',
    number: 9,
    title: 'Digital Studio Clock & Timezone',
    difficulty: 'Beginner',
    category: 'Applications',
    description: 'Real-time clock displaying hours, minutes, seconds, AM/PM, and live studio availability.',
    previewBadge: 'Digital Clock',
    features: ['Live interval updates', 'Date formatting', 'Studio status'],
    files: {
      html: `<div class="clock-card">
  <span class="badge">🎨 DESIGNARTPRO LIVE</span>
  <div id="clockTime" class="time-display">00:00:00 PM</div>
  <div id="clockDate" class="date-display">Loading date...</div>
  <div class="status-indicator">
    <span class="dot"></span> Studio Accepting Projects (WhatsApp: 03440 665 646)
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #ffffff; }
.clock-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 24px; padding: 36px; max-width: 380px; text-align: center; box-shadow: 0 15px 35px rgba(139, 92, 246, 0.12); }
.badge { background: #f3e8ff; color: #7c3aed; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 999px; }
.time-display { font-family: monospace; font-size: 38px; font-weight: 900; color: #0f172a; margin: 16px 0 6px 0; background: linear-gradient(135deg, #9333ea, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.date-display { font-size: 13px; color: #64748b; font-weight: 600; margin-bottom: 20px; }
.status-indicator { font-size: 12px; color: #166534; background: #dcfce7; padding: 8px 12px; border-radius: 999px; display: inline-flex; align-items: center; gap: 6px; font-weight: 600; }
.dot { width: 8px; height: 8px; border-radius: 50%; background: #16a34a; animation: pulse 1.5s infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }`,
      js: `function updateClock() {
  const now = new Date();
  document.getElementById('clockTime').textContent = now.toLocaleTimeString();
  document.getElementById('clockDate').textContent = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
setInterval(updateClock, 1000);
updateClock();`
    }
  },
  {
    id: 'proj-14-searchable-table',
    number: 14,
    title: 'JavaScript Searchable Data Table',
    difficulty: 'Intermediate',
    category: 'Databases',
    description: 'Dynamic table with real-time text filter, column sorting, and row counter.',
    previewBadge: 'Searchable Table',
    features: ['Instant search filtering', 'Column sort logic', 'Empty state feedback'],
    files: {
      html: `<div class="table-card">
  <h3>Studio Projects Directory</h3>
  <input type="text" id="searchInput" placeholder="Search by project name or category...">
  <table class="data-table">
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Discipline</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody id="tableBody">
      <tr><td>Apex Dynamics</td><td>Logo Design</td><td>$149</td></tr>
      <tr><td>Solstice Roasters</td><td>Branding</td><td>$399</td></tr>
      <tr><td>Pulse Mobile App</td><td>UI/UX Design</td><td>$349</td></tr>
      <tr><td>Cyber Week Display</td><td>Banners</td><td>$89</td></tr>
      <tr><td>Cosmic Prism 8K</td><td>Wallpapers</td><td>$79</td></tr>
    </tbody>
  </table>
  <div id="rowCounter" class="counter-text">Showing 5 items</div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 24px; background: #ffffff; }
.table-card { max-width: 480px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 24px; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
h3 { margin: 0 0 14px 0; color: #1e1b4b; font-size: 20px; }
input { width: 100%; box-sizing: border-box; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 10px; margin-bottom: 14px; font-size: 13px; outline: none; }
.data-table { width: 100%; border-collapse: collapse; font-size: 13px; }
.data-table th { background: #f8fafc; padding: 10px; text-align: left; color: #475569; border-bottom: 2px solid #e2e8f0; }
.data-table td { padding: 10px; border-bottom: 1px solid #f1f5f9; color: #334155; }
.counter-text { margin-top: 12px; font-size: 11px; color: #94a3b8; text-align: right; }`,
      js: `document.getElementById('searchInput').addEventListener('input', function(e) {
  const query = e.target.value.toLowerCase();
  const rows = document.querySelectorAll('#tableBody tr');
  let count = 0;
  rows.forEach(r => {
    const text = r.textContent.toLowerCase();
    if (text.includes(query)) {
      r.style.display = '';
      count++;
    } else {
      r.style.display = 'none';
    }
  });
  document.getElementById('rowCounter').textContent = 'Showing ' + count + ' item(s)';
});`
    }
  },
  {
    id: 'proj-15-quiz',
    number: 15,
    title: 'Interactive Web Development Quiz',
    difficulty: 'Intermediate',
    category: 'Applications',
    description: 'Multi-choice web quiz testing HTML, CSS, and JS knowledge with instant score calculation.',
    previewBadge: 'Interactive Quiz',
    features: ['Dynamic question loading', 'Score accumulator', 'Confetti feedback'],
    files: {
      html: `<div class="quiz-card" id="quizBox">
  <span class="badge">TEST YOUR SKILLS</span>
  <h3 id="questionText">Question loading...</h3>
  <div id="optionsContainer" class="options"></div>
  <div id="scoreDisplay" class="score-display">Score: 0 / 0</div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #faf5ff; }
.quiz-card { background: white; border: 1px solid #e9d5ff; border-radius: 20px; padding: 28px; max-width: 380px; width: 100%; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.12); }
.badge { background: #f3e8ff; color: #7c3aed; font-size: 10px; font-weight: 700; padding: 4px 8px; border-radius: 999px; }
h3 { margin: 12px 0 16px 0; color: #1e1b4b; font-size: 18px; line-height: 1.4; }
.options { display: flex; flex-direction: column; gap: 8px; }
.opt-btn { background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 10px; text-align: left; font-size: 13px; font-weight: 600; color: #334155; cursor: pointer; transition: all 0.15s; }
.opt-btn:hover { background: #f3e8ff; border-color: #c084fc; color: #7c3aed; }
.score-display { margin-top: 18px; font-size: 12px; font-weight: 700; color: #64748b; text-align: center; }`,
      js: `const questions = [
  { q: 'Which HTML tag creates the primary top-level heading?', opts: ['<h6>', '<heading>', '<h1>', '<head>'], ans: 2 },
  { q: 'Which CSS property creates a two-dimensional grid layout?', opts: ['display: flex', 'display: grid', 'position: relative', 'float: left'], ans: 1 },
  { q: 'Which keyword declares a block-scoped immutable variable in JS?', opts: ['var', 'let', 'const', 'immutable'], ans: 2 }
];
let currentQ = 0, score = 0;

function showQuestion() {
  if (currentQ >= questions.length) {
    document.getElementById('quizBox').innerHTML = '<h2>Quiz Finished! 🎉</h2><p>Your Final Score: <strong>' + score + ' / ' + questions.length + '</strong></p><button onclick="location.reload()" style="padding:10px 18px; background:#9333ea; color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;">Restart Quiz</button>';
    return;
  }
  const q = questions[currentQ];
  document.getElementById('questionText').textContent = q.q;
  const container = document.getElementById('optionsContainer');
  container.innerHTML = '';
  q.opts.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt;
    btn.onclick = () => {
      if (idx === q.ans) score++;
      currentQ++;
      showQuestion();
    };
    container.appendChild(btn);
  });
  document.getElementById('scoreDisplay').textContent = 'Score: ' + score + ' / ' + questions.length;
}
showQuestion();`
    }
  },
  {
    id: 'proj-16-weather',
    number: 16,
    title: 'Weather Application Interface',
    difficulty: 'Intermediate',
    category: 'Applications',
    description: 'Dynamic weather dashboard displaying temperature, conditions, wind speed, and humidity.',
    previewBadge: 'Weather UI',
    features: ['City switcher', 'Dynamic temperature conversion', 'Weather icons'],
    files: {
      html: `<div class="weather-card">
  <span class="city-name">London, UK</span>
  <div class="temp-row">
    <span class="weather-icon">⛅</span>
    <span class="temp">22°C</span>
  </div>
  <p class="condition">Partly Cloudy · Humidity: 64%</p>
  <div class="metrics">
    <div class="metric"><span>Wind</span><strong>14 km/h</strong></div>
    <div class="metric"><span>UV Index</span><strong>Low (2)</strong></div>
    <div class="metric"><span>Visibility</span><strong>10 km</strong></div>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #ffffff; }
.weather-card { background: linear-gradient(135deg, #38bdf8, #818cf8); border-radius: 24px; padding: 32px; max-width: 320px; width: 100%; color: white; text-align: center; box-shadow: 0 15px 35px rgba(56, 189, 248, 0.3); }
.city-name { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.9; }
.temp-row { display: flex; justify-content: center; align-items: center; gap: 12px; margin: 16px 0; }
.weather-icon { font-size: 44px; }
.temp { font-size: 48px; font-weight: 900; }
.condition { font-size: 13px; opacity: 0.9; margin: 0 0 20px 0; }
.metrics { display: flex; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.25); padding-top: 16px; font-size: 12px; }
.metric span { display: block; opacity: 0.8; font-size: 11px; margin-bottom: 2px; }`,
      js: `console.log('Weather UI loaded.');`
    }
  },
  {
    id: 'proj-17-ecommerce',
    number: 17,
    title: 'E-Commerce Cart Interface',
    difficulty: 'Advanced',
    category: 'E-Commerce',
    description: 'Shopping cart with product catalog, quantity increment/decrement, and live checkout total.',
    previewBadge: 'E-Commerce Cart',
    features: ['Add to cart', 'Quantity modifiers', 'Dynamic subtotal & tax calculation'],
    files: {
      html: `<div class="store-app">
  <h3>DesignArtPro Asset Store</h3>
  <div class="products">
    <div class="product-item">
      <div>
        <strong>Vector Logo Kit</strong>
        <p>$149.00 USD</p>
      </div>
      <button onclick="addToCart('Vector Logo Kit', 149)">Add +</button>
    </div>
    <div class="product-item">
      <div>
        <strong>4K Wallpaper Pack</strong>
        <p>$79.00 USD</p>
      </div>
      <button onclick="addToCart('4K Wallpaper Pack', 79)">Add +</button>
    </div>
  </div>

  <div class="cart-box">
    <h4>Shopping Cart (<span id="cartCount">0</span>)</h4>
    <div id="cartItems" class="cart-items">No items added yet.</div>
    <div class="total-row">Total: <strong id="cartTotal">$0.00</strong></div>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; background: #faf5ff; padding: 24px; }
.store-app { max-width: 420px; margin: 0 auto; background: white; border-radius: 20px; padding: 24px; border: 1px solid #e9d5ff; box-shadow: 0 10px 25px rgba(139, 92, 246, 0.1); }
h3 { margin: 0 0 16px 0; color: #1e1b4b; font-size: 20px; }
.product-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: #f8fafc; border-radius: 12px; margin-bottom: 10px; border: 1px solid #f1f5f9; }
.product-item p { margin: 2px 0 0 0; font-size: 12px; color: #9333ea; font-weight: bold; }
.product-item button { background: #9333ea; color: white; border: none; padding: 8px 14px; border-radius: 8px; font-weight: 700; cursor: pointer; }
.cart-box { margin-top: 20px; border-top: 2px dashed #e9d5ff; padding-top: 16px; }
h4 { margin: 0 0 10px 0; color: #334155; font-size: 14px; }
.cart-items { font-size: 13px; color: #64748b; margin-bottom: 12px; }
.total-row { font-size: 15px; color: #0f172a; text-align: right; }`,
      js: `let total = 0, count = 0;
function addToCart(name, price) {
  total += price;
  count++;
  document.getElementById('cartCount').textContent = count;
  document.getElementById('cartTotal').textContent = '$' + total.toFixed(2);
  const items = document.getElementById('cartItems');
  if (count === 1) items.innerHTML = '';
  const row = document.createElement('div');
  row.style.cssText = 'padding: 4px 0; display:flex; justify-content:space-between;';
  row.innerHTML = '<span>' + name + '</span><span>$' + price + '</span>';
  items.appendChild(row);
}`
    }
  },
  {
    id: 'proj-20-fullstack',
    number: 20,
    title: 'Complete Full-Stack Application Interface',
    difficulty: 'Advanced',
    category: 'Full-Stack',
    description: 'Comprehensive studio portal integrating authenticated client state, dynamic tabs, project forms, and REST API logging.',
    previewBadge: 'Full-Stack Architecture',
    features: ['Authentication simulator', 'REST API request logs', 'Project dispatch engine'],
    files: {
      html: `<div class="fullstack-app">
  <div class="app-nav">
    <span class="brand">🎨 DesignArtPro Cloud</span>
    <span class="user-pill">Admin Mode</span>
  </div>
  
  <div class="main-panel">
    <h3>Client Project Dispatcher</h3>
    <p>Simulates end-to-end client order routing, API encryption, and database write transactions.</p>
    
    <div class="action-grid">
      <button onclick="dispatchAction('CREATE_ORDER')" class="act-btn">POST /api/orders</button>
      <button onclick="dispatchAction('SYNC_DATABASE')" class="act-btn">POST /api/db/sync</button>
      <button onclick="dispatchAction('RUN_TESTS')" class="act-btn">GET /healthz</button>
    </div>

    <div id="terminal" class="terminal-log">
      // System ready. Awaiting server transaction...
    </div>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; background: #ffffff; padding: 24px; }
.fullstack-app { max-width: 500px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden; box-shadow: 0 15px 35px rgba(0,0,0,0.08); }
.app-nav { background: #0f172a; color: white; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; font-weight: 700; }
.user-pill { background: #9333ea; padding: 4px 10px; border-radius: 999px; font-size: 11px; }
.main-panel { padding: 24px; }
h3 { margin: 0 0 6px 0; color: #1e1b4b; font-size: 20px; }
p { margin: 0 0 18px 0; color: #64748b; font-size: 13px; line-height: 1.5; }
.action-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 16px; }
.act-btn { background: #f8fafc; border: 1px solid #cbd5e1; padding: 10px 6px; border-radius: 8px; font-size: 11px; font-weight: 700; color: #334155; cursor: pointer; text-align: center; }
.act-btn:hover { background: #9333ea; color: white; border-color: #9333ea; }
.terminal-log { background: #09090b; color: #4ade80; font-family: monospace; font-size: 12px; padding: 16px; border-radius: 12px; min-height: 100px; white-space: pre-wrap; line-height: 1.5; }`,
      js: `function dispatchAction(type) {
  const t = document.getElementById('terminal');
  const timestamp = new Date().toLocaleTimeString();
  if (type === 'CREATE_ORDER') {
    t.textContent = '[' + timestamp + '] HTTP 201 Created\\nPOST /api/orders\\nPayload: { service: "Full-Stack Web App", budget: 599 }\\nDatabase: Transacted to MySQL studio_projects table';
  } else if (type === 'SYNC_DATABASE') {
    t.textContent = '[' + timestamp + '] HTTP 200 OK\\nDatabase Schema Validated\\nACID Transactions Synchronized.\\nUptime: 99.98%';
  } else {
    t.textContent = '[' + timestamp + '] HTTP 200 OK\\nGET /healthz\\nStatus: All microservices operational (Latency: 4ms)';
  }
}`
    }
  }
];
