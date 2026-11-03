import React, { useState } from 'react';
import { Logo } from './Logo';
import { User } from '../types';
import { 
  Palette, 
  Code2, 
  Terminal, 
  Briefcase, 
  PhoneCall, 
  LayoutDashboard, 
  User as UserIcon, 
  LogOut, 
  Menu, 
  X, 
  Sparkles,
  MessageCircle,
  BookOpen
} from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onStartProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  currentUser,
  onOpenAuth,
  onLogout,
  onStartProject
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'html', label: 'HTML', badge: '50' },
    { id: 'css', label: 'CSS', badge: '35' },
    { id: 'javascript', label: 'JavaScript', badge: 'ES6+' },
    { id: 'editor', label: 'Coding Editor', icon: Terminal, highlight: true },
    { id: 'tutorials', label: 'Tutorials', badge: '20', icon: BookOpen },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: PhoneCall },
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* Top micro bar for quick business contact */}
      <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-sky-50 border-b border-purple-100/60 px-4 py-1 text-xs text-slate-600 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-purple-700 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Studio Status: Accepting New Projects
          </span>
          <span className="hidden sm:inline text-slate-400">|</span>
          <span className="hidden sm:inline text-slate-500">
            Professional Graphic Designing & Creative Coding
          </span>
        </div>
        <div className="flex items-center gap-4 font-medium">
          <a
            href="https://wa.me/923440665646"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span className="font-semibold">WhatsApp: 03440 665 646</span>
          </a>
          <span className="hidden md:inline text-slate-400">|</span>
          <a
            href="mailto:designartpro1@gmail.com"
            className="hidden md:inline text-slate-600 hover:text-purple-600 transition-colors"
          >
            designartpro1@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="group text-left focus:outline-none"
            aria-label="DesignArtPro Home"
          >
            <Logo size="md" showSubtitle={true} />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-2xl border border-slate-200/70 shadow-xs">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-white text-purple-700 shadow-sm shadow-purple-500/10 border border-purple-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  {Icon && (
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-600' : 'text-slate-400'}`} />
                  )}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                      isActive ? 'bg-purple-100 text-purple-700' : 'bg-slate-200/80 text-slate-600'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                  {item.highlight && (
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping absolute top-2 right-1.5" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Dashboard Link / Button */}
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 text-sm font-semibold rounded-xl border transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-purple-50 text-purple-700 border-purple-200 shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
            >
              <LayoutDashboard className="w-4 h-4 text-purple-600" />
              <span>Dashboard</span>
              {currentUser && (
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
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
                  <div className="text-left text-xs">
                    <p className="font-bold text-slate-800 leading-tight truncate max-w-[80px]">
                      {currentUser.name}
                    </p>
                    <p className="text-[10px] text-emerald-600 font-semibold leading-tight">
                      ${currentUser.balance.toFixed(2)}
                    </p>
                  </div>
                </button>

                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-3 py-2 border-b border-slate-100">
                      <p className="text-xs font-semibold text-slate-400">Signed in as</p>
                      <p className="text-sm font-bold text-slate-800 truncate">{currentUser.name}</p>
                      <p className="text-xs text-purple-600 font-medium">{currentUser.email}</p>
                    </div>
                    <div className="py-1">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          handleNavClick('dashboard');
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-purple-50 hover:text-purple-700 rounded-lg text-left"
                      >
                        <LayoutDashboard className="w-3.5 h-3.5 text-purple-600" />
                        Client Projects & Balances
                      </button>
                    </div>
                    <div className="pt-1 border-t border-slate-100">
                      <button
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          onLogout();
                        }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-lg text-left"
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
                className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-purple-600 hover:bg-purple-50/60 rounded-xl transition-colors"
              >
                <UserIcon className="w-4 h-4" />
                <span>Log In</span>
              </button>
            )}

            {/* Start a Project Primary CTA */}
            <button
              onClick={onStartProject}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 hover:from-purple-700 hover:via-pink-600 hover:to-sky-600 rounded-xl shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Start a Project</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onStartProject}
              className="px-3 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg shadow-xs"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 p-3 rounded-xl text-sm font-semibold text-left transition-all ${
                    isActive
                      ? 'bg-purple-50 text-purple-700 border border-purple-200'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-purple-600 shrink-0" />}
                  <span className="truncate">{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] ml-auto font-bold px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-2 border-t border-slate-100 space-y-2">
            <button
              onClick={() => handleNavClick('dashboard')}
              className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold ${
                activeTab === 'dashboard'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-purple-50/70 text-purple-700 hover:bg-purple-100'
              }`}
            >
              <span className="flex items-center gap-2">
                <LayoutDashboard className="w-4 h-4" />
                Customer Dashboard & Projects
              </span>
              {currentUser && <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">${currentUser.balance.toFixed(2)}</span>}
            </button>

            {currentUser ? (
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div>
                  <p className="text-xs text-slate-400">Logged in as</p>
                  <p className="text-sm font-bold text-slate-800">{currentUser.name}</p>
                </div>
                <button
                  onClick={onLogout}
                  className="px-3 py-1.5 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full py-2.5 text-center text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl"
              >
                Log In / Create Account
              </button>
            )}

            <div className="pt-2 flex flex-col gap-2 text-xs">
              <a
                href="https://wa.me/923440665646"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2 bg-emerald-50 text-emerald-700 rounded-xl font-bold border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp: 03440 665 646
              </a>
              <a
                href="mailto:designartpro1@gmail.com"
                className="flex items-center justify-center gap-2 py-2 bg-slate-100 text-slate-700 rounded-xl font-medium"
              >
                Email: designartpro1@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
