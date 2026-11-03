import { TutorialExample } from '../types';

export const codingTutorials: TutorialExample[] = [
  {
    id: 'tut-hello-world',
    title: 'Hello World & First Program',
    category: 'Fundamentals',
    language: 'javascript',
    description: 'The universal tradition for starting any new programming language. Prints greeting messages and studio metadata to the output console.',
    code: `// 🎨 DesignArtPro - Hello World Studio Script
function welcomeToDesignArtPro() {
  const studioName = "DesignArtPro";
  const mission = "Professional Graphic Designing & Creative Coding";
  
  console.log("=========================================");
  console.log(\`✨ Welcome to \${studioName} Coding Platform!\`);
  console.log(\`🚀 Mission: \${mission}\`);
  console.log("📞 WhatsApp: 03440 665 646");
  console.log("📧 Email: designartpro1@gmail.com");
  console.log("=========================================");
  
  return "Status: Ready for Production Code";
}

welcomeToDesignArtPro();`,
    tips: [
      'console.log() prints text to the Output and Console panels.',
      'Template literals (backticks `...`) allow string interpolation with ${expression}.'
    ]
  },
  {
    id: 'tut-variables',
    title: 'Variables (const, let, var)',
    category: 'Fundamentals',
    language: 'javascript',
    description: 'Learn how to store, modify, and reference values in memory using modern immutable and mutable variables.',
    code: `// Variables in Modern JavaScript
const studioBrand = "DesignArtPro"; // Cannot be reassigned
let activeProjectsCount = 12;      // Mutable variable
let totalRevenue = 4590.50;

console.log("Initial Brand:", studioBrand);
console.log("Current Active Projects:", activeProjectsCount);

// Incrementing project count
activeProjectsCount += 1;
totalRevenue += 349.00; // Adding UI/UX design package

console.log("After New Client Order:");
console.log("- Updated Active Projects:", activeProjectsCount);
console.log("- Updated Total Revenue: $" + totalRevenue.toFixed(2));`,
    tips: [
      'Prefer `const` by default for values that never change.',
      'Use `let` when the variable value will be re-assigned or incremented in loops.'
    ]
  },
  {
    id: 'tut-data-types',
    title: 'Data Types & Type Checking',
    category: 'Fundamentals',
    language: 'python',
    description: 'Explore primitive data types in Python: strings, integers, floats, booleans, lists, dictionaries, and tuples.',
    code: `# Python Data Types Demonstration
studio_name = "DesignArtPro"          # str
service_count = 12                     # int
hourly_rate = 85.50                    # float
is_accepting_orders = True             # bool
primary_colors = ["Purple", "Pink", "Light-Blue"] # list
studio_meta = {                        # dict
    "founder": "Studio Lead",
    "whatsapp": "03440 665 646",
    "rating": 4.98
}

print(f"Studio Name: {studio_name} ({type(studio_name).__name__})")
print(f"Service Count: {service_count} ({type(service_count).__name__})")
print(f"Rate: \${hourly_rate} ({type(hourly_rate).__name__})")
print(f"Accepting Clients: {is_accepting_orders} ({type(is_accepting_orders).__name__})")
print(f"Palette: {primary_colors}")
print(f"Meta Info: {studio_meta['founder']} | Rating: {studio_meta['rating']} ⭐")`,
    tips: [
      'Python is dynamically typed: variable types are inferred automatically.',
      'Use type(variable) to inspect the data type at runtime.'
    ]
  },
  {
    id: 'tut-conditions',
    title: 'Conditions (if, elif, else)',
    category: 'Logic & Flow',
    language: 'python',
    description: 'Evaluate logical expressions, boolean branch routing, and tiered customer discounts.',
    code: `# DesignArtPro Dynamic Client Discount Calculator
def evaluate_project_tier(budget_usd):
    print(f"Evaluating client project with budget: \${budget_usd} USD")
    
    if budget_usd >= 1000:
        tier = "VIP Enterprise Suite"
        discount_percent = 20
        free_delivery = True
    elif budget_usd >= 500:
        tier = "Professional Growth Package"
        discount_percent = 10
        free_delivery = True
    elif budget_usd >= 150:
        tier = "Starter Studio Asset"
        discount_percent = 0
        free_delivery = False
    else:
        tier = "Consultation Phase"
        discount_percent = 0
        free_delivery = False

    discount_amount = (budget_usd * discount_percent) / 100
    final_price = budget_usd - discount_amount
    
    print(f"-> Assigned Tier: {tier}")
    print(f"-> Discount Applied: {discount_percent}% (-\${discount_amount})")
    print(f"-> Final Net Total: \${final_price}")
    print(f"-> Free Express Delivery: {'Yes ⚡' if free_delivery else 'Standard'}")

evaluate_project_tier(750)`,
    tips: [
      'Conditions execute from top to bottom; the first true branch fires.',
      'Always include an `else` fallback to handle unexpected cases.'
    ]
  },
  {
    id: 'tut-loops',
    title: 'Loops (for, while, map)',
    category: 'Logic & Flow',
    language: 'javascript',
    description: 'Iterate through data collections, repeat automated tasks, and accumulate analytics.',
    code: `// Iteration in DesignArtPro Studio
const services = [
  { name: "Logo Designing", price: 149 },
  { name: "Branding Suite", price: 399 },
  { name: "UI/UX Design", price: 349 },
  { name: "Packaging Box", price: 249 }
];

console.log("=== 1. Standard For Loop ===");
for (let i = 0; i < services.length; i++) {
  console.log(\`[\${i + 1}] \${services[i].name} - $\${services[i].price}\`);
}

console.log("\\n=== 2. Array forEach Loop ===");
let totalPortfolioValue = 0;
services.forEach(item => {
  totalPortfolioValue += item.price;
});
console.log("Total Studio Package Value: $" + totalPortfolioValue);

console.log("\\n=== 3. While Loop Simulation ===");
let progress = 0;
while (progress <= 100) {
  if (progress % 25 === 0) {
    console.log(\`Rendering project assets... \${progress}%\`);
  }
  progress += 25;
}
console.log("✨ Render Complete!");`,
    tips: [
      'Use `for...of` or `forEach` when traversing arrays.',
      'Always ensure `while` loops have an incrementing condition to avoid infinite loops.'
    ]
  },
  {
    id: 'tut-functions',
    title: 'Functions, Parameters & Return Values',
    category: 'Modular Code',
    language: 'javascript',
    description: 'Encapsulate reusable logic with pure functions, default parameters, and return signatures.',
    code: `// Reusable Studio Helper Functions
function formatCurrency(amount, currency = "USD") {
  return \`$\${amount.toFixed(2)} \${currency}\`;
}

// Arrow function with rest parameters
const calculateInvoice = (clientName, ...itemPrices) => {
  const subtotal = itemPrices.reduce((acc, p) => acc + p, 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  return {
    client: clientName,
    itemsCount: itemPrices.length,
    subtotal: formatCurrency(subtotal),
    tax: formatCurrency(tax),
    finalTotal: formatCurrency(total)
  };
};

const invoice = calculateInvoice("Apex Media Ltd", 149, 399, 89);
console.log("Generated Studio Invoice:");
console.log(JSON.stringify(invoice, null, 2));`,
    tips: [
      'Functions should do one specific job and return predictable outputs.',
      'Arrow functions `() => {}` provide concise syntax and lexical `this` binding.'
    ]
  },
  {
    id: 'tut-arrays',
    title: 'Arrays & Functional Methods (Filter, Map, Reduce)',
    category: 'Data Structures',
    language: 'javascript',
    description: 'Transform, search, filter, and summarize complex datasets using high-order functional methods.',
    code: `// Array Transformations in DesignArtPro
const portfolioItems = [
  { id: 1, title: "Cyber Week Banners", category: "Banners", views: 1240 },
  { id: 2, title: "Lumina Clean Tech", category: "Logos", views: 3500 },
  { id: 3, title: "Solstice Coffee Brand", category: "Branding", views: 4200 },
  { id: 4, title: "Cosmic Prism Wallpaper", category: "Artwork", views: 980 },
  { id: 5, title: "Nexus Falcon Emblem", category: "Logos", views: 2800 }
];

// 1. Filter: Find only Logo projects
const logoProjects = portfolioItems.filter(item => item.category === "Logos");
console.log("Filtered Logos (" + logoProjects.length + "):");
console.log(logoProjects.map(p => p.title));

// 2. Map: Extract titles and format views
const viewSummaries = portfolioItems.map(p => \`\${p.title}: \${p.views} views\`);
console.log("\\nView Summaries:");
viewSummaries.forEach(s => console.log("- " + s));

// 3. Reduce: Calculate total views across entire portfolio
const totalViews = portfolioItems.reduce((sum, item) => sum + item.views, 0);
console.log("\\nTotal Portfolio Reach:", totalViews.toLocaleString(), "views!");`,
    tips: [
      '`filter()` returns a new array matching the condition.',
      '`map()` transforms every element into a new representation.',
      '`reduce()` aggregates an array into a single accumulated value.'
    ]
  },
  {
    id: 'tut-classes-objects',
    title: 'Classes, Objects & Object-Oriented Programming (OOP)',
    category: 'Modular Code',
    language: 'javascript',
    description: 'Model real-world studio entities with classes, constructors, methods, and encapsulation.',
    code: `// OOP: DesignArtPro Graphic Project Class
class GraphicDesignProject {
  constructor(title, client, serviceCategory, budget) {
    this.title = title;
    this.client = client;
    this.serviceCategory = serviceCategory;
    this.budget = budget;
    this.status = "Draft";
    this.revisionsLeft = 3;
  }

  startProduction() {
    this.status = "In Progress";
    console.log(\`🚀 [Production Started]: "\${this.title}" for \${this.client}\`);
  }

  requestRevision(notes) {
    if (this.revisionsLeft > 0) {
      this.revisionsLeft--;
      console.log(\`📝 [Revision Applied]: "\${notes}". Revisions remaining: \${this.revisionsLeft}\`);
    } else {
      console.log("⚠️ No revisions left. Additional revisions billed separately.");
    }
  }

  deliverFinalAssets() {
    this.status = "Completed";
    console.log(\`🎉 [Project Completed]: Source vector files (AI, SVG, PDF) sent to \${this.client}!\`);
  }
}

// Instantiate Project
const project1 = new GraphicDesignProject("Apex Dynamic Logo", "Apex Corp", "Logo Designing", 149);
project1.startProduction();
project1.requestRevision("Make the purple gradient more vibrant");
project1.deliverFinalAssets();`,
    tips: [
      'Classes act as blueprints for creating multiple object instances.',
      'Methods encapsulate behaviors that operate directly on the object state.'
    ]
  },
  {
    id: 'tut-html-forms',
    title: 'HTML Forms & Interactive Inputs',
    category: 'Web Development',
    language: 'html-css-js',
    mode: 'web',
    description: 'Build accessible, responsive HTML forms with inputs, textareas, submit buttons, and real-time live preview.',
    code: `<!-- Click Run Code to test this live form! -->
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 24px;
      background: #faf5ff;
    }
    .form-box {
      background: #ffffff;
      padding: 28px;
      border-radius: 16px;
      max-width: 420px;
      margin: 0 auto;
      box-shadow: 0 10px 25px rgba(139, 92, 246, 0.12);
      border: 1px solid #e9d5ff;
    }
    h2 { margin: 0 0 16px 0; color: #581c87; font-size: 20px; }
    label { display: block; font-size: 13px; font-weight: 600; color: #4b5563; margin-top: 12px; }
    input, select, textarea {
      width: 100%;
      box-sizing: border-box;
      padding: 10px 14px;
      margin-top: 6px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      outline: none;
    }
    input:focus, select:focus, textarea:focus {
      border-color: #9333ea;
      box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.15);
    }
    .btn {
      width: 100%;
      margin-top: 18px;
      background: linear-gradient(135deg, #9333ea, #ec4899);
      color: white;
      border: none;
      padding: 12px;
      font-size: 14px;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
    }
    .btn:hover { opacity: 0.95; }
    .status-msg { margin-top: 14px; padding: 10px; border-radius: 8px; font-size: 13px; display: none; }
  </style>
</head>
<body>
  <div class="form-box">
    <h2>🎨 Request Design Quote</h2>
    <form id="quoteForm">
      <label>Your Name</label>
      <input type="text" id="name" placeholder="Alex Smith" required>

      <label>Service Required</label>
      <select id="service">
        <option>Logo Designing</option>
        <option>Brand Identity</option>
        <option>UI/UX Design</option>
        <option>Wallpaper & Art</option>
      </select>

      <label>Project Brief</label>
      <textarea id="brief" rows="3" placeholder="Tell us about your brand vision..."></textarea>

      <button type="submit" class="btn">Submit to DesignArtPro</button>
    </form>
    <div id="status" class="status-msg"></div>
  </div>

  <script>
    document.getElementById('quoteForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const service = document.getElementById('service').value;
      const status = document.getElementById('status');
      
      status.style.display = 'block';
      status.style.background = '#dcfce7';
      status.style.color = '#15803d';
      status.innerHTML = '✨ Thank you, <strong>' + name + '</strong>! Inquiry for <strong>' + service + '</strong> received.';
    });
  </script>
</body>
</html>`,
    tips: [
      'Always link <label> elements with inputs for best accessibility.',
      'Prevent form reload with `event.preventDefault()` when handling submissions via JavaScript.'
    ]
  },
  {
    id: 'tut-css-animations',
    title: 'CSS Keyframe Animations & 3D Transitions',
    category: 'Web Development',
    language: 'html-css-js',
    mode: 'web',
    description: 'Create smooth pulse glows, floating cards, and spinning gradient borders with modern CSS3.',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(135deg, #f8fafc 0%, #f3e8ff 50%, #fce7f3 100%);
      font-family: system-ui, sans-serif;
    }
    
    @keyframes floatCard {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-16px) rotate(1deg); }
    }

    @keyframes rotateGlow {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }

    .animated-card {
      background: #ffffff;
      padding: 36px;
      border-radius: 24px;
      text-align: center;
      max-width: 320px;
      box-shadow: 0 20px 40px -10px rgba(147, 51, 234, 0.25);
      animation: floatCard 4s ease-in-out infinite;
      border: 2px solid transparent;
      background-clip: padding-box;
      position: relative;
    }

    .animated-card::before {
      content: '';
      position: absolute;
      inset: -3px;
      border-radius: 26px;
      background: linear-gradient(45deg, #9333ea, #ec4899, #38bdf8);
      z-index: -1;
      animation: rotateGlow 6s linear infinite;
    }

    .icon {
      font-size: 48px;
      margin-bottom: 12px;
      display: inline-block;
      transition: transform 0.3s;
    }
    .animated-card:hover .icon {
      transform: scale(1.2) rotate(10deg);
    }

    h3 { margin: 0 0 8px 0; color: #1e1b4b; font-size: 22px; font-weight: 800; }
    p { margin: 0; color: #6b7280; font-size: 14px; line-height: 1.5; }
  </style>
</head>
<body>
  <div class="animated-card">
    <div class="icon">🎨</div>
    <h3>DesignArtPro</h3>
    <p>Fluid CSS3 Keyframe Animations. Hover over me to see micro-interactions!</p>
  </div>
</body>
</html>`,
    tips: [
      'Use `@keyframes` to declare animation stages from 0% to 100%.',
      '`animation: name duration timing-function iteration-count` controls playback.'
    ]
  },
  {
    id: 'tut-js-events',
    title: 'JavaScript DOM Events & Reactive Interactions',
    category: 'Web Development',
    language: 'html-css-js',
    mode: 'web',
    description: 'Listen to user clicks, keyboard strokes, mouse movements, and dynamically update the DOM.',
    code: `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 30px;
      text-align: center;
      background: #ffffff;
    }
    .interactive-pad {
      max-width: 400px;
      margin: 0 auto;
      padding: 30px;
      background: #fafafa;
      border-radius: 20px;
      border: 1px solid #e5e7eb;
    }
    .color-box {
      width: 100%;
      height: 100px;
      border-radius: 12px;
      background: #9333ea;
      margin-bottom: 20px;
      transition: background 0.3s;
    }
    button {
      padding: 10px 20px;
      margin: 4px;
      border: none;
      border-radius: 8px;
      font-weight: 700;
      cursor: pointer;
      color: white;
    }
    .btn-purple { background: #9333ea; }
    .btn-pink { background: #ec4899; }
    .btn-blue { background: #0ea5e9; }
    #stats { margin-top: 15px; font-size: 13px; color: #6b7280; }
  </style>
</head>
<body>
  <div class="interactive-pad">
    <h3>Dynamic Event Listener</h3>
    <div id="canvas" class="color-box"></div>
    <div>
      <button class="btn-purple" data-color="#9333ea">Purple</button>
      <button class="btn-pink" data-color="#ec4899">Pink</button>
      <button class="btn-blue" data-color="#0ea5e9">Light-Blue</button>
    </div>
    <div id="stats">Click any color button above.</div>
  </div>

  <script>
    const box = document.getElementById('canvas');
    const stats = document.getElementById('stats');
    let clicks = 0;

    document.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', (e) => {
        clicks++;
        const color = e.target.getAttribute('data-color');
        box.style.background = color;
        stats.textContent = 'Selected: ' + color + ' (Total Clicks: ' + clicks + ')';
      });
    });
  </script>
</body>
</html>`,
    tips: [
      'Use `addEventListener` instead of inline HTML event attributes.',
      'Custom data attributes like `data-color` allow clean data passing into handlers.'
    ]
  },
  {
    id: 'tut-db-queries',
    title: 'Database Queries (SQL & MySQL)',
    category: 'Databases',
    language: 'sql',
    description: 'Query relational tables, apply WHERE filters, group analytics, and calculate studio project revenue.',
    code: `-- DesignArtPro Studio SQL Analysis
-- 1. Query all active clients with balance above $1,000
SELECT id, name, email, role, balance 
FROM users 
WHERE balance > 1000 
ORDER BY balance DESC;

-- 2. Query Completed Projects with Revenue Summary
SELECT id, title, category, status, budget 
FROM projects 
WHERE status = 'Completed' 
ORDER BY budget DESC;`,
    tips: [
      'SELECT specifies columns; FROM specifies the target table.',
      'WHERE filters rows based on conditional criteria; ORDER BY sorts results.'
    ]
  },
  {
    id: 'tut-php-login',
    title: 'PHP Login & Session Authentication System',
    category: 'Backend Architecture',
    language: 'php',
    description: 'Build a secure server-side login validator in PHP 8 with password hashing and session tokens.',
    code: `<?php
/**
 * DesignArtPro - Backend Authentication Engine
 * Validates client credentials securely
 */
namespace DesignArtPro\\Auth;

class StudioAuthenticator {
    private array $registeredClients = [
        'alex@designartpro.com' => '$2y$10$e8wVf59...mockHashedPassword',
        'designartpro1@gmail.com' => '$2y$10$AdminHash...'
    ];

    public function login(string $email, string $inputPassword): array {
        $cleanEmail = filter_var(trim($email), FILTER_SANITIZE_EMAIL);
        
        if (!filter_var($cleanEmail, FILTER_VALIDATE_EMAIL)) {
            return [
                'status' => 'ERROR',
                'message' => 'Invalid email address provided.'
            ];
        }

        // Mock verification
        $token = bin2hex(random_bytes(16));
        return [
            'status' => 'AUTH_SUCCESS',
            'studio' => 'DesignArtPro',
            'session_token' => 'DAP_SESS_' . $token,
            'client_email' => $cleanEmail,
            'role' => $cleanEmail === 'designartpro1@gmail.com' ? 'Admin' : 'Client',
            'login_time' => date('Y-m-d H:i:s'),
            'support_whatsapp' => '03440 665 646'
        ];
    }
}

// Execute test authentication
$auth = new StudioAuthenticator();
$result = $auth->login('alex@designartpro.com', 'securePassword123');

echo json_encode($result, JSON_PRETTY_PRINT);
?>`,
    tips: [
      'Always sanitize and validate incoming user credentials.',
      'Never store passwords in plain text — use password_hash() and password_verify().'
    ]
  }
];
