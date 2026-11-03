import React, { useState } from 'react';
import { PortfolioItem, PortfolioCategory } from '../types';
import { 
  Briefcase, 
  ExternalLink, 
  Sparkles, 
  Eye, 
  X, 
  Layers, 
  Calendar, 
  User as UserIcon, 
  Tag, 
  Search,
  ArrowRight
} from 'lucide-react';

interface PortfolioSectionProps {
  portfolioItems: PortfolioItem[];
  onStartSimilarProject: (category: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  portfolioItems,
  onStartSimilarProject
}) => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories: PortfolioCategory[] = [
    'All',
    'Logos',
    'Banners',
    'Branding',
    'Business Cards',
    'Social Media Graphics',
    'Web Design',
    'Coding Projects',
    'Wallpapers and Digital Artwork'
  ];

  const filteredItems = portfolioItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.client && item.client.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 text-pink-700 text-xs font-bold border border-pink-200">
            <Briefcase className="w-3.5 h-3.5 text-pink-600" />
            Curated Studio Portfolio
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Work Speaks For <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Our Standard</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Explore our curated showcase spanning vector logos, advertising banners, full branding suites, corporate business cards, social media assets, web UI, code repositories, and 4K/8K digital artwork.
          </p>
        </div>

        {/* Filter Categories Bar */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200/80 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-purple-700 shadow-sm border border-purple-100'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search portfolio..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            />
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-purple-300 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Zoom Effect */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg">
                      <Eye className="w-3.5 h-3.5" />
                      Inspect Deliverables
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/95 text-slate-900 shadow-sm backdrop-blur-md border border-slate-200/50">
                      {item.category}
                    </span>
                    {item.isUserUploaded && (
                      <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-600 text-white shadow-xs">
                        Published In Dashboard
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tool Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Client & Date Footer */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700 truncate max-w-[150px]">
                  {item.client || 'DesignArtPro Studio'}
                </span>
                <span>{item.date || 'Verified'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Portfolio Detail View */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto animate-in zoom-in-95">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
                    {selectedItem.category}
                  </span>
                  <h3 className="text-2xl font-extrabold text-slate-900 mt-2">
                    {selectedItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                {/* Full preview image */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 max-h-96">
                  <img
                    src={selectedItem.imageUrl}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">Client / Brand</span>
                    <p className="font-bold text-slate-800 mt-0.5">{selectedItem.client || 'DesignArtPro Studio'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Delivered Date</span>
                    <p className="font-bold text-slate-800 mt-0.5">{selectedItem.date || 'October 2026'}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Category</span>
                    <p className="font-bold text-purple-700 mt-0.5">{selectedItem.category}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Project Narrative & Scope
                  </h4>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Production Tools & Technologies
                  </h4>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {selectedItem.tools.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-semibold rounded-lg border border-purple-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA to start similar project */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Want something tailored like this for your business?
                  </span>
                  <button
                    onClick={() => {
                      const cat = selectedItem.category;
                      setSelectedItem(null);
                      onStartSimilarProject(cat);
                    }}
                    className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center gap-1.5"
                  >
                    <span>Request Similar Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
