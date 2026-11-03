import React, { useState, useEffect } from 'react';
import { 
  User, 
  ClientProject, 
  PortfolioItem, 
  GraphicService, 
  SavedCodingProject, 
  TutorialExample,
  CurriculumTopic,
  WebsiteTutorialProject,
  UserLearningProgress
} from './types';
import { initialPortfolioItems } from './data/portfolioData';
import { servicesData } from './data/servicesData';
import { TopNavigationBar } from './components/TopNavigationBar';
import { LearningHomePage } from './components/LearningHomePage';
import { TutorialPageLayout } from './components/TutorialPageLayout';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CodingSection } from './components/CodingSection';
import { OnlineCodeWorkspace } from './components/OnlineCodeWorkspace';
import { CodingTutorialsSection } from './components/CodingTutorialsSection';
import { HtmlCurriculumSection } from './components/HtmlCurriculumSection';
import { CssCurriculumSection } from './components/CssCurriculumSection';
import { JsCurriculumSection } from './components/JsCurriculumSection';
import { WebsiteProjectsSection } from './components/WebsiteProjectsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { Dashboard } from './components/Dashboard';
import { ContactSection } from './components/ContactSection';
import { AuthModal } from './components/AuthModal';
import { ProjectOrderModal } from './components/ProjectOrderModal';
import { Footer } from './components/Footer';
import { ToastContainer, ToastMessage } from './components/Toast';
import { MessageCircle, Sparkles } from 'lucide-react';

const LOCAL_STORAGE_USER_KEY = 'designartpro_current_user_v1';
const LOCAL_STORAGE_PROJECTS_KEY = 'designartpro_projects_v1';
const LOCAL_STORAGE_PORTFOLIO_KEY = 'designartpro_portfolio_v1';
const LOCAL_STORAGE_CODING_PROJECTS_KEY = 'designartpro_saved_coding_projects_v1';
const LOCAL_STORAGE_PROGRESS_KEY = 'designartpro_user_progress_v2';

const initialProgress: UserLearningProgress = {
  completedLessons: ['html-home', 'html-intro'],
  bookmarkedLessons: ['html-forms', 'css-flexbox'],
  streakDays: 5,
  totalPoints: 140,
  lastActiveDate: new Date().toISOString().split('T')[0],
  languageProgress: {
    html: 45,
    css: 30,
    javascript: 25,
    sql: 15,
    python: 20
  }
};

const defaultDemoUser: User = {
  id: 'usr_alex_smith',
  name: 'Alex Smith',
  email: 'alex.smith@designartpro.com',
  phone: '03440 665 646',
  company: 'Apex Media Corp',
  role: 'client',
  balance: 1450.00,
  joinedDate: 'May 2026'
};

const initialClientProjects: ClientProject[] = [
  {
    id: 'proj_01',
    title: 'Apex Dynamics Vector Emblem',
    serviceCategory: 'Logo Designing',
    status: 'Completed',
    budget: 149.00,
    deadline: '2026-10-18',
    progressPercentage: 100,
    description: 'Vector emblem concepts with monochrome variations and 3D mockups.',
    createdAt: '2026-10-10'
  },
  {
    id: 'proj_02',
    title: 'Solstice Roasters Complete Branding Book',
    serviceCategory: 'Branding & Brand Identity',
    status: 'In Progress',
    budget: 399.00,
    deadline: '2026-11-04',
    progressPercentage: 65,
    description: 'Corporate brand book including typography palettes, merchandise, and retail packaging die-lines.',
    createdAt: '2026-10-22'
  },
  {
    id: 'proj_03',
    title: 'Pulse Financial SaaS Dashboard Interface',
    serviceCategory: 'UI/UX Design',
    status: 'In Review',
    budget: 349.00,
    deadline: '2026-10-31',
    progressPercentage: 85,
    description: 'Interactive clickable Figma prototype for fintech analytics dashboard.',
    createdAt: '2026-10-15'
  }
];

