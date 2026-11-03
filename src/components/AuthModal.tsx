import React, { useState } from 'react';
import { User } from '../types';
import { 
  X, 
  Mail, 
  Lock, 
  User as UserIcon, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  KeyRound,
  ShieldCheck,
  Eye,
  EyeOff
} from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
  onShowToast: (title: string, message?: string, type?: 'success' | 'error' | 'info') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  onShowToast
}) => {
  const [mode, setMode] = useState<'login' | 'register' | 'forgot'>('login');
  const [showPassword, setShowPassword] = useState(false);

  // Form Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  // Forgot password flow
  const [forgotStep, setForgotStep] = useState<1 | 2>(1);
  const [recoveryCode, setRecoveryCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  if (!isOpen) return null;

  // Handle Demo One-Click Logins
  const handleDemoClient = () => {
    const demoUser: User = {
      id: 'usr_alex_smith',
      name: 'Alex Smith',
      email: 'alex.smith@designartpro.com',
      phone: '03440 665 646',
      company: 'Apex Media Corp',
      role: 'client',
      balance: 1450.00,
      joinedDate: 'May 2026'
    };
    onLoginSuccess(demoUser);
    onClose();
    onShowToast('Signed In Successfully', 'Logged in as Demo Client (Alex Smith).', 'success');
  };

  const handleDemoAdmin = () => {
    const adminUser: User = {
      id: 'usr_admin_dap',
      name: 'DesignArtPro Lead',
      email: 'designartpro1@gmail.com',
      phone: '03440 665 646',
      company: 'DesignArtPro Studio',
      role: 'admin',
      balance: 8900.00,
      joinedDate: 'January 2026'
    };
    onLoginSuccess(adminUser);
    onClose();
    onShowToast('Signed In As Admin', 'Full studio management access granted.', 'success');
  };

  // Submit Login
  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      onShowToast('Missing Fields', 'Please enter your email and password.', 'error');
      return;
    }

    const user: User = {
      id: `usr_${Date.now()}`,
      name: email.split('@')[0].replace(/[._-]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      role: 'client',
      balance: 500.00,
      joinedDate: 'October 2026'
    };
    onLoginSuccess(user);
    onClose();
    onShowToast('Welcome back!', `Signed in as ${user.name}`, 'success');
  };

  // Submit Register
  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      onShowToast('Required Fields', 'Please fill in all registration fields.', 'error');
      return;
    }
    if (password !== confirmPassword) {
      onShowToast('Password Mismatch', 'Passwords do not match.', 'error');
      return;
    }

    const newUser: User = {
      id: `usr_${Date.now()}`,
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || '03440 665 646',
      company: username.trim() ? `@${username.trim().replace('@', '')}` : 'DesignArtPro Student',
      role: 'client',
      balance: 150.00, // Welcome learning credit bonus!
      joinedDate: 'October 2026'
    };
    onLoginSuccess(newUser);
    onClose();
    onShowToast('Account Created!', `Welcome to DesignArtPro, ${newUser.name}! Database record created with $150 credit.`, 'success');
  };

  // Submit Forgot Password Step 1
  const handleForgotStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      onShowToast('Email Required', 'Please enter your account email.', 'error');
      return;
    }
    setForgotStep(2);
    onShowToast('Verification Code Dispatched', `Code sent to ${email} (Simulated code: 7492)`, 'info');
  };

  // Submit Forgot Password Step 2
  const handleForgotStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword.length < 6) {
      onShowToast('Weak Password', 'New password must be at least 6 characters.', 'error');
      return;
    }
    setMode('login');
    setForgotStep(1);
    onShowToast('Password Updated', 'Your password has been reset. Please sign in now.', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Tabs */}
        {mode !== 'forgot' ? (
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-xl mb-6">
            <button
              onClick={() => setMode('login')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'login'
                  ? 'bg-white text-purple-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('register')}
              className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                mode === 'register'
                  ? 'bg-white text-purple-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Create Account
            </button>
          </div>
        ) : (
          <div className="mb-6">
            <button
              onClick={() => setMode('login')}
              className="text-xs font-semibold text-purple-600 hover:text-purple-700 flex items-center gap-1"
            >
              ← Back to Sign In
            </button>
            <h3 className="text-xl font-extrabold text-slate-900 mt-2">
              Password Recovery
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Reset your DesignArtPro account password
            </p>
          </div>
        )}

        {/* 1. Login Form */}
        {mode === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email or Username
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-bold text-slate-700">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setMode('forgot')}
                  className="text-xs font-semibold text-purple-600 hover:text-purple-700"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded text-purple-600 focus:ring-purple-500 border-slate-300"
              />
              <label htmlFor="remember" className="ml-2 text-xs text-slate-600 cursor-pointer">
                Remember me on this device
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/25 flex items-center justify-center gap-1.5 transition-all"
            >
              <span>Sign In to Studio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* 2. Registration Form */}
        {mode === 'register' && (
          <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="Sarah Jenkins"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Username
              </label>
              <div className="relative">
                <span className="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs">@</span>
                <input
                  type="text"
                  required
                  placeholder="sarah_dev"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                WhatsApp / Phone
              </label>
              <div className="relative">
                <span className="text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 font-mono text-xs">📞</span>
                <input
                  type="tel"
                  placeholder="03440 665 646"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  placeholder="Re-type password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                />
              </div>
            </div>

            <p className="text-[11px] text-slate-500">
              By creating an account, you receive $150 in initial project credit!
            </p>

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-sky-500 hover:from-purple-700 text-white rounded-xl text-xs font-bold shadow-md shadow-purple-500/25 flex items-center justify-center gap-1.5 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Create Account & Claim Credit</span>
            </button>
          </form>
        )}

        {/* 3. Forgot Password Form */}
        {mode === 'forgot' && (
          <div>
            {forgotStep === 1 ? (
              <form onSubmit={handleForgotStep1} className="space-y-4">
                <p className="text-xs text-slate-600">
                  Enter your account email address and we'll dispatch a 4-digit verification reset PIN.
                </p>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Registered Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Send Verification PIN
                </button>
              </form>
            ) : (
              <form onSubmit={handleForgotStep2} className="space-y-4">
                <div className="p-3 rounded-xl bg-purple-50 text-purple-700 text-xs">
                  We've sent a simulated reset code to <strong>{email}</strong>. Use code <strong>7492</strong>.
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="7492"
                    value={recoveryCode}
                    onChange={(e) => setRecoveryCode(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-mono text-center tracking-widest font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    New Secure Password
                  </label>
                  <input
                    type="password"
                    required
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Update Password & Sign In
                </button>
              </form>
            )}
          </div>
        )}

        {/* Quick Demo Logins for instant evaluation */}
        {mode !== 'forgot' && (
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider text-center mb-2.5">
              Instant One-Click Demo Access
            </p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleDemoClient}
                className="py-2 px-2.5 rounded-xl border border-purple-200 bg-purple-50/50 hover:bg-purple-100/60 text-purple-700 text-[11px] font-bold transition-all text-center"
              >
                👤 Demo Client (Alex)
              </button>
              <button
                type="button"
                onClick={handleDemoAdmin}
                className="py-2 px-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 text-[11px] font-bold transition-all text-center"
              >
                ⚡ Studio Director
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
