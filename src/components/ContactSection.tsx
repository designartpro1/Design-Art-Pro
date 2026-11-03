import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { 
  PhoneCall, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink, 
  Sparkles,
  ShieldCheck,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  preselectedService?: string;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  preselectedService,
  onShowToast
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(preselectedService || 'Logo Designing');
  const [budget, setBudget] = useState('$150 - $400');
  const [timeline, setTimeline] = useState('Standard (3-5 Days)');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const businessName = 'DesignArtPro';
  const whatsappNumber = '03440 665 646';
  const whatsappIntl = '923440665646'; // standard WhatsApp international format for direct web chat
  const studioEmail = 'designartpro1@gmail.com';

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      onShowToast('Email Copied', studioEmail, 'success');
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      onShowToast('WhatsApp Copied', whatsappNumber, 'success');
    }
  };

  // 1. Prepare Email Enquiry button handler
  const handlePrepareEmailEnquiry = () => {
    if (!name.trim()) {
      onShowToast('Name Required', 'Please enter your name first.', 'error');
      return;
    }

    const subject = encodeURIComponent(`Project Inquiry: ${service} - ${businessName}`);
    const body = encodeURIComponent(
      `Hello DesignArtPro Studio Team,\n\n` +
      `My name is ${name} (${email || 'No email provided'}, WhatsApp: ${phone || 'Not provided'}).\n\n` +
      `I am interested in starting a project for:\n` +
      `• Service: ${service}\n` +
      `• Estimated Budget: ${budget}\n` +
      `• Timeline: ${timeline}\n\n` +
      `Project Brief & Details:\n${message || 'Please contact me to discuss full project scope.'}\n\n` +
      `Looking forward to your quotation and proposal.\n\nBest regards,\n${name}`
    );

    const mailtoUrl = `mailto:${studioEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
    onShowToast('Email Draft Prepared', 'Opened your default email client with inquiry draft.', 'success');
  };

  // 2. Submit Instant In-App Enquiry
  const handleSubmitInApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      onShowToast('Missing Fields', 'Please provide your name and email.', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = `DAP-INQ-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(ticketId);
      confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
      onShowToast('Inquiry Dispatched!', `Ticket #${ticketId} created. We will reply within 24 hours.`, 'success');
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold border border-purple-200">
            <PhoneCall className="w-3.5 h-3.5" />
            Contact DesignArtPro
          </div>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Something <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 bg-clip-text text-transparent">Extraordinary</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Reach out directly via WhatsApp, dispatch an email, or prepare a formal project inquiry with our instant quotation estimator.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Official Business Information (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Main Brand Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600">
                Official Studio Contact
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                {businessName}
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Professional Graphic Designing & Creative Coding Studio
              </p>

              {/* WhatsApp Card */}
              <div className="mt-6 p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm shadow-emerald-500/20">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                      WhatsApp Direct
                    </span>
                    <a
                      href={`https://wa.me/${whatsappIntl}?text=Hi%20DesignArtPro!%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-extrabold text-slate-900 hover:text-emerald-700 transition-colors"
                    >
                      {whatsappNumber}
                    </a>
                    <p className="text-[11px] text-emerald-700 mt-0.5">
                      Fastest response · Available 24/7
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy(whatsappNumber, 'phone')}
                    className="p-2 rounded-lg bg-white border border-emerald-200 text-emerald-700 hover:bg-emerald-50"
                    title="Copy phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${whatsappIntl}?text=Hi%20DesignArtPro!%20I%20would%20like%20to%20discuss%20a%20new%20project.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs"
                    title="Open WhatsApp chat"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Email Card */}
              <div className="mt-4 p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-purple-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block">
                      Official Email
                    </span>
                    <a
                      href={`mailto:${studioEmail}`}
                      className="text-sm font-extrabold text-slate-900 hover:text-purple-700 transition-colors truncate block"
                    >
                      {studioEmail}
                    </a>
                    <p className="text-[11px] text-purple-700 mt-0.5">
                      Formal inquiries & asset exchanges
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy(studioEmail, 'email')}
                    className="p-2 rounded-lg bg-white border border-purple-200 text-purple-700 hover:bg-purple-50"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`mailto:${studioEmail}`}
                    className="p-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 shadow-xs"
                    title="Open mail application"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Guarantees Box */}
              <div className="mt-6 pt-6 border-t border-slate-100 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Guaranteed response within 2 to 4 business hours</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Commercial rights & NDA protected inquiries</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>Full source files delivered on project completion</span>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Action Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between shadow-md">
              <div>
                <p className="text-xs uppercase tracking-wider font-bold text-emerald-200">
                  Prefer instant texting?
                </p>
                <p className="text-base font-extrabold mt-0.5">
                  Chat directly with our design lead
                </p>
              </div>
              <a
                href={`https://wa.me/${whatsappIntl}?text=Hi%20DesignArtPro!%20I%20have%20a%20quick%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-emerald-800 rounded-xl text-xs font-bold hover:bg-emerald-50 transition-colors shadow-xs"
              >
                Open WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry & Email Preparation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            {submittedTicket ? (
              <div className="p-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Inquiry Dispatched Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>! Your inquiry for <strong>{service}</strong> has been logged under reference ticket <strong className="font-mono text-purple-700">#{submittedTicket}</strong>. Our lead will review your scope and get in touch with you at <strong className="text-slate-800">{email}</strong>.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${whatsappIntl}?text=Hi%20DesignArtPro!%20I%20just%20submitted%20ticket%20%23${submittedTicket}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Follow Up on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmittedTicket(null);
                      setMessage('');
                    }}
                    className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">
                      Project Inquiry & Quotation Generator
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Fill out your requirements below to calculate estimates and prepare your inquiry.
                    </p>
                  </div>
                  <Sparkles className="w-5 h-5 text-purple-600" />
                </div>

                <form onSubmit={handleSubmitInApp} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. +1 555 123 4567"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Select Service Required *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                      >
                        <optgroup label="Graphic Designing Services">
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title} (from ${s.startingPrice})
                            </option>
                          ))}
                        </optgroup>
                        <optgroup label="Creative Coding & Web">
                          <option value="Custom Web App Development">Custom Web App Development</option>
                          <option value="React & TypeScript Frontend">React & TypeScript Frontend</option>
                          <option value="Node.js & Express REST Backend">Node.js & Express REST Backend</option>
                          <option value="Interactive Landing Page">Interactive Landing Page</option>
                        </optgroup>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Estimated Budget Tier
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                      >
                        <option value="$100 - $300">$100 - $300 (Starter Asset)</option>
                        <option value="$300 - $800">$300 - $800 (Professional Suite)</option>
                        <option value="$800 - $2,000">$800 - $2,000 (Complete Brand / App)</option>
                        <option value="$2,000+">$2,000+ (Enterprise Multi-Stack)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Expected Delivery Timeline
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs font-medium bg-white focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                      >
                        <option value="Urgent (24-48 Hours)">Urgent (24-48 Hours Rush)</option>
                        <option value="Standard (3-5 Days)">Standard (3-5 Days)</option>
                        <option value="1-2 Weeks">1-2 Weeks (Full Project)</option>
                        <option value="Flexible Schedule">Flexible Schedule</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Notes & Specifications
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share your goals, color preferences, inspiration links, or technical requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                    />
                  </div>

                  {/* Dual Action Buttons as requested */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    {/* Button 1: Button to prepare an email enquiry */}
                    <button
                      type="button"
                      onClick={handlePrepareEmailEnquiry}
                      className="w-full sm:flex-1 py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4 text-pink-400" />
                      <span>Prepare Email Enquiry</span>
                    </button>

                    {/* Button 2: Direct in-app instant submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 py-3 px-4 bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/25 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Instant Enquiry'}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
