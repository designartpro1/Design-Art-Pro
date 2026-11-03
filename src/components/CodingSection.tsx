import React, { useState } from 'react';
import { codingTechnologies } from '../data/codingData';
import { CodingTech, TechCategory } from '../types';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Copy, 
  ExternalLink, 
  BookOpen, 
  X, 
  Play,
  Flame,
  Search
} from 'lucide-react';

interface CodingSectionProps {
  onOpenInEditor: (codeSnippet: string, language: string) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const CodingSection: React.FC<CodingSectionProps> = ({
  onOpenInEditor,
  onShowToast
}) => {
  const [selectedTech, setSelectedTech] = useState<CodingTech | null>(null);
  const [activeCategory, setActiveCategory] = useState<'All' | TechCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  const categories: Array<'All' | TechCategory> = [
    'All',
    'Frontend',
    'Backend',
    'Database',
    'Systems & Mobile',
    'DevOps & Tools'
  ];

  const filteredTech = codingTechnologies.filter((tech) => {
    const matchesCategory = activeCategory === 'All' || tech.category === activeCategory;
    const matchesSearch = 
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tech.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    onShowToast('Code Copied!', 'Snippet copied to your clipboard.', 'success');
    setTimeout(() => {
      setCopiedCodeId(null);
    }, 2000);
  };

  const getDifficultyBadge = (level: 'Beginner' | 'Intermediate' | 'Advanced') => {
    const styles = {
      Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
      Advanced: 'bg-purple-50 text-purple-700 border-purple-200'
    };
    return (
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${styles[level]}`}>
        {level}
      </span>
    );
  };

  return (
    <section id="coding" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-sky-700 text-xs font-bold border border-sky-200">
            <Code2 className="w-3.5 h-3.5 text-sky-600" />
            Complete Coding Section (15 Popular Technologies)
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Mastery Across <span className="bg-gradient-to-r from-sky-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">Every Layer of Code</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From modern responsive frontend frameworks to high-throughput backend APIs, relational databases, and low-level algorithmic systems.
          </p>
        </div>

        {/* Categories Bar & Search Filter */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-purple-700 shadow-sm border border-purple-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            />
          </div>
        </div>

        {/* 15 Technologies Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTech.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Tech Card Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl p-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        {tech.name}
                      </h3>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {tech.category}
                      </span>
                    </div>
                  </div>
                  {getDifficultyBadge(tech.difficulty)}
                </div>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {tech.shortDesc}
                </p>

                {/* Key features pill list */}
                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                  {tech.keyFeatures.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedTech(tech)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                  <span>Inspect Code</span>
                </button>
                <button
                  onClick={() => onOpenInEditor(tech.codeSample.code, tech.codeSample.language)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 transition-all flex items-center justify-center gap-1.5"
                  title="Load into Interactive Code Editor"
                >
                  <Terminal className="w-3.5 h-3.5 text-purple-600" />
                  <span>Test Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Deep Tech View & Code Preview */}
        {selectedTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="text-4xl p-2 rounded-2xl bg-purple-50 border border-purple-100">
                    {selectedTech.icon}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-2xl font-extrabold text-slate-900">
                        {selectedTech.name}
                      </h3>
                      {getDifficultyBadge(selectedTech.difficulty)}
                    </div>
                    <p className="text-xs font-semibold text-purple-600">
                      Category: {selectedTech.category}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedTech(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Architectural Overview
                  </h4>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {selectedTech.overview}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Capabilities
                  </h4>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedTech.keyFeatures.map((f, i) => (
                      <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0 mt-1.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Sample */}
                <div>
                  <div className="flex items-center justify-between pb-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Sample Code: {selectedTech.codeSample.title}
                    </h4>
                    <button
                      onClick={() => handleCopyCode(selectedTech.codeSample.code, selectedTech.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-800 transition-colors"
                    >
                      {copiedCodeId === selectedTech.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-600">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Code</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="rounded-2xl bg-slate-950 p-4 border border-slate-800 text-slate-200 font-mono text-xs overflow-x-auto shadow-inner">
                    <pre>
                      <code>{selectedTech.codeSample.code}</code>
                    </pre>
                  </div>
                  <p className="mt-2 text-xs text-slate-500 italic">
                    💡 {selectedTech.codeSample.explanation}
                  </p>
                </div>

                {/* Footer action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                  <button
                    onClick={() => {
                      const sample = selectedTech.codeSample;
                      setSelectedTech(null);
                      onOpenInEditor(sample.code, sample.language);
                    }}
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center gap-2"
                  >
                    <Terminal className="w-4 h-4" />
                    <span>Open in Interactive Editor</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
