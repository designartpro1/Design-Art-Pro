import React, { useState } from 'react';
import { cssCurriculumData } from '../data/cssCurriculumData';
import { CurriculumTopic } from '../types';
import { 
  Palette, 
  Play, 
  Copy, 
  Check, 
  Sparkles, 
  Search, 
  Layers, 
  Eye, 
  CheckCircle2, 
  ArrowRight,
  Sliders
} from 'lucide-react';

interface CssCurriculumSectionProps {
  onTryCode: (topic: CurriculumTopic) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const CssCurriculumSection: React.FC<CssCurriculumSectionProps> = ({
  onTryCode,
  onShowToast
}) => {
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(cssCurriculumData[0]?.id || null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const tiers = ['All', 'Basic', 'Intermediate', 'Advanced'];

  const filteredTopics = cssCurriculumData.filter((topic) => {
    const matchesTier = 
      selectedTier === 'All' || 
      topic.tier.toLowerCase() === selectedTier.toLowerCase();
    
    const matchesSearch = 
      topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (topic.code.css && topic.code.css.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTier && matchesSearch;
  });

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    onShowToast('CSS Copied', 'Styles copied to your clipboard.', 'success');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Palette className="w-4 h-4 text-pink-600" />
            CSS3 Mastery: Styling, Layouts & Animations
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Modern CSS <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-sky-500 bg-clip-text text-transparent">Architecture</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Master the CSS Box Model, Flexbox, responsive CSS Grid, keyframe animations, navigation dropdowns, and custom CSS variables (:root). Test every layout live.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50 p-3 sm:p-4 rounded-2xl border border-slate-200/80 mb-8 shadow-xs">
          {/* Tier Pills */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tiers.map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedTier === tier
                    ? 'bg-pink-600 text-white shadow-sm shadow-pink-500/20'
                    : 'bg-white text-slate-600 hover:text-pink-600 hover:bg-pink-50 border border-slate-200'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search flexbox, grid, animations, root..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500"
            />
          </div>
        </div>

        {/* Curriculum Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Topic list */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
              CSS Modules ({filteredTopics.length})
            </div>

            <div className="space-y-2.5 max-h-[820px] overflow-y-auto pr-1">
              {filteredTopics.map((topic) => {
                const isSelected = expandedTopicId === topic.id;
                return (
                  <div
                    key={topic.id}
                    onClick={() => setExpandedTopicId(topic.id)}
                    className={`cursor-pointer p-4 rounded-2xl border transition-all text-left group ${
                      isSelected
                        ? 'bg-pink-50/50 border-pink-300 ring-2 ring-pink-500/10 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-pink-200 hover:bg-slate-50/80'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center ${
                          isSelected ? 'bg-pink-600 text-white' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {topic.number}
                        </span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                          {topic.tier}
                        </span>
                      </div>
                      <span className="text-xs text-pink-600 font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        Inspect
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>

                    <h3 className="font-bold text-sm sm:text-base text-slate-900 line-clamp-1">
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {topic.description}
                    </p>
                  </div>
                );
              })}

              {filteredTopics.length === 0 && (
                <div className="p-8 text-center bg-slate-50 rounded-2xl border border-slate-200">
                  <p className="text-sm font-semibold text-slate-600">No CSS lessons match your search criteria.</p>
                  <button 
                    onClick={() => { setSelectedTier('All'); setSearchQuery(''); }}
                    className="mt-3 text-xs font-bold text-pink-600 underline"
                  >
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right: Detailed Topic Inspector & Live Preview */}
          <div className="lg:col-span-7 sticky top-24">
            {(() => {
              const activeTopic = cssCurriculumData.find((t) => t.id === expandedTopicId) || filteredTopics[0] || cssCurriculumData[0];
              if (!activeTopic) return null;

              return (
                <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-pink-500/5 overflow-hidden">
                  {/* Card Header */}
                  <div className="p-6 bg-gradient-to-r from-pink-50/60 via-purple-50/30 to-sky-50/40 border-b border-slate-100">
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-lg bg-pink-600 text-white text-xs font-black">
                          Module #{activeTopic.number}
                        </span>
                        <span className="px-2.5 py-1 rounded-lg bg-purple-100 text-purple-700 text-xs font-bold">
                          {activeTopic.tier} CSS
                        </span>
                      </div>
                      <button
                        onClick={() => onTryCode(activeTopic)}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-bold hover:shadow-lg hover:shadow-pink-500/25 active:scale-95 transition-all"
                      >
                        <Play className="w-3.5 h-3.5 fill-white" />
                        Try in Code Editor ▶
                      </button>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                      {activeTopic.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {activeTopic.description}
                    </p>
                  </div>

                  {/* Key Concepts */}
                  {activeTopic.keyConcepts && (
                    <div className="px-6 py-4 bg-slate-50/60 border-b border-slate-100">
                      <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Key CSS Rules & Properties:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {activeTopic.keyConcepts.map((concept, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 mt-0.5 shrink-0" />
                            <span>{concept}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Code Snippet Box */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                        <Sliders className="w-4 h-4 text-pink-600" />
                        CSS Stylesheet Rules
                      </span>
                      <button
                        onClick={() => handleCopyCode(activeTopic.id, activeTopic.code.css || '')}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-pink-50 text-slate-600 hover:text-pink-600 text-xs font-semibold transition-colors"
                      >
                        {copiedId === activeTopic.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy CSS</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="relative rounded-2xl bg-slate-900 text-slate-100 p-4 font-mono text-xs overflow-x-auto max-h-64 border border-slate-800 shadow-inner">
                      <pre className="whitespace-pre">{activeTopic.code.css || '/* Standard CSS */'}</pre>
                    </div>

                    {/* Live Preview Container */}
                    <div className="pt-2">
                      <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-purple-500" />
                        Live Styled Preview
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-white p-4 overflow-hidden shadow-xs">
                        <iframe
                          title={`Preview-CSS-${activeTopic.title}`}
                          srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>${activeTopic.code.css || ''}</style></head><body>${activeTopic.code.html}<script>${activeTopic.code.js || ''}</script></body></html>`}
                          sandbox="allow-scripts"
                          className="w-full min-h-[190px] max-h-[280px] border-0 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Practice challenge if available */}
                    {activeTopic.practiceChallenge && (
                      <div className="p-3.5 rounded-xl bg-pink-50/70 border border-pink-100 flex items-start gap-2.5">
                        <Sparkles className="w-4 h-4 text-pink-600 mt-0.5 shrink-0" />
                        <div>
                          <span className="text-xs font-bold text-pink-900">Styling Challenge: </span>
                          <span className="text-xs text-pink-800">{activeTopic.practiceChallenge}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
};
