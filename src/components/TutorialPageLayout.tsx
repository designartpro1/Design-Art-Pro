import React, { useState } from 'react';
import { TutorialLesson, UserLearningProgress } from '../types';
import { comprehensiveTutorials, supportedLanguagesList } from '../data/comprehensiveTutorialsData';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Bookmark, 
  CheckCircle2, 
  Check, 
  Sparkles, 
  Copy, 
  Eye, 
  Code2, 
  HelpCircle,
  Menu,
  X,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface TutorialPageLayoutProps {
  currentLanguage: string;
  onSelectLanguage: (lang: string) => void;
  onOpenTryitEditor: (codeData: { html?: string; css?: string; js?: string; single?: string; language?: string; mode: 'web' | 'single' }) => void;
  userProgress: UserLearningProgress;
  onToggleCompleteLesson: (lessonId: string) => void;
  onToggleBookmarkLesson: (lessonId: string) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const TutorialPageLayout: React.FC<TutorialPageLayoutProps> = ({
  currentLanguage,
  onSelectLanguage,
  onOpenTryitEditor,
  userProgress,
  onToggleCompleteLesson,
  onToggleBookmarkLesson,
  onShowToast
}) => {
  // Lessons matching the current language (or fallback to HTML)
  const languageLessons = comprehensiveTutorials.filter(
    (t) => t.language.toLowerCase() === currentLanguage.toLowerCase()
  );
  const activeList = languageLessons.length > 0 
    ? languageLessons 
    : comprehensiveTutorials.filter(t => t.language === 'html');

  const [activeLessonId, setActiveLessonId] = useState<string>(activeList[0]?.id || 'html-home');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [selectedExerciseOption, setSelectedExerciseOption] = useState<number | null>(null);
  const [exerciseSubmitted, setExerciseSubmitted] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Active Lesson Object
  const currentLessonIndex = activeList.findIndex((l) => l.id === activeLessonId);
  const currentLesson = activeList[currentLessonIndex >= 0 ? currentLessonIndex : 0];

  const hasPrevious = currentLessonIndex > 0;
  const hasNext = currentLessonIndex < activeList.length - 1;

  const goToPrevious = () => {
    if (hasPrevious) {
      setActiveLessonId(activeList[currentLessonIndex - 1].id);
      setSelectedExerciseOption(null);
      setExerciseSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (hasNext) {
      setActiveLessonId(activeList[currentLessonIndex + 1].id);
      setSelectedExerciseOption(null);
      setExerciseSubmitted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isCompleted = userProgress.completedLessons.includes(currentLesson.id);
  const isBookmarked = userProgress.bookmarkedLessons.includes(currentLesson.id);

  const handleCompleteToggle = () => {
    onToggleCompleteLesson(currentLesson.id);
    if (!isCompleted) {
      confetti({ particleCount: 40, spread: 50, origin: { y: 0.6 } });
      onShowToast('Lesson Completed! 🎉', `Great job! Added to your learning progress.`, 'success');
    }
  };

  const handleCopyCode = () => {
    const text = currentLesson.code.mode === 'web'
      ? `${currentLesson.code.html || ''}\n\n<style>\n${currentLesson.code.css || ''}\n</style>\n\n<script>\n${currentLesson.code.js || ''}\n</script>`
      : (currentLesson.code.single || '');
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    onShowToast('Code Copied', 'Example code copied to clipboard.', 'success');
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1720px] mx-auto flex flex-col lg:flex-row">
        {/* MOBILE SIDEBAR TOGGLE BUTTON */}
        <div className="lg:hidden p-3 bg-slate-100 border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-700"
          >
            <Menu className="w-4 h-4 text-purple-600" />
            <span>{currentLesson.section} Menu ({activeList.length})</span>
          </button>
          <span className="text-xs font-bold text-purple-700 uppercase">
            {currentLanguage.toUpperCase()}
          </span>
        </div>

        {/* 1. LEFT VERTICAL NAVIGATION SIDEBAR */}
        <aside
          className={`lg:w-64 xl:w-72 shrink-0 border-r border-slate-200 bg-slate-50/70 p-4 lg:min-h-[calc(100vh-120px)] ${
            mobileSidebarOpen ? 'block' : 'hidden lg:block'
          }`}
        >
          {/* Language Selector in Sidebar */}
          <div className="mb-4 pb-4 border-b border-slate-200">
            <label className="block text-[11px] font-black uppercase text-slate-400 tracking-wider mb-2">
              Select Tutorial Track:
            </label>
            <select
              value={currentLanguage.toLowerCase()}
              onChange={(e) => {
                onSelectLanguage(e.target.value);
                const nextList = comprehensiveTutorials.filter(t => t.language === e.target.value);
                if (nextList.length > 0) setActiveLessonId(nextList[0].id);
              }}
              className="w-full bg-white border border-slate-200 text-slate-800 text-xs font-bold py-2 px-3 rounded-xl focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              {supportedLanguagesList.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.label} Tutorial ({lang.badge})
                </option>
              ))}
            </select>
          </div>

          {/* Section Heading */}
          <div className="text-xs font-black uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center justify-between">
            <span>{currentLanguage.toUpperCase()} Topics</span>
            <span className="text-[10px] bg-slate-200 text-slate-600 px-1.5 py-0.2 rounded-full">
              {activeList.length}
            </span>
          </div>

          {/* Lessons Vertical List */}
          <div className="space-y-1 max-h-[720px] overflow-y-auto pr-1">
            {activeList.map((lesson, idx) => {
              const isSelected = lesson.id === activeLessonId;
              const completed = userProgress.completedLessons.includes(lesson.id);

              return (
                <button
                  key={lesson.id}
                  onClick={() => {
                    setActiveLessonId(lesson.id);
                    setSelectedExerciseOption(null);
                    setExerciseSubmitted(false);
                    setMobileSidebarOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#04AA6D] text-white shadow-sm'
                      : 'text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                  }`}
                >
                  <span className="truncate">{lesson.title}</span>
                  <div className="flex items-center gap-1.5 shrink-0 ml-1">
                    {completed && (
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* 2. MAIN TUTORIAL CONTENT AREA */}
        <main className="flex-1 p-4 sm:p-8 lg:p-12 max-w-4xl">
          {/* Breadcrumbs */}
          <div className="text-xs text-slate-500 font-semibold mb-4 flex items-center gap-1.5">
            <span>Tutorials</span>
            <span>&gt;</span>
            <span className="uppercase font-bold text-slate-700">{currentLesson.language}</span>
            <span>&gt;</span>
            <span className="text-purple-600 font-bold">{currentLesson.title}</span>
          </div>

          {/* Lesson Title */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {currentLesson.title}
            </h1>

            {/* Actions: Bookmark & Mark as Completed */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onToggleBookmarkLesson(currentLesson.id)}
                className={`p-2 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-colors ${
                  isBookmarked
                    ? 'bg-amber-50 text-amber-700 border-amber-300'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
                title="Bookmark this lesson"
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Bookmark'}</span>
              </button>

              <button
                onClick={handleCompleteToggle}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 border transition-all ${
                  isCompleted
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-600 fill-emerald-100' : 'text-slate-400'}`} />
                <span>{isCompleted ? 'Completed ✅' : 'Mark as Completed'}</span>
              </button>
            </div>
          </div>

          {/* Top Pagination Buttons (< Previous / Next >) */}
          <div className="flex items-center justify-between my-6 py-2">
            <button
              onClick={goToPrevious}
              disabled={!hasPrevious}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                hasPrevious
                  ? 'bg-[#04AA6D] hover:bg-[#059862] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>&lt; Previous</span>
            </button>

            <button
              onClick={goToNext}
              disabled={!hasNext}
              className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                hasNext
                  ? 'bg-[#04AA6D] hover:bg-[#059862] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Next &gt;</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Lesson Content Body */}
          <div className="prose prose-slate max-w-none space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p className="text-base sm:text-lg font-medium text-slate-900">
              {currentLesson.description}
            </p>

            {currentLesson.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Key Specifications Callout */}
          {currentLesson.keyPoints && currentLesson.keyPoints.length > 0 && (
            <div className="my-8 p-5 bg-purple-50/60 rounded-2xl border border-purple-200/80">
              <h4 className="text-xs font-black uppercase text-purple-900 tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600" />
                Key Concepts to Remember:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-purple-950 font-medium pl-4 list-disc">
                {currentLesson.keyPoints.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Code Example Card */}
          <div className="my-8 bg-slate-50 rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-3">
              <span className="text-xs font-bold text-slate-800 flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-purple-600" />
                Example:
              </span>
              <button
                onClick={handleCopyCode}
                className="text-xs text-slate-500 hover:text-purple-600 font-bold flex items-center gap-1"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>

            {/* Snippet Code Container */}
            <div className="bg-white rounded-2xl p-4 font-mono text-xs text-slate-900 border border-slate-200 overflow-x-auto shadow-inner leading-relaxed">
              <pre className="whitespace-pre">
                {currentLesson.code.mode === 'web' 
                  ? currentLesson.code.html 
                  : (currentLesson.code.single || '')}
              </pre>
            </div>

            {/* Embedded Live Output Preview */}
            <div className="mt-4 pt-4 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-sky-500" />
                Live Result:
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs">
                {currentLesson.code.mode === 'web' ? (
                  <iframe
                    title={`Live-Preview-${currentLesson.title}`}
                    srcDoc={`<!DOCTYPE html><html><head><meta charset="utf-8"><style>${currentLesson.code.css || 'body { font-family: system-ui, sans-serif; padding: 12px; margin: 0; }'}</style></head><body>${currentLesson.code.html}<script>${currentLesson.code.js || ''}</script></body></html>`}
                    sandbox="allow-scripts"
                    className="w-full min-h-[140px] max-h-[220px] border-0"
                  />
                ) : (
                  <div className="p-4 font-mono text-xs text-slate-700 bg-slate-900 text-emerald-400">
                    // Ready to execute in isolated sandbox. Click "Try it Yourself ▶" to run.
                  </div>
                )}
              </div>
            </div>

            {/* Green "Try it Yourself ▶" Button */}
            <button
              onClick={() => onOpenTryitEditor(currentLesson.code)}
              className="mt-4 px-6 py-3 bg-[#04AA6D] hover:bg-[#059862] text-white font-black text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20 cursor-pointer"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Try it Yourself ▶</span>
            </button>
          </div>

          {/* Practice Exercise Card */}
          {currentLesson.exercise && (
            <div className="my-8 p-6 bg-slate-50 rounded-3xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-2 text-slate-800">
                <HelpCircle className="w-5 h-5 text-amber-500" />
                <h4 className="font-bold text-sm sm:text-base">Test Yourself With Exercise</h4>
              </div>

              <p className="text-xs sm:text-sm text-slate-700 font-semibold">
                {currentLesson.exercise.question}
              </p>

              <div className="space-y-2">
                {currentLesson.exercise.options.map((opt, idx) => {
                  const isSelected = selectedExerciseOption === idx;
                  const isCorrect = idx === currentLesson.exercise!.correctIndex;
                  const showResult = exerciseSubmitted;

                  return (
                    <label
                      key={idx}
                      className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all ${
                        showResult && isCorrect
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold'
                          : showResult && isSelected && !isCorrect
                          ? 'bg-rose-50 border-rose-300 text-rose-800'
                          : isSelected
                          ? 'bg-purple-50 border-purple-400 text-purple-900'
                          : 'bg-white border-slate-200 hover:bg-slate-100/60'
                      }`}
                    >
                      <input
                        type="radio"
                        name="exercise-opt"
                        checked={isSelected}
                        onChange={() => {
                          setSelectedExerciseOption(idx);
                          setExerciseSubmitted(false);
                        }}
                        className="text-purple-600 focus:ring-purple-500"
                      />
                      <span>{opt}</span>
                    </label>
                  );
                })}
              </div>

              {/* Submit & Check Answer */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setExerciseSubmitted(true)}
                  disabled={selectedExerciseOption === null}
                  className="px-5 py-2.5 bg-[#04AA6D] hover:bg-[#059862] disabled:opacity-50 text-white font-bold text-xs rounded-xl transition-all"
                >
                  Check Answer
                </button>

                {exerciseSubmitted && (
                  <span className={`text-xs font-bold ${
                    selectedExerciseOption === currentLesson.exercise.correctIndex
                      ? 'text-emerald-600'
                      : 'text-rose-600'
                  }`}>
                    {selectedExerciseOption === currentLesson.exercise.correctIndex
                      ? 'Correct! Well done! 🎉'
                      : 'Not quite. Check the explanation below!'}
                  </span>
                )}
              </div>

              {exerciseSubmitted && (
                <p className="text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200 mt-2">
                  💡 <strong>Explanation:</strong> {currentLesson.exercise.explanation}
                </p>
              )}
            </div>
          )}

          {/* Bottom Pagination Buttons */}
          <div className="flex items-center justify-between my-8 pt-6 border-t border-slate-100">
            <button
              onClick={goToPrevious}
              disabled={!hasPrevious}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                hasPrevious
                  ? 'bg-[#04AA6D] hover:bg-[#059862] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>&lt; Previous</span>
            </button>

            <button
              onClick={goToNext}
              disabled={!hasNext}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                hasNext
                  ? 'bg-[#04AA6D] hover:bg-[#059862] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Next &gt;</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};
