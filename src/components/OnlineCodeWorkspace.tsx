import React, { useState, useEffect, useRef, useCallback } from 'react';
import { executeCode, buildWebPreview } from '../utils/codeExecutor';
import { ExecutionResult, DiagnosticError, ProjectFile, SavedCodingProject } from '../types';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  Globe, 
  Sparkles, 
  Code2, 
  Layers, 
  Plus, 
  Trash2, 
  FileCode, 
  FilePlus, 
  FolderPlus, 
  Save, 
  AlertCircle, 
  CheckCircle2, 
  Settings2, 
  RefreshCw, 
  Maximize2, 
  Minimize2,
  ExternalLink,
  X, 
  Folder, 
  ChevronDown,
  Info,
  Type,
  Sun,
  Moon,
  ToggleLeft,
  ToggleRight,
  GripVertical,
  Laptop,
  Tablet,
  Smartphone,
  Eye,
  Sliders,
  FolderGit2,
  Search
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface OnlineCodeWorkspaceProps {
  initialLanguage?: string;
  initialCode?: string;
  initialMultiWeb?: { html: string; css: string; js: string };
  savedProjects: SavedCodingProject[];
  onSaveProject: (project: SavedCodingProject) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

interface ConsoleMessage {
  id: string;
  level: 'log' | 'error' | 'warn' | 'info';
  text: string;
  timestamp: string;
}

// Pre-built W3Schools-inspired templates for instant experimentation
const quickTemplates: Record<string, { title: string; mode: 'web' | 'single'; lang: string; html?: string; css?: string; js?: string; code?: string }> = {
  studioCard: {
    title: '🎨 DesignArtPro Studio Card',
    mode: 'web',
    lang: 'web',
    html: `<!-- 🎨 DesignArtPro Interactive Component -->
<div class="studio-card">
  <div class="badge">🎨 DesignArtPro Studio</div>
  <h1>Professional Graphic & Coding</h1>
  <p>Live, side-by-side editing inspired by W3Schools with instant reactive preview.</p>
  
  <div class="counter-box">
    <button id="sparkBtn" class="action-btn">Generate Sparks ✨</button>
    <div id="counterDisplay" class="counter-text">Sparks Generated: 0</div>
  </div>
</div>`,
    css: `/* Modern Clean Stylesheet */
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #faf5ff 0%, #fdf2f8 50%, #f0f9ff 100%);
  font-family: system-ui, -apple-system, sans-serif;
  padding: 20px;
}

.studio-card {
  background: #ffffff;
  padding: 36px 32px;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  max-width: 420px;
  width: 100%;
  box-shadow: 0 20px 40px -15px rgba(139, 92, 246, 0.15);
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.studio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 25px 50px -12px rgba(139, 92, 246, 0.25);
}

.badge {
  display: inline-block;
  padding: 4px 14px;
  background: #f3e8ff;
  color: #7c3aed;
  font-size: 11px;
  font-weight: 800;
  border-radius: 999px;
  letter-spacing: 0.5px;
  margin-bottom: 14px;
}

h1 {
  margin: 0 0 10px 0;
  color: #0f172a;
  font-size: 22px;
  font-weight: 800;
}

p {
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.counter-box {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
}

.action-btn {
  background: linear-gradient(135deg, #9333ea, #ec4899);
  color: white;
  border: none;
  padding: 12px 28px;
  font-weight: 700;
  font-size: 13px;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 8px 20px -4px rgba(147, 51, 234, 0.35);
  transition: transform 0.15s, opacity 0.15s;
}

.action-btn:hover {
  opacity: 0.95;
}

.action-btn:active {
  transform: scale(0.96);
}

.counter-text {
  font-size: 12px;
  font-weight: 700;
  color: #9333ea;
}`,
    js: `// Interactive JavaScript logic
let sparks = 0;
const btn = document.getElementById('sparkBtn');
const display = document.getElementById('counterDisplay');

if (btn && display) {
  btn.addEventListener('click', () => {
    sparks++;
    display.textContent = 'Sparks Generated: ' + sparks + ' ✨';
    console.log('User triggered spark effect. Total count:', sparks);
  });
}`
  },

  calculator: {
    title: '🧮 Interactive Calculator',
    mode: 'web',
    lang: 'web',
    html: `<div class="calc-card">
  <h2>Quick Quote Calculator</h2>
  <div class="field">
    <label>Service Rate ($/hr)</label>
    <input type="number" id="hourlyRate" value="75">
  </div>
  <div class="field">
    <label>Estimated Hours</label>
    <input type="number" id="hours" value="10">
  </div>
  <button id="calcBtn" class="calc-btn">Calculate Estimate</button>
  <div id="calcOutput" class="calc-result">Result will appear here.</div>
</div>`,
    css: `body { font-family: system-ui, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background: #fafafa; }
.calc-card { background: white; padding: 28px; border-radius: 20px; border: 1px solid #e2e8f0; width: 320px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); }
h2 { margin: 0 0 16px 0; color: #1e1b4b; font-size: 18px; text-align: center; }
.field { margin-bottom: 12px; }
label { display: block; font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 4px; }
input { width: 100%; box-sizing: border-box; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; }
.calc-btn { width: 100%; background: #9333ea; color: white; border: none; padding: 12px; border-radius: 10px; font-weight: 700; cursor: pointer; margin-top: 6px; }
.calc-btn:hover { background: #7e22ce; }
.calc-result { margin-top: 16px; padding: 12px; background: #f3e8ff; color: #6b21a8; font-weight: 700; border-radius: 10px; text-align: center; font-size: 13px; }`,
    js: `document.getElementById('calcBtn').addEventListener('click', () => {
  const rate = parseFloat(document.getElementById('hourlyRate').value) || 0;
  const hours = parseFloat(document.getElementById('hours').value) || 0;
  const total = rate * hours;
  const out = document.getElementById('calcOutput');
  out.textContent = 'Estimated Investment: $' + total.toFixed(2) + ' USD';
  console.log('Calculated quote:', total);
});`
  },

  responsiveNav: {
    title: '🌟 Responsive Navigation & Hero',
    mode: 'web',
    lang: 'web',
    html: `<header class="navbar">
  <div class="brand">🎨 DesignArtPro</div>
  <nav class="nav-links">
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact" class="cta">Get Quote</a>
  </nav>
</header>
<main class="hero">
  <span class="hero-tag">Creative Coding & Graphic Studio</span>
  <h1>Empowering Digital Brands</h1>
  <p>Fast, elegant, and production-ready digital assets tailored for growth.</p>
  <button class="hero-btn" onclick="alert('Welcome to DesignArtPro!')">Explore Projects</button>
</main>`,
    css: `body { margin: 0; font-family: system-ui, sans-serif; background: #ffffff; color: #0f172a; }
.navbar { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; border-bottom: 1px solid #f1f5f9; }
.brand { font-weight: 900; color: #9333ea; font-size: 18px; }
.nav-links { display: flex; gap: 16px; align-items: center; }
.nav-links a { text-decoration: none; color: #475569; font-size: 13px; font-weight: 600; }
.nav-links a.cta { background: #9333ea; color: white; padding: 6px 14px; border-radius: 8px; }
.hero { text-align: center; padding: 60px 20px; max-width: 600px; margin: 0 auto; }
.hero-tag { display: inline-block; padding: 4px 12px; background: #e0f2fe; color: #0369a1; font-size: 11px; font-weight: 800; border-radius: 999px; margin-bottom: 16px; }
h1 { font-size: 32px; font-weight: 900; margin: 0 0 12px 0; color: #0f172a; }
p { font-size: 15px; color: #64748b; line-height: 1.6; margin: 0 0 24px 0; }
.hero-btn { background: linear-gradient(135deg, #9333ea, #ec4899); color: white; border: none; padding: 12px 28px; border-radius: 12px; font-weight: 700; cursor: pointer; }`,
    js: `console.log('Responsive Hero Component initialized.');`
  },

  pythonEstimator: {
    title: '🐍 Python Studio Estimator',
    mode: 'single',
    lang: 'python',
    code: `# DesignArtPro Python 3 Suite
def calculate_quote(service_name: str, base_hours: int, urgent: bool = False) -> dict:
    rates = {
        "Logo Design": 95,
        "Branding Suite": 140,
        "Web App UI": 120,
        "Custom Scripting": 110
    }
    hourly = rates.get(service_name, 100)
    subtotal = hourly * base_hours
    multiplier = 1.3 if urgent else 1.0
    total = subtotal * multiplier
    
    print(f"Service: {service_name}")
    print(f"Hours: {base_hours} @ \${hourly}/hr")
    print(f"Urgent Fast-Track: {urgent}")
    print(f"Total Estimate: \${total:.2f}")
    
    return {"service": service_name, "estimate": total}

calculate_quote("Logo Design", 8, urgent=True)
calculate_quote("Web App UI", 25, urgent=False)`
  },

  sqlQuery: {
    title: '🗄️ SQL Studio Database Query',
    mode: 'single',
    lang: 'sql',
    code: `-- DesignArtPro Relational SQL Database
-- Query client balances and project assignments

SELECT id, name, email, role, balance 
FROM users 
WHERE balance >= 1000 
ORDER BY balance DESC;

SELECT id, title, category, status, budget 
FROM projects 
WHERE status = 'Completed';`
  },

  phpSimulator: {
    title: '🐘 PHP 8 API Dispatcher',
    mode: 'single',
    lang: 'php',
    code: `<?php
// DesignArtPro PHP 8 Server Script
$studio = "DesignArtPro";
$whatsapp = "03440 665 646";
$services = ["Logo Design", "UI/UX", "Full-Stack Web"];

echo "=== Connected to " . $studio . " Backend ===\\n";
echo "WhatsApp Support: " . $whatsapp . "\\n";
echo "Available Services: " . count($services) . "\\n\\n";

foreach ($services as $index => $item) {
    echo ($index + 1) . ". " . $item . "\\n";
}

$status = [
    "status" => "online",
    "uptime" => "99.98%",
    "database" => "connected"
];
echo "\\nHealth Check: " . json_encode($status) . "\\n";
?>`
  }
};

export const OnlineCodeWorkspace: React.FC<OnlineCodeWorkspaceProps> = ({
  initialLanguage = 'web',
  initialCode,
  initialMultiWeb,
  savedProjects,
  onSaveProject,
  onShowToast
}) => {
  const isInitialWeb = initialLanguage === 'web' || initialLanguage === 'html' || initialLanguage === 'html-css-js' || Boolean(initialMultiWeb);
  const [workspaceMode, setWorkspaceMode] = useState<'web' | 'single'>(isInitialWeb ? 'web' : 'single');

  // Single file mode state
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    isInitialWeb ? 'javascript' : initialLanguage
  );

  // Web mode files
  const [htmlCode, setHtmlCode] = useState<string>(
    initialMultiWeb?.html || quickTemplates.studioCard.html!
  );
  const [cssCode, setCssCode] = useState<string>(
    initialMultiWeb?.css || quickTemplates.studioCard.css!
  );
  const [jsCode, setJsCode] = useState<string>(
    initialMultiWeb?.js || quickTemplates.studioCard.js!
  );

  // Active sub-tab in Web mode: 'html' | 'css' | 'js'
  const [activeWebTab, setActiveWebTab] = useState<'html' | 'css' | 'js'>('html');

  // Single code buffer
  const [singleCode, setSingleCode] = useState<string>(
    initialCode || quickTemplates.pythonEstimator.code!
  );

  // Custom project files for file explorer
  const [projectFiles, setProjectFiles] = useState<ProjectFile[]>([
    { id: 'f_html', name: 'index.html', language: 'html', content: htmlCode, isMain: true },
    { id: 'f_css', name: 'style.css', language: 'css', content: cssCode },
    { id: 'f_js', name: 'script.js', language: 'javascript', content: jsCode }
  ]);
  const [showFileExplorer, setShowFileExplorer] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [showNewFileModal, setShowNewFileModal] = useState(false);

  // Auto Preview Toggle (debounced live updates!)
  const [autoPreview, setAutoPreview] = useState<boolean>(true);
  const autoRunTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Workspace Splitter & Resizing
  const containerRef = useRef<HTMLDivElement>(null);
  const [splitPercentage, setSplitPercentage] = useState<number>(50); // 50% left, 50% right
  const [isDragging, setIsDragging] = useState<boolean>(false);

  // Settings
  const [fontSize, setFontSize] = useState<number>(14);
  const [editorTheme, setEditorTheme] = useState<'white' | 'dark'>('white');

  // Full-Screen Preview Modal
  const [isFullScreenPreview, setIsFullScreenPreview] = useState<boolean>(false);
  const [previewDevice, setPreviewDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Output Execution State
  const [executionResult, setExecutionResult] = useState<ExecutionResult | null>(null);
  const [isExecuting, setIsExecuting] = useState(false);
  const [activeOutputTab, setActiveOutputTab] = useState<'preview' | 'console' | 'errors'>('preview');
  const [copiedOutput, setCopiedOutput] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Live Console Logs Intercepted from Preview
  const [liveConsoleLogs, setLiveConsoleLogs] = useState<ConsoleMessage[]>([]);

  // Save Project Modal
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveTitle, setSaveTitle] = useState('My Studio Workspace');
  const [saveFolder, setSaveFolder] = useState('Web Apps');

  // Find and Replace Bar
  const [showFindReplace, setShowFindReplace] = useState(false);
  const [findQuery, setFindQuery] = useState('');
  const [replaceQuery, setReplaceQuery] = useState('');

  // Mobile view toggle (Editor vs Output)
  const [mobileActiveView, setMobileActiveView] = useState<'editor' | 'output'>('editor');

  // Available Languages list
  const languages = [
    { id: 'web', name: '🌐 HTML5 / CSS3 / JS (W3Schools Tryit Web)' },
    { id: 'javascript', name: '⚡ JavaScript (ES6+)' },
    { id: 'typescript', name: '📘 TypeScript' },
    { id: 'python', name: '🐍 Python 3' },
    { id: 'sql', name: '🗄️ SQL & MySQL (Relational)' },
    { id: 'php', name: '🐘 PHP 8' },
    { id: 'c', name: '⚙️ C' },
    { id: 'cpp', name: '⚙️ C++' },
    { id: 'java', name: '☕ Java' },
    { id: 'csharp', name: '🎯 C# (.NET)' },
    { id: 'json', name: '🔌 JSON' }
  ];

  // Receive live console messages from sandboxed iframe
  useEffect(() => {
    const handleWindowMessage = (event: MessageEvent) => {
      if (event.data && event.data.type === 'CONSOLE_LOG') {
        const newMsg: ConsoleMessage = {
          id: `log_${Date.now()}_${Math.random()}`,
          level: event.data.level || 'log',
          text: event.data.text || '',
          timestamp: new Date().toLocaleTimeString()
        };
        setLiveConsoleLogs((prev) => [newMsg, ...prev.slice(0, 49)]);
      }
    };

    window.addEventListener('message', handleWindowMessage);
    return () => window.removeEventListener('message', handleWindowMessage);
  }, []);

  // Update when initialCode changes
  useEffect(() => {
    if (initialCode) {
      if (initialLanguage === 'web' || initialLanguage === 'html' || initialLanguage === 'html-css-js') {
        setWorkspaceMode('web');
        setHtmlCode(initialCode);
        setActiveOutputTab('preview');
      } else {
        setWorkspaceMode('single');
        setSelectedLanguage(initialLanguage);
        setSingleCode(initialCode);
        setActiveOutputTab('console');
      }
    }
  }, [initialCode, initialLanguage]);

  // Update when initialMultiWeb changes
  useEffect(() => {
    if (initialMultiWeb) {
      setWorkspaceMode('web');
      setHtmlCode(initialMultiWeb.html);
      setCssCode(initialMultiWeb.css);
      setJsCode(initialMultiWeb.js);
      setActiveOutputTab('preview');
      handleRunCode();
    }
  }, [initialMultiWeb]);

  // Handle Dragging Splitter
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
      if (newWidth >= 20 && newWidth <= 80) {
        setSplitPercentage(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = 'default';
      document.body.style.userSelect = 'auto';
    };

    if (isDragging) {
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  // Run Code function
  const handleRunCode = useCallback(() => {
    setIsExecuting(true);
    setTimeout(() => {
      let res: ExecutionResult;
      if (workspaceMode === 'web') {
        res = executeCode('web', '', { html: htmlCode, css: cssCode, js: jsCode });
        setExecutionResult(res);
        setActiveOutputTab('preview');
      } else {
        res = executeCode(selectedLanguage, singleCode);
        setExecutionResult(res);
        if (res.status === 'error' || res.errors.length > 0) {
          setActiveOutputTab('errors');
        } else {
          setActiveOutputTab('console');
        }
      }
      setIsExecuting(false);
    }, 150);
  }, [workspaceMode, htmlCode, cssCode, jsCode, selectedLanguage, singleCode]);

  // Initial execution on mount
  useEffect(() => {
    handleRunCode();
  }, [workspaceMode, selectedLanguage]);

  // Auto Preview Trigger with Debounce
  useEffect(() => {
    if (!autoPreview || workspaceMode !== 'web') return;

    if (autoRunTimerRef.current) {
      clearTimeout(autoRunTimerRef.current);
    }

    autoRunTimerRef.current = setTimeout(() => {
      handleRunCode();
    }, 400);

    return () => {
      if (autoRunTimerRef.current) clearTimeout(autoRunTimerRef.current);
    };
  }, [htmlCode, cssCode, jsCode, autoPreview, workspaceMode, handleRunCode]);

  // Global Keyboard shortcut: Ctrl+Enter or Cmd+Enter to run
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRunCode();
        onShowToast('Code Executed', 'Executed via keyboard shortcut (Ctrl+Enter).', 'success');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRunCode, onShowToast]);

  // Handle Tab key in code textareas for 2-space indentation
  const handleCodeKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const val = target.value;

      setter(val.substring(0, start) + '  ' + val.substring(end));
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  // Switch language from dropdown
  const handleLanguageChange = (langId: string) => {
    if (langId === 'web') {
      setWorkspaceMode('web');
      setActiveOutputTab('preview');
    } else {
      setWorkspaceMode('single');
      setSelectedLanguage(langId);
      setActiveOutputTab('console');

      const defaultSnippets: Record<string, string> = {
        python: quickTemplates.pythonEstimator.code!,
        sql: quickTemplates.sqlQuery.code!,
        php: quickTemplates.phpSimulator.code!,
        javascript: `// DesignArtPro JavaScript Workspace\nconsole.log("🎨 DesignArtPro Engine Initialized");\nconst palette = ["#9333ea", "#ec4899", "#38bdf8"];\nconsole.log("Brand colors:", palette);\nconsole.log("Ready to compute!");`,
        typescript: `// TypeScript Workspace\ninterface StudioMember {\n  id: number;\n  name: string;\n  role: string;\n}\n\nconst member: StudioMember = {\n  id: 101,\n  name: "Alex Smith",\n  role: "Lead Designer"\n};\nconsole.log("Verified Member:", member);`,
        cpp: `#include <iostream>\n\nint main() {\n    std::cout << "DesignArtPro C++ Studio Engine\\n";\n    int services = 12;\n    std::cout << "Available Services: " << services << std::endl;\n    return 0;\n}`,
        c: `#include <stdio.h>\n\nint main() {\n    printf("DesignArtPro C Platform\\n");\n    printf("Status: 0 Errors, 0 Warnings\\n");\n    return 0;\n}`,
        java: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("DesignArtPro Java Engine Active");\n        System.out.printf("Order #%s verified!%n", "DAP-9821");\n    }\n}`,
        csharp: `using System;\n\npublic class Program {\n    public static void Main() {\n        Console.WriteLine("DesignArtPro .NET Studio Engine");\n    }\n}`,
        json: `{\n  "studio": "DesignArtPro",\n  "whatsapp": "03440 665 646",\n  "services": 12,\n  "languages": 15,\n  "status": "Online"\n}`
      };

      setSingleCode(defaultSnippets[langId] || `// Write your ${langId.toUpperCase()} code here...\nconsole.log("Ready");`);
    }
  };

  // Load a Quick Template
  const handleLoadTemplate = (templateKey: string) => {
    const tmpl = quickTemplates[templateKey];
    if (!tmpl) return;

    if (tmpl.mode === 'web') {
      setWorkspaceMode('web');
      setHtmlCode(tmpl.html || '');
      setCssCode(tmpl.css || '');
      setJsCode(tmpl.js || '');
      setActiveOutputTab('preview');
    } else {
      setWorkspaceMode('single');
      setSelectedLanguage(tmpl.lang);
      setSingleCode(tmpl.code || '');
      setActiveOutputTab('console');
    }
    onShowToast('Template Loaded', `Loaded "${tmpl.title}" into workspace.`, 'success');
  };

  // Copy Code
  const handleCopyCode = () => {
    const codeToCopy = workspaceMode === 'web' 
      ? `<!-- HTML -->\n${htmlCode}\n\n/* CSS */\n${cssCode}\n\n// JavaScript\n${jsCode}`
      : singleCode;
    navigator.clipboard.writeText(codeToCopy);
    setCopiedCode(true);
    onShowToast('Code Copied', 'All code copied to your clipboard.', 'success');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Clear Code
  const handleClearCode = () => {
    if (window.confirm('Clear all code in current workspace?')) {
      if (workspaceMode === 'web') {
        setHtmlCode('');
        setCssCode('');
        setJsCode('');
      } else {
        setSingleCode('');
      }
      onShowToast('Workspace Cleared', 'Editor contents cleared.', 'info');
    }
  };

  // Reset Editor
  const handleResetEditor = () => {
    if (window.confirm('Reset workspace to default starter project?')) {
      handleLoadTemplate('studioCard');
      onShowToast('Workspace Reset', 'Restored default DesignArtPro template.', 'info');
    }
  };

  // Download project files
  const handleDownloadFiles = () => {
    if (workspaceMode === 'web') {
      const fullHtml = buildWebPreview(htmlCode, cssCode, jsCode);
      const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'designartpro_website.html';
      a.click();
      URL.revokeObjectURL(url);
    } else {
      const extMap: Record<string, string> = {
        javascript: 'js',
        python: 'py',
        sql: 'sql',
        php: 'php',
        c: 'c',
        cpp: 'cpp',
        java: 'java',
        csharp: 'cs',
        json: 'json',
        typescript: 'ts'
      };
      const ext = extMap[selectedLanguage] || 'txt';
      const blob = new Blob([singleCode], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `designartpro_script.${ext}`;
      a.click();
      URL.revokeObjectURL(url);
    }
    onShowToast('Download Started', 'Project files saved to your computer.', 'success');
  };

  // Open Preview in New Window
  const handleOpenInNewWindow = () => {
    const fullHtml = buildWebPreview(htmlCode, cssCode, jsCode);
    const blob = new Blob([fullHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
    onShowToast('New Window', 'Live output opened in a separate window.', 'success');
  };

  // Refresh Output
  const handleRefreshOutput = () => {
    setLiveConsoleLogs([]);
    handleRunCode();
    onShowToast('Output Refreshed', 'Preview reloaded and sandbox reset.', 'info');
  };

  // Clear Output
  const handleClearOutput = () => {
    setLiveConsoleLogs([]);
    setExecutionResult({
      stdout: '',
      stderr: '',
      status: 'success',
      executionTimeMs: 0,
      errors: []
    });
    onShowToast('Output Cleared', 'Console logs and output reset.', 'info');
  };

  // Copy Output
  const handleCopyOutput = () => {
    const out = liveConsoleLogs.length > 0 
      ? liveConsoleLogs.map(l => `[${l.timestamp}] [${l.level.toUpperCase()}] ${l.text}`).join('\n')
      : (executionResult?.stdout || executionResult?.stderr || '');
    if (out) {
      navigator.clipboard.writeText(out);
      setCopiedOutput(true);
      onShowToast('Output Copied', 'Console output copied.', 'success');
      setTimeout(() => setCopiedOutput(false), 2000);
    }
  };

  // Save Project Submit
  const handleSaveProjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProject: SavedCodingProject = {
      id: `code_proj_${Date.now()}`,
      title: saveTitle.trim() || 'Untitled Workspace Project',
      language: workspaceMode === 'web' ? 'web' : selectedLanguage,
      folder: saveFolder.trim() || 'Web Apps',
      mode: workspaceMode,
      updatedAt: new Date().toLocaleDateString(),
      createdAt: new Date().toLocaleDateString(),
      files: workspaceMode === 'web' ? [
        { id: 'f_html', name: 'index.html', language: 'html', content: htmlCode, isMain: true },
        { id: 'f_css', name: 'style.css', language: 'css', content: cssCode },
        { id: 'f_js', name: 'script.js', language: 'javascript', content: jsCode }
      ] : [
        { id: 'f_main', name: `main.${selectedLanguage}`, language: selectedLanguage, content: singleCode, isMain: true }
      ]
    };

    onSaveProject(newProject);
    setShowSaveModal(false);
    confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
    onShowToast('Project Saved!', `"${newProject.title}" stored in your User Dashboard.`, 'success');
  };

  // Reopen existing project
  const handleLoadSavedProject = (proj: SavedCodingProject) => {
    if (proj.mode === 'web') {
      setWorkspaceMode('web');
      const htmlF = proj.files.find(f => f.name.endsWith('.html'))?.content || '';
      const cssF = proj.files.find(f => f.name.endsWith('.css'))?.content || '';
      const jsF = proj.files.find(f => f.name.endsWith('.js'))?.content || '';
      setHtmlCode(htmlF);
      setCssCode(cssF);
      setJsCode(jsF);
      setActiveOutputTab('preview');
    } else {
      setWorkspaceMode('single');
      setSelectedLanguage(proj.language);
      setSingleCode(proj.files[0]?.content || '');
      setActiveOutputTab('console');
    }
    onShowToast('Project Loaded', `Opened "${proj.title}" in workspace.`, 'info');
  };

  // Find & Replace Handler
  const handleReplaceAll = () => {
    if (!findQuery) {
      onShowToast('Find query empty', 'Please enter a search term to find.', 'info');
      return;
    }
    if (workspaceMode === 'web') {
      if (activeWebTab === 'html') {
        setHtmlCode(prev => prev.split(findQuery).join(replaceQuery));
      } else if (activeWebTab === 'css') {
        setCssCode(prev => prev.split(findQuery).join(replaceQuery));
      } else {
        setJsCode(prev => prev.split(findQuery).join(replaceQuery));
      }
    } else {
      setSingleCode(prev => prev.split(findQuery).join(replaceQuery));
    }
    onShowToast('Find & Replace', `Replaced occurrences of "${findQuery}" with "${replaceQuery}".`, 'success');
  };

  // Calculate lines for current editor
  const currentText = workspaceMode === 'web'
    ? (activeWebTab === 'html' ? htmlCode : activeWebTab === 'css' ? cssCode : jsCode)
    : singleCode;
  const lineCount = currentText.split('\n').length;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 16) }, (_, i) => i + 1);

  // Render Web preview HTML
  const webPreviewHtml = executionResult?.htmlPreview || buildWebPreview(htmlCode, cssCode, jsCode);

  return (
    <section id="editor" className="py-6 sm:py-10 bg-white relative">
      <div className="max-w-[1720px] mx-auto px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold border border-purple-100 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              DesignArtPro — W3Schools Tryit-Inspired Side-by-Side Studio
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              Online Code Editor & <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Live Output</span>
            </h1>
          </div>

          {/* Quick Examples Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 hidden sm:inline">Try Examples:</span>
            <div className="relative">
              <select
                onChange={(e) => handleLoadTemplate(e.target.value)}
                defaultValue="studioCard"
                className="bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold py-2 pl-3 pr-8 rounded-xl border border-slate-200 cursor-pointer appearance-none focus:ring-2 focus:ring-purple-500/20"
              >
                <option value="studioCard">🎨 DesignArtPro Studio Card</option>
                <option value="responsiveNav">🌟 Responsive Nav & Hero</option>
                <option value="calculator">🧮 Calculator & Calculations</option>
                <option value="pythonEstimator">🐍 Python Studio Estimator</option>
                <option value="sqlQuery">🗄️ SQL Client DB Query</option>
                <option value="phpSimulator">🐘 PHP 8 API Dispatcher</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Main Editor Controls Bar Above the Editor */}
        <div className="bg-slate-900 text-white rounded-t-3xl px-4 sm:px-6 py-3 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          {/* Left: Language Select & Run Button */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Primary RUN CODE Button */}
            <button
              onClick={handleRunCode}
              disabled={isExecuting}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-xs sm:text-sm rounded-xl shadow-md shadow-emerald-500/30 active:scale-95 transition-all flex items-center gap-2 cursor-pointer group"
              title="Run Code (Ctrl + Enter)"
            >
              <Play className={`w-4 h-4 fill-white ${isExecuting ? 'animate-spin' : 'group-hover:scale-110 transition-transform'}`} />
              <span>{isExecuting ? 'Running...' : 'Run Code ▶'}</span>
            </button>

            {/* Language Selector */}
            <div className="relative">
              <select
                value={workspaceMode === 'web' ? 'web' : selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="bg-slate-800 text-slate-100 text-xs font-bold py-2 pl-3 pr-8 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer appearance-none"
              >
                {languages.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Auto Preview Toggle */}
            {workspaceMode === 'web' && (
              <button
                onClick={() => {
                  const next = !autoPreview;
                  setAutoPreview(next);
                  onShowToast(next ? 'Auto Preview ON' : 'Auto Preview OFF', next ? 'Output will automatically refresh as you type.' : 'Click Run Code to update.', 'info');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-2 border transition-all ${
                  autoPreview
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                    : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
                }`}
                title="Toggle automatic live preview as you type"
              >
                <span className={`w-2 h-2 rounded-full ${autoPreview ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
                <span>Auto Preview</span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-900">
                  {autoPreview ? 'ON' : 'OFF'}
                </span>
              </button>
            )}

            {/* Saved Projects Dropdown if present */}
            {savedProjects.length > 0 && (
              <div className="relative hidden xl:block">
                <select
                  onChange={(e) => {
                    const found = savedProjects.find(p => p.id === e.target.value);
                    if (found) handleLoadSavedProject(found);
                  }}
                  defaultValue=""
                  className="bg-slate-800 text-purple-300 text-xs font-bold py-2 pl-3 pr-8 rounded-xl border border-purple-500/40 cursor-pointer appearance-none"
                >
                  <option value="" disabled>📂 My Saved Projects ({savedProjects.length})</option>
                  {savedProjects.map(p => (
                    <option key={p.id} value={p.id}>
                      {p.title} ({p.language})
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-purple-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            )}
          </div>

          {/* Right: Actions (Save, Copy, Clear, Reset, Download, Full-screen, Theme) */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {/* Save Code */}
            <button
              onClick={() => setShowSaveModal(true)}
              className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 shadow-sm"
              title="Save project to User Dashboard"
            >
              <Save className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Save Code</span>
            </button>

            {/* Copy Code */}
            <button
              onClick={handleCopyCode}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-bold border border-slate-700 transition-colors flex items-center gap-1.5"
              title="Copy code to clipboard"
            >
              {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copiedCode ? 'Copied' : 'Copy'}</span>
            </button>

            {/* Find & Replace Toggle */}
            <button
              onClick={() => setShowFindReplace(!showFindReplace)}
              className={`px-3 py-2 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                showFindReplace
                  ? 'bg-purple-600 text-white border-purple-500'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title="Toggle Find & Replace Bar"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Find & Replace</span>
            </button>

            {/* Reset Editor */}
            <button
              onClick={handleResetEditor}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
              title="Reset Editor to Starter Template"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            {/* Clear Code */}
            <button
              onClick={handleClearCode}
              className="p-2 bg-slate-800 hover:bg-rose-950/60 text-slate-400 hover:text-rose-400 rounded-xl border border-slate-700 transition-colors"
              title="Clear all code in current workspace"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>

            {/* Download Project */}
            <button
              onClick={handleDownloadFiles}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
              title="Download project files (.html / script)"
            >
              <Download className="w-3.5 h-3.5" />
            </button>

            {/* Full-Screen Preview */}
            <button
              onClick={() => setIsFullScreenPreview(true)}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-purple-300 hover:text-white rounded-xl border border-slate-700 transition-colors"
              title="Full-Screen Live Output"
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>

            {/* Open in New Window */}
            {workspaceMode === 'web' && (
              <button
                onClick={handleOpenInNewWindow}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-sky-300 hover:text-white rounded-xl border border-slate-700 transition-colors"
                title="Open Preview in New Tab / Window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            )}

            {/* Editor Theme Switcher (White vs Dark) */}
            <button
              onClick={() => setEditorTheme(editorTheme === 'white' ? 'dark' : 'white')}
              className="p-2 bg-slate-800 hover:bg-slate-700 text-amber-300 rounded-xl border border-slate-700 transition-colors"
              title={`Switch to ${editorTheme === 'white' ? 'Dark' : 'White'} Editor Theme`}
            >
              {editorTheme === 'white' ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Sub-Header: Language Tabs & Status Info */}
        <div className="bg-slate-100 px-4 sm:px-6 py-2.5 border-x border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Left: Language Tabs (HTML, CSS, JS or Single) */}
          <div className="flex items-center gap-2">
            {workspaceMode === 'web' ? (
              <div className="flex items-center gap-1.5 bg-slate-200/80 p-1 rounded-xl">
                <button
                  onClick={() => setActiveWebTab('html')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-black text-xs transition-all ${
                    activeWebTab === 'html'
                      ? 'bg-white text-orange-600 shadow-xs border border-orange-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-orange-500" />
                  <span>index.html</span>
                </button>
                <button
                  onClick={() => setActiveWebTab('css')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-black text-xs transition-all ${
                    activeWebTab === 'css'
                      ? 'bg-white text-blue-600 shadow-xs border border-blue-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <span>style.css</span>
                </button>
                <button
                  onClick={() => setActiveWebTab('js')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-black text-xs transition-all ${
                    activeWebTab === 'js'
                      ? 'bg-white text-amber-600 shadow-xs border border-amber-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span>script.js</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 font-bold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
                <FileCode className="w-4 h-4 text-purple-600" />
                <span>Editing: <strong className="text-purple-700 uppercase">{selectedLanguage}</strong></span>
              </div>
            )}
          </div>

          {/* Right: Mobile View Toggle (Editor vs Live Output) + Font controls */}
          <div className="flex items-center gap-3">
            {/* Mobile View Toggle */}
            <div className="flex lg:hidden bg-white p-1 rounded-xl border border-slate-200">
              <button
                onClick={() => setMobileActiveView('editor')}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  mobileActiveView === 'editor' ? 'bg-purple-600 text-white' : 'text-slate-600'
                }`}
              >
                Code Editor
              </button>
              <button
                onClick={() => setMobileActiveView('output')}
                className={`px-3 py-1 rounded-lg text-xs font-bold ${
                  mobileActiveView === 'output' ? 'bg-purple-600 text-white' : 'text-slate-600'
                }`}
              >
                Live Output
              </button>
            </div>

            {/* Font Size Selector */}
            <div className="hidden sm:flex items-center gap-1 bg-white px-2 py-1 rounded-xl border border-slate-200 text-xs">
              <Type className="w-3.5 h-3.5 text-slate-400" />
              {[12, 14, 16, 18].map((sz) => (
                <button
                  key={sz}
                  onClick={() => setFontSize(sz)}
                  className={`px-1.5 py-0.5 rounded text-[11px] font-bold ${
                    fontSize === sz ? 'bg-purple-600 text-white' : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-2 text-slate-500 text-[11px] font-mono">
              <span>Lines: <strong>{lineCount}</strong></span>
              <span className="text-slate-300">|</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Studio Ready
              </span>
            </div>
          </div>
        </div>

        {/* Find and Replace Bar */}
        {showFindReplace && (
          <div className="bg-slate-800 px-4 sm:px-6 py-2.5 border-x border-b border-slate-700 flex flex-wrap items-center gap-2 text-xs animate-in fade-in">
            <span className="text-purple-300 font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
              <Search className="w-3.5 h-3.5 text-purple-400" />
              Find & Replace:
            </span>
            <input
              type="text"
              placeholder="Find text..."
              value={findQuery}
              onChange={(e) => setFindQuery(e.target.value)}
              className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
            <input
              type="text"
              placeholder="Replace with..."
              value={replaceQuery}
              onChange={(e) => setReplaceQuery(e.target.value)}
              className="px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
            <button
              onClick={handleReplaceAll}
              className="px-3.5 py-1.5 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg text-xs transition-colors shadow-xs"
            >
              Replace All
            </button>
            <button
              onClick={() => setShowFindReplace(false)}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg"
              title="Close Find & Replace bar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* TWO-PANEL SIDE-BY-SIDE DESIGN WITH DRAGGABLE DIVIDER */}
        <div
          ref={containerRef}
          className="relative bg-white border border-slate-200 rounded-b-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[580px] lg:h-[680px]"
        >
          {/* LEFT PANEL: CODE EDITOR */}
          <div
            style={{
              width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${splitPercentage}%` : '100%'
            }}
            className={`flex flex-col h-full overflow-hidden ${
              mobileActiveView === 'output' ? 'hidden lg:flex' : 'flex'
            } ${editorTheme === 'white' ? 'bg-white text-slate-900' : 'bg-slate-950 text-slate-100'}`}
          >
            {/* Editor Area */}
            <div className="flex-1 flex overflow-hidden font-mono relative p-3">
              {/* Line Numbers Column */}
              <div
                className={`select-none text-right pr-3 font-mono leading-6 shrink-0 border-r mr-3 ${
                  editorTheme === 'white' 
                    ? 'text-slate-300 border-slate-100' 
                    : 'text-slate-600 border-slate-800'
                }`}
                style={{ fontSize: `${fontSize - 2}px` }}
              >
                {lineNumbers.map((num) => (
                  <div key={num} className="leading-6">
                    {num}
                  </div>
                ))}
              </div>

              {/* Editable Code Textarea */}
              <div className="flex-1 h-full relative overflow-hidden">
                {workspaceMode === 'web' ? (
                  <>
                    {activeWebTab === 'html' && (
                      <textarea
                        value={htmlCode}
                        onChange={(e) => setHtmlCode(e.target.value)}
                        onKeyDown={(e) => handleCodeKeyDown(e, setHtmlCode)}
                        spellCheck={false}
                        className={`w-full h-full bg-transparent font-mono leading-6 resize-none focus:outline-none border-0 p-0 text-left overflow-auto selection:bg-purple-100 selection:text-purple-900 ${
                          editorTheme === 'white' ? 'text-slate-900' : 'text-slate-100'
                        }`}
                        style={{ fontSize: `${fontSize}px`, tabSize: 2 }}
                        placeholder="Write HTML here..."
                      />
                    )}
                    {activeWebTab === 'css' && (
                      <textarea
                        value={cssCode}
                        onChange={(e) => setCssCode(e.target.value)}
                        onKeyDown={(e) => handleCodeKeyDown(e, setCssCode)}
                        spellCheck={false}
                        className={`w-full h-full bg-transparent font-mono leading-6 resize-none focus:outline-none border-0 p-0 text-left overflow-auto selection:bg-blue-100 selection:text-blue-900 ${
                          editorTheme === 'white' ? 'text-slate-900' : 'text-slate-100'
                        }`}
                        style={{ fontSize: `${fontSize}px`, tabSize: 2 }}
                        placeholder="Write CSS here..."
                      />
                    )}
                    {activeWebTab === 'js' && (
                      <textarea
                        value={jsCode}
                        onChange={(e) => setJsCode(e.target.value)}
                        onKeyDown={(e) => handleCodeKeyDown(e, setJsCode)}
                        spellCheck={false}
                        className={`w-full h-full bg-transparent font-mono leading-6 resize-none focus:outline-none border-0 p-0 text-left overflow-auto selection:bg-amber-100 selection:text-amber-900 ${
                          editorTheme === 'white' ? 'text-slate-900' : 'text-slate-100'
                        }`}
                        style={{ fontSize: `${fontSize}px`, tabSize: 2 }}
                        placeholder="Write JavaScript here..."
                      />
                    )}
                  </>
                ) : (
                  <textarea
                    value={singleCode}
                    onChange={(e) => setSingleCode(e.target.value)}
                    onKeyDown={(e) => handleCodeKeyDown(e, setSingleCode)}
                    spellCheck={false}
                    className={`w-full h-full bg-transparent font-mono leading-6 resize-none focus:outline-none border-0 p-0 text-left overflow-auto selection:bg-purple-100 selection:text-purple-900 ${
                      editorTheme === 'white' ? 'text-slate-900' : 'text-slate-100'
                    }`}
                    style={{ fontSize: `${fontSize}px`, tabSize: 2 }}
                    placeholder="Write your code here..."
                  />
                )}
              </div>
            </div>

            {/* Left Panel Footer Status */}
            <div className={`px-4 py-2 border-t text-[11px] flex items-center justify-between ${
              editorTheme === 'white'
                ? 'bg-slate-50 border-slate-100 text-slate-500'
                : 'bg-slate-900 border-slate-800 text-slate-400'
            }`}>
              <span>Tip: Press <strong>Tab</strong> to indent 2 spaces. <strong>Ctrl+Enter</strong> executes code.</span>
              <span>{currentText.length} chars</span>
            </div>
          </div>

          {/* DRAGGABLE DIVIDER (Visible on Desktop) */}
          <div
            onMouseDown={() => setIsDragging(true)}
            className="hidden lg:flex w-2.5 bg-slate-200 hover:bg-purple-400 active:bg-purple-600 transition-colors cursor-col-resize items-center justify-center select-none relative z-20 group"
            title="Drag to resize panels"
          >
            <div className="w-1 h-8 rounded-full bg-slate-400 group-hover:bg-white transition-colors" />
          </div>

          {/* RIGHT PANEL: LIVE OUTPUT & RESULTS */}
          <div
            style={{
              width: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${100 - splitPercentage}%` : '100%'
            }}
            className={`flex flex-col h-full bg-slate-50 border-t lg:border-t-0 border-slate-200 overflow-hidden ${
              mobileActiveView === 'editor' ? 'hidden lg:flex' : 'flex'
            }`}
          >
            {/* Output Panel Header & Sub-Tabs */}
            <div className="px-4 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {workspaceMode === 'web' && (
                  <button
                    onClick={() => setActiveOutputTab('preview')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeOutputTab === 'preview'
                        ? 'bg-purple-100 text-purple-800 border border-purple-200'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Live Preview</span>
                  </button>
                )}

                <button
                  onClick={() => setActiveOutputTab('console')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeOutputTab === 'console'
                      ? 'bg-purple-100 text-purple-800 border border-purple-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>Console</span>
                  {liveConsoleLogs.length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-purple-600 text-white text-[10px] flex items-center justify-center font-bold">
                      {liveConsoleLogs.length}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setActiveOutputTab('errors')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeOutputTab === 'errors'
                      ? 'bg-rose-100 text-rose-800 border border-rose-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  <span>Errors</span>
                  {executionResult?.errors && executionResult.errors.length > 0 && (
                    <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] flex items-center justify-center font-bold">
                      {executionResult.errors.length}
                    </span>
                  )}
                </button>
              </div>

              {/* Output Toolbar: Refresh, Copy, Clear */}
              <div className="flex items-center gap-1">
                <button
                  onClick={handleRefreshOutput}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-purple-600 hover:bg-slate-100"
                  title="Refresh Output"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleCopyOutput}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  title="Copy Console Output"
                >
                  {copiedOutput ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={handleClearOutput}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-slate-100"
                  title="Clear Console / Output"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Output Viewport Content */}
            <div className="flex-1 bg-white relative overflow-auto">
              {/* 1. Live Preview Panel (Iframe with srcDoc) */}
              {activeOutputTab === 'preview' && workspaceMode === 'web' && (
                <iframe
                  key={webPreviewHtml.length}
                  srcDoc={webPreviewHtml}
                  title="Live Output Preview"
                  sandbox="allow-scripts"
                  className="w-full h-full min-h-[460px] bg-white border-0"
                />
              )}

              {/* 2. Console & Execution Output Tab */}
              {activeOutputTab === 'console' && (
                <div className="p-4 font-mono text-xs text-slate-800 min-h-full flex flex-col justify-between bg-white">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-slate-400 text-[11px]">
                      <span>Real-Time Output Stream</span>
                      <span className="text-emerald-600 font-semibold">
                        Status: {executionResult?.status === 'error' ? 'Failed' : 'Success'} ({executionResult?.executionTimeMs || 0}ms)
                      </span>
                    </div>

                    {/* SQL Table Formatter if present */}
                    {executionResult?.tableResult && (
                      <div className="my-3 overflow-x-auto border border-slate-200 rounded-xl shadow-xs">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-100 border-b border-slate-200">
                              {executionResult.tableResult.columns.map((col, idx) => (
                                <th key={idx} className="p-2.5 font-bold text-slate-700">
                                  {col}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {executionResult.tableResult.rows.map((row, rIdx) => (
                              <tr key={rIdx} className="border-b border-slate-100 hover:bg-slate-50">
                                {executionResult.tableResult!.columns.map((col, cIdx) => (
                                  <td key={cIdx} className="p-2.5 text-slate-600">
                                    {String(row[col] ?? 'NULL')}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Intercepted Live Console Logs from preview */}
                    {liveConsoleLogs.length > 0 && (
                      <div className="space-y-1 mb-3">
                        <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          Browser Console Logs:
                        </div>
                        {liveConsoleLogs.map((log) => (
                          <div
                            key={log.id}
                            className={`p-2 rounded-lg text-xs font-mono flex items-start gap-2 ${
                              log.level === 'error'
                                ? 'bg-rose-50 text-rose-700 border border-rose-200'
                                : log.level === 'warn'
                                ? 'bg-amber-50 text-amber-700 border border-amber-200'
                                : 'bg-slate-50 text-slate-700 border border-slate-100'
                            }`}
                          >
                            <span className="text-[10px] text-slate-400 shrink-0">[{log.timestamp}]</span>
                            <span className="font-bold shrink-0 uppercase text-[10px]">{log.level}:</span>
                            <span className="break-all whitespace-pre-wrap">{log.text}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Standard Stdout */}
                    <pre className="whitespace-pre-wrap leading-relaxed text-slate-800 p-3 rounded-xl bg-slate-50 border border-slate-100 font-mono text-xs">
                      <code>{executionResult?.stdout || '// Click "Run Code ▶" to execute and see output.'}</code>
                    </pre>

                    {executionResult?.stderr && (
                      <pre className="whitespace-pre-wrap leading-relaxed text-rose-600 p-3 rounded-xl bg-rose-50 border border-rose-100 mt-2 font-bold font-mono text-xs">
                        <code>{executionResult.stderr}</code>
                      </pre>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Sandboxed Execution Runtime</span>
                    <span>Ready</span>
                  </div>
                </div>
              )}

              {/* 3. Errors and Diagnostics Tab */}
              {activeOutputTab === 'errors' && (
                <div className="p-5 bg-white min-h-full space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Syntax & Runtime Inspection
                    </h4>
                    <span className="text-xs font-bold text-rose-600">
                      {executionResult?.errors.length || 0} Issue(s) Detected
                    </span>
                  </div>

                  {executionResult?.errors && executionResult.errors.length > 0 ? (
                    <div className="space-y-3">
                      {executionResult.errors.map((err, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-rose-50/80 border border-rose-200 text-xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-rose-800 flex items-center gap-1.5">
                              <AlertCircle className="w-4 h-4 text-rose-600" />
                              {err.severity.toUpperCase()} {err.line ? `[Line ${err.line}]` : ''}
                            </span>
                            {err.line && (
                              <span className="font-mono text-[10px] bg-white px-2 py-0.5 rounded border border-rose-200 text-rose-700 font-bold">
                                Line {err.line}
                              </span>
                            )}
                          </div>
                          <p className="text-slate-800 font-semibold">{err.message}</p>
                          {err.suggestion && (
                            <p className="text-slate-600 text-[11px] bg-white/80 p-2 rounded-lg border border-rose-100">
                              💡 <strong>Suggested Fix:</strong> {err.suggestion}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-100 space-y-2">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h5 className="text-sm font-bold text-emerald-900">Zero Errors Detected</h5>
                      <p className="text-xs text-emerald-700 max-w-xs mx-auto">
                        Your code passed syntax validation and ran cleanly with no fatal exceptions.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Panel Footer Status */}
            <div className="px-4 py-2 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                <span>Side-by-side output updated</span>
              </span>
              <button
                onClick={handleRunCode}
                className="text-purple-700 font-bold hover:underline"
              >
                Re-run (Ctrl+Enter)
              </button>
            </div>
          </div>
        </div>

        {/* FULL-SCREEN PREVIEW MODAL */}
        {isFullScreenPreview && (
          <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex flex-col p-4 animate-in fade-in">
            {/* Modal Controls Bar */}
            <div className="bg-slate-900 text-white px-6 py-3 rounded-t-2xl flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="font-black text-sm text-purple-400">DesignArtPro Full-Screen Preview</span>
                {/* Viewport switchers */}
                <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl">
                  <button
                    onClick={() => setPreviewDevice('desktop')}
                    className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                      previewDevice === 'desktop' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Desktop 100%"
                  >
                    <Laptop className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Desktop</span>
                  </button>
                  <button
                    onClick={() => setPreviewDevice('tablet')}
                    className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                      previewDevice === 'tablet' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Tablet 768px"
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Tablet</span>
                  </button>
                  <button
                    onClick={() => setPreviewDevice('mobile')}
                    className={`p-1.5 rounded-lg text-xs font-bold flex items-center gap-1 ${
                      previewDevice === 'mobile' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                    title="Mobile 375px"
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Mobile</span>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRefreshOutput}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
                  title="Refresh Output"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsFullScreenPreview(false)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900 text-white font-bold text-xs flex items-center gap-1"
                  title="Exit Full Screen"
                >
                  <Minimize2 className="w-4 h-4" />
                  <span>Exit</span>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="flex-1 bg-slate-950/60 rounded-b-2xl overflow-hidden flex items-center justify-center p-2 sm:p-4">
              <div
                style={{
                  width:
                    previewDevice === 'desktop'
                      ? '100%'
                      : previewDevice === 'tablet'
                      ? '768px'
                      : '375px',
                  height: '100%'
                }}
                className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300"
              >
                <iframe
                  srcDoc={webPreviewHtml}
                  title="Full Screen Preview"
                  sandbox="allow-scripts"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        )}

        {/* SAVE PROJECT MODAL */}
        {showSaveModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">Save Coding Project</h3>
                <button
                  onClick={() => setShowSaveModal(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveProjectSubmit} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. My W3Schools-Style Web Card"
                    value={saveTitle}
                    onChange={(e) => setSaveTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Folder / Category
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Web Apps, Algorithms, Database"
                    value={saveFolder}
                    onChange={(e) => setSaveFolder(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div className="p-3 bg-purple-50 rounded-xl text-xs text-purple-700">
                  This project will be saved to your client account and can be reopened anytime from the <strong>User Dashboard</strong>.
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowSaveModal(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md shadow-purple-500/20"
                  >
                    Save Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
