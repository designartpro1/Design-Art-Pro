import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  Sparkles, 
  Palette, 
  Code2, 
  Terminal, 
  CheckCircle2, 
  Flame, 
  Zap, 
  ShieldCheck, 
  Play, 
  Layers
} from 'lucide-react';

interface HeroProps {
  onExploreCoding: () => void;
  onRunYourCode: () => void;
  onGraphicDesigning: () => void;
  onViewPortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCoding,
  onRunYourCode,
  onGraphicDesigning,
  onViewPortfolio
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'design' | 'code'>('design');
  const [demoCodeCounter, setDemoCodeCounter] = useState(42);

  const handleTestInteractive = () => {
    setDemoCodeCounter((prev) => prev + 1);
  };

  return (
    <section className="relative overflow-hidden pt-6 pb-20 lg:pt-12 lg:pb-32 bg-white bg-grid-pattern">
      {/* Animated ambient background with elegant visual effects */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-200/40 via-pink-200/30 to-sky-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-40 right-[-10%] w-[450px] h-[450px] bg-gradient-to-bl from-sky-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-float-reverse" />
      <div className="absolute top-96 left-[-10%] w-[400px] h-[400px] bg-gradient-to-tr from-pink-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top welcome status badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200/70 shadow-sm text-xs font-semibold text-slate-700 hover:border-purple-300 transition-all">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600" />
            </span>
            <span>Welcome to DesignArtPro</span>
            <span className="text-slate-300">•</span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
              Professional Graphic Designing & Coding Studio
            </span>
          </div>
        </div>

        {/* Main Hero Header */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          {/* Logo prominently displayed */}
          <div className="flex items-center justify-center mb-6">
            <Logo size="xl" showSubtitle={false} className="justify-center" />
          </div>

          {/* Hero Welcome Message: Professional Graphic Designing & Coding Studio */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Professional <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">Graphic Designing</span>{' '}
            <span className="text-slate-800">&</span>{' '}
            <span className="bg-gradient-to-r from-sky-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">Coding Studio</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            A unified creative powerhouse: craft pixel-perfect branding, logos, and UI/UX design, or write, run, and execute multi-language code directly in your browser.
          </p>

          {/* Action CTA Buttons (Explore Coding, Run Your Code, Graphic Designing, View Portfolio) */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={onExploreCoding}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 hover:from-purple-700 hover:to-pink-600 shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <Code2 className="w-5 h-5 text-purple-200 group-hover:rotate-12 transition-transform" />
              <span>Explore Coding</span>
              <ArrowRight className="w-4 h-4 ml-0.5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onRunYourCode}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Run Your Code</span>
            </button>

            <button
              onClick={onGraphicDesigning}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-800 bg-white border border-purple-200/80 hover:bg-purple-50/50 shadow-sm hover:shadow-md hover:border-purple-300 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Palette className="w-5 h-5 text-pink-500" />
              <span>Graphic Designing</span>
            </button>

            <button
              onClick={onViewPortfolio}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Layers className="w-5 h-5 text-sky-500" />
              <span>View Portfolio</span>
            </button>
          </div>
        </div>

        {/* Interactive Dual-Mode Showcase Card */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="bg-white/95 rounded-3xl border border-slate-200 shadow-2xl shadow-purple-500/10 overflow-hidden backdrop-blur-xl">
            {/* Showcase Header & Tab Switcher */}
            <div className="px-6 py-4 bg-slate-50/80 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-400" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-xs font-mono font-semibold text-slate-500">
                  designartpro.studio // dynamic preview
                </span>
              </div>

              {/* Mode Toggle */}
              <div className="flex items-center p-1 bg-slate-200/70 rounded-xl">
                <button
                  onClick={() => setActiveHeroTab('design')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeHeroTab === 'design'
                      ? 'bg-white text-purple-700 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Palette className="w-3.5 h-3.5 text-purple-600" />
                  <span>Graphic Design Studio</span>
                </button>
                <button
                  onClick={() => setActiveHeroTab('code')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeHeroTab === 'code'
                      ? 'bg-white text-pink-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-pink-600" />
                  <span>Creative Coding Lab</span>
                </button>
              </div>
            </div>

            {/* Showcase Content */}
            <div className="p-6 sm:p-8">
              {activeHeroTab === 'design' ? (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-7 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                      <Sparkles className="w-3.5 h-3.5" />
                      12 High-Impact Design Disciplines
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                      Pixel-Perfect Artistry Engineered For Commercial Dominance
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Every logo, brand book, social carousel, and packaging die-line is crafted with vector precision, commercial licensing, and complete source files (AI, PSD, SVG, Figma, PDF).
                    </p>

                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Vector Precision (AI & SVG)</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>300 DPI CMYK Print-Ready</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Complete Copyright Rights</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>Fast 2-4 Day Delivery</span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={onGraphicDesigning}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-lg shadow-sm transition-all"
                      >
                        Browse 12 Services
                      </button>
                      <button
                        onClick={onGraphicDesigning}
                        className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all"
                      >
                        Request Quote
                      </button>
                    </div>
                  </div>

                  {/* Visual Graphic Design Mockup Card */}
                  <div className="md:col-span-5 relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                      <img
                        src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80"
                        alt="DesignArtPro Brand Mockup"
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-5 text-white">
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-pink-500/90 w-fit mb-1">
                          Featured Branding Suite
                        </span>
                        <h4 className="text-base font-bold">Solstice Artisan Roasters</h4>
                        <p className="text-xs text-slate-300">Identity Guidelines & Packaging</p>
                      </div>
                    </div>
                    {/* Floating Color Palette Badge */}
                    <div className="absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-purple-100 shadow-lg flex items-center gap-3">
                      <div className="flex -space-x-1.5">
                        <span className="w-5 h-5 rounded-full bg-purple-600 border-2 border-white" />
                        <span className="w-5 h-5 rounded-full bg-pink-500 border-2 border-white" />
                        <span className="w-5 h-5 rounded-full bg-sky-400 border-2 border-white" />
                      </div>
                      <div className="text-[11px] leading-tight font-bold text-slate-800">
                        DesignArtPro Palette
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-50 text-pink-700 text-xs font-bold border border-pink-200">
                      <Terminal className="w-3.5 h-3.5" />
                      15 Modern Web & Systems Technologies
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                      Modern Full-Stack Code & High-Octane Performance
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      From HTML5/CSS3/JavaScript web components to Python pipelines, PHP/MySQL databases, and C++/Java systems. Test our live interactive sandbox below.
                    </p>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                        <span>Live Dynamic Reactive Counter</span>
                        <span className="text-purple-600">State: Synchronized</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={handleTestInteractive}
                          className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-lg text-xs font-bold shadow-sm hover:opacity-95 active:scale-95 transition-all flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5 fill-current" />
                          Execute Test Code ({demoCodeCounter})
                        </button>
                        <span className="text-xs text-slate-500">
                          Click to increment virtual event loop
                        </span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={onRunYourCode}
                        className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2"
                      >
                        <Terminal className="w-4 h-4 text-sky-400" />
                        Launch Online Code Editor & Workspace
                      </button>
                    </div>
                  </div>

                  {/* Code Snippet Box */}
                  <div className="md:col-span-6">
                    <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 text-slate-100 font-mono text-xs shadow-2xl relative">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                        <span>app/studio_engine.ts</span>
                        <span className="text-emerald-400">● Live Sandbox</span>
                      </div>
                      <pre className="mt-3 leading-relaxed text-slate-300 overflow-x-auto">
                        <code>{`// DesignArtPro Creative Code Architecture
export const studioConfig = {
  name: "DesignArtPro",
  specialties: ["Graphic Design", "Creative Coding"],
  languages: 15,
  interactiveEditor: true,
  currentSparks: `}<span className="text-pink-400 font-bold">{demoCodeCounter}</span>{`,
  contact: {
    whatsapp: "03440 665 646",
    email: "designartpro1@gmail.com"
  }
};`}</code>
                      </pre>
                      <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Zap className="w-3 h-3" /> TypeScript 5.8 Engine
                        </span>
                        <span className="text-purple-400">Latency: 4ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Live Studio Trust Metric Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              500+
            </p>
            <p className="text-xs font-bold text-slate-800 mt-1">Projects Delivered</p>
            <p className="text-[11px] text-slate-500">Logos, web apps & graphics</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              99.8%
            </p>
            <p className="text-xs font-bold text-slate-800 mt-1">Client Satisfaction</p>
            <p className="text-[11px] text-slate-500">Verified 5-star ratings</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-sky-500 to-purple-600 bg-clip-text text-transparent">
              15+
            </p>
            <p className="text-xs font-bold text-slate-800 mt-1">Coding Stacks</p>
            <p className="text-[11px] text-slate-500">From HTML5 to C++ & Python</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center">
            <p className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              24/7
            </p>
            <p className="text-xs font-bold text-slate-800 mt-1">Direct Support</p>
            <p className="text-[11px] text-slate-500">WhatsApp & Email responsive</p>
          </div>
        </div>
      </div>
    </section>
  );
};
