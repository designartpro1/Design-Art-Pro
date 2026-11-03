import { CurriculumTopic } from '../types';

export const htmlCurriculumData: CurriculumTopic[] = [
  // --- BASIC HTML ---
  {
    id: 'html-doc-structure',
    number: 1,
    title: 'HTML Document Structure',
    tier: 'Basic',
    discipline: 'html',
    description: 'Every web page starts with DOCTYPE, <html>, <head>, and <body>. The head contains page metadata and viewport tags, while the body renders user-visible content.',
    code: {
      html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DesignArtPro HTML Starter</title>
</head>
<body>
  <h1>Welcome to DesignArtPro Studio</h1>
  <p>This is a foundational HTML5 document with complete semantic structure.</p>
</body>
</html>`,
      css: `body { font-family: system-ui, sans-serif; padding: 24px; color: #1e1b4b; background: #ffffff; }
h1 { color: #9333ea; font-size: 28px; }
p { color: #64748b; font-size: 16px; }`
    },
    keyConcepts: [
      '<!DOCTYPE html> declares the modern HTML5 standard',
      '<meta name="viewport"> ensures responsive rendering on mobile and desktop',
      '<head> contains title and meta tags; <body> contains visible elements'
    ],
    practiceChallenge: 'Add a second paragraph describing your dream web development project.'
  },
  {
    id: 'html-headings',
    number: 2,
    title: 'Headings: H1, H2, H3, H4, H5, H6',
    tier: 'Basic',
    discipline: 'html',
    description: 'HTML offers six heading tags ranked by structural importance from H1 (primary title) down to H6 (sub-heading).',
    code: {
      html: `<h1>H1: DesignArtPro Main Brand Title</h1>
<h2>H2: Creative Coding & Web Architecture</h2>
<h3>H3: Frontend Frameworks & Tools</h3>
<h4>H4: Component Hierarchy & State</h4>
<h5>H5: Function Parameters & Interfaces</h5>
<h6>H6: Low-Level Memory Diagnostic Notes</h6>`,
      css: `body { font-family: system-ui, sans-serif; padding: 20px; line-height: 1.4; }
h1 { color: #9333ea; border-bottom: 2px solid #f3e8ff; padding-bottom: 8px; }
h2 { color: #ec4899; }
h3 { color: #0ea5e9; }
h4 { color: #475569; }
h5 { color: #64748b; }
h6 { color: #94a3b8; }`
    },
    keyConcepts: [
      'Only use one H1 per page for optimal search engine accessibility',
      'Never skip heading levels (e.g. do not jump from H1 directly to H4)',
      'Headings define the outline and document tree for screen readers'
    ]
  },
  {
    id: 'html-tables',
    number: 13,
    title: 'HTML Tables, Rows, Columns & Headings',
    tier: 'Basic',
    discipline: 'html',
    description: 'Tables organize tabular data using <table>, <thead>, <tbody>, <tr> (rows), <th> (headers), and <td> (data cells).',
    code: {
      html: `<h2>Studio Project Deliverables</h2>
<table class="studio-table">
  <thead>
    <tr>
      <th>Project ID</th>
      <th>Service Name</th>
      <th>Category</th>
      <th>Budget (USD)</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#DAP-101</td>
      <td>Apex Dynamics Logo</td>
      <td>Logo Designing</td>
      <td>$149</td>
      <td><span class="status-done">Completed</span></td>
    </tr>
    <tr>
      <td>#DAP-102</td>
      <td>Solstice Brand Book</td>
      <td>Branding</td>
      <td>$399</td>
      <td><span class="status-prog">In Progress</span></td>
    </tr>
    <tr>
      <td>#DAP-103</td>
      <td>Pulse FinTech Web UI</td>
      <td>UI/UX Design</td>
      <td>$349</td>
      <td><span class="status-done">Completed</span></td>
    </tr>
  </tbody>
</table>`,
      css: `body { font-family: system-ui, sans-serif; padding: 24px; }
.studio-table { width: 100%; border-collapse: collapse; margin-top: 12px; }
.studio-table th { background: #f3e8ff; color: #6b21a8; padding: 12px; text-align: left; font-size: 13px; }
.studio-table td { padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 13px; color: #334155; }
.status-done { background: #dcfce7; color: #166534; padding: 4px 10px; border-radius: 999px; font-weight: 600; font-size: 11px; }
.status-prog { background: #dbeafe; color: #1e40af; padding: 4px 10px; border-radius: 999px; font-weight: 600; font-size: 11px; }`
    },
    keyConcepts: [
      '<table> encapsulates the data table',
      '<thead> and <tbody> distinguish headers from body data',
      'border-collapse: collapse removes double borders in modern styling'
    ]
  },
  // --- HTML FORMS ---
  {
    id: 'html-registration-form',
    number: 30,
    title: 'Registration Form Coding & Validation',
    tier: 'Forms',
    discipline: 'html',
    description: 'Complete registration form with Full Name, Username, Email, Phone, Password, Confirm Password, Gender, Terms Checkbox, and Submit.',
    code: {
      html: `<div class="reg-container">
  <div class="reg-header">
    <span class="badge">🎨 DesignArtPro</span>
    <h2>Create Studio Account</h2>
    <p>Sign up to commission graphic designs and save code projects.</p>
  </div>
  
  <form id="regForm">
    <div class="row">
      <div class="col">
        <label for="fullName">Full Name *</label>
        <input type="text" id="fullName" placeholder="Sarah Jenkins" required>
      </div>
      <div class="col">
        <label for="username">Username *</label>
        <input type="text" id="username" placeholder="sarah_pro" required>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <label for="email">Email Address *</label>
        <input type="email" id="email" placeholder="sarah@example.com" required>
      </div>
      <div class="col">
        <label for="phone">Phone / WhatsApp</label>
        <input type="tel" id="phone" placeholder="03440 665 646">
      </div>
    </div>

    <div class="row">
      <div class="col">
        <label for="password">Password *</label>
        <input type="password" id="password" placeholder="At least 8 characters" required>
      </div>
      <div class="col">
        <label for="confirmPassword">Confirm Password *</label>
        <input type="password" id="confirmPassword" placeholder="Re-enter password" required>
      </div>
    </div>

    <div class="gender-section">
      <span class="sub-label">Account Category</span>
      <label class="radio-label"><input type="radio" name="accType" value="client" checked> Individual Client</label>
      <label class="radio-label"><input type="radio" name="accType" value="agency"> Agency / Business</label>
    </div>

    <div class="checkbox-box">
      <input type="checkbox" id="terms" required>
      <label for="terms">I agree to the DesignArtPro Terms & Licensing Policy</label>
    </div>

    <button type="submit" class="submit-btn">Create Account & Claim $150 Credit</button>
  </form>

  <div id="feedback" class="feedback-msg"></div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; background: #faf5ff; padding: 20px; }
.reg-container { max-width: 520px; margin: 0 auto; background: #fff; padding: 32px; border-radius: 20px; border: 1px solid #e9d5ff; box-shadow: 0 15px 35px rgba(139, 92, 246, 0.12); }
.badge { background: #f3e8ff; color: #7c3aed; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; }
h2 { margin: 8px 0 4px 0; color: #1e1b4b; font-size: 24px; font-weight: 800; }
p { margin: 0 0 20px 0; color: #64748b; font-size: 13px; }
.row { display: flex; gap: 12px; margin-bottom: 14px; }
.col { flex: 1; }
label { display: block; font-size: 12px; font-weight: 700; color: #374151; margin-bottom: 4px; }
input[type="text"], input[type="email"], input[type="tel"], input[type="password"] {
  width: 100%; box-sizing: border-box; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 10px; font-size: 13px; outline: none; transition: border-color 0.2s;
}
input:focus { border-color: #9333ea; box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.15); }
.gender-section { margin-bottom: 14px; }
.sub-label { display: block; font-size: 12px; font-weight: 700; color: #374151; margin-bottom: 6px; }
.radio-label { font-size: 13px; color: #4b5563; margin-right: 16px; cursor: pointer; font-weight: normal; }
.checkbox-box { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; font-size: 12px; color: #64748b; }
.submit-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #9333ea, #ec4899); color: white; border: none; border-radius: 12px; font-weight: 700; font-size: 14px; cursor: pointer; box-shadow: 0 8px 20px rgba(147, 51, 234, 0.35); }
.submit-btn:hover { opacity: 0.95; }
.feedback-msg { margin-top: 16px; padding: 12px; border-radius: 10px; font-size: 13px; display: none; }`,
      js: `document.getElementById('regForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const pwd = document.getElementById('password').value;
  const conf = document.getElementById('confirmPassword').value;
  const name = document.getElementById('fullName').value;
  const fb = document.getElementById('feedback');

  if (pwd !== conf) {
    fb.style.display = 'block';
    fb.style.background = '#fee2e2';
    fb.style.color = '#991b1b';
    fb.innerHTML = '⚠️ Passwords do not match. Please verify.';
    return;
  }

  fb.style.display = 'block';
  fb.style.background = '#dcfce7';
  fb.style.color = '#166534';
  fb.innerHTML = '🎉 Account created for <strong>' + name + '</strong>! $150 credit added.';
  console.log('Registration submitted for:', name);
});`
    },
    keyConcepts: [
      'Field pairing with corresponding <label for="..."> and input ID',
      'Client-side validation gives immediate visual feedback before submission',
      'Production registration requires backend hashing (e.g. BCrypt) and database persistence'
    ]
  },
  {
    id: 'html-login-form',
    number: 31,
    title: 'Login Form Coding (Show/Hide Password & Auth)',
    tier: 'Forms',
    discipline: 'html',
    description: 'Clean user login interface featuring email/username inputs, show/hide password toggle, remember me, forgot password link, and form submission.',
    code: {
      html: `<div class="login-box">
  <div class="login-header">
    <span class="badge">🎨 DesignArtPro</span>
    <h2>Sign In to Studio</h2>
    <p>Access your projects, balance, and code workspace.</p>
  </div>

  <form id="loginForm">
    <div class="field">
      <label for="loginEmail">Email Address or Username</label>
      <input type="text" id="loginEmail" placeholder="client@designartpro.com" required>
    </div>

    <div class="field">
      <div class="label-row">
        <label for="loginPassword">Password</label>
        <a href="#" class="forgot-link">Forgot Password?</a>
      </div>
      <div class="pwd-wrapper">
        <input type="password" id="loginPassword" placeholder="••••••••" required>
        <button type="button" id="togglePwd" class="toggle-btn">Show</button>
      </div>
    </div>

    <div class="remember-row">
      <label class="remember-label">
        <input type="checkbox" id="rememberMe" checked>
        <span>Remember this device</span>
      </label>
    </div>

    <button type="submit" class="login-btn">Sign In to Dashboard</button>
  </form>

  <div id="loginFeedback" class="login-msg"></div>

  <p class="bottom-cta">
    Don't have an account? <a href="#" class="signup-link">Create Account</a>
  </p>
</div>`,
      css: `body { font-family: system-ui, sans-serif; background: #ffffff; padding: 24px; }
.login-box { max-width: 380px; margin: 0 auto; padding: 32px; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.1); }
.badge { background: #f3e8ff; color: #7c3aed; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; }
h2 { margin: 10px 0 4px 0; color: #0f172a; font-size: 22px; font-weight: 800; }
p { margin: 0 0 20px 0; color: #64748b; font-size: 13px; }
.field { margin-bottom: 16px; }
.label-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
label { font-size: 12px; font-weight: 700; color: #374151; }
.forgot-link { font-size: 11px; color: #9333ea; text-decoration: none; font-weight: 600; }
input[type="text"], .pwd-wrapper input { width: 100%; box-sizing: border-box; padding: 10px 14px; border: 1px solid #d1d5db; border-radius: 10px; font-size: 13px; outline: none; }
.pwd-wrapper { position: relative; }
.toggle-btn { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: none; border: none; color: #7c3aed; font-size: 11px; font-weight: 700; cursor: pointer; }
.remember-row { margin-bottom: 18px; }
.remember-label { font-size: 12px; color: #64748b; display: flex; align-items: center; gap: 6px; cursor: pointer; }
.login-btn { width: 100%; padding: 12px; background: linear-gradient(135deg, #9333ea, #ec4899); color: white; border: none; border-radius: 10px; font-weight: 700; font-size: 14px; cursor: pointer; }
.login-msg { margin-top: 14px; padding: 10px; border-radius: 8px; font-size: 12px; display: none; }
.bottom-cta { text-align: center; margin-top: 20px; font-size: 12px; color: #64748b; }
.signup-link { color: #9333ea; font-weight: 700; text-decoration: none; }`,
      js: `const toggleBtn = document.getElementById('togglePwd');
const pwdInput = document.getElementById('loginPassword');

toggleBtn.addEventListener('click', () => {
  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    toggleBtn.textContent = 'Hide';
  } else {
    pwdInput.type = 'password';
    toggleBtn.textContent = 'Show';
  }
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const msg = document.getElementById('loginFeedback');
  msg.style.display = 'block';
  msg.style.background = '#dcfce7';
  msg.style.color = '#166534';
  msg.innerHTML = '✨ Welcome back, <strong>' + email + '</strong>! Authentication verified.';
  console.log('Login attempt authenticated for:', email);
});`
    },
    keyConcepts: [
      'Show/Hide password improves user experience and prevents typing mistakes',
      'Client-side forms submit to authentication endpoints via POST requests with HTTPS encryption',
      'Session tokens and secure HTTP-only cookies maintain authenticated state across visits'
    ]
  },
  // --- INTERMEDIATE & ADVANCED HTML ---
  {
    id: 'html-semantic-structure',
    number: 36,
    title: 'Semantic HTML (<header>, <nav>, <main>, <section>, <article>, <footer>)',
    tier: 'Intermediate',
    discipline: 'html',
    description: 'Semantic tags convey precise meaning to browsers, accessibility screen readers, and search engine crawlers.',
    code: {
      html: `<header class="site-header">
  <div class="logo">🎨 DesignArtPro</div>
  <nav class="site-nav">
    <a href="#">Home</a>
    <a href="#">Services</a>
    <a href="#">Editor</a>
  </nav>
</header>

<main class="site-main">
  <section class="hero-section">
    <h1>All-in-One Creative Studio</h1>
    <p>Professional Graphic Designing & Production Code.</p>
  </section>

  <article class="feature-article">
    <h2>Vector Artistry Meets System Logic</h2>
    <p>From high-converting brand emblems to responsive full-stack applications.</p>
  </article>

  <aside class="quick-facts">
    <h3>Quick Contact</h3>
    <p>WhatsApp: 03440 665 646</p>
  </aside>
</main>

<footer class="site-footer">
  <p>© 2026 DesignArtPro. All rights reserved.</p>
</footer>`,
      css: `body { font-family: system-ui, sans-serif; margin: 0; padding: 20px; }
.site-header { display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f3e8ff; padding-bottom: 12px; }
.logo { font-weight: 800; color: #9333ea; font-size: 18px; }
.site-nav a { margin-left: 14px; text-decoration: none; color: #475569; font-weight: 600; font-size: 13px; }
.site-main { margin: 20px 0; }
.hero-section { background: #faf5ff; padding: 20px; border-radius: 12px; border: 1px solid #e9d5ff; }
.feature-article { margin: 16px 0; padding: 16px; border: 1px solid #f1f5f9; border-radius: 12px; }
.quick-facts { background: #f0fdf4; padding: 12px; border-radius: 8px; border: 1px solid #bbf7d0; font-size: 12px; }
.site-footer { text-align: center; border-top: 1px solid #e2e8f0; padding-top: 16px; color: #94a3b8; font-size: 12px; }`
    },
    keyConcepts: [
      '<header> and <footer> designate document or section boundaries',
      '<main> represents the primary distinct content of the document',
      '<article> is independent self-contained content; <aside> is supplementary'
    ]
  },
  {
    id: 'html-canvas-graphics',
    number: 43,
    title: 'HTML5 Canvas 2D Graphics & Particle Rendering',
    tier: 'Advanced',
    discipline: 'html',
    description: 'Use the HTML5 <canvas> element and 2D rendering context to draw shapes, gradients, and interactive animations.',
    code: {
      html: `<div class="canvas-box">
  <h3>Interactive HTML5 Canvas Studio</h3>
  <canvas id="studioCanvas" width="360" height="200"></canvas>
  <button id="drawBtn" class="draw-btn">Animate Studio Palette</button>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 20px; text-align: center; }
.canvas-box { max-width: 400px; margin: 0 auto; background: #fff; padding: 20px; border-radius: 16px; border: 1px solid #e2e8f0; }
canvas { border-radius: 12px; background: #0f172a; margin-top: 10px; display: block; margin-left: auto; margin-right: auto; }
.draw-btn { margin-top: 14px; padding: 10px 20px; background: #9333ea; color: white; border: none; border-radius: 8px; font-weight: 700; cursor: pointer; }`,
      js: `const canvas = document.getElementById('studioCanvas');
const ctx = canvas.getContext('2d');
let step = 0;

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Background Gradient
  const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  grad.addColorStop(0, '#1e1b4b');
  grad.addColorStop(1, '#0f172a');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Animated Glowing Circles (Purple, Pink, Light-Blue)
  const colors = ['#9333ea', '#ec4899', '#38bdf8'];
  for (let i = 0; i < 3; i++) {
    const x = 90 + i * 90;
    const y = 100 + Math.sin(step + i * 1.5) * 30;
    const radius = 24 + Math.cos(step + i) * 6;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = colors[i];
    ctx.shadowColor = colors[i];
    ctx.shadowBlur = 15;
    ctx.fill();
  }

  // Brand Text
  ctx.shadowBlur = 0;
  ctx.font = 'bold 16px system-ui';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.fillText('DesignArtPro Canvas 2D', canvas.width / 2, 175);

  step += 0.05;
  requestAnimationFrame(drawScene);
}

drawScene();
document.getElementById('drawBtn').addEventListener('click', () => {
  step += 2;
  console.log('Canvas impulse boosted!');
});`
    },
    keyConcepts: [
      '<canvas> provides a raster surface for programmatic script rendering',
      '`getContext("2d")` exposes 2D drawing methods (arc, fillRect, createLinearGradient)',
      '`requestAnimationFrame` powers smooth 60fps hardware-accelerated animations'
    ]
  }
];