const initialSavedCodingProjects: SavedCodingProject[] = [
  {
    id: 'code_proj_1',
    title: 'Interactive Studio Card UI',
    language: 'web',
    folder: 'Web Apps',
    mode: 'web',
    updatedAt: '2026-10-28',
    createdAt: '2026-10-25',
    files: [
      {
        id: 'f1',
        name: 'index.html',
        language: 'html',
        isMain: true,
        content: `<!-- 🎨 DesignArtPro Web Component -->\n<div class="studio-card">\n  <span class="badge">🎨 DesignArtPro</span>\n  <h1>Creative Coding & Web UI</h1>\n  <p>Write HTML, CSS, and JS simultaneously with live preview.</p>\n  <button id="counterBtn" class="action-btn">Click Me: 0 Sparks ✨</button>\n</div>`
      },
      {
        id: 'f2',
        name: 'style.css',
        language: 'css',
        content: `body { margin: 0; min-height: 100vh; display: flex; justify-content: center; align-items: center; background: #faf5ff; font-family: system-ui, sans-serif; }\n.studio-card { background: white; padding: 32px; border-radius: 20px; border: 1px solid #e2e8f0; text-align: center; max-width: 380px; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.15); }\n.badge { display: inline-block; padding: 4px 12px; background: #f3e8ff; color: #7c3aed; font-size: 11px; font-weight: 700; border-radius: 999px; margin-bottom: 12px; }\n.action-btn { background: linear-gradient(135deg, #9333ea, #ec4899); color: white; border: none; padding: 10px 20px; border-radius: 10px; font-weight: bold; cursor: pointer; }`
      },
      {
        id: 'f3',
        name: 'script.js',
        language: 'javascript',
        content: `let sparks = 0;\nconst btn = document.getElementById('counterBtn');\nif (btn) {\n  btn.addEventListener('click', () => {\n    sparks++;\n    btn.textContent = 'Sparks Generated: ' + sparks + ' ✨';\n    console.log('Sparks generated:', sparks);\n  });\n}`
      }
    ]
  },
  {
    id: 'code_proj_2',
    title: 'Python Studio Estimator',
    language: 'python',
    folder: 'Algorithms',
    mode: 'single',
    updatedAt: '2026-10-29',
    createdAt: '2026-10-27',
    files: [
      {
        id: 'f4',
        name: 'estimator.py',
        language: 'python',
        isMain: true,
        content: `# DesignArtPro - Python Studio Estimator\ndef calculate_quote(service_name: str, tier: str = "Standard") -> dict:\n    rates = {\n        "Logo Design": 149,\n        "Branding Suite": 399,\n        "UI/UX Design": 349,\n        "Full Web App": 599\n    }\n    base = rates.get(service_name, 199)\n    print(f"Service: {service_name} | Base Rate: \${base}")\n    return {"studio": "DesignArtPro", "service": service_name, "estimate": base}\n\ncalculate_quote("Logo Design")`
      }
    ]
  },
  {
    id: 'code_proj_3',
    title: 'SQL Clients & Revenue Query',
    language: 'sql',
    folder: 'Database',
    mode: 'single',
    updatedAt: '2026-10-29',
    createdAt: '2026-10-28',
    files: [
      {
        id: 'f5',
        name: 'query.sql',
        language: 'sql',
        isMain: true,
        content: `-- DesignArtPro Relational SQL\nSELECT id, name, role, balance FROM users WHERE balance >= 1000 ORDER BY balance DESC;\n\nSELECT id, title, category, status, budget FROM projects WHERE status = 'Completed';`
      }
    ]
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
      return stored ? JSON.parse(stored) : defaultDemoUser;
    } catch {
      return defaultDemoUser;
    }
  });

  const [clientProjects, setClientProjects] = useState<ClientProject[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY);
      return stored ? JSON.parse(stored) : initialClientProjects;
    } catch {
      return initialClientProjects;
    }
  });

  const [savedCodingProjects, setSavedCodingProjects] = useState<SavedCodingProject[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_CODING_PROJECTS_KEY);
      return stored ? JSON.parse(stored) : initialSavedCodingProjects;
    } catch {
      return initialSavedCodingProjects;
    }
  });

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_PORTFOLIO_KEY);
      return stored ? JSON.parse(stored) : initialPortfolioItems;
    } catch {
      return initialPortfolioItems;
    }
  });

  // Modal States
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedServiceForOrder, setSelectedServiceForOrder] = useState<GraphicService | null>(null);
  const [preselectedContactService, setPreselectedContactService] = useState<string>('Logo Designing');

  // Preloaded code for Workspace
  const [workspaceInitialCode, setWorkspaceInitialCode] = useState<string | undefined>(undefined);
  const [workspaceInitialLang, setWorkspaceInitialLang] = useState<string | undefined>('javascript');
  const [workspaceMultiWeb, setWorkspaceMultiWeb] = useState<{ html: string; css: string; js: string } | undefined>(undefined);

  // Learning & Language State
  const [selectedLanguage, setSelectedLanguage] = useState<string>('html');
  const [userProgress, setUserProgress] = useState<UserLearningProgress>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_PROGRESS_KEY);
      return stored ? JSON.parse(stored) : initialProgress;
    } catch {
      return initialProgress;
    }
  });

  // Toast Notifications
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (title: string, message?: string, type: 'success' | 'error' | 'info' = 'info') => {
    const id = `toast_${Date.now()}_${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync to LocalStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(LOCAL_STORAGE_USER_KEY, JSON.stringify(currentUser));
    } else {
      localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
    }
  }, [currentUser]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PROGRESS_KEY, JSON.stringify(userProgress));
  }, [userProgress]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PROJECTS_KEY, JSON.stringify(clientProjects));
  }, [clientProjects]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_CODING_PROJECTS_KEY, JSON.stringify(savedCodingProjects));
  }, [savedCodingProjects]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_PORTFOLIO_KEY, JSON.stringify(portfolioItems));
  }, [portfolioItems]);

  // Auth Handlers
  const handleLoginSuccess = (user: User) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showToast('Signed Out', 'You have been signed out of DesignArtPro.', 'info');
  };

  // Project Handlers (Design Orders)
  const handleAddProject = (newProjectData: Omit<ClientProject, 'id' | 'createdAt'>) => {
    const newProject: ClientProject = {
      ...newProjectData,
      id: `proj_${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0]
    };
    setClientProjects((prev) => [newProject, ...prev]);
  };

  const handleUpdateProject = (updated: ClientProject) => {
    setClientProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const handleDeleteProject = (projectId: string) => {
    setClientProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  // Coding Projects Handlers
  const handleSaveCodingProject = (project: SavedCodingProject) => {
    setSavedCodingProjects((prev) => {
      const existing = prev.findIndex(p => p.id === project.id);
      if (existing >= 0) {
        const copy = [...prev];
        copy[existing] = project;
        return copy;
      }
      return [project, ...prev];
    });
  };

  const handleDeleteCodingProject = (projectId: string) => {
    setSavedCodingProjects((prev) => prev.filter(p => p.id !== projectId));
    showToast('Project Removed', 'Coding project deleted from your dashboard.', 'info');
  };

  const handleOpenCodingProjectFromDash = (proj: SavedCodingProject) => {
    if (proj.mode === 'web') {
      const htmlF = proj.files.find(f => f.name.endsWith('.html'))?.content || '';
      const cssF = proj.files.find(f => f.name.endsWith('.css'))?.content || '';
      const jsF = proj.files.find(f => f.name.endsWith('.js'))?.content || '';
      setWorkspaceMultiWeb({ html: htmlF, css: cssF, js: jsF });
      setWorkspaceInitialLang('web');
      setWorkspaceInitialCode(undefined);
    } else {
      setWorkspaceInitialLang(proj.language);
      setWorkspaceInitialCode(proj.files[0]?.content || '');
      setWorkspaceMultiWeb(undefined);
    }
    setActiveTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Project Opened', `Loaded "${proj.title}" in workspace.`, 'success');
  };

  // Tutorial "Try Code" Handler
  const handleTryTutorialCode = (tut: TutorialExample) => {
    if (tut.mode === 'web') {
      setWorkspaceMultiWeb({
        html: tut.code,
        css: '',
        js: ''
      });
      setWorkspaceInitialLang('web');
      setWorkspaceInitialCode(undefined);
    } else {
      setWorkspaceInitialLang(tut.language);
      setWorkspaceInitialCode(tut.code);
      setWorkspaceMultiWeb(undefined);
    }
    setActiveTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Loaded Tutorial Code', `Ready to run "${tut.title}" in workspace!`, 'success');
  };

  // Curriculum Topic "Try Code" Handler
  const handleTryCurriculumTopic = (topic: CurriculumTopic) => {
    setWorkspaceMultiWeb({
      html: topic.code.html || '',
      css: topic.code.css || '',
      js: topic.code.js || ''
    });
    setWorkspaceInitialLang('web');
    setWorkspaceInitialCode(undefined);
    setActiveTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Lesson Loaded in Editor', `"${topic.title}" loaded! Click Run Code ▶ to execute.`, 'success');
  };

  // 20 Website Tutorial Project "Open in Editor" Handler
  const handleOpenWebsiteProject = (project: WebsiteTutorialProject) => {
    setWorkspaceMultiWeb({
      html: project.files.html,
      css: project.files.css || '',
      js: project.files.js || ''
    });
    setWorkspaceInitialLang('web');
    setWorkspaceInitialCode(undefined);
    setActiveTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Project Loaded in Editor', `Loaded "${project.title}"! Click Run Code ▶ to inspect.`, 'success');
  };

  // Portfolio Publishing
  const handlePublishPortfolioItem = (newItem: PortfolioItem) => {
    setPortfolioItems((prev) => [newItem, ...prev]);
  };

  // Service Order Navigation
  const handleSelectServiceForOrder = (service: GraphicService) => {
    setSelectedServiceForOrder(service);
    setIsOrderModalOpen(true);
  };

  // Tutorial Navigation & Learning Handlers
  const handleSelectLanguage = (lang: string) => {
    setSelectedLanguage(lang.toLowerCase());
    setActiveTab('tutorials');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchTutorials = (query: string) => {
    const q = query.toLowerCase().trim();
    const matched = ['html', 'css', 'javascript', 'sql', 'python', 'java', 'php', 'c', 'cpp', 'csharp', 'react', 'bootstrap', 'w3css', 'mysql', 'aws'].find(l => q.includes(l));
    if (matched) {
      setSelectedLanguage(matched);
    }
    setActiveTab('tutorials');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Searching Tutorials', `Showing results for "${query}"`, 'info');
  };

  const handleToggleCompleteLesson = (lessonId: string) => {
    setUserProgress((prev) => {
      const isCompleted = prev.completedLessons.includes(lessonId);
      const newCompleted = isCompleted
        ? prev.completedLessons.filter((id) => id !== lessonId)
        : [...prev.completedLessons, lessonId];
      const newPoints = isCompleted ? Math.max(0, prev.totalPoints - 25) : prev.totalPoints + 25;
      
      const langPrefix = lessonId.split('-')[0] || 'html';
      const langCount = newCompleted.filter((id) => id.startsWith(langPrefix)).length;
      const estimatedTotal = 15;
      const newPct = Math.min(100, Math.round((langCount / estimatedTotal) * 100));

      return {
        ...prev,
        completedLessons: newCompleted,
        totalPoints: newPoints,
        languageProgress: {
          ...prev.languageProgress,
          [langPrefix]: newPct
        }
      };
    });
    showToast('Progress Updated', 'Lesson status and XP saved!', 'success');
  };

  const handleToggleBookmarkLesson = (lessonId: string) => {
    setUserProgress((prev) => {
      const isBookmarked = prev.bookmarkedLessons.includes(lessonId);
      const newBookmarks = isBookmarked
        ? prev.bookmarkedLessons.filter((id) => id !== lessonId)
        : [...prev.bookmarkedLessons, lessonId];
      return {
        ...prev,
        bookmarkedLessons: newBookmarks
      };
    });
    showToast('Bookmark Saved', 'Tutorial bookmark status updated.', 'info');
  };

  const handleOpenTryitEditorFromLesson = (codeData: {
    html?: string;
    css?: string;
    js?: string;
    single?: string;
    language?: string;
    mode: 'web' | 'single';
  }) => {
    if (codeData.mode === 'web') {
      setWorkspaceMultiWeb({
        html: codeData.html || '',
        css: codeData.css || '',
        js: codeData.js || ''
      });
      setWorkspaceInitialLang('web');
      setWorkspaceInitialCode(undefined);
    } else {
      setWorkspaceInitialLang(codeData.language || 'python');
      setWorkspaceInitialCode(codeData.single || '');
      setWorkspaceMultiWeb(undefined);
    }
    setActiveTab('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Loaded in Editor', 'Ready to edit and run live code!', 'success');
  };

  const handleOpenContactWithService = (serviceName: string) => {
    setPreselectedContactService(serviceName);
    setActiveTab('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleStartSimilarProject = (category: string) => {
    const matchedService = servicesData.find((s) => s.title.includes(category)) || servicesData[0];
    setSelectedServiceForOrder(matchedService);
    setIsOrderModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-purple-100 selection:text-purple-900">
      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Global Navigation Bar */}
      <TopNavigationBar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedLanguage={selectedLanguage}
        onSelectLanguage={handleSelectLanguage}
        currentUser={currentUser}
        userProgress={userProgress}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        onSearchTutorials={handleSearchTutorials}
      />

      {/* Main Page View Switcher */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <>
            {/* 1. Learn to Code Home Section with Hero Search & Account Card */}
            <LearningHomePage
              currentUser={currentUser}
              userProgress={userProgress}
              onSelectLanguage={handleSelectLanguage}
              onOpenTryitEditor={handleOpenTryitEditorFromLesson}
              onOpenAuth={() => setIsAuthModalOpen(true)}
              onNavigateToDashboard={() => {
                setActiveTab('dashboard');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSearchTutorials={handleSearchTutorials}
            />

            {/* In-Home Online Code Workspace with Run Code Button */}
            <OnlineCodeWorkspace
              initialLanguage={workspaceInitialLang}
              initialCode={workspaceInitialCode}
              initialMultiWeb={workspaceMultiWeb}
              savedProjects={savedCodingProjects}
              onSaveProject={handleSaveCodingProject}
              onShowToast={showToast}
            />

            {/* In-Home Coding Tutorials (13 Beginner Examples) */}
            <CodingTutorialsSection
              onTryCode={handleTryTutorialCode}
              onShowToast={showToast}
            />

            {/* In-Home 12 Graphic Designing Services */}
            <ServicesSection
              onSelectServiceForOrder={handleSelectServiceForOrder}
              onOpenContactWithService={handleOpenContactWithService}
            />

            {/* In-Home Programming Languages (15 Tech Stacks) */}
            <CodingSection
              onOpenInEditor={(code, lang) => {
                setWorkspaceInitialCode(code);
                setWorkspaceInitialLang(lang);
                setActiveTab('editor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showToast('Snippet Loaded', `Ready to test ${lang.toUpperCase()} in workspace.`, 'success');
              }}
              onShowToast={showToast}
            />

            {/* In-Home Curated Portfolio */}
            <PortfolioSection
              portfolioItems={portfolioItems}
              onStartSimilarProject={handleStartSimilarProject}
            />

            {/* In-Home Contact Section with WhatsApp & Email Enquiry */}
            <ContactSection
              preselectedService={preselectedContactService}
              onShowToast={showToast}
            />
          </>
        )}

        {/* Tab: HTML Curriculum (Basic to Advanced) */}
        {activeTab === 'html' && (
          <div className="py-2">
            <HtmlCurriculumSection
              onTryCode={handleTryCurriculumTopic}
              onShowToast={showToast}
            />
          </div>
        )}

        {/* Tab: CSS Curriculum (Layouts, Grid, Animations, Variables) */}
        {activeTab === 'css' && (
          <div className="py-2">
            <CssCurriculumSection
              onTryCode={handleTryCurriculumTopic}
              onShowToast={showToast}
            />
          </div>
        )}

        {/* Tab: JavaScript Curriculum (ES6+, DOM, LocalStorage, Async) */}
        {activeTab === 'javascript' && (
          <div className="py-2">
            <JsCurriculumSection
              onTryCode={handleTryCurriculumTopic}
              onShowToast={showToast}
            />
          </div>
        )}

        {/* Tab: Online Code Workspace (Editor, Run Code, Live Output) */}
        {activeTab === 'editor' && (
          <div className="py-4">
            <OnlineCodeWorkspace
              initialLanguage={workspaceInitialLang}
              initialCode={workspaceInitialCode}
              initialMultiWeb={workspaceMultiWeb}
              savedProjects={savedCodingProjects}
              onSaveProject={handleSaveCodingProject}
              onShowToast={showToast}
            />
          </div>
        )}

        {/* Tab: Comprehensive Coding Tutorials & Lessons with Left-Side Vertical Sidebar */}
        {activeTab === 'tutorials' && (
          <div className="py-2 space-y-12">
            <TutorialPageLayout
              currentLanguage={selectedLanguage}
              onSelectLanguage={handleSelectLanguage}
              onOpenTryitEditor={handleOpenTryitEditorFromLesson}
              userProgress={userProgress}
              onToggleCompleteLesson={handleToggleCompleteLesson}
              onToggleBookmarkLesson={handleToggleBookmarkLesson}
              onShowToast={showToast}
            />

            <div className="border-t border-slate-200 pt-12 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
              <WebsiteProjectsSection
                onOpenProjectInEditor={handleOpenWebsiteProject}
                onShowToast={showToast}
              />
              <div className="border-t border-slate-200 pt-8">
                <CodingTutorialsSection
                  onTryCode={handleTryTutorialCode}
                  onShowToast={showToast}
                />
              </div>
            </div>
          </div>
        )}

        {/* Tab: Projects & Portfolio */}
        {activeTab === 'projects' && (
          <div className="py-2 space-y-12">
            <PortfolioSection
              portfolioItems={portfolioItems}
              onStartSimilarProject={handleStartSimilarProject}
            />
            <div className="border-t border-slate-200 pt-8">
              <ServicesSection
                onSelectServiceForOrder={handleSelectServiceForOrder}
                onOpenContactWithService={handleOpenContactWithService}
              />
            </div>
          </div>
        )}

        {/* Tab: 12 Graphic Designing Services */}
        {activeTab === 'services' && (
          <div className="py-4">
            <ServicesSection
              onSelectServiceForOrder={handleSelectServiceForOrder}
              onOpenContactWithService={handleOpenContactWithService}
            />
          </div>
        )}

        {/* Tab: Programming Languages (15 Tech Stacks) */}
        {activeTab === 'coding' && (
          <div className="py-4">
            <CodingSection
              onOpenInEditor={(code, lang) => {
                setWorkspaceInitialCode(code);
                setWorkspaceInitialLang(lang);
                setActiveTab('editor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                showToast('Snippet Loaded', `Ready to test ${lang.toUpperCase()} in workspace.`, 'success');
              }}
              onShowToast={showToast}
            />
          </div>
        )}

        {/* Tab: Portfolio */}
        {activeTab === 'portfolio' && (
          <div className="py-4">
            <PortfolioSection
              portfolioItems={portfolioItems}
              onStartSimilarProject={handleStartSimilarProject}
            />
          </div>
        )}

        {/* Tab: Contact Page */}
        {activeTab === 'contact' && (
          <div className="py-4">
            <ContactSection
              preselectedService={preselectedContactService}
              onShowToast={showToast}
            />
          </div>
        )}

        {/* Tab: User Dashboard */}
        {activeTab === 'dashboard' && (
          <div className="py-4">
            {currentUser ? (
              <Dashboard
                currentUser={currentUser}
                onUpdateUser={(updated) => {
                  setCurrentUser(updated);
                  showToast('Profile Updated', 'User data synchronized successfully.', 'success');
                }}
                onLogout={handleLogout}
                projects={clientProjects}
                onAddProject={handleAddProject}
                onUpdateProject={handleUpdateProject}
                onDeleteProject={handleDeleteProject}
                onPublishPortfolioItem={handlePublishPortfolioItem}
                savedCodingProjects={savedCodingProjects}
                onOpenCodingProject={handleOpenCodingProjectFromDash}
                onDeleteCodingProject={handleDeleteCodingProject}
                onOpenNewWorkspace={() => {
                  setWorkspaceInitialCode('');
                  setActiveTab('editor');
                }}
                onShowToast={showToast}
                onNavigateToPortfolio={() => setActiveTab('portfolio')}
                userProgress={userProgress}
                onNavigateToLearning={(lang) => {
                  if (lang) setSelectedLanguage(lang);
                  setActiveTab('tutorials');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            ) : (
              <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-slate-900">Sign In to View Dashboard</h2>
                <p className="text-xs text-slate-500">
                  Please log in or create an account to view your customer information, track active projects, access saved code files, and publish designs.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-xl text-xs shadow-md"
                  >
                    Open Sign In / Registration
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Floating Instant WhatsApp Button */}
      <a
        href="https://wa.me/923440665646?text=Hi%20DesignArtPro!%20I%20would%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all group"
        aria-label="Direct WhatsApp Chat with DesignArtPro"
      >
        <MessageCircle className="w-5 h-5 fill-white group-hover:rotate-12 transition-transform" />
        <span className="text-xs font-bold hidden sm:inline">WhatsApp Studio: 03440 665 646</span>
      </a>

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Auth Modal (Login, Registration, Forgot Password) */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onShowToast={showToast}
      />

      {/* Project Order / Commission Modal */}
      <ProjectOrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        initialService={selectedServiceForOrder}
        onAddProjectToDashboard={handleAddProject}
        onShowToast={showToast}
      />
    </div>
  );
}
