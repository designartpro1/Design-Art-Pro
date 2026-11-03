import React from 'react';
import { Logo } from './Logo';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Sparkles, 
  Code2, 
  Palette, 
  ArrowUp,
  Heart
} from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
  onSelectServiceFilter?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectServiceFilter }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesList = [
    'Logo Designing',
    'Banner Designing',
    'Business Card Design',
    'Branding & Brand Identity',
    'Social Media Design',
    'Poster and Flyer Design',
    'Brochure Design',
    'Advertisement Design',
    'Packaging Design',
    'Wallpaper Design',
    'Presentation Design',
    'UI/UX Design'
  ];

  const technologiesList = [
    'HTML5',
    'CSS3',
    'JavaScript',
    'Python',
    'PHP',
    'MySQL & SQL',
    'C & C++',
    'Java',
    'C#',
    'TypeScript',
    'React',
    'Node.js',
    'Bootstrap',
    'Git & GitHub',
    'JSON & APIs'
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-2xl w-fit shadow-md">
              <Logo size="md" showSubtitle={true} />
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-4">
              <strong className="text-white">DesignArtPro</strong> is a premier graphic designing studio and creative coding laboratory. We combine world-class visual artistry with enterprise-grade software architecture.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </span>
                <span>
                  WhatsApp:{' '}
                  <a
                    href="https://wa.me/923440665646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    03440 665 646
                  </a>
                </span>
              </div>

              <div className="flex items-center gap-2.5 text-slate-300">
                <span className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <span>
                  Email:{' '}
                  <a
                    href="mailto:designartpro1@gmail.com"
                    className="font-bold text-white hover:text-purple-400 transition-colors"
                  >
                    designartpro1@gmail.com
                  </a>
                </span>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Global Client Coverage • Remote Production Studio</span>
              </div>
            </div>
          </div>

          {/* Col 3: 12 Graphic Design Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              <span>Design Services (12)</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {servicesList.slice(0, 6).map((svc, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-purple-400 transition-colors text-left"
                  >
                    {svc}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-purple-400 hover:text-purple-300 font-semibold"
                >
                  + 6 More Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Coding Technologies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Tech Stacks (15)</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {technologiesList.slice(0, 6).map((tech, i) => (
                <li key={i}>
                  <button
                    onClick={() => onNavigate('coding')}
                    className="hover:text-sky-400 transition-colors text-left"
                  >
                    {tech}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('editor')}
                  className="text-sky-400 hover:text-sky-300 font-semibold"
                >
                  Interactive Code Editor →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Studio Hub & Dashboard */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Studio Portal
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onNavigate('html')}
                  className="hover:text-purple-400 transition-colors"
                >
                  HTML Curriculum (50 Topics)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('css')}
                  className="hover:text-pink-400 transition-colors"
                >
                  CSS Architecture (35 Topics)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('javascript')}
                  className="hover:text-sky-400 transition-colors"
                >
                  JavaScript Powerhouse
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('tutorials')}
                  className="hover:text-purple-300 transition-colors"
                >
                  20 Website Tutorials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors"
                >
                  Client Projects & Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dashboard')}
                  className="hover:text-white transition-colors"
                >
                  Customer Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('editor')}
                  className="hover:text-white transition-colors text-pink-400 font-semibold"
                >
                  Two-Side Code Editor ▶
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} <strong>DesignArtPro</strong>. Professional Graphic Designing & Creative Coding. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-slate-400">
              Crafted with clean white & vibrant gradients
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-1.5"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
