import React, { useState } from 'react';
import { websiteProjectsData } from '../data/websiteProjectsData';
import { WebsiteTutorialProject } from '../types';
import { 
  FolderGit2, 
  Play, 
  Eye, 
  Layers, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  Code, 
  ExternalLink,
  ChevronRight,
  Filter,
  X
} from 'lucide-react';

interface WebsiteProjectsSectionProps {
  onOpenProjectInEditor: (project: WebsiteTutorialProject) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const WebsiteProjectsSection: React.FC<WebsiteProjectsSectionProps> = ({
  onOpenProjectInEditor,
  onShowToast
}) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewProject, setPreviewProject] = useState<WebsiteTutorialProject | null>(null);

  const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredProjects = websiteProjectsData.filter((proj) => {
    const matchesDiff = 
      selectedDifficulty === 'All' || 
      proj.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    
    const matchesSearch = 
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesDiff && matchesSearch;
  });

  return (
    <section className="py-12 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-50 via-pink-50 to-sky-50 border border-purple-100 text-purple-700 text-xs font-bold uppercase tracking-wider mb-4">
            <FolderGit2 className="w-4 h-4 text-purple-600" />
            20 Complete Production-Grade Projects
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Complete Website <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Tutorial Projects</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From basic single-page architectures to reactive dashboards, searchable tables, e-commerce checkouts, and full-stack client portals. Every single project has full runnable HTML, CSS, and JavaScript.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-50 p-4 rounded-2xl border border-slate-200/80 mb-10 shadow-xs">
          {/* Difficulty Pills */}
          <div className="flex flex-wrap gap-2">
            {difficulties.map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedDifficulty === diff
                    ? 'bg-purple-600 text-white shadow-sm shadow-purple-500/20'
                    : 'bg-white text-slate-600 hover:text-purple-600 hover:bg-purple-50 border border-slate-200'
                }`}
              >
                {diff === 'All' ? 'All 20 Projects' : `${diff} Level`}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search calculator, dashboard, table, quiz..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Projects Grid (20 Projects) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const isBeginner = project.difficulty === 'Beginner';
            const isIntermediate = project.difficulty === 'Intermediate';
            const badgeColor = isBeginner
              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
              : isIntermediate
              ? 'bg-purple-50 text-purple-700 border-purple-200'
              : 'bg-pink-50 text-pink-700 border-pink-200';

            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl border border-slate-200 hover:border-purple-300 p-6 shadow-xs hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-xl bg-purple-50 text-purple-700 font-black text-xs flex items-center justify-center border border-purple-100">
                      #{project.number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${badgeColor}`}>
                        {project.difficulty}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Title & Preview Badge */}
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.previewBadge && (
                    <div className="mt-1 text-xs font-semibold text-pink-600">
                      {project.previewBadge}
                    </div>
                  )}

                  <p className="text-xs text-slate-500 mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Bullets */}
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                    {project.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setPreviewProject(project);
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 border border-slate-200"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Quick Preview
                  </button>
                  <button
                    onClick={() => {
                      onOpenProjectInEditor(project);
                      onShowToast('Project Loaded', `"${project.title}" loaded in workspace. Click Run Code ▶ to execute!`, 'success');
                    }}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-95 text-white text-xs font-bold transition-all shadow-sm shadow-purple-500/20 flex items-center justify-center gap-1.5"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    Open in Editor
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-slate-50 rounded-3xl border border-slate-200 max-w-md mx-auto my-8">
            <FolderGit2 className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="font-bold text-slate-800">No projects found</h3>
            <p className="text-xs text-slate-500 mt-1">Try searching for other project categories or keywords.</p>
            <button
              onClick={() => { setSelectedDifficulty('All'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-xl"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Quick Preview Modal */}
      {previewProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col">
            {/* Modal Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-xl bg-purple-600 text-white text-xs font-bold flex items-center justify-center">
                  #{previewProject.number}
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    {previewProject.title}
                  </h3>
                  <span className="text-xs text-purple-600 font-semibold">
                    {previewProject.category} • {previewProject.difficulty}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const target = previewProject;
                    setPreviewProject(null);
                    onOpenProjectInEditor(target);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  Open in Workspace ▶
                </button>
                <button
                  onClick={() => setPreviewProject(null)}
                  className="p-1.5 rounded-xl hover:bg-slate-200 text-slate-500"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Running iFrame Preview */}
            <div className="p-6 overflow-y-auto flex-1 bg-slate-100/50">
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm">
                <iframe
                  title={`Live-Preview-${previewProject.title}`}
                  srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>${previewProject.files.css || ''}</style></head><body>${previewProject.files.html}<script>${previewProject.files.js || ''}</script></body></html>`}
                  sandbox="allow-scripts"
                  className="w-full min-h-[380px] border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
