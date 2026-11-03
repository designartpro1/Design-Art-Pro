import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { GraphicService } from '../types';
import { 
  Sparkles, 
  Layout, 
  CreditCard, 
  Palette, 
  Share2, 
  FileText, 
  BookOpen, 
  Megaphone, 
  Package, 
  Image as ImageIcon, 
  Tv, 
  MonitorSmartphone, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Tag, 
  X, 
  Search,
  MessageCircle,
  ExternalLink
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForOrder: (service: GraphicService) => void;
  onOpenContactWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForOrder,
  onOpenContactWithService
}) => {
  const [selectedService, setSelectedService] = useState<GraphicService | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'popular' | 'branding' | 'marketing'>('all');

  // Map icon strings to Lucide components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Layout': return <Layout className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Share2': return <Share2 className="w-5 h-5" />;
      case 'FileText': return <FileText className="w-5 h-5" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Megaphone': return <Megaphone className="w-5 h-5" />;
      case 'Package': return <Package className="w-5 h-5" />;
      case 'Image': return <ImageIcon className="w-5 h-5" />;
      case 'Tv': return <Tv className="w-5 h-5" />;
      case 'MonitorSmartphone': return <MonitorSmartphone className="w-5 h-5" />;
      default: return <Palette className="w-5 h-5" />;
    }
  };

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === 'popular') return service.popular;
    if (activeFilter === 'branding') {
      return ['Logo Designing', 'Branding & Brand Identity', 'Business Card Design', 'Packaging Design'].includes(service.title);
    }
    if (activeFilter === 'marketing') {
      return ['Banner Designing', 'Social Media Design', 'Poster and Flyer Design', 'Advertisement Design', 'Brochure Design'].includes(service.title);
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-slate-50/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100/70 text-purple-700 text-xs font-bold border border-purple-200">
            <Palette className="w-3.5 h-3.5" />
            Graphic Designing Services (12 Disciplines)
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            High-Impact Graphic Design <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Crafted For Scale</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            From iconic vector logos to 3D packaging and enterprise UI/UX design systems. We deliver complete production-ready source assets with commercial ownership.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Quick Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs w-full md:w-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              All 12 Services
            </button>
            <button
              onClick={() => setActiveFilter('popular')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'popular'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Top Popular
            </button>
            <button
              onClick={() => setActiveFilter('branding')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'branding'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Branding & Logos
            </button>
            <button
              onClick={() => setActiveFilter('marketing')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'marketing'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              Marketing & Ads
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search design services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* 12 Services Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between p-6 group relative overflow-hidden"
            >
              {/* Subtle top gradient accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Icon, Badge, and Starting Price */}
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-500/10 via-pink-500/10 to-sky-400/10 border border-purple-100 text-purple-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    {getIcon(service.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                      {service.badge}
                    </span>
                    <p className="text-lg font-extrabold text-slate-900 mt-1">
                      From ${service.startingPrice}
                    </p>
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="mt-4 text-xl font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {service.shortDesc}
                </p>

                {/* Deliverables preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Key Deliverables:
                  </p>
                  {service.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Turnaround Time */}
                <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-purple-500" />
                  <span>Timeline: {service.deliveryDays}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => setSelectedService(service)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-purple-50 hover:text-purple-700 border border-slate-200 transition-all text-center"
                >
                  View Details
                </button>
                <button
                  onClick={() => onSelectServiceForOrder(service)}
                  className="flex-1 py-2 px-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 shadow-xs hover:shadow-md transition-all flex items-center justify-center gap-1"
                >
                  <span>Order Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for In-Depth Service View */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                    {getIcon(selectedService.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
                      {selectedService.badge}
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Overview
                  </h4>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {selectedService.fullDesc}
                  </p>
                </div>

                {/* Complete Deliverables */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    What You Will Receive
                  </h4>
                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pricing & Guarantee Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-50 via-pink-50/50 to-sky-50 border border-purple-100 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Starting Investment</p>
                    <p className="text-2xl font-black text-purple-900">
                      ${selectedService.startingPrice}{' '}
                      <span className="text-xs font-normal text-slate-500">USD</span>
                    </p>
                    <p className="text-xs text-purple-700 font-semibold mt-0.5">
                      Turnaround: {selectedService.deliveryDays}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={`https://wa.me/923440665646?text=Hi%20DesignArtPro!%20I%20am%20interested%20in%20your%20${encodeURIComponent(selectedService.title)}%20service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl text-xs font-bold text-emerald-700 bg-white border border-emerald-200 hover:bg-emerald-50 flex items-center gap-1.5 shadow-xs"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>WhatsApp Inquire</span>
                    </a>
                    <button
                      onClick={() => {
                        const s = selectedService;
                        setSelectedService(null);
                        onSelectServiceForOrder(s);
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 shadow-md shadow-purple-500/20"
                    >
                      Start Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
