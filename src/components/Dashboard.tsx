import React, { useState } from 'react';
import { User, ClientProject, PortfolioItem, PortfolioCategory, ServiceCategory, SavedCodingProject, UserLearningProgress } from '../types';
import { servicesData } from '../data/servicesData';
import confetti from 'canvas-confetti';
import { 
  LayoutDashboard, 
  Plus, 
  Trash2, 
  Edit3, 
  Upload, 
  DollarSign, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  User as UserIcon, 
  Settings, 
  LogOut, 
  X, 
  Sparkles, 
  Image as ImageIcon, 
  Layers, 
  Eye, 
  Save, 
  CreditCard,
  Briefcase,
  Code2,
  Play,
  Folder,
  GraduationCap,
  Flame,
  Database,
  Bookmark,
  Terminal,
  Server,
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface DashboardProps {
  currentUser: User;
  onUpdateUser: (updatedUser: User) => void;
  onLogout: () => void;
  projects: ClientProject[];
  onAddProject: (newProject: Omit<ClientProject, 'id' | 'createdAt'>) => void;
  onUpdateProject: (updatedProject: ClientProject) => void;
  onDeleteProject: (projectId: string) => void;
  onPublishPortfolioItem: (newItem: PortfolioItem) => void;
  savedCodingProjects: SavedCodingProject[];
  onOpenCodingProject: (project: SavedCodingProject) => void;
  onDeleteCodingProject: (projectId: string) => void;
  onOpenNewWorkspace: () => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
  onNavigateToPortfolio: () => void;
  userProgress?: UserLearningProgress;
  onNavigateToLearning?: (lang?: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  currentUser,
  onUpdateUser,
  onLogout,
  projects,
  onAddProject,
  onUpdateProject,
  onDeleteProject,
  onPublishPortfolioItem,
  savedCodingProjects,
  onOpenCodingProject,
  onDeleteCodingProject,
  onOpenNewWorkspace,
  onShowToast,
  onNavigateToPortfolio,
  userProgress,
  onNavigateToLearning
}) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'codingProjects' | 'learning' | 'database' | 'upload' | 'services' | 'settings'>('projects');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<ClientProject | null>(null);

  // New Project Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<string>('Logo Designing');
  const [newBudget, setNewBudget] = useState('249');
  const [newDeadline, setNewDeadline] = useState('2026-11-15');
  const [newDescription, setNewDescription] = useState('');

  // Upload Design Form State
  const [uploadTitle, setUploadTitle] = useState('');
  const [uploadCategory, setUploadCategory] = useState<PortfolioCategory>('Branding');
  const [uploadDescription, setUploadDescription] = useState('');
  const [uploadImageUrl, setUploadImageUrl] = useState('');
  const [uploadClient, setUploadClient] = useState(currentUser.name || 'DesignArtPro Studio');
  const [uploadTools, setUploadTools] = useState('Figma, Adobe Illustrator');
  const [imagePreview, setImagePreview] = useState<string>('');

  // Account Settings Form State
  const [settingName, setSettingName] = useState(currentUser.name);
  const [settingEmail, setSettingEmail] = useState(currentUser.email);
  const [settingPhone, setSettingPhone] = useState(currentUser.phone || '03440 665 646');
  const [settingCompany, setSettingCompany] = useState(currentUser.company || 'DesignArtPro Client');

  // Database Inspector State
  const [selectedDbTable, setSelectedDbTable] = useState<'users' | 'projects' | 'saved_code' | 'learning_progress'>('users');
  const [customSqlQuery, setCustomSqlQuery] = useState('SELECT id, name, email, role, balance FROM users;');
  const [queryResult, setQueryResult] = useState<any[] | null>(null);
  const [queryError, setQueryError] = useState<string | null>(null);

  const handleExecuteSql = (sql: string) => {
    setQueryError(null);
    const clean = sql.trim().toLowerCase();
    
    if (!clean.startsWith('select')) {
      setQueryError('Read-only Sandbox: Only SELECT queries are permitted in this inspector.');
      return;
    }

    try {
      if (clean.includes('from users')) {
        setQueryResult([
          { id: currentUser.id, name: currentUser.name, email: currentUser.email, role: currentUser.role, balance: `$${currentUser.balance.toFixed(2)}`, joined_date: currentUser.joinedDate },
          { id: 'usr_admin_root', name: 'Master Studio Admin', email: 'admin@designartpro.com', role: 'admin', balance: '$9999.00', joined_date: 'Jan 2026' }
        ]);
      } else if (clean.includes('from projects')) {
        setQueryResult(projects.map(p => ({
          id: p.id,
          title: p.title,
          category: p.serviceCategory,
          status: p.status,
          budget: `$${p.budget.toFixed(2)}`,
          progress: `${p.progressPercentage}%`,
          deadline: p.deadline
        })));
      } else if (clean.includes('from saved_code') || clean.includes('from coding_projects')) {
        setQueryResult(savedCodingProjects.map(c => ({
          id: c.id,
          title: c.title,
          language: c.language,
          mode: c.mode,
          files_count: c.files.length,
          updated_at: c.updatedAt
        })));
      } else if (clean.includes('from learning_progress')) {
        const completed = userProgress?.completedLessons || ['html-home', 'html-intro'];
        setQueryResult(completed.map((lessonId, idx) => ({
          id: `lp_${idx + 1}`,
          user_id: currentUser.id,
          lesson_slug: lessonId,
          points_awarded: 25,
          completed_at: userProgress?.lastActiveDate || '2026-10-29'
        })));
      } else {
        setQueryResult([
          { table: 'system_info', server: 'PHP 8.3 / MariaDB 10.11', status: 'ACTIVE_CONNECTED', ping_ms: 12 }
        ]);
      }
      onShowToast('Query Executed', 'MySQL query returned updated dataset.', 'success');
    } catch (err: any) {
      setQueryError(err?.message || 'SQL execution failed');
    }
  };

  // Handle image file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        setUploadImageUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add Project
  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) {
      onShowToast('Title Required', 'Please enter a project title.', 'error');
      return;
    }

    onAddProject({
      title: newTitle.trim(),
      serviceCategory: newCategory,
      status: 'Pending',
      budget: parseFloat(newBudget) || 150,
      deadline: newDeadline,
      progressPercentage: 10,
      description: newDescription.trim() || 'Custom design project created in dashboard.'
    });

    setIsAddModalOpen(false);
    setNewTitle('');
    setNewDescription('');
    onShowToast('Project Created', `"${newTitle}" added to your active projects list!`, 'success');
  };

  // Save edited project
  const handleSaveEdit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    onUpdateProject(editingProject);
    setEditingProject(null);
    onShowToast('Project Updated', `Changes to "${editingProject.title}" saved.`, 'success');
  };

  // Publish image to live portfolio
  const handlePublishImage = (e: React.FormEvent) => {
    e.preventDefault();
    const finalImage = uploadImageUrl || imagePreview;
    if (!uploadTitle.trim() || !finalImage) {
      onShowToast('Incomplete Artwork', 'Please provide a title and upload an image or provide an image URL.', 'error');
      return;
    }

    const newItem: PortfolioItem = {
      id: `port-custom-${Date.now()}`,
      title: uploadTitle.trim(),
      category: uploadCategory,
      description: uploadDescription.trim() || 'Bespoke design published via DesignArtPro user dashboard.',
      imageUrl: finalImage,
      client: uploadClient.trim() || currentUser.name,
      date: 'October 2026',
      tools: uploadTools.split(',').map(t => t.trim()).filter(Boolean),
      featured: true,
      isUserUploaded: true,
      liveStats: 'Newly Published · Verified by Client'
    };

    onPublishPortfolioItem(newItem);
    confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
    onShowToast('Artwork Published!', `"${uploadTitle}" is now live in the official Portfolio!`, 'success');

    // Reset upload form
    setUploadTitle('');
    setUploadDescription('');
    setUploadImageUrl('');
    setImagePreview('');
  };

  // Save account settings
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: User = {
      ...currentUser,
      name: settingName.trim() || currentUser.name,
      email: settingEmail.trim() || currentUser.email,
      phone: settingPhone.trim(),
      company: settingCompany.trim()
    };
    onUpdateUser(updated);
    onShowToast('Profile Updated', 'Your customer information was successfully saved.', 'success');
  };

  // Add dummy balance credit simulator
  const handleAddBalance = () => {
    const updated: User = {
      ...currentUser,
      balance: currentUser.balance + 250
    };
    onUpdateUser(updated);
    confetti({ particleCount: 50, spread: 50 });
    onShowToast('Deposit Added', '$250.00 added to your studio account credit balance!', 'success');
  };

  // Calculate statistics
  const totalBudget = projects.reduce((acc, p) => acc + p.budget, 0);
  const completedCount = projects.filter(p => p.status === 'Completed').length;
  const inProgressCount = projects.filter(p => p.status === 'In Progress' || p.status === 'In Review').length;

  return (
    <section className="py-12 bg-slate-50/60 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Card with Customer Information */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-500 to-sky-400 p-0.5 shadow-md shadow-purple-500/20">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center font-black text-2xl text-purple-700">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-extrabold text-slate-900">
                    {currentUser.name}
                  </h1>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                    {currentUser.role === 'admin' ? 'Studio Director' : 'Verified Client'}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentUser.email} • {currentUser.company || 'DesignArtPro Studio Partner'}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Member since {currentUser.joinedDate}
                </p>
              </div>
            </div>

            {/* Quick Balance & Action Box */}
            <div className="flex flex-wrap items-center gap-4">
              <div className="p-3.5 px-5 bg-gradient-to-r from-purple-50 via-pink-50/40 to-sky-50 rounded-2xl border border-purple-100">
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                  Studio Credit Balance
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-2xl font-black text-slate-900">
                    ${currentUser.balance.toFixed(2)}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600">Available</span>
                </div>
              </div>

              <button
                onClick={handleAddBalance}
                className="px-3.5 py-3 rounded-xl text-xs font-bold text-purple-700 bg-white border border-purple-200 hover:bg-purple-50 hover:border-purple-300 shadow-xs transition-all flex items-center gap-1.5"
                title="Simulate adding deposit funds"
              >
                <Plus className="w-3.5 h-3.5 text-purple-600" />
                <span>Add $250 Funds</span>
              </button>

              <button
                onClick={onLogout}
                className="px-3.5 py-3 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Cards */}
          <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500">Total Projects</span>
              <p className="text-xl font-bold text-slate-900 mt-1">{projects.length}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500">Active In Production</span>
              <p className="text-xl font-bold text-purple-600 mt-1">{inProgressCount}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500">Delivered & Closed</span>
              <p className="text-xl font-bold text-emerald-600 mt-1">{completedCount}</p>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[11px] font-semibold text-slate-500">Total Project Value</span>
              <p className="text-xl font-bold text-slate-900 mt-1">${totalBudget.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
          <button
            onClick={() => setActiveTab('projects')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'projects'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>Design Commissions ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('codingProjects')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'codingProjects'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Coding Projects ({savedCodingProjects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('learning')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'learning'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span className="flex items-center gap-1">
              Learning & Streak
              <span className="inline-flex items-center px-1.5 py-0.2 rounded-full text-[10px] bg-amber-400 text-slate-950 font-black">
                🔥 {userProgress?.streakDays || 5}d
              </span>
            </span>
          </button>

          <button
            onClick={() => setActiveTab('database')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'database'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Database className="w-3.5 h-3.5" />
            <span>PHP & MySQL DB</span>
          </button>

          <button
            onClick={() => setActiveTab('upload')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'upload'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload & Publish</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'services'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Services & Rates</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'settings'
                ? 'bg-purple-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
          >
            <Settings className="w-3.5 h-3.5" />
            <span>Account Settings</span>
          </button>
        </div>

        {/* Tab 1: Project Management */}
        {activeTab === 'projects' && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Your Studio Projects</h2>
                <p className="text-xs text-slate-500">Track progress, budget, and deliverables</p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add New Project</span>
              </button>
            </div>

            {projects.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="mt-4 text-base font-bold text-slate-800">No Projects Found</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  You haven't initiated any design or coding projects yet. Click below to add one!
                </p>
                <button
                  onClick={() => setIsAddModalOpen(true)}
                  className="mt-4 px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-xl"
                >
                  Create First Project
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => {
                  const statusColors = {
                    Pending: 'bg-amber-50 text-amber-700 border-amber-200',
                    'In Progress': 'bg-blue-50 text-blue-700 border-blue-200',
                    'In Review': 'bg-purple-50 text-purple-700 border-purple-200',
                    Completed: 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  };

                  return (
                    <div
                      key={proj.id}
                      className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">
                              {proj.serviceCategory}
                            </span>
                            <h3 className="text-base font-bold text-slate-900 mt-0.5">
                              {proj.title}
                            </h3>
                          </div>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${statusColors[proj.status]}`}>
                            {proj.status}
                          </span>
                        </div>

                        <p className="text-xs text-slate-500 mt-2 line-clamp-2">
                          {proj.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                            <span>Development Progress</span>
                            <span>{proj.progressPercentage}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full transition-all duration-500"
                              style={{ width: `${proj.progressPercentage}%` }}
                            />
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                          <span>Budget: <strong className="text-slate-800">${proj.budget}</strong></span>
                          <span>Deadline: <strong className="text-slate-800">{proj.deadline}</strong></span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                        <button
                          onClick={() => setEditingProject(proj)}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center gap-1"
                        >
                          <Edit3 className="w-3 h-3 text-slate-600" />
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => {
                            if (window.confirm(`Are you sure you want to delete "${proj.title}"?`)) {
                              onDeleteProject(proj.id);
                              onShowToast('Project Removed', `"${proj.title}" deleted.`, 'info');
                            }
                          }}
                          className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50"
                          title="Delete Project"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab: Saved Coding Projects */}
        {activeTab === 'codingProjects' && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Saved Coding Projects & Files</h2>
                <p className="text-xs text-slate-500">Reopen, run, and edit saved code files directly in the Online Workspace</p>
              </div>
              <button
                onClick={onOpenNewWorkspace}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center gap-1.5"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>New Code Project</span>
              </button>
            </div>

            {savedCodingProjects.length === 0 ? (
              <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
                <Code2 className="w-12 h-12 text-slate-300 mx-auto" />
                <h3 className="mt-4 text-base font-bold text-slate-800">No Saved Coding Projects Yet</h3>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Write HTML, CSS, JavaScript, Python, or SQL in the online editor, and click "Save Project" to store it here.
                </p>
                <button
                  onClick={onOpenNewWorkspace}
                  className="mt-4 px-4 py-2 bg-purple-600 text-white text-xs font-bold rounded-xl"
                >
                  Open Code Workspace
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {savedCodingProjects.map((p) => (
                  <div
                    key={p.id}
                    className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                          {p.folder || 'General'}
                        </span>
                        <span className="text-[10px] font-mono font-bold text-slate-500 uppercase bg-slate-100 px-2 py-0.5 rounded">
                          {p.language}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-900 mt-2">
                        {p.title}
                      </h3>

                      <p className="text-xs text-slate-500 mt-1">
                        Files: {p.files.map(f => f.name).join(', ')}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Last Modified: {p.updatedAt}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        onClick={() => onDeleteCodingProject(p.id)}
                        className="p-1.5 rounded-lg text-rose-500 hover:bg-rose-50"
                        title="Delete saved project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => onOpenCodingProject(p)}
                        className="flex-1 py-1.5 px-3 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Open in Workspace</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Upload and Publish Design Images */}
        {activeTab === 'upload' && (
          <div className="mt-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-pink-600">
                Publishing Engine
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">
                Upload & Publish Design Images to Live Portfolio
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Share your newly completed graphic designs, brand logos, 4K wallpapers, or web mockups directly on the public DesignArtPro portfolio!
              </p>

              <form onSubmit={handlePublishImage} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Artwork Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lumina Neon Vector Illustration"
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Portfolio Category *
                    </label>
                    <select
                      value={uploadCategory}
                      onChange={(e) => setUploadCategory(e.target.value as PortfolioCategory)}
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    >
                      <option value="Logos">Logos</option>
                      <option value="Banners">Banners</option>
                      <option value="Branding">Branding</option>
                      <option value="Business Cards">Business Cards</option>
                      <option value="Social Media Graphics">Social Media Graphics</option>
                      <option value="Web Design">Web Design</option>
                      <option value="Coding Projects">Coding Projects</option>
                      <option value="Wallpapers and Digital Artwork">Wallpapers and Digital Artwork</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Client / Studio Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Nova Media Ltd"
                      value={uploadClient}
                      onChange={(e) => setUploadClient(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    />
                  </div>
                </div>

                {/* Image Upload Area: Choose Local File OR Paste URL */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <label className="block text-xs font-bold text-slate-700">
                    Artwork Image (Upload File or Enter URL) *
                  </label>
                  
                  <div className="flex flex-col sm:flex-row gap-3 items-center">
                    <label className="w-full sm:w-auto px-4 py-2.5 bg-white border border-purple-200 hover:border-purple-400 text-purple-700 rounded-xl text-xs font-bold cursor-pointer text-center flex items-center justify-center gap-2 shadow-xs transition-colors">
                      <ImageIcon className="w-4 h-4 text-purple-600" />
                      <span>Choose Image File</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>
                    <span className="text-xs text-slate-400">or paste direct image URL below</span>
                  </div>

                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-..."
                    value={uploadImageUrl}
                    onChange={(e) => {
                      setUploadImageUrl(e.target.value);
                      setImagePreview(e.target.value);
                    }}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium bg-white"
                  />

                  {imagePreview && (
                    <div className="mt-3 relative rounded-xl overflow-hidden border border-slate-200 max-h-48">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-48 object-cover"
                      />
                      <span className="absolute bottom-2 right-2 text-[10px] bg-slate-900/80 text-white px-2 py-0.5 rounded font-mono">
                        Ready to publish
                      </span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Tools & Technologies Used (Comma Separated)
                  </label>
                  <input
                    type="text"
                    placeholder="Adobe Illustrator, Photoshop, Blender, Figma"
                    value={uploadTools}
                    onChange={(e) => setUploadTools(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Artwork Description
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the aesthetic, colors, typography, or design intention..."
                    value={uploadDescription}
                    onChange={(e) => setUploadDescription(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div className="pt-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/25 flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Publish Directly to Portfolio</span>
                  </button>
                  <button
                    type="button"
                    onClick={onNavigateToPortfolio}
                    className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-colors"
                  >
                    View Current Portfolio
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Tab 3: Services & Portfolio Categories Management */}
        {activeTab === 'services' && (
          <div className="mt-6 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Active Graphic Designing Services</h2>
              <p className="text-xs text-slate-500 mt-1">12 official services provided by DesignArtPro</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {servicesData.map((svc) => (
                  <div key={svc.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-slate-800">{svc.title}</p>
                      <p className="text-[11px] text-slate-500">Starting at ${svc.startingPrice} • {svc.deliveryDays}</p>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200">
              <h2 className="text-xl font-bold text-slate-900">Portfolio Disciplines</h2>
              <p className="text-xs text-slate-500 mt-1">8 verified presentation categories</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  'Logos',
                  'Banners',
                  'Branding',
                  'Business Cards',
                  'Social Media Graphics',
                  'Web Design',
                  'Coding Projects',
                  'Wallpapers and Digital Artwork'
                ].map((cat, i) => (
                  <span key={i} className="px-3.5 py-1.5 rounded-xl bg-purple-50 text-purple-700 text-xs font-bold border border-purple-200">
                    ✓ {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Account Settings */}
        {activeTab === 'settings' && (
          <div className="mt-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 max-w-2xl">
            <h2 className="text-2xl font-extrabold text-slate-900">Customer Account Settings</h2>
            <p className="text-xs text-slate-500 mt-1">Update your client profile details and contact preferences.</p>

            <form onSubmit={handleSaveSettings} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={settingName}
                  onChange={(e) => setSettingName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={settingEmail}
                  onChange={(e) => setSettingEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="text"
                    value={settingPhone}
                    onChange={(e) => setSettingPhone(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={settingCompany}
                    onChange={(e) => setSettingCompany(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center gap-2"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 5: Learning Progress & Streak */}
        {activeTab === 'learning' && (
          <div className="mt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-emerald-600" />
                  <span>Your Learning Journey & Streak</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Track completed tutorials, study streaks, earned coding XP, and bookmarked lessons.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onNavigateToLearning?.('html')}
                  className="px-4 py-2 bg-[#04AA6D] hover:bg-[#038857] text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-500/20 flex items-center gap-1.5 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>Continue Learning ▶</span>
                </button>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-800">Daily Streak</span>
                  <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
                </div>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-amber-900">{userProgress?.streakDays || 5}</span>
                  <span className="text-xs font-semibold text-amber-700">Days Active</span>
                </div>
                <p className="text-[11px] text-amber-600 mt-1">Consistency earns double points!</p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-800">Total XP Earned</span>
                  <Sparkles className="w-5 h-5 text-purple-500" />
                </div>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-purple-900">{userProgress?.totalPoints || 140}</span>
                  <span className="text-xs font-semibold text-purple-700">Points</span>
                </div>
                <p className="text-[11px] text-purple-600 mt-1">+25 XP per completed tutorial</p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800">Lessons Finished</span>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-emerald-900">{userProgress?.completedLessons.length || 2}</span>
                  <span className="text-xs font-semibold text-emerald-700">Modules</span>
                </div>
                <p className="text-[11px] text-emerald-600 mt-1">Verified with live code exercises</p>
              </div>

              <div className="p-4 rounded-2xl bg-gradient-to-br from-sky-50 to-indigo-50 border border-sky-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-800">Bookmarks</span>
                  <Bookmark className="w-5 h-5 text-sky-500" />
                </div>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-black text-sky-900">{userProgress?.bookmarkedLessons.length || 2}</span>
                  <span className="text-xs font-semibold text-sky-700">Saved</span>
                </div>
                <p className="text-[11px] text-sky-600 mt-1">Quick access for code revision</p>
              </div>
            </div>

            {/* Language Breakdown Progress Cards */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-4">Curriculum Progress by Language</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { lang: 'HTML', code: 'html', color: 'from-amber-500 to-orange-500', pct: userProgress?.languageProgress?.html || 45, desc: 'Structure, Semantic Tags, Forms' },
                  { lang: 'CSS', code: 'css', color: 'from-sky-500 to-blue-500', pct: userProgress?.languageProgress?.css || 30, desc: 'Flexbox, Grid, Animations, Variables' },
                  { lang: 'JavaScript', code: 'javascript', color: 'from-yellow-400 to-amber-500', pct: userProgress?.languageProgress?.javascript || 25, desc: 'ES6+, DOM, Async/Await, Events' },
                  { lang: 'Python', code: 'python', color: 'from-blue-500 to-indigo-500', pct: userProgress?.languageProgress?.python || 20, desc: 'Syntax, Data Structures, OOP' },
                  { lang: 'SQL / MySQL', code: 'sql', color: 'from-emerald-500 to-teal-500', pct: userProgress?.languageProgress?.sql || 15, desc: 'Queries, JOINs, Indexes, Relational DB' },
                  { lang: 'React', code: 'react', color: 'from-cyan-400 to-sky-600', pct: 10, desc: 'Hooks, Components, Virtual DOM' }
                ].map((item) => (
                  <div key={item.code} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-slate-900">{item.lang}</span>
                        <span className="text-xs font-bold text-purple-600">{item.pct}%</span>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-3">{item.desc}</p>
                      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden mb-3">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-500`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => onNavigateToLearning?.(item.code)}
                      className="w-full py-1.5 px-3 rounded-lg text-xs font-bold text-slate-700 bg-white hover:bg-purple-50 hover:text-purple-700 border border-slate-200 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Study {item.lang}</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Completed & Bookmarked Lessons lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Completed Lessons ({userProgress?.completedLessons.length || 0})</span>
                </h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {(userProgress?.completedLessons || []).map((lessonId) => (
                    <div key={lessonId} className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/60 border border-emerald-100 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span className="font-semibold text-slate-800 capitalize">{lessonId.replace(/-/g, ' ')}</span>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">+25 XP</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-200">
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Bookmark className="w-4 h-4 text-purple-600" />
                  <span>Bookmarked Lessons ({userProgress?.bookmarkedLessons.length || 0})</span>
                </h3>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {(userProgress?.bookmarkedLessons || []).map((lessonId) => (
                    <div key={lessonId} className="flex items-center justify-between p-2.5 rounded-xl bg-purple-50/60 border border-purple-100 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-purple-500" />
                        <span className="font-semibold text-slate-800 capitalize">{lessonId.replace(/-/g, ' ')}</span>
                      </div>
                      <button
                        onClick={() => onNavigateToLearning?.(lessonId.split('-')[0])}
                        className="text-[11px] font-bold text-purple-600 hover:text-purple-800 underline"
                      >
                        Open
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 6: PHP & MySQL Server Database Inspector */}
        {activeTab === 'database' && (
          <div className="mt-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-600" />
                  <span>PHP & MySQL Server Database Inspector</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Inspect backend runtime session state, relational database schema, and execute SQL queries.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>MySQL Connected (Port 3306)</span>
              </div>
            </div>

            {/* PHP Backend Server Status Banner */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-black text-sm">
                    PHP
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">PHP 8.3.6 (cli) · FastCGI / Apache Engine</h4>
                    <p className="text-[11px] text-slate-400">Driver: PDO MySQL (libmysqlclient 8.0.36) · UTF-8 Unicode</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 font-mono">
                    SESSION_ID: sess_{currentUser.id.replace('usr_', '')}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold">
                    AUTH_OK
                  </span>
                </div>
              </div>

              {/* PHP Session Array Variables */}
              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <span className="text-slate-400 text-[10px]">$_SESSION['user_id']</span>
                  <p className="text-purple-300 font-bold mt-0.5 truncate">{currentUser.id}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <span className="text-slate-400 text-[10px]">$_SESSION['role']</span>
                  <p className="text-emerald-300 font-bold mt-0.5 capitalize">{currentUser.role}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-800/70 border border-slate-700/60">
                  <span className="text-slate-400 text-[10px]">$_SESSION['database_dsn']</span>
                  <p className="text-sky-300 font-bold mt-0.5 truncate">mysql:dbname=designartpro_db</p>
                </div>
              </div>
            </div>

            {/* Quick Preset Queries Bar */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <h3 className="text-sm font-bold text-slate-900">Database Tables & Quick Queries</h3>
                <span className="text-xs text-slate-500 font-mono">Database: designartpro_db</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: '👥 users Table', sql: 'SELECT id, name, email, role, balance FROM users;' },
                  { label: '📁 projects Table', sql: 'SELECT id, title, category, status, budget FROM projects;' },
                  { label: '💻 coding_projects Table', sql: 'SELECT id, title, language, mode, updatedAt FROM saved_code;' },
                  { label: '🎓 learning_progress Table', sql: 'SELECT lesson_id, user_id, completed_at FROM learning_progress;' }
                ].map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCustomSqlQuery(preset.sql);
                      handleExecuteSql(preset.sql);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-100 hover:text-purple-800 text-slate-700 text-xs font-semibold border border-slate-200 transition-all font-mono"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>

              {/* SQL Query Console */}
              <div className="mt-4">
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Interactive SQL Query Editor
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    value={customSqlQuery}
                    onChange={(e) => setCustomSqlQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-900 text-emerald-400 font-mono text-xs border border-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="SELECT * FROM table_name;"
                  />
                  <button
                    onClick={() => handleExecuteSql(customSqlQuery)}
                    className="absolute right-3 bottom-3.5 px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-purple-500/20 transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Run SQL</span>
                  </button>
                </div>
              </div>

              {/* Query Error Notice */}
              {queryError && (
                <div className="mt-3 p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{queryError}</span>
                </div>
              )}

              {/* Query Results Table */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-700">Query Output & Dataset</span>
                  <span className="text-[11px] text-slate-500">
                    {queryResult ? `${queryResult.length} rows returned` : 'Execute a query to inspect records'}
                  </span>
                </div>

                <div className="border border-slate-200 rounded-2xl overflow-x-auto bg-slate-50">
                  {queryResult && queryResult.length > 0 ? (
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-slate-100 text-slate-700 border-b border-slate-200 uppercase text-[10px] tracking-wider">
                        <tr>
                          {Object.keys(queryResult[0]).map((col) => (
                            <th key={col} className="px-4 py-2.5 font-bold">{col}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {queryResult.map((row, idx) => (
                          <tr key={idx} className="hover:bg-slate-50 transition-colors">
                            {Object.values(row).map((val: any, colIdx) => (
                              <td key={colIdx} className="px-4 py-2 text-slate-800">
                                {String(val)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="p-8 text-center text-xs text-slate-400">
                      No query results loaded. Click one of the table buttons above or type a SQL command and click "Run SQL".
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add New Project */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xl font-extrabold text-slate-900">Add New Project</h3>
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateProject} className="mt-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Minimalist Coffee Wordmark"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium bg-white"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Custom Creative Coding">Custom Creative Coding</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Budget (USD)
                    </label>
                    <input
                      type="number"
                      value={newBudget}
                      onChange={(e) => setNewBudget(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Target Deadline
                  </label>
                  <input
                    type="date"
                    value={newDeadline}
                    onChange={(e) => setNewDeadline(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Brief Notes & Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Any specific colors, vector preferences, or technical details..."
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md shadow-purple-500/20"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Edit Project */}
        {editingProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">Edit Project Status</h3>
                <button
                  onClick={() => setEditingProject(null)}
                  className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSaveEdit} className="mt-4 space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Project Status
                  </label>
                  <select
                    value={editingProject.status}
                    onChange={(e) => {
                      const st = e.target.value as ClientProject['status'];
                      const progressMap = {
                        Pending: 10,
                        'In Progress': 45,
                        'In Review': 85,
                        Completed: 100
                      };
                      setEditingProject({
                        ...editingProject,
                        status: st,
                        progressPercentage: progressMap[st] || 50
                      });
                    }}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium bg-white"
                  >
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="In Review">In Review</option>
                    <option value="Completed">Completed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Progress Percentage ({editingProject.progressPercentage}%)
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={editingProject.progressPercentage}
                    onChange={(e) => setEditingProject({
                      ...editingProject,
                      progressPercentage: parseInt(e.target.value)
                    })}
                    className="w-full accent-purple-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Budget (USD)
                  </label>
                  <input
                    type="number"
                    value={editingProject.budget}
                    onChange={(e) => setEditingProject({
                      ...editingProject,
                      budget: parseFloat(e.target.value) || 0
                    })}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setEditingProject(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md shadow-purple-500/20"
                  >
                    Save Updates
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
