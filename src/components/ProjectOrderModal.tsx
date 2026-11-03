import React, { useState } from 'react';
import { GraphicService, ClientProject } from '../types';
import { servicesData } from '../data/servicesData';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  MessageCircle, 
  Send, 
  DollarSign, 
  Calendar,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProjectOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: GraphicService | null;
  onAddProjectToDashboard: (project: Omit<ClientProject, 'id' | 'createdAt'>) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const ProjectOrderModal: React.FC<ProjectOrderModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onAddProjectToDashboard,
  onShowToast
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialService ? initialService.id : servicesData[0].id
  );
  const [selectedTier, setSelectedTier] = useState<'Starter' | 'Pro' | 'Enterprise'>('Pro');
  const [projectTitle, setProjectTitle] = useState('');
  const [clientNotes, setClientNotes] = useState('');
  const [targetDate, setTargetDate] = useState('2026-11-10');

  if (!isOpen) return null;

  const currentService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const tierMultipliers = {
    Starter: 1.0,
    Pro: 1.4,
    Enterprise: 2.2
  };

  const calculatedPrice = Math.round(currentService.startingPrice * tierMultipliers[selectedTier]);

  const handleOrderViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello DesignArtPro!\n\n` +
      `I would like to start a project:\n` +
      `• Service: ${currentService.title}\n` +
      `• Tier: ${selectedTier}\n` +
      `• Estimated Price: $${calculatedPrice} USD\n` +
      `• Project Title: ${projectTitle || currentService.title}\n` +
      `• Notes: ${clientNotes || 'Ready to discuss requirements'}\n\n` +
      `Please let me know how to proceed!`
    );
    window.open(`https://wa.me/923440665646?text=${text}`, '_blank');
    onClose();
    onShowToast('WhatsApp Opened', 'Connected directly to DesignArtPro WhatsApp.', 'success');
  };

  const handleCreateInDashboard = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProjectToDashboard({
      title: projectTitle.trim() || `${currentService.title} (${selectedTier})`,
      serviceCategory: currentService.title,
      status: 'In Progress',
      budget: calculatedPrice,
      deadline: targetDate,
      progressPercentage: 15,
      description: clientNotes.trim() || `Client initialized ${selectedTier} tier for ${currentService.title}.`
    });

    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    onClose();
    onShowToast('Project Commissioned!', `Added "${currentService.title}" to your active Dashboard projects!`, 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[92vh] overflow-y-auto animate-in zoom-in-95">
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">
              Direct Project Commission
            </span>
            <h3 className="text-2xl font-black text-slate-900 mt-1">
              Start a Project with DesignArtPro
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleCreateInDashboard} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Select Design / Coding Service *
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title} (Starting at ${s.startingPrice})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Service Tier Package
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Starter', 'Pro', 'Enterprise'] as const).map((tier) => (
                <button
                  key={tier}
                  type="button"
                  onClick={() => setSelectedTier(tier)}
                  className={`p-3 rounded-xl border text-center transition-all ${
                    selectedTier === tier
                      ? 'border-purple-600 bg-purple-50/60 text-purple-900 font-bold shadow-xs'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-600 font-medium'
                  }`}
                >
                  <p className="text-xs">{tier}</p>
                  <p className="text-sm font-extrabold mt-0.5">
                    ${Math.round(currentService.startingPrice * tierMultipliers[tier])}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Your Project Name / Brand Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Nexus Falcon Vector Logo"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Estimated Price
              </label>
              <div className="p-2.5 bg-slate-50 rounded-xl border border-slate-200 font-bold text-slate-800 text-sm">
                ${calculatedPrice} USD
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Target Deadline
              </label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Project Brief & Style Guidelines
            </label>
            <textarea
              rows={3}
              placeholder="Describe your design aesthetics, desired color schemes, fonts, or target audience..."
              value={clientNotes}
              onChange={(e) => setClientNotes(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs font-medium"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="button"
              onClick={handleOrderViaWhatsApp}
              className="w-full sm:flex-1 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Order via WhatsApp Direct</span>
            </button>

            <button
              type="submit"
              className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/20 flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm & Add to Dashboard</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
