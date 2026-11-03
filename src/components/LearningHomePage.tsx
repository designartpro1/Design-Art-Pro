import React, { useState } from 'react';
import { User, UserLearningProgress } from '../types';
import { 
  Play, 
  Search, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Award, 
  Flame, 
  ArrowRight, 
  Laptop, 
  FileCode, 
  Database, 
  Terminal, 
  Zap, 
  Layers,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface LearningHomePageProps {
  currentUser: User | null;
  userProgress: UserLearningProgress;
  onSelectLanguage: (lang: string) => void;
  onOpenTryitEditor: (codeData: { html?: string; css?: string; js?: string; single?: string; language?: string; mode: 'web' | 'single' }) => void;
  onOpenAuth: () => void;
  onNavigateToDashboard: () => void;
  onSearchTutorials: (query: string) => void;
}

export const LearningHomePage: React.FC<LearningHomePageProps> = ({
  currentUser,
  userProgress,
  onSelectLanguage,
  onOpenTryitEditor,
  onOpenAuth,
  onNavigateToDashboard,
  onSearchTutorials
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchTutorials(searchQuery.trim());
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION: "Learn to Code" + Account Card on the Right */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white py-12 sm:py-20 border-b border-slate-100">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            {/* Left Col (7 cols): Main Heading & Search */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                The Complete Developer & Creative Coding Platform
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black text-slate-900 tracking-tight leading-[1.08]">
                Learn to <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Code</span>
              </h1>

              <p className="text-base sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                Free tutorials, practical examples, exercises, and programming references for beginners and advanced learners. Test and run code directly in your browser.
              </p>

              {/* Search Box */}
              <form onSubmit={handleSearchSubmit} className="max-w-xl">
                <div className="relative flex items-center shadow-lg shadow-purple-500/5 rounded-2xl overflow-hidden border border-slate-200 bg-white">
                  <Search className="w-5 h-5 text-slate-400 absolute left-4" />
                  <input
                    type="text"
                    placeholder="Search our tutorials, e.g. HTML, CSS, JavaScript, SQL..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-32 py-4 text-sm sm:text-base focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 px-5 py-2.5 bg-[#04AA6D] hover:bg-[#059862] text-white text-xs sm:text-sm font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Search
                  </button>
                </div>
              </form>

              {/* Quick links */}
              <div className="flex flex-wrap items-center gap-2 pt-2 text-xs font-bold text-slate-500">
                <span>Popular Tracks:</span>
                {['HTML', 'CSS', 'JavaScript', 'Python', 'SQL', 'React'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => onSelectLanguage(lang.toLowerCase())}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 transition-colors"
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Col (5 cols): Professional User Account & Progress Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-2xl shadow-purple-500/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-100/60 to-pink-100/30 rounded-bl-full pointer-events-none" />

                {currentUser ? (
                  /* Signed In State */
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-sky-500 text-white font-black text-xl flex items-center justify-center shadow-md">
                        {currentUser.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                          Active Student
                        </span>
                        <h3 className="text-xl font-black text-slate-900">{currentUser.name}</h3>
                        <p className="text-xs text-slate-500">{currentUser.email}</p>
                      </div>
                    </div>

                    {/* Streak & Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
                        <Flame className="w-6 h-6 text-amber-500 fill-amber-400" />
                        <div>
                          <p className="text-[11px] font-bold text-slate-500">Day Streak</p>
                          <p className="text-lg font-black text-slate-900">{userProgress.streakDays} Days 🔥</p>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 flex items-center gap-3">
                        <Award className="w-6 h-6 text-purple-600" />
                        <div>
                          <p className="text-[11px] font-bold text-slate-500">Completed</p>
                          <p className="text-lg font-black text-purple-900">{userProgress.completedLessons.length} Lessons</p>
                        </div>
                      </div>
                    </div>

                    {/* Quick Course Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs font-bold">
                        <span className="text-slate-700">HTML & CSS Progress</span>
                        <span className="text-emerald-600">
                          {Math.min(100, Math.round((userProgress.completedLessons.length / 30) * 100))}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 transition-all duration-500" 
                          style={{ width: `${Math.min(100, Math.round((userProgress.completedLessons.length / 30) * 100))}%` }}
                        />
                      </div>
                    </div>

                    {/* Dashboard Action */}
                    <button
                      onClick={onNavigateToDashboard}
                      className="w-full py-3.5 px-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:opacity-95 text-white font-bold rounded-2xl text-sm shadow-md shadow-purple-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <span>Open Learning Dashboard</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Signed Out State */
                  <div className="space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                        <Code2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-slate-900">Your Student Account</h3>
                        <p className="text-xs text-slate-500">Track lessons, save code, and earn certificates.</p>
                      </div>
                    </div>

                    <div className="space-y-2.5 text-xs text-slate-600 pt-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Log in to track your learning progress across all devices</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Save multiple-file coding projects directly to your dashboard</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Practice exercises with instant automated feedback</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                      <button
                        onClick={onOpenAuth}
                        className="flex-1 py-3 px-4 bg-[#04AA6D] hover:bg-[#059862] text-white font-black text-xs sm:text-sm rounded-xl transition-all shadow-sm shadow-emerald-600/20 cursor-pointer text-center"
                      >
                        Sign In
                      </button>
                      <button
                        onClick={onOpenAuth}
                        className="flex-1 py-3 px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 font-black text-xs sm:text-sm rounded-xl transition-all cursor-pointer text-center"
                      >
                        Register for Free
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE LANGUAGE SECTIONS (HTML, CSS, JavaScript, Python, SQL) */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* HTML BLOCK */}
          <div className="rounded-3xl bg-[#D9EEE1]/40 border border-[#b8e2c7] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  Foundation
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">HTML</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The language for building web pages. HTML provides structure, semantic elements, tables, forms, and multimedia controls.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onSelectLanguage('html')}
                    className="px-6 py-3 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-emerald-500/20"
                  >
                    Learn HTML
                  </button>
                  <button
                    onClick={() => onSelectLanguage('html')}
                    className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold rounded-xl text-sm transition-all"
                  >
                    HTML Reference
                  </button>
                </div>
              </div>

              {/* Code Preview Card */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-xs font-bold text-slate-700">HTML Example:</span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold">index.html</span>
                </div>
                <pre className="font-mono text-xs text-slate-800 bg-slate-50 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-100">
{`<!DOCTYPE html>
<html>
<head>
  <title>DesignArtPro Web</title>
</head>
<body>
  <h1>Welcome to DesignArtPro</h1>
  <p>This is a paragraph with semantic HTML structure.</p>
  <a href="https://designartpro.com">Explore Projects</a>
</body>
</html>`}
                </pre>
                <button
                  onClick={() => onOpenTryitEditor({
                    mode: 'web',
                    html: `<!DOCTYPE html>\n<html>\n<head>\n  <title>DesignArtPro Web</title>\n</head>\n<body>\n  <h1>Welcome to DesignArtPro</h1>\n  <p>This is a paragraph with semantic HTML structure.</p>\n  <button onclick="alert('HTML is live!')">Click Me</button>\n</body>\n</html>`,
                    css: `body { font-family: system-ui, sans-serif; padding: 20px; color: #1e1b4b; }\nh1 { color: #04AA6D; }\nbutton { background: #04AA6D; color: white; border: none; padding: 10px 18px; border-radius: 8px; font-weight: bold; cursor: pointer; }`,
                    js: ''
                  })}
                  className="mt-4 w-full py-2.5 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Try it Yourself ▶
                </button>
              </div>
            </div>
          </div>

          {/* CSS BLOCK */}
          <div className="rounded-3xl bg-[#FFF4A3]/30 border border-[#fde047] p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
                  Styling & Layouts
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-slate-900">CSS</h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  The language for styling web pages. Master the CSS Box Model, Flexbox alignment, CSS Grid, keyframe animations, and responsive media queries.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onSelectLanguage('css')}
                    className="px-6 py-3 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-emerald-500/20"
                  >
                    Learn CSS
                  </button>
                  <button
                    onClick={() => onSelectLanguage('css')}
                    className="px-5 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold rounded-xl text-sm transition-all"
                  >
                    CSS Reference
                  </button>
                </div>
              </div>

              {/* Code Preview Card */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-6 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <span className="text-xs font-bold text-slate-700">CSS Example:</span>
                  <span className="text-[11px] font-mono text-purple-600 font-bold">style.css</span>
                </div>
                <pre className="font-mono text-xs text-slate-800 bg-slate-50 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-100">
{`body {
  background-color: #f8fafc;
  font-family: system-ui, sans-serif;
}

h1 {
  color: #9333ea;
  text-align: center;
}

p {
  font-size: 16px;
  line-height: 1.6;
}`}
                </pre>
                <button
                  onClick={() => onOpenTryitEditor({
                    mode: 'web',
                    html: `<h1>Styled via Modern CSS</h1>\n<p>CSS gives personality, layout hierarchy, and responsive flexibility to your web pages.</p>`,
                    css: `body { background: #faf5ff; font-family: system-ui, sans-serif; padding: 24px; text-align: center; }\nh1 { color: #9333ea; font-size: 26px; }\np { color: #64748b; font-size: 15px; }`,
                    js: ''
                  })}
                  className="mt-4 w-full py-2.5 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Try it Yourself ▶
                </button>
              </div>
            </div>
          </div>

          {/* JAVASCRIPT BLOCK */}
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Programming Language
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white">JavaScript</h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  The programming language of the Web. JavaScript makes web pages interactive with DOM manipulation, animations, calculations, and real-time API integrations.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <button
                    onClick={() => onSelectLanguage('javascript')}
                    className="px-6 py-3 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold rounded-xl text-sm transition-all shadow-md shadow-emerald-500/20"
                  >
                    Learn JavaScript
                  </button>
                  <button
                    onClick={() => onSelectLanguage('javascript')}
                    className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold rounded-xl text-sm transition-all"
                  >
                    JS Reference
                  </button>
                </div>
              </div>

              {/* Code Preview Card */}
              <div className="lg:col-span-6 bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-xl">
                <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-3">
                  <span className="text-xs font-bold text-slate-300">JavaScript Example:</span>
                  <span className="text-[11px] font-mono text-amber-400 font-bold">script.js</span>
                </div>
                <pre className="font-mono text-xs text-emerald-400 bg-slate-950 p-4 rounded-xl overflow-x-auto leading-relaxed border border-slate-800">
{`<button onclick="myFunction()">Click Me</button>

<script>
function myFunction() {
  let x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "#9333ea";
}
</script>`}
                </pre>
                <button
                  onClick={() => onOpenTryitEditor({
                    mode: 'web',
                    html: `<h2 id="demo">JavaScript Changes HTML!</h2>\n<button id="magicBtn">Transform Text ✨</button>`,
                    css: `body { font-family: system-ui, sans-serif; padding: 24px; text-align: center; }\n#demo { transition: all 0.3s ease; color: #1e1b4b; }\nbutton { background: #04AA6D; color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: bold; cursor: pointer; }`,
                    js: `document.getElementById('magicBtn').addEventListener('click', () => {\n  const h = document.getElementById('demo');\n  h.style.color = '#9333ea';\n  h.style.fontSize = '32px';\n  console.log('DOM node transformed via JS.');\n});`
                  })}
                  className="mt-4 w-full py-2.5 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Try it Yourself ▶
                </button>
              </div>
            </div>
          </div>

          {/* PYTHON & SQL 2-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Python Card */}
            <div className="bg-[#F3ECE7]/50 rounded-3xl p-8 border border-[#e5d6cc] space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-amber-900 bg-amber-100 px-3 py-1 rounded-full">
                  Algorithms & Backend
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-2">Python</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  A popular general-purpose programming language known for clean syntax, readable data manipulation, and scripting.
                </p>
                <pre className="font-mono text-xs text-slate-800 bg-white p-3 rounded-xl border border-slate-200 mt-3 overflow-x-auto">
{`if 5 > 2:
  print("Five is greater than two!")`}
                </pre>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => onSelectLanguage('python')}
                  className="flex-1 py-2.5 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold text-xs rounded-xl"
                >
                  Learn Python
                </button>
                <button
                  onClick={() => onOpenTryitEditor({
                    mode: 'single',
                    language: 'python',
                    single: `print("Hello from DesignArtPro Python Engine!")\n\nfor i in range(1, 6):\n    print(f"Iteration #{i}: Square = {i ** 2}")`
                  })}
                  className="px-4 py-2.5 bg-white text-slate-800 border border-slate-200 font-bold text-xs rounded-xl"
                >
                  Try Python ▶
                </button>
              </div>
            </div>

            {/* SQL Card */}
            <div className="bg-[#96D4D4]/20 rounded-3xl p-8 border border-[#96D4D4] space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-teal-900 bg-teal-100 px-3 py-1 rounded-full">
                  Relational Databases
                </span>
                <h3 className="text-3xl font-black text-slate-900 mt-2">SQL</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  The standard structured query language for relational databases like MySQL, PostgreSQL, and SQL Server.
                </p>
                <pre className="font-mono text-xs text-slate-800 bg-white p-3 rounded-xl border border-slate-200 mt-3 overflow-x-auto">
{`SELECT * FROM Customers
WHERE Country = 'Mexico';`}
                </pre>
              </div>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => onSelectLanguage('sql')}
                  className="flex-1 py-2.5 bg-[#04AA6D] hover:bg-[#059862] text-white font-bold text-xs rounded-xl"
                >
                  Learn SQL
                </button>
                <button
                  onClick={() => onOpenTryitEditor({
                    mode: 'single',
                    language: 'sql',
                    single: `SELECT id, name, role, balance FROM users WHERE balance >= 1000;\n\nSELECT * FROM projects WHERE status = 'Completed';`
                  })}
                  className="px-4 py-2.5 bg-white text-slate-800 border border-slate-200 font-bold text-xs rounded-xl"
                >
                  Try SQL ▶
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. OTHER PROGRAMMING LANGUAGES & FRAMEWORKS GRID */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Popular Technologies & Frameworks
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Select any language or library to access tutorials, code editors, and exercises.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { id: 'react', name: 'React', badge: 'Frontend', color: 'bg-sky-50 text-sky-700 border-sky-200' },
              { id: 'bootstrap', name: 'Bootstrap', badge: 'CSS Framework', color: 'bg-purple-50 text-purple-700 border-purple-200' },
              { id: 'php', name: 'PHP', badge: 'Backend', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
              { id: 'java', name: 'Java', badge: 'Enterprise', color: 'bg-amber-50 text-amber-700 border-amber-200' },
              { id: 'cpp', name: 'C++', badge: 'High Performance', color: 'bg-blue-50 text-blue-700 border-blue-200' },
              { id: 'mysql', name: 'MySQL', badge: 'Database', color: 'bg-teal-50 text-teal-700 border-teal-200' }
            ].map((tech) => (
              <button
                key={tech.id}
                onClick={() => onSelectLanguage(tech.id)}
                className="bg-white p-5 rounded-2xl border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all text-left flex flex-col justify-between group"
              >
                <div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${tech.color}`}>
                    {tech.badge}
                  </span>
                  <h4 className="font-black text-base text-slate-900 mt-2 group-hover:text-purple-600 transition-colors">
                    {tech.name}
                  </h4>
                </div>
                <span className="text-xs text-slate-400 font-semibold flex items-center gap-1 mt-4 group-hover:text-slate-700">
                  Tutorials & Code →
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
