import React, { useState } from 'react';
import { codingTutorials } from '../data/tutorialsData';
import { TutorialExample } from '../types';
import { 
  BookOpen, 
  Play, 
  Terminal, 
  Sparkles, 
  Check, 
  Copy, 
  ArrowRight, 
  Code2, 
  Search,
  Layers,
  ChevronRight
} from 'lucide-react';

interface CodingTutorialsSectionProps {
  onTryCode: (example: TutorialExample) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const CodingTutorialsSection: React.FC<CodingTutorialsSectionProps> = ({
  onTryCode,
  onShowToast
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['All', 'Fundamentals', 'Logic & Flow', 'Modular Code', 'Data Structures', 'Web Development', 'Databases', 'Backend Architecture'];

  const filteredTutorials = codingTutorials.filter((tut) => {
    const matchesCategory = activeCategory === 'All' || tut.category === activeCategory;
    const matchesSearch = 
      tut.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tut.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tut.language.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    onShowToast('Tutorial Code Copied', 'Example code copied to clipboard.', 'success');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="tutorials" className="py-16 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200">
            <BookOpen className="w-3.5 h-3.5" />
            Beginner-Friendly Coding Tutorials (13 Examples)
          </div>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Learn By <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Running Real Code</span>
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every lesson includes runnable starter code. Click <strong>"Try Code"</strong> to open it directly inside the DesignArtPro online code editor!
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
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
              placeholder="Search tutorials..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutorials.map((tut) => (
            <div
              key={tut.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-xl hover:border-purple-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                    {tut.category}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded">
                    {tut.language}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mt-3 group-hover:text-purple-700 transition-colors">
                  {tut.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {tut.description}
                </p>

                {/* Code Preview snippet */}
                <div className="mt-4 rounded-xl bg-slate-950 p-3 text-slate-300 font-mono text-[11px] overflow-hidden max-h-24 relative border border-slate-800">
                  <pre className="overflow-x-auto">
                    <code>{tut.code.slice(0, 160)}...</code>
                  </pre>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Action Buttons: Try Code & Copy */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleCopy(tut.code, tut.id)}
                  className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                  title="Copy snippet"
                >
                  {copiedId === tut.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>

                {/* Try Code Button (Required) */}
                <button
                  onClick={() => onTryCode(tut)}
                  className="flex-1 py-2 px-3 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 hover:from-purple-700 text-white rounded-xl text-xs font-extrabold shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 transition-all group-hover:scale-[1.02]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try Code in Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
