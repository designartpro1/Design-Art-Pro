import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  size = 'md', 
  showSubtitle = false,
  className = '' 
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-13 h-13',
    xl: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-base sm:text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl',
    xl: 'text-3xl sm:text-4xl'
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Graphic Designing Studio Logo Emblem:
          Features a precision vector pen tool (stylus/nib), dynamic bezier curve,
          anchor control handles, color palette swatches, and radiant gradient ring */}
      <div className={`relative ${iconSizes[size]} rounded-2xl p-[2.5px] bg-gradient-to-tr from-purple-600 via-pink-500 to-sky-400 shadow-md shadow-purple-500/25 flex-shrink-0 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all duration-300`}>
        <div className="w-full h-full bg-white rounded-[13px] flex items-center justify-center p-1 overflow-hidden relative shadow-inner">
          {/* Subtle luminous background aura */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-pink-50/50 to-sky-50/80" />
          
          {/* Professional Graphic Design Vector Studio Icon */}
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full relative z-10 drop-shadow-xs"
          >
            <defs>
              {/* Vibrant Studio Gradients */}
              <linearGradient id="dap_pen_grad_left" x1="14" y1="13" x2="24" y2="39" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="50%" stopColor="#9333ea" />
                <stop offset="100%" stopColor="#c026d3" />
              </linearGradient>

              <linearGradient id="dap_pen_grad_right" x1="34" y1="13" x2="24" y2="39" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="50%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#fb7185" />
              </linearGradient>

              <linearGradient id="dap_bezier_grad" x1="4" y1="36" x2="44" y2="12" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="45%" stopColor="#8b5cf6" />
                <stop offset="85%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>

              <linearGradient id="dap_collar_grad" x1="17" y1="7" x2="31" y2="13" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>

              <linearGradient id="dap_glow" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#f8fafc" />
              </linearGradient>
            </defs>

            {/* Graphic Design Bezier Vector Wave (Illustrator / Figma curve) */}
            <path
              d="M5 33 C 11 19, 18 36, 29 18 C 35 7, 40 13, 44 14"
              stroke="url(#dap_bezier_grad)"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
            {/* Fine tangent guideline */}
            <path
              d="M6 35 C 13 23, 20 38, 31 22 C 37 11, 41 16, 44 17"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              strokeLinecap="round"
              opacity="0.65"
            />

            {/* Vector Anchor Nodes & Handles (Quintessential Graphic Design symbols) */}
            <circle cx="5" cy="33" r="2.2" fill="#06b6d4" stroke="#ffffff" strokeWidth="1" />
            <rect x="42" y="12" width="4" height="4" rx="1" fill="#ec4899" stroke="#ffffff" strokeWidth="1" />
            <circle cx="28.5" cy="18.5" r="2" fill="#a855f7" stroke="#ffffff" strokeWidth="0.8" />

            {/* Pen Tool Collar / Shaft Ferrule */}
            <path
              d="M18 8 C18 7.2 18.8 6.5 20 6.5 H28 C29.2 6.5 30 7.2 30 8 L29 12 H19 L18 8 Z"
              fill="url(#dap_collar_grad)"
            />

            {/* Vector Pen Nib Left Blade (Creative Violet Gradient) */}
            <path
              d="M24 12 H19 L15 19 C14.5 21 16 23.5 18.5 25.5 L24 38.5 V23.5 Z"
              fill="url(#dap_pen_grad_left)"
            />

            {/* Vector Pen Nib Right Blade (Vibrant Pink Gradient) */}
            <path
              d="M24 12 H29 L33 19 C33.5 21 32 23.5 29.5 25.5 L24 38.5 V23.5 Z"
              fill="url(#dap_pen_grad_right)"
            />

            {/* Pen Breather Hole */}
            <circle cx="24" cy="22" r="2.5" fill="#ffffff" />
            <circle cx="24" cy="22" r="1.3" fill="#6366f1" />

            {/* Center Ink Slit */}
            <line
              x1="24"
              y1="24.5"
              x2="24"
              y2="38.5"
              stroke="#ffffff"
              strokeWidth="1.4"
              strokeLinecap="round"
            />

            {/* Pen Nib Tip Highlight */}
            <circle cx="24" cy="38.5" r="1.2" fill="#ffffff" />

            {/* Floating Graphic Designer Palette Swatches / Color Droplets */}
            <circle cx="8" cy="15" r="2.6" fill="#38bdf8" />
            <circle cx="39" cy="31" r="2.4" fill="#ec4899" />
            <circle cx="39" cy="9" r="1.8" fill="#fbbf24" />

            {/* Star Sparkle / Creative Polish Accent */}
            <path
              d="M24 39.5 L25 42 L27.5 43 L25 44 L24 46.5 L23 44 L20.5 43 L23 42 Z"
              fill="#fbbf24"
              opacity="0.95"
            />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left">
        <div className={`font-black tracking-tight leading-none ${textSizes[size]}`}>
          <span className="text-slate-900">Design</span>
          <span className="text-slate-800">Art</span>
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent ml-0.5 font-black">
            Pro
          </span>
        </div>
        {showSubtitle ? (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="text-[10px] tracking-wider uppercase font-extrabold text-purple-700 bg-purple-50 border border-purple-200/60 rounded px-1.5 py-0.2">
              Graphic Design Studio
            </span>
          </div>
        ) : (
          <span className="text-[10px] tracking-wider uppercase font-bold text-slate-400 mt-0.5">
            Graphic Design & Code
          </span>
        )}
      </div>
    </div>
  );
};

