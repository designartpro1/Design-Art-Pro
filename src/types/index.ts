export type ServiceCategory = 
  | 'Logo Designing'
  | 'Banner Designing'
  | 'Business Card Design'
  | 'Branding & Brand Identity'
  | 'Social Media Design'
  | 'Poster and Flyer Design'
  | 'Brochure Design'
  | 'Advertisement Design'
  | 'Packaging Design'
  | 'Wallpaper Design'
  | 'Presentation Design'
  | 'UI/UX Design';

export interface GraphicService {
  id: string;
  title: ServiceCategory;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  startingPrice: number;
  deliveryDays: string;
  popular?: boolean;
  iconName: string;
  badge: string;
  sampleImages: string[];
}

export type TechCategory = 'Frontend' | 'Backend' | 'Database' | 'Systems & Mobile' | 'DevOps & Tools';

export interface CodingTech {
  id: string;
  name: string;
  category: TechCategory;
  icon: string;
  badgeColor: string;
  shortDesc: string;
  overview: string;
  keyFeatures: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  codeSample: {
    language: string;
    title: string;
    code: string;
    explanation: string;
  };
  documentationUrl?: string;
}

export type PortfolioCategory = 
  | 'All'
  | 'Logos'
  | 'Banners'
  | 'Branding'
  | 'Business Cards'
  | 'Social Media Graphics'
  | 'Web Design'
  | 'Coding Projects'
  | 'Wallpapers and Digital Artwork';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  imageUrl: string;
  client?: string;
  date?: string;
  tools: string[];
  featured?: boolean;
  isUserUploaded?: boolean;
  demoUrl?: string;
  liveStats?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  avatarUrl?: string;
  role: 'client' | 'admin';
  balance: number;
  joinedDate: string;
}

export interface ClientProject {
  id: string;
  title: string;
  serviceCategory: string;
  status: 'Pending' | 'In Progress' | 'In Review' | 'Completed';
  budget: number;
  deadline: string;
  progressPercentage: number;
  description: string;
  createdAt: string;
  previewUrl?: string;
}

export interface ProjectFile {
  id: string;
  name: string;
  language: string;
  content: string;
  isMain?: boolean;
}

export interface SavedCodingProject {
  id: string;
  title: string;
  language: string;
  description?: string;
  files: ProjectFile[];
  updatedAt: string;
  createdAt: string;
  folder?: string;
  mode?: 'web' | 'single';
}

export interface DiagnosticError {
  line?: number;
  column?: number;
  message: string;
  severity: 'error' | 'warning' | 'info';
  suggestion?: string;
}

export interface ExecutionResult {
  stdout: string;
  stderr?: string;
  status: 'success' | 'error' | 'running';
  executionTimeMs: number;
  errors: DiagnosticError[];
  htmlPreview?: string;
  tableResult?: {
    columns: string[];
    rows: Array<Record<string, string | number | null>>;
  };
}

export interface CodeEditorExample {
  id: string;
  title: string;
  language: string;
  description: string;
  code: string;
  expectedOutput?: string;
  isRunnableWeb?: boolean;
}

export interface TutorialExample {
  id: string;
  title: string;
  category: string;
  language: string;
  description: string;
  code: string;
  expectedOutput?: string;
  mode?: 'web' | 'single';
  html?: string;
  css?: string;
  js?: string;
  tips: string[];
}

export interface CurriculumTopic {
  id: string;
  number: number;
  title: string;
  tier: 'Basic' | 'Forms' | 'Intermediate' | 'Advanced' | 'Professional';
  discipline: 'html' | 'css' | 'javascript' | 'other';
  description: string;
  code: {
    html?: string;
    css?: string;
    js?: string;
    single?: string;
    language?: string;
  };
  keyConcepts: string[];
  practiceChallenge?: string;
  commonErrors?: string;
}

export interface WebsiteTutorialProject {
  id: string;
  number: number;
  title: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  description: string;
  features: string[];
  files: {
    html: string;
    css: string;
    js: string;
  };
  previewBadge: string;
}

export interface PracticeExercise {
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TutorialLesson {
  id: string;
  language: 'html' | 'css' | 'javascript' | 'sql' | 'python' | 'java' | 'php' | 'c' | 'cpp' | 'csharp' | 'react' | 'bootstrap' | 'w3css' | 'mysql' | 'aws';
  section: string;
  slug: string;
  title: string;
  description: string;
  content: string[];
  code: {
    mode: 'web' | 'single';
    html?: string;
    css?: string;
    js?: string;
    single?: string;
    language?: string;
  };
  keyPoints: string[];
  exercise?: PracticeExercise;
  tags?: string[];
}

export interface UserLearningProgress {
  completedLessons: string[]; // lesson ids
  bookmarkedLessons: string[]; // lesson ids
  streakDays: number;
  totalPoints: number;
  lastActiveDate: string;
  languageProgress: Record<string, number>; // e.g. { html: 75, css: 40 }
}

