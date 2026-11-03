import { CurriculumTopic } from '../types';

export const cssCurriculumData: CurriculumTopic[] = [
  // --- BASIC CSS ---
  {
    id: 'css-box-model',
    number: 14,
    title: 'The CSS Box Model (Content, Padding, Border, Margin)',
    tier: 'Basic',
    discipline: 'css',
    description: 'Every element in CSS is a rectangular box composed of content area, inner padding, border layer, and outer margin space.',
    code: {
      html: `<div class="box-demonstrator">
  <div class="margin-layer">
    <span class="layer-tag">Margin (Outer Space)</span>
    <div class="border-layer">
      <span class="layer-tag">Border</span>
      <div class="padding-layer">
        <span class="layer-tag">Padding (Inner Breath)</span>
        <div class="content-layer">
          <strong>Content (Text / Graphics)</strong>
        </div>
      </div>
    </div>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 20px; background: #fafafa; text-align: center; }
.box-demonstrator { max-width: 420px; margin: 0 auto; }
.layer-tag { display: block; font-size: 11px; font-weight: 700; color: #475569; margin-bottom: 6px; }
.margin-layer { background: #fed7aa; padding: 18px; border-radius: 16px; border: 2px dashed #f97316; }
.border-layer { background: #fef08a; padding: 16px; border-radius: 12px; border: 3px solid #eab308; }
.padding-layer { background: #bbf7d0; padding: 16px; border-radius: 8px; border: 2px dashed #22c55e; }
.content-layer { background: #93c5fd; padding: 20px; border-radius: 6px; color: #1e3a8a; font-size: 13px; }`
    },
    keyConcepts: [
      'box-sizing: border-box includes padding and border within the declared width/height',
      'Margins collapse vertically between adjacent block elements',
      'Padding increases the clickable hit-area of buttons and interactive controls'
    ]
  },
  // --- INTERMEDIATE CSS ---
  {
    id: 'css-flexbox',
    number: 18,
    title: 'Flexbox Layouts (justify-content, align-items, flex-wrap)',
    tier: 'Intermediate',
    discipline: 'css',
    description: 'Flexbox distributes space and aligns items along horizontal or vertical axes with automatic responsive wrapping.',
    code: {
      html: `<div class="flex-container">
  <div class="flex-item card-1">
    <h4>Logo Design</h4>
    <p>Vector Branding</p>
  </div>
  <div class="flex-item card-2">
    <h4>Creative Code</h4>
    <p>15 Tech Stacks</p>
  </div>
  <div class="flex-item card-3">
    <h4>UI/UX Studio</h4>
    <p>Figma Tokens</p>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 24px; background: #ffffff; }
.flex-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  background: #f8fafc;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
}
.flex-item {
  flex: 1 1 180px;
  padding: 20px;
  border-radius: 14px;
  color: white;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0,0,0,0.08);
  transition: transform 0.2s;
}
.flex-item:hover { transform: translateY(-4px); }
.card-1 { background: linear-gradient(135deg, #9333ea, #7c3aed); }
.card-2 { background: linear-gradient(135deg, #ec4899, #db2777); }
.card-3 { background: linear-gradient(135deg, #0ea5e9, #0284c7); }
h4 { margin: 0 0 6px 0; font-size: 16px; }
p { margin: 0; font-size: 12px; opacity: 0.9; }`
    },
    keyConcepts: [
      '`display: flex` turns the parent into a flex container',
      '`justify-content` controls alignment on the main axis; `align-items` on the cross axis',
      '`flex: 1 1 200px` enables auto-growing, shrinking, and responsive wrapping'
    ]
  },
  {
    id: 'css-grid',
    number: 19,
    title: 'CSS Grid Systems (grid-template-columns, fr units, gap)',
    tier: 'Intermediate',
    discipline: 'css',
    description: 'Two-dimensional grid engine for architecting complex responsive columns and rows simultaneously.',
    code: {
      html: `<div class="grid-dashboard">
  <header class="grid-header">DesignArtPro Analytics</header>
  <div class="grid-card stat-1">Revenue: $8,450</div>
  <div class="grid-card stat-2">Projects: 14 Active</div>
  <div class="grid-card stat-3">Satisfaction: 99.8%</div>
  <main class="grid-main">Interactive Code Editor Workspace (Real-Time Output)</main>
  <aside class="grid-aside">Client Support (WhatsApp: 03440 665 646)</aside>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 20px; }
.grid-dashboard {
  display: grid;
  grid-template-columns: repeat(3, 1fr) 240px;
  grid-template-rows: auto auto 1fr;
  gap: 14px;
  background: #f8fafc;
  padding: 16px;
  border-radius: 16px;
}
.grid-header { grid-column: 1 / -1; background: #9333ea; color: white; padding: 14px; border-radius: 10px; font-weight: bold; }
.grid-card { background: white; padding: 18px; border-radius: 10px; border: 1px solid #e2e8f0; font-weight: 700; color: #1e1b4b; }
.grid-main { grid-column: 1 / 4; background: white; padding: 24px; border-radius: 10px; border: 1px solid #e2e8f0; font-weight: 600; color: #475569; min-height: 120px; }
.grid-aside { background: #fdf2f8; padding: 16px; border-radius: 10px; border: 1px solid #fbcfe8; color: #9d174d; font-size: 12px; font-weight: 600; }`
    },
    keyConcepts: [
      '`grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))` creates fluid responsive cards',
      'Grid handles both rows and columns simultaneously unlike Flexbox',
      '`grid-column: 1 / -1` allows elements to span the entire width'
    ]
  },
  // --- ADVANCED CSS ---
  {
    id: 'css-keyframe-animations',
    number: 31,
    title: 'CSS Keyframe Animations & Animated Backgrounds',
    tier: 'Advanced',
    discipline: 'css',
    description: 'Hardware-accelerated CSS keyframe animations, glowing mesh gradients, and pulse transformations.',
    code: {
      html: `<div class="ambient-studio-card">
  <div class="glowing-orb orb-1"></div>
  <div class="glowing-orb orb-2"></div>
  <div class="card-content">
    <span class="badge">🎨 DesignArtPro</span>
    <h2>Fluid CSS3 Animations</h2>
    <p>Pure CSS animated mesh background with zero JavaScript overhead.</p>
    <button class="pulse-btn">Animated Button</button>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #ffffff; }
@keyframes floatAnimation {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(25px, -20px) scale(1.15); }
}
@keyframes pulseGlow {
  0%, 100% { transform: scale(1); box-shadow: 0 8px 20px rgba(147, 51, 234, 0.3); }
  50% { transform: scale(1.04); box-shadow: 0 12px 30px rgba(236, 72, 153, 0.5); }
}
.ambient-studio-card {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 36px;
  border-radius: 24px;
  border: 1px solid #e9d5ff;
  max-width: 360px;
  text-align: center;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(139, 92, 246, 0.15);
}
.glowing-orb {
  position: absolute;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  filter: blur(40px);
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
}
.orb-1 { top: -20px; left: -20px; background: #c084fc; animation: floatAnimation 8s ease-in-out infinite; }
.orb-2 { bottom: -20px; right: -20px; background: #f472b6; animation: floatAnimation 10s ease-in-out infinite reverse; }
.card-content { position: relative; z-index: 1; }
.badge { background: #f3e8ff; color: #7c3aed; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; }
h2 { margin: 12px 0 6px 0; color: #1e1b4b; font-size: 22px; }
p { margin: 0 0 20px 0; color: #64748b; font-size: 13px; }
.pulse-btn {
  background: linear-gradient(135deg, #9333ea, #ec4899);
  color: white; border: none; padding: 12px 24px;
  border-radius: 12px; font-weight: 700; cursor: pointer;
  animation: pulseGlow 3s infinite;
}`
    },
    keyConcepts: [
      '`@keyframes` defines the lifecycle of key transform and opacity changes',
      '`filter: blur()` combined with keyframes creates organic glowing aura effects',
      'Transforms (`translate`, `scale`) are hardware-accelerated by the GPU'
    ]
  },
  {
    id: 'css-variables-themes',
    number: 33,
    title: 'CSS Variables (:root, Custom Properties & Dynamic Theming)',
    tier: 'Advanced',
    discipline: 'css',
    description: 'Centralize color systems, spacing tokens, and typography with CSS custom properties (`--variable-name`).',
    code: {
      html: `<div class="theme-wrapper" id="themeBox">
  <h3>DesignArtPro Design Tokens</h3>
  <p>Toggle between Studio White Theme and Studio Dark Theme instantly.</p>
  <button id="themeToggle" class="theme-btn">Switch Theme</button>
</div>`,
      css: `:root {
  --studio-bg: #ffffff;
  --studio-card-bg: #f8fafc;
  --studio-text: #0f172a;
  --studio-primary: #9333ea;
  --studio-border: #e2e8f0;
}
.theme-dark {
  --studio-bg: #09090b;
  --studio-card-bg: #18181b;
  --studio-text: #fafafa;
  --studio-primary: #c084fc;
  --studio-border: #27272a;
}
body { background: var(--studio-bg); font-family: system-ui, sans-serif; padding: 24px; transition: background 0.3s; }
.theme-wrapper {
  background: var(--studio-card-bg);
  border: 1px solid var(--studio-border);
  color: var(--studio-text);
  padding: 30px;
  border-radius: 16px;
  max-width: 360px;
  margin: 0 auto;
  text-align: center;
  transition: all 0.3s;
}
.theme-btn {
  background: var(--studio-primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 14px;
}`,
      js: `document.getElementById('themeToggle').addEventListener('click', () => {
  const box = document.getElementById('themeBox');
  document.body.classList.toggle('theme-dark');
  box.classList.toggle('theme-dark');
  console.log('CSS Variable Theme Toggled!');
});`
    },
    keyConcepts: [
      'Define global design tokens inside `:root { --primary-color: #9333ea; }`',
      'Consume tokens via `var(--primary-color)` across any CSS selector',
      'Override token values in classes or media queries for instant dark mode'
    ]
  }
];
