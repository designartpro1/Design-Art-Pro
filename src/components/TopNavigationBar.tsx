import React, { useState } from 'react';
import { Logo } from './Logo';
import { User, UserLearningProgress } from '../types';
import { supportedLanguagesList } from '../data/comprehensiveTutorialsData';
import { 
  Terminal, 
  Search, 
  Moon, 
  Sun, 
  User as UserIcon, 
  LogOut, 
  Menu, 
  X, 
  Sparkles, 
  LayoutDashboard,
  BookOpen,
  ChevronDown,
  Award,
  CheckCircle2,
  Code2
} from 'lucide-react';

interface TopNavigationBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedLanguage: string;
  onSelectLanguage: (lang: string) => void;
  currentUser: User | null;
  userProgress: UserLearningProgress;
  onOpenAuth: () => void;
  onLogout: () => void;
  onSearchTutorials: (query: string) => void;
}

export const TopNavigationBar: React.FC<TopNavigationBarProps> = ({
  activeTab,
  setActiveTab,
  selectedLanguage,
  onSelectLanguage,
  currentUser,
  userProgress,
  onOpenAuth,
  onLogout,
  onSearchTutorials
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [tutorialsDropdownOpen, setTutorialsDropdownOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchTutorials(searchInput.trim());
      setActiveTab('tutorials');
    }
  };

  const handleLanguageClick = (langId: string) => {
    onSelectLanguage(langId);
    setActiveTab('tutorials');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200/90 shadow-xs">
      {/* Primary Navigation Bar */}
      <div className="max-w-[1720px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                setActiveTab('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left focus:outline-none group"
            >
              <Logo size="md" showSubtitle={true} />
            </button>

            {/* Tutorials & Exercises Dropdown */}
            <div className="hidden lg:flex items-center gap-1 text-xs font-bold">
              <div className="relative">
                <button
                  onClick={() => setTutorialsDropdownOpen(!tutorialsDropdownOpen)}
                  className="px-3.5 py-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-purple-600" />
                  <span>Tutorials</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {tutorialsDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-3 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                      Programming Languages:
                    </div>
                    <div className="grid grid-cols-2 gap-1 mt-1">
                      {supportedLanguagesList.slice(0, 10).map((l) => (
                        <button
                          key={l.id}
                          onClick={() => {
                            handleLanguageClick(l.id);
                            setTutorialsDropdownOpen(false);
                          }}
                          className="px-2.5 py-1.5 text-left text-xs font-bold rounded-lg text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center justify-between"
                        >
                          <span>{l.label}</span>
                          <span className="text-[9px] text-purple-500 font-mono">{l.badge}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Exercises / 20 Projects Link */}
              <button
                onClick={() => {
                  setActiveTab('tutorials');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-3.5 py-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center gap-1.5 transition-colors"
              >
                <Code2 className="w-4 h-4 text-emerald-600" />
                <span>20 Projects & Exercises</span>
              </button>

              {/* Direct Code Editor Link */}
              <button
                onClick={() => {
                  setActiveTab('editor');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 transition-all ${
                  activeTab === 'editor'
                    ? 'bg-purple-100 text-purple-800 font-black'
                    : 'text-slate-700 hover:bg-purple-50 hover:text-purple-700'
                }`}
              >
                <Terminal className="w-4 h-4 text-pink-500" />
                <span>Tryit Editor</span>
              </button>
            </div>
          </div>

          {/* Search Bar (Center/Right) */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center flex-1 max-w-xs xl:max-w-md mx-6">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search our tutorials, e.g. HTML, Flexbox, SQL..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
              />
            </div>
          </form>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dashboard Button */}
            <button
              onClick={() => {
                setActiveTab('dashboard');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm font-bold rounded-xl border transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-purple-50 text-purple-700 border-purple-200'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-purple-600" />
              <span className="hidden sm:inline">Dashboard</span>
              {userProgress.completedLessons.length > 0 && (
                <span className="text-[10px] bg-purple-100 text-purple-700 font-bold px-1.5 py-0.2 rounded-full">
                  {userProgress.completedLessons.length}
                </span>
              )}
            </button>

            {/* User Profile or Login */}
            {currentUser ? (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pr-3 rounded-xl border border-slate-200 hover:border-purple-200 bg-white hover:bg-purple-50/40 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="text-left text-xs hidden sm:block">
                    <p className="font-bold text-slate-800 leading-tight truncate max-w-[80px]">
                      {currentUser.name}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-bold leading-tight">
                      {userProgress.streakDays} Day Streak 🔥
                    </p>
                  </div>
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-400">Signed in as</p>
                      <p className="text-sm font-bold text-slate-800 truncate">{currentUser.name}</p>
                      <p className="text-xs text-purple-600 font-medium">{currentUser.email}</p>
                    </div>
                    <div className="p-2 bg-purple-50/50 rounded-xl my-2 text-xs text-purple-900 font-medium space-y-1">
                      <div className="flex justify-between">
                        <span>Completed Lessons:</span>
                        <strong className="text-purple-700">{userProgress.completedLessons.length}</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Studio Balance:</span>
                        <strong className="text-emerald-600">${currentUser.balance.toFixed(2)}</strong>
                      </div>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          setActiveTab('dashboard');
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-lg"
                      >
                        My Learning Dashboard
                      </button>
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg flex items-center gap-1.5"
                      >
                        <LogOut className="w-3.5 h-3.5" />
                        Log Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all"
              >
                Log In / Register
              </button>
            )}

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Secondary Horizontal Navigation Bar (Full Language Strip) */}
      <nav className="bg-slate-900 text-slate-200 border-t border-slate-800 overflow-x-auto scrollbar-none">
        <div className="max-w-[1720px] mx-auto px-4 sm:px-6 flex items-center whitespace-nowrap">
          {supportedLanguagesList.map((lang) => {
            const isSelected = activeTab === 'tutorials' && selectedLanguage.toLowerCase() === lang.id.toLowerCase();
            return (
              <button
                key={lang.id}
                onClick={() => handleLanguageClick(lang.id)}
                className={`px-3.5 sm:px-4 py-2.5 text-xs font-black tracking-wide uppercase transition-colors relative flex items-center gap-1 ${
                  isSelected
                    ? 'bg-emerald-600 text-white shadow-inner'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <span>{lang.label}</span>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white ml-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white p-4 space-y-3 animate-in slide-in-from-top-2">
          <form onSubmit={handleSearchSubmit} className="mb-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tutorials..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
              />
            </div>
          </form>

          <div className="grid grid-cols-2 gap-2 text-xs font-bold">
            <button
              onClick={() => {
                setActiveTab('home');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-slate-50 text-slate-700 rounded-xl text-left"
            >
              Home (Learn to Code)
            </button>
            <button
              onClick={() => {
                setActiveTab('editor');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-purple-50 text-purple-700 rounded-xl text-left font-black"
            >
              Tryit Code Editor
            </button>
            <button
              onClick={() => {
                setActiveTab('dashboard');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-slate-50 text-slate-700 rounded-xl text-left"
            >
              User Dashboard
            </button>
            <button
              onClick={() => {
                setActiveTab('contact');
                setMobileMenuOpen(false);
              }}
              className="p-2.5 bg-slate-50 text-slate-700 rounded-xl text-left"
            >
              Contact Studio
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              Select Language Tutorial:
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {supportedLanguagesList.map((l) => (
                <button
                  key={l.id}
                  onClick={() => {
                    handleLanguageClick(l.id);
                    setMobileMenuOpen(false);
                  }}
                  className="px-2 py-1.5 text-center bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-xs font-bold rounded-lg"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
