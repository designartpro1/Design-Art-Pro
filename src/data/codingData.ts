import { CodingTech } from '../types';

export const codingTechnologies: CodingTech[] = [
  {
    id: 'html5',
    name: 'HTML5',
    category: 'Frontend',
    icon: '🌐',
    badgeColor: 'from-orange-500 to-amber-500',
    shortDesc: 'The semantic backbone of the modern World Wide Web.',
    overview: 'HTML5 provides semantic structure, native multimedia elements (<video>, <audio>, <canvas>), and form validation engines required for every responsive website.',
    keyFeatures: [
      'Semantic structure tags (<main>, <article>, <section>, <header>, <footer>)',
      'Native responsive media and canvas 2D graphics support',
      'HTML5 Web Storage (localStorage & sessionStorage)',
      'Rich web accessibility (WAI-ARIA) compliance'
    ],
    difficulty: 'Beginner',
    codeSample: {
      language: 'html',
      title: 'Modern Semantic HTML5 Card',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DesignArtPro Studio</title>
</head>
<body>
  <header class="hero">
    <h1>DesignArtPro</h1>
    <p>Professional Graphic Designing & Creative Coding</p>
  </header>
  <main>
    <article class="service-card">
      <h2>Graphic & Code Mastery</h2>
      <p>Building high-performance digital experiences.</p>
      <button type="button">Explore Services</button>
    </article>
  </main>
</body>
</html>`,
      explanation: 'Uses semantic structural tags (<header>, <main>, <article>) for optimal SEO and screen-reader accessibility.'
    }
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'Frontend',
    icon: '🎨',
    badgeColor: 'from-blue-500 to-sky-400',
    shortDesc: 'Styling, responsive grids, flexbox, and 3D fluid animations.',
    overview: 'CSS3 transforms bare markup into visually captivating digital art. Supports hardware-accelerated transitions, CSS grid systems, variables (custom properties), and fluid typography.',
    keyFeatures: [
      'CSS Grid and Flexbox for flawless responsive page layouts',
      'Hardware-accelerated CSS keyframe animations and 3D transforms',
      'Custom properties (CSS Variables) for instant theming',
      'Media queries and container queries for cross-device adaptability'
    ],
    difficulty: 'Beginner',
    codeSample: {
      language: 'css',
      title: 'Gradient Glassmorphism Card CSS',
      code: `.designart-glass {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 20px 40px -15px rgba(139, 92, 246, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.designart-glass:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.25);
}`,
      explanation: 'Creates a modern white glass card with glowing purple-pink shadow and hover elevation.'
    }
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    icon: '⚡',
    badgeColor: 'from-yellow-400 to-amber-500',
    shortDesc: 'The versatile language powering interactivity across the entire web.',
    overview: 'JavaScript is the engine of client-side dynamics: DOM manipulation, asynchronous network requests (Fetch/Promises), client-side rendering, and high-speed functional algorithms.',
    keyFeatures: [
      'Modern ES6+ syntax (Arrow functions, Destructuring, Optional chaining)',
      'Asynchronous programming with async/await and Promise chains',
      'High-performance DOM manipulation and custom event handling',
      'Browser APIs: Web Audio, Canvas 2D, WebSockets, LocalStorage'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'javascript',
      title: 'Async Project Fetcher & Price Estimator',
      code: `// DesignArtPro Project Calculator
async function calculateProjectQuote(service, tier = 'pro') {
  const baseRates = {
    'logo-design': 149,
    'branding': 399,
    'ui-ux': 349,
    'fullstack-code': 499
  };

  const multipliers = { starter: 0.8, pro: 1.0, enterprise: 1.8 };
  const rate = baseRates[service] || 150;
  const finalPrice = Math.round(rate * (multipliers[tier] || 1.0));

  return {
    studio: 'DesignArtPro',
    service,
    tier,
    estimatedCost: \`$\${finalPrice}\`,
    deliveryTimeline: tier === 'enterprise' ? '7 days' : '3 days'
  };
}

calculateProjectQuote('branding', 'pro').then(console.log);`,
      explanation: 'Calculates dynamic pricing estimates asynchronously based on selected service tiers.'
    }
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend',
    icon: '🐍',
    badgeColor: 'from-blue-600 to-yellow-500',
    shortDesc: 'Clean, expressive programming for backend APIs, data, and machine learning.',
    overview: 'Python is renowned for high readability and vast ecosystem power. From FastAPI / Django microservices to image processing (Pillow, OpenCV) and AI pipelines.',
    keyFeatures: [
      'Concise, human-readable syntax that speeds up time to launch',
      'Robust web frameworks: FastAPI, Django, Flask',
      'Industry standard for image processing, automation, and AI workflows',
      'Cross-platform compatibility with extensive package ecosystem (PyPI)'
    ],
    difficulty: 'Beginner',
    codeSample: {
      language: 'python',
      title: 'Automated Image Watermarker & Asset Optimizer',
      code: `# DesignArtPro Automated Portfolio Asset Processor
def generate_studio_watermark(image_name: str, client_name: str) -> dict:
    processed_slug = image_name.lower().replace(" ", "-")
    return {
        "status": "success",
        "studio": "DesignArtPro",
        "file_output": f"{processed_slug}_verified.webp",
        "watermark_meta": f"Crafted for {client_name} - All Rights Reserved",
        "compression_saved": "42%"
    }

result = generate_studio_watermark("Cosmic Gradient Logo", "Apex Labs")
print(f"Processed: {result['file_output']} | Saved: {result['compression_saved']}")`,
      explanation: 'Processes design assets and generates secure watermark metadata for portfolio publishing.'
    }
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'Backend',
    icon: '🐘',
    badgeColor: 'from-indigo-600 to-purple-600',
    shortDesc: 'Server-side engine powering content management and robust web backends.',
    overview: 'PHP 8+ offers modern typed syntax, Just-In-Time (JIT) compilation, and native database hooks. It drives millions of mission-critical e-commerce stores, custom CMS platforms, and REST APIs.',
    keyFeatures: [
      'Fast server-side execution with native MySQL/PDO integration',
      'Modern object-oriented architecture, typed properties, and attributes',
      'Robust session management and secure authentication flows',
      'Powers enterprise CMS platforms including WordPress and Laravel'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'php',
      title: 'DesignArtPro Client Request Handler',
      code: `<?php
// DesignArtPro - Backend Client Quote Form Processor
class StudioInquiry {
    private string $clientEmail;
    private string $service;

    public function __construct(string $email, string $service) {
        $this->clientEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
        $this->service = htmlspecialchars($service);
    }

    public function dispatch(): array {
        return [
            'studio' => 'DesignArtPro',
            'support_email' => 'designartpro1@gmail.com',
            'whatsapp' => '03440 665 646',
            'status' => 'Inquiry Dispatched',
            'timestamp' => date('Y-m-d H:i:s')
        ];
    }
}

$inquiry = new StudioInquiry('client@example.com', 'Branding & Identity');
header('Content-Type: application/json');
echo json_encode($inquiry->dispatch());
?>`,
      explanation: 'Validates client inputs and packages inquiry responses securely using PHP OOP.'
    }
  },
  {
    id: 'mysql-sql',
    name: 'MySQL and SQL',
    category: 'Database',
    icon: '🗄️',
    badgeColor: 'from-blue-700 to-cyan-600',
    shortDesc: 'Structured relational databases, high-integrity schemas, and rapid querying.',
    overview: 'SQL (Structured Query Language) and MySQL are the standard for relational data management. They ensure ACID compliance, relational integrity, indexing speed, and complex analytic joins.',
    keyFeatures: [
      'ACID transactions for bank-grade financial and project balance integrity',
      'Indexing and query optimization for sub-millisecond retrieval',
      'Relational constraints (Foreign keys, Unique, Cascading updates)',
      'Stored procedures, triggers, and full-text search capabilities'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'sql',
      title: 'DesignArtPro Database Schema & Analytics Query',
      code: `-- DesignArtPro Client Projects Table
CREATE TABLE IF NOT EXISTS studio_projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(150) NOT NULL,
    service_type VARCHAR(100) NOT NULL,
    budget_usd DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    status ENUM('Pending', 'In Progress', 'In Review', 'Completed') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Query Completed Projects with Balance Summary
SELECT 
    service_type, 
    COUNT(project_id) AS total_orders, 
    SUM(budget_usd) AS revenue_usd
FROM studio_projects
WHERE status = 'Completed'
GROUP BY service_type
ORDER BY revenue_usd DESC;`,
      explanation: 'Creates a relational project tracking schema and queries completed revenue grouped by design service.'
    }
  },
  {
    id: 'c-cpp',
    name: 'C and C++',
    category: 'Systems & Mobile',
    icon: '⚙️',
    badgeColor: 'from-blue-800 to-indigo-900',
    shortDesc: 'Ultra-fast low-level computing, game engines, graphics, and system architecture.',
    overview: 'C provides direct hardware access and deterministic memory allocation, while C++ adds object orientation, templates, RAII, and high-performance graphic rendering pipelines (DirectX, OpenGL, Vulkan).',
    keyFeatures: [
      'Direct memory control via pointers and manual resource management',
      'Unmatched raw execution speed suitable for 3D graphics and audio DSP',
      'Object-Oriented Programming (Classes, Inheritance, Polymorphism)',
      'Rich Standard Template Library (STL: vectors, maps, algorithms)'
    ],
    difficulty: 'Advanced',
    codeSample: {
      language: 'cpp',
      title: 'High-Performance Color Palette Harmonizer',
      code: `#include <iostream>
#include <vector>
#include <string>

struct ColorRGB {
    int r, g, b;
    std::string hexCode() const {
        char buf[8];
        snprintf(buf, sizeof(buf), "#%02X%02X%02X", r, g, b);
        return std::string(buf);
    }
};

int main() {
    std::vector<ColorRGB> brandPalette = {
        {139, 92, 246}, // Studio Purple
        {236, 72, 153}, // Studio Pink
        {56, 189, 248}  // Light Blue
    };

    std::cout << "DesignArtPro Harmonized Palette:\\n";
    for (const auto& color : brandPalette) {
        std::cout << "Color: " << color.hexCode() << "\\n";
    }
    return 0;
}`,
      explanation: 'Compiles a C++ vector of RGB structs to format DesignArtPro brand colors with zero overhead.'
    }
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Systems & Mobile',
    icon: '☕',
    badgeColor: 'from-red-600 to-amber-700',
    shortDesc: 'Write once, run anywhere: enterprise backend servers and Android mobile applications.',
    overview: 'Java is an enterprise workhorse powering billions of mobile phones, financial institutions, and cloud backends. With the JVM (Java Virtual Machine) and Spring Boot, it delivers rock-solid reliability.',
    keyFeatures: [
      'Robust platform independence via Java Virtual Machine (JVM)',
      'Strongly typed, object-oriented architecture with automatic garbage collection',
      'Extensive enterprise frameworks: Spring Boot, Hibernate, Quarkus',
      'Native Android application development and multi-threading primitives'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'java',
      title: 'DesignArtPro Project Order Service',
      code: `package com.designartpro.studio;

import java.time.LocalDate;

public class ProjectOrder {
    private final String orderId;
    private final String service;
    private double balanceUsd;

    public ProjectOrder(String orderId, String service, double balanceUsd) {
        this.orderId = orderId;
        this.service = service;
        this.balanceUsd = balanceUsd;
    }

    public void displaySummary() {
        System.out.printf("Order #%s | %s | Balance: $%.2f%n", 
            orderId, service, balanceUsd);
    }

    public static void main(String[] args) {
        ProjectOrder order = new ProjectOrder("DAP-9821", "UI/UX Design Suite", 349.00);
        order.displaySummary();
    }
}`,
      explanation: 'Encapsulates client orders in a clean Java class with structured getters and console diagnostics.'
    }
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'Systems & Mobile',
    icon: '🎯',
    badgeColor: 'from-purple-700 to-violet-900',
    shortDesc: 'Modern Microsoft .NET framework, Unity 3D game development, and desktop apps.',
    overview: 'C# combines developer productivity with intense performance. It is the flagship language of .NET Core for cloud APIs and Unity for 2D/3D games and interactive design simulations.',
    keyFeatures: [
      'Modern syntax features: LINQ queries, pattern matching, async/await',
      'The primary scripting language of the Unity 3D game engine',
      'High-throughput web APIs using ASP.NET Core',
      'Cross-platform desktop and mobile UI with .NET MAUI'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'csharp',
      title: 'Client Project Status Filter with LINQ',
      code: `using System;
using System.Collections.Generic;
using System.Linq;

namespace DesignArtPro {
    public record Project(string Name, string Category, bool IsReady);

    public class StudioManager {
        public static void Main() {
            var projects = new List<Project> {
                new("Apex Brand Identity", "Branding", true),
                new("Cosmic 4K Wallpaper", "Artwork", true),
                new("SaaS Mobile App", "UI/UX", false)
            };

            var completed = projects.Where(p => p.IsReady).ToList();
            Console.WriteLine($"Ready for Delivery: {completed.Count} assets.");
        }
    }
}`,
      explanation: 'Demonstrates modern C# records and declarative LINQ filtering for studio deliverables.'
    }
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend',
    icon: '📘',
    badgeColor: 'from-blue-600 to-sky-600',
    shortDesc: 'JavaScript with syntax for types, preventing bugs before runtime.',
    overview: 'TypeScript adds static type definitions on top of JavaScript. It powers large-scale web applications, enterprise frontends, and typed backend systems with superior autocomplete and refactoring safety.',
    keyFeatures: [
      'Static compile-time type checking eliminating runtime undefined errors',
      'Rich Interfaces, Generics, Union types, and Type inference',
      'Flawless IDE refactoring and self-documenting codebases',
      'Seamless 100% interoperability with existing JavaScript libraries'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'typescript',
      title: 'Typed DesignArtPro Client State Model',
      code: `// Strictly Typed Studio Contracts
interface DesignAsset {
  readonly id: string;
  title: string;
  dimensions: { width: number; height: number };
  colorSpace: 'sRGB' | 'Display-P3' | 'CMYK';
  fileFormats: Array<'SVG' | 'PNG' | 'PDF' | 'Figma'>;
}

const activeLogo: DesignAsset = {
  id: "asset_01",
  title: "DesignArtPro Minimal Emblem",
  dimensions: { width: 1920, height: 1080 },
  colorSpace: "Display-P3",
  fileFormats: ["SVG", "PNG", "Figma"]
};

function formatAssetSpecs(asset: DesignAsset): string {
  return \`\${asset.title} (\${asset.dimensions.width}x\${asset.dimensions.height})\`;
}

console.log(formatAssetSpecs(activeLogo));`,
      explanation: 'Defines strict interface contracts ensuring design assets conform to dimensional and color standards.'
    }
  },
  {
    id: 'react',
    name: 'React',
    category: 'Frontend',
    icon: '⚛️',
    badgeColor: 'from-sky-500 to-cyan-500',
    shortDesc: 'Component-driven declarative library for interactive user interfaces.',
    overview: 'React revolutionized web development through virtual DOM diffing, reusable components, and unidirectional data flow. Paired with hooks, it powers responsive, fluid user interfaces.',
    keyFeatures: [
      'Component-based architecture fostering maximum reusability',
      'React Hooks (useState, useEffect, useMemo, useRef) for clean state management',
      'Rich ecosystem including Next.js, Remix, Tailwind, and Motion',
      'High rendering performance via concurrent features and virtual DOM'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'jsx',
      title: 'Interactive Project Counter Hook Component',
      code: `import React, { useState } from 'react';

export function ProjectCounter() {
  const [completed, setCompleted] = useState(128);

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg border border-purple-100">
      <h3 className="text-xl font-bold text-slate-800">DesignArtPro Portfolio</h3>
      <p className="text-slate-600 mt-2">Delivered Projects: <span className="font-bold text-purple-600">{completed}</span></p>
      <button 
        onClick={() => setCompleted(c => c + 1)}
        className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium rounded-xl shadow-md hover:opacity-90"
      >
        Deliver New Project 🎉
      </button>
    </div>
  );
}`,
      explanation: 'Demonstrates functional React component with reactive hook state and Tailwind styling.'
    }
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'Backend',
    icon: '🟢',
    badgeColor: 'from-emerald-600 to-green-600',
    shortDesc: 'Event-driven, non-blocking JavaScript runtime for scalable network applications.',
    overview: 'Node.js brings JavaScript to the server. Leveraging the Google V8 engine and libuv event loop, it effortlessly handles thousands of concurrent connections, streaming media, and REST/GraphQL APIs.',
    keyFeatures: [
      'Non-blocking asynchronous I/O optimized for high-concurrency microservices',
      'World’s largest ecosystem of open-source packages on npm',
      'Unified JavaScript stack from frontend client to backend database',
      'Native streams and buffer manipulation for real-time asset processing'
    ],
    difficulty: 'Intermediate',
    codeSample: {
      language: 'javascript',
      title: 'Express.js Studio Inquiry API Route',
      code: `import express from 'express';
const app = express();
app.use(express.json());

app.post('/api/inquiries', (req, res) => {
  const { name, email, service, message } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  // Log and dispatch to DesignArtPro notification team
  const inquiryTicket = {
    ticketId: \`DAP-\${Date.now()}\`,
    client: { name, email },
    service: service || 'General Consultation',
    status: 'Received',
    assignedAgent: 'designartpro1@gmail.com'
  };

  res.status(201).json({ success: true, inquiry: inquiryTicket });
});`,
      explanation: 'Builds a clean Express.js REST endpoint for processing customer quote requests.'
    }
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'Frontend',
    icon: '🅱️',
    badgeColor: 'from-purple-600 to-indigo-700',
    shortDesc: 'Responsive mobile-first front-end framework and grid toolkit.',
    overview: 'Bootstrap enables lightning-fast UI prototyping with pre-styled cards, modals, navigation bars, and a bulletproof 12-column flexbox grid system.',
    keyFeatures: [
      'Comprehensive 12-column responsive grid system with flexbox',
      'Dozens of ready-to-use UI components (Modals, Carousels, Dropdowns)',
      'Utility-first spacing, typography, and flex helper classes',
      'Customizable SASS variables and source mixins'
    ],
    difficulty: 'Beginner',
    codeSample: {
      language: 'html',
      title: 'Bootstrap 5 Responsive Studio Showcase',
      code: `<div class="container py-5">
  <div class="row align-items-center g-4">
    <div class="col-lg-6">
      <span class="badge bg-primary rounded-pill mb-2">DesignArtPro Studio</span>
      <h1 class="display-5 fw-bold">Creative Coding & Graphic Design</h1>
      <p class="lead text-muted">Bespoke design systems and custom code applications.</p>
      <a href="#services" class="btn btn-primary btn-lg shadow-sm">Explore Services</a>
    </div>
    <div class="col-lg-6 text-center">
      <div class="card shadow-lg border-0 rounded-4 p-4">
        <h4 class="card-title text-purple">100% Satisfaction</h4>
        <p class="card-text text-secondary">Verified by hundreds of happy clients worldwide.</p>
      </div>
    </div>
  </div>
</div>`,
      explanation: 'Uses Bootstrap grid columns and utility classes for rapid responsive layout scaffolding.'
    }
  },
  {
    id: 'git-github',
    name: 'Git and GitHub',
    category: 'DevOps & Tools',
    icon: '🐙',
    badgeColor: 'from-slate-800 to-slate-900',
    shortDesc: 'Distributed version control, collaborative branches, and code repository hosting.',
    overview: 'Git tracks changes in source code across distributed teams, while GitHub provides collaborative code reviews (Pull Requests), continuous integration (CI/CD Actions), and cloud backups.',
    keyFeatures: [
      'Distributed version control with seamless branching and merging',
      'Pull requests and peer code review workflows',
      'GitHub Actions for automated building, testing, and deployment',
      'Commit history rollbacks and branch protection safeguards'
    ],
    difficulty: 'Beginner',
    codeSample: {
      language: 'bash',
      title: 'Standard Studio Git Release Workflow',
      code: `# Initialize new studio repository
git init designartpro-client-portal

# Stage and commit your design and code assets
git add .
git commit -m "feat: implement responsive hero, logo branding & coding playground"

# Connect to GitHub remote and push to main branch
git branch -M main
git remote add origin https://github.com/designartpro/portal.git
git push -u origin main

# Create a feature branch for client reviews
git checkout -b feature/interactive-editor`,
      explanation: 'Standard Git command sequence for project initialization, atomic commits, and branch management.'
    }
  },
  {
    id: 'json-apis',
    name: 'JSON and APIs',
    category: 'DevOps & Tools',
    icon: '🔌',
    badgeColor: 'from-emerald-500 to-teal-600',
    shortDesc: 'Universal data interchange format and RESTful API client-server communication.',
    overview: 'JSON (JavaScript Object Notation) is the lightweight data exchange standard across the web. APIs (Application Programming Interfaces) allow applications to exchange data seamlessly.',
    keyFeatures: [
      'Human-readable and lightweight cross-language data format',
      'REST and GraphQL API architecture standards',
      'Native parsing in virtually every programming language (JSON.parse / JSON.stringify)',
      'Powers webhooks, third-party integrations, and database documents'
    ],
    difficulty: 'Beginner',
    codeSample: {
      language: 'json',
      title: 'DesignArtPro Studio Service Manifest (JSON)',
      code: `{
  "studio": "DesignArtPro",
  "founder": "Creative Director",
  "contact": {
    "whatsapp": "03440 665 646",
    "email": "designartpro1@gmail.com"
  },
  "offerings": [
    {
      "category": "Graphic Design",
      "servicesCount": 12,
      "featured": ["Logo Designing", "Branding & Identity", "Packaging Design"]
    },
    {
      "category": "Creative Coding",
      "languagesSupported": 15,
      "interactiveSandbox": true
    }
  ],
  "status": "Available For Projects"
}`,
      explanation: 'Universal JSON manifest representing the studio profile and available services.'
    }
  }
];
