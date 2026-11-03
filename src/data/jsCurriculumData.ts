import { CurriculumTopic } from '../types';

export const jsCurriculumData: CurriculumTopic[] = [
  // --- BASIC JAVASCRIPT ---
  {
    id: 'js-dom-calculator',
    number: 15,
    title: 'Basic Calculations & Reactive DOM Output',
    tier: 'Basic',
    discipline: 'javascript',
    description: 'Learn how to read numeric values from input fields, execute mathematical logic, and write dynamic results back into the webpage DOM.',
    code: {
      html: `<div class="calc-box">
  <h3>Studio Project Price Calculator</h3>
  <div class="row">
    <label>Base Hourly Rate ($)</label>
    <input type="number" id="hourlyRate" value="85">
  </div>
  <div class="row">
    <label>Estimated Hours</label>
    <input type="number" id="projectHours" value="12">
  </div>
  <button id="calcBtn" class="action-btn">Calculate Total Quote</button>
  <div id="resultBox" class="result-box">Click calculate above.</div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; padding: 20px; background: #faf5ff; }
.calc-box { max-width: 360px; margin: 0 auto; background: white; padding: 24px; border-radius: 16px; border: 1px solid #e9d5ff; box-shadow: 0 10px 25px rgba(139, 92, 246, 0.1); }
h3 { margin: 0 0 14px 0; color: #1e1b4b; font-size: 18px; }
.row { margin-bottom: 12px; }
label { display: block; font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 4px; }
input { width: 100%; box-sizing: border-box; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; }
.action-btn { width: 100%; margin-top: 10px; background: #9333ea; color: white; border: none; padding: 12px; border-radius: 10px; font-weight: 700; cursor: pointer; }
.result-box { margin-top: 16px; padding: 14px; background: #f3e8ff; color: #581c87; border-radius: 10px; font-weight: 700; text-align: center; }`,
      js: `document.getElementById('calcBtn').addEventListener('click', () => {
  const rate = parseFloat(document.getElementById('hourlyRate').value) || 0;
  const hours = parseFloat(document.getElementById('projectHours').value) || 0;
  const subtotal = rate * hours;
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const resultBox = document.getElementById('resultBox');
  resultBox.innerHTML = 'Subtotal: $' + subtotal.toFixed(2) + '<br>' +
    'Tax (5%): $' + tax.toFixed(2) + '<br>' +
    '<strong>Total Estimate: $' + total.toFixed(2) + ' USD</strong>';
  console.log('Calculated project total:', total);
});`
    },
    keyConcepts: [
      '`document.getElementById()` selects DOM nodes by unique ID',
      '`parseFloat()` converts string form inputs into floating-point numbers',
      '`element.innerHTML` or `element.textContent` writes results into the DOM'
    ]
  },
  // --- INTERMEDIATE JAVASCRIPT ---
  {
    id: 'js-localstorage-todo',
    number: 24,
    title: 'LocalStorage & Interactive To-Do List Application',
    tier: 'Intermediate',
    discipline: 'javascript',
    description: 'Persist application state across browser reloads using HTML5 LocalStorage, JSON serialization, and dynamic DOM rendering.',
    code: {
      html: `<div class="todo-app">
  <span class="badge">🎨 DesignArtPro Studio</span>
  <h3>Design Project Task Board</h3>
  
  <div class="input-group">
    <input type="text" id="taskInput" placeholder="e.g. Export vector SVG icons...">
    <button id="addBtn">Add Task</button>
  </div>

  <ul id="taskList" class="task-list"></ul>
  <div class="footer-stats">
    <span id="taskCount">0 tasks</span>
    <button id="clearAllBtn" class="clear-btn">Clear All</button>
  </div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; background: #ffffff; padding: 24px; }
.todo-app { max-width: 420px; margin: 0 auto; background: #ffffff; padding: 28px; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.12); }
.badge { background: #f3e8ff; color: #7c3aed; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; }
h3 { margin: 8px 0 16px 0; color: #0f172a; font-size: 20px; }
.input-group { display: flex; gap: 8px; margin-bottom: 16px; }
input { flex: 1; padding: 10px 14px; border: 1px solid #cbd5e1; border-radius: 10px; font-size: 13px; outline: none; }
input:focus { border-color: #9333ea; }
#addBtn { background: #9333ea; color: white; border: none; padding: 10px 18px; border-radius: 10px; font-weight: 700; cursor: pointer; }
.task-list { list-style: none; padding: 0; margin: 0; max-height: 220px; overflow-y: auto; }
.task-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: #f8fafc; border: 1px solid #f1f5f9; border-radius: 8px; margin-bottom: 8px; font-size: 13px; }
.task-item.completed span { text-decoration: line-through; color: #94a3b8; }
.delete-btn { background: none; border: none; color: #ef4444; font-weight: bold; cursor: pointer; font-size: 16px; }
.footer-stats { display: flex; justify-content: space-between; align-items: center; margin-top: 14px; font-size: 12px; color: #64748b; border-top: 1px solid #f1f5f9; padding-top: 10px; }
.clear-btn { background: none; border: none; color: #64748b; cursor: pointer; font-size: 12px; }
.clear-btn:hover { color: #ef4444; }`,
      js: `let tasks = JSON.parse(localStorage.getItem('studio_tasks') || '[]');

if (tasks.length === 0) {
  tasks = [
    { text: 'Finalize Apex logo vector palette', done: true },
    { text: 'Prepare 4K wallpapers for client review', done: false }
  ];
}

function saveAndRender() {
  localStorage.setItem('studio_tasks', JSON.stringify(tasks));
  const list = document.getElementById('taskList');
  list.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (task.done ? ' completed' : '');
    li.innerHTML = '<span style="cursor:pointer">' + (task.done ? '✓ ' : '○ ') + task.text + '</span><button class="delete-btn">&times;</button>';

    li.querySelector('span').addEventListener('click', () => {
      task.done = !task.done;
      saveAndRender();
    });

    li.querySelector('.delete-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveAndRender();
    });

    list.appendChild(li);
  });

  document.getElementById('taskCount').textContent = tasks.length + ' task(s)';
}

document.getElementById('addBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const text = input.value.trim();
  if (text) {
    tasks.push({ text, done: false });
    input.value = '';
    saveAndRender();
    console.log('Task added:', text);
  }
});

document.getElementById('clearAllBtn').addEventListener('click', () => {
  tasks = [];
  saveAndRender();
});

saveAndRender();`
    },
    keyConcepts: [
      '`localStorage.setItem(key, value)` saves data persistently in the user browser',
      '`JSON.stringify()` serializes objects to strings; `JSON.parse()` deserializes back',
      'Event delegation on dynamic DOM elements prevents memory leaks'
    ]
  },
  // --- ADVANCED JAVASCRIPT ---
  {
    id: 'js-async-await-api',
    number: 33,
    title: 'Promises, Async/Await & REST API Integration',
    tier: 'Advanced',
    discipline: 'javascript',
    description: 'Fetch real asynchronous data from web endpoints using modern async/await, handle loading states, and catch network errors.',
    code: {
      html: `<div class="api-card">
  <span class="badge">🌐 REST API Engine</span>
  <h3>Studio Live Data Fetcher</h3>
  <p>Fetches verified profile metrics asynchronously via Promise pipelines.</p>
  <button id="fetchBtn" class="api-btn">Fetch Live Profile Data</button>
  <div id="loader" class="loader" style="display:none">Connecting to API service...</div>
  <div id="outputDisplay" class="output-display">Click the button above to initiate async request.</div>
</div>`,
      css: `body { font-family: system-ui, sans-serif; background: #ffffff; padding: 24px; text-align: center; }
.api-card { max-width: 400px; margin: 0 auto; background: #faf5ff; padding: 28px; border-radius: 20px; border: 1px solid #e9d5ff; box-shadow: 0 10px 25px rgba(139, 92, 246, 0.1); }
.badge { background: #9333ea; color: white; padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; }
h3 { margin: 12px 0 6px 0; color: #1e1b4b; font-size: 20px; }
p { margin: 0 0 18px 0; color: #64748b; font-size: 13px; }
.api-btn { background: linear-gradient(135deg, #9333ea, #ec4899); color: white; border: none; padding: 12px 24px; border-radius: 12px; font-weight: 700; cursor: pointer; }
.loader { margin-top: 14px; font-size: 12px; color: #9333ea; font-weight: 600; }
.output-display { margin-top: 16px; padding: 16px; background: white; border: 1px solid #e2e8f0; border-radius: 12px; font-size: 12px; text-align: left; font-family: monospace; white-space: pre-wrap; color: #334155; }`,
      js: `async function fetchStudioMetrics() {
  const loader = document.getElementById('loader');
  const display = document.getElementById('outputDisplay');
  loader.style.display = 'block';
  display.textContent = 'Awaiting network response...';

  try {
    // Simulated remote REST API endpoint latency
    await new Promise(res => setTimeout(res, 600));

    const mockResponse = {
      status: 200,
      studio: "DesignArtPro",
      contact: {
        whatsapp: "03440 665 646",
        email: "designartpro1@gmail.com"
      },
      metrics: {
        completedProjects: 524,
        clientRating: "4.99 / 5.00",
        techStacks: 15,
        uptime: "99.98%"
      },
      timestamp: new Date().toISOString()
    };

    display.textContent = JSON.stringify(mockResponse, null, 2);
    console.log('API Fetch successfully resolved:', mockResponse);
  } catch (error) {
    display.textContent = 'API Request Failed: ' + error.message;
    console.error('Fetch error:', error);
  } finally {
    loader.style.display = 'none';
  }
}

document.getElementById('fetchBtn').addEventListener('click', fetchStudioMetrics);`
    },
    keyConcepts: [
      '`async/await` syntactically streamlines Promise resolution without callback hell',
      '`try...catch...finally` ensures errors are trapped and spinners always stop',
      '`fetch(url)` sends HTTP requests returning streaming Response promises'
    ]
  }
];
