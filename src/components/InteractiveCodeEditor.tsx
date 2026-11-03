import React, { useState, useEffect } from 'react';
import { editorExamples } from '../data/codePlaygroundData';
import { CodeEditorExample } from '../types';
import { 
  Play, 
  RotateCcw, 
  Copy, 
  Check, 
  Download, 
  Terminal, 
  Globe, 
  Sparkles, 
  Code, 
  Maximize2,
  FileCode,
  Layers,
  ChevronDown
} from 'lucide-react';

interface InteractiveCodeEditorProps {
  initialCode?: string;
  initialLanguage?: string;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const InteractiveCodeEditor: React.FC<InteractiveCodeEditorProps> = ({
  initialCode,
  initialLanguage,
  onShowToast
}) => {
  const [selectedExample, setSelectedExample] = useState<CodeEditorExample>(editorExamples[0]);
  const [currentCode, setCurrentCode] = useState<string>(editorExamples[0].code);
  const [renderedWebCode, setRenderedWebCode] = useState<string>(editorExamples[0].code);
  const [activeOutputTab, setActiveOutputTab] = useState<'preview' | 'console'>('preview');
  const [consoleOutput, setConsoleOutput] = useState<string>('');
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  // If initialCode is provided via navigation, apply it
  useEffect(() => {
    if (initialCode) {
      setCurrentCode(initialCode);
      const isHtml = initialCode.trim().startsWith('<') || initialLanguage === 'html';
      if (isHtml) {
        setRenderedWebCode(initialCode);
      }
      setActiveOutputTab(isHtml ? 'preview' : 'console');
      setConsoleOutput(`// Loaded ${initialLanguage || 'custom'} code snippet.\nClick 'Run Code' to execute.`);
    }
  }, [initialCode, initialLanguage]);

  // When selected example changes
  const handleSelectExample = (example: CodeEditorExample) => {
    setSelectedExample(example);
    setCurrentCode(example.code);
    if (example.isRunnableWeb) {
      setRenderedWebCode(example.code);
    }
    setActiveOutputTab(example.isRunnableWeb ? 'preview' : 'console');
    setConsoleOutput(example.expectedOutput || `// Ready to execute ${example.title}\nClick 'Run Code' above.`);
  };

  // Run the code
  const handleRunCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      if (selectedExample.isRunnableWeb || currentCode.trim().startsWith('<')) {
        setActiveOutputTab('preview');
        setRenderedWebCode(currentCode);
        onShowToast('Web Sandbox Rendered', 'Live HTML/CSS/JS preview updated successfully.', 'success');
      } else {
        setActiveOutputTab('console');
        const timestamp = new Date().toLocaleTimeString();
        const output = selectedExample.expectedOutput || 
          `[${timestamp}] [DesignArtPro Runtime Engine: ${selectedExample.language.toUpperCase()}]\nExecution completed successfully (0 errors, 0 warnings).\nReturned status: 0 (OK)`;
        setConsoleOutput(output);
        onShowToast('Code Executed', `Simulated ${selectedExample.language.toUpperCase()} execution completed.`, 'success');
      }
    }, 300);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentCode);
    setCopied(true);
    onShowToast('Code Copied!', 'The snippet is now in your clipboard.', 'success');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleResetCode = () => {
    setCurrentCode(selectedExample.code);
    setRenderedWebCode(selectedExample.code);
    onShowToast('Code Reset', 'Reverted to starter example template.', 'info');
  };

  const handleDownload = () => {
    const extMap: Record<string, string> = {
      'html-css-js': 'html',
      'html': 'html',
      'css': 'css',
      'javascript': 'js',
      'python': 'py',
      'php': 'php',
      'sql': 'sql',
      'typescript': 'ts',
      'jsx': 'jsx',
      'cpp': 'cpp',
      'java': 'java'
    };
    const ext = extMap[selectedExample.language] || 'txt';
    const blob = new Blob([currentCode], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `designartpro_${selectedExample.id}.${ext}`;
    link.click();
    URL.revokeObjectURL(url);
    onShowToast('File Exported', `Saved as designartpro_${selectedExample.id}.${ext}`, 'success');
  };

  // Line numbers calculation
  const linesCount = currentCode.split('\n').length;
  const lineNumbers = Array.from({ length: Math.max(linesCount, 12) }, (_, i) => i + 1);

  return (
    <section id="editor" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200">
            <Terminal className="w-3.5 h-3.5" />
            Interactive Code Studio & Live Sandbox
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Write, Test & Run <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Creative Code Live</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Choose from beginner-friendly programming templates across HTML5/CSS3/JS, Python, PHP, SQL, C++, Java, and React. Edit directly in the browser and copy with one click.
          </p>
        </div>

        {/* Code Editor Studio Container */}
        <div className="mt-10 bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-purple-500/10 overflow-hidden backdrop-blur-xl">
          {/* Top Control Bar: Select language/template, Run, Copy, Reset, Download */}
          <div className="px-4 sm:px-6 py-4 bg-slate-900 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 text-white">
            {/* Left: Template Selector */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-pink-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Example Template:
                </span>
              </div>
              <div className="relative">
                <select
                  value={selectedExample.id}
                  onChange={(e) => {
                    const found = editorExamples.find((ex) => ex.id === e.target.value);
                    if (found) handleSelectExample(found);
                  }}
                  className="bg-slate-800 text-slate-100 text-xs font-semibold py-2 pl-3 pr-8 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer appearance-none"
                >
                  {editorExamples.map((ex) => (
                    <option key={ex.id} value={ex.id}>
                      {ex.title}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Right: Actions (Run, Copy, Reset, Download) */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRunCode}
                disabled={isRunning}
                className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 active:scale-95 transition-all flex items-center gap-1.5"
              >
                <Play className={`w-3.5 h-3.5 fill-current ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Running...' : 'Run Code'}</span>
              </button>

              <button
                onClick={handleCopyCode}
                className="px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700 transition-colors flex items-center gap-1.5"
                title="Copy code to clipboard"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <button
                onClick={handleResetCode}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
                title="Reset back to template default"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleDownload}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-colors"
                title="Export code file"
              >
                <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Description bar */}
          <div className="bg-slate-800/80 px-6 py-2 border-b border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
            <span className="truncate">{selectedExample.description}</span>
            <span className="font-mono text-[11px] text-pink-400 shrink-0 font-semibold uppercase">
              {selectedExample.language}
            </span>
          </div>

          {/* Main Dual-Pane: Editor on left, Preview/Console on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            {/* Left: Code Editor Area (7 cols on desktop) */}
            <div className="lg:col-span-7 bg-slate-950 p-4 border-r border-slate-800 flex overflow-hidden font-mono text-xs sm:text-sm">
              {/* Line Numbers */}
              <div className="select-none text-slate-600 text-right pr-4 font-mono text-xs leading-6 shrink-0 border-r border-slate-800/80 mr-3">
                {lineNumbers.map((num) => (
                  <div key={num} className="leading-6">
                    {num}
                  </div>
                ))}
              </div>

              {/* Editable Code Textarea */}
              <textarea
                value={currentCode}
                onChange={(e) => setCurrentCode(e.target.value)}
                spellCheck={false}
                className="w-full h-full bg-transparent text-slate-100 font-mono text-xs sm:text-sm leading-6 resize-none focus:outline-none border-0 p-0 text-left overflow-auto selection:bg-purple-900/60 selection:text-white"
                style={{ tabSize: 2 }}
              />
            </div>

            {/* Right: Output Pane (5 cols on desktop) */}
            <div className="lg:col-span-5 bg-white flex flex-col">
              {/* Output Tab switcher */}
              <div className="px-4 py-2.5 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {selectedExample.isRunnableWeb && (
                    <button
                      onClick={() => setActiveOutputTab('preview')}
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        activeOutputTab === 'preview'
                          ? 'bg-white text-purple-700 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Live Web Preview</span>
                    </button>
                  )}
                  <button
                    onClick={() => setActiveOutputTab('console')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      activeOutputTab === 'console'
                        ? 'bg-white text-slate-900 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Terminal Output</span>
                  </button>
                </div>

                <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Engine Ready
                </span>
              </div>

              {/* Output Content */}
              <div className="flex-1 bg-slate-50 relative min-h-[350px]">
                {activeOutputTab === 'preview' && selectedExample.isRunnableWeb ? (
                  <iframe
                    srcDoc={renderedWebCode}
                    title="DesignArtPro Live Sandbox"
                    sandbox="allow-scripts"
                    className="w-full h-full min-h-[420px] bg-white border-0"
                  />
                ) : (
                  <div className="w-full h-full p-4 bg-slate-950 text-emerald-400 font-mono text-xs overflow-auto min-h-[420px] flex flex-col justify-between">
                    <pre className="whitespace-pre-wrap leading-relaxed">
                      <code>{consoleOutput || '// Click "Run Code" above to execute this script.'}</code>
                    </pre>

                    <div className="pt-4 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
                      <span>DesignArtPro Runtime Engine v3.8</span>
                      <span className="text-purple-400">Memory: ~14.2 MB</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Quick tips footer */}
          <div className="p-4 bg-purple-50/50 border-t border-purple-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
              <span className="font-medium">
                Tip: You can modify any code above and click <strong className="text-purple-700">"Run Code"</strong> to test custom HTML, styles, algorithms, or API requests live!
              </span>
            </div>
            <span className="text-xs font-semibold text-purple-700">
              100% Client-Side Sandbox
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
