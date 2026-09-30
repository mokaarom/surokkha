/**
 * @file AccessModal.tsx
 * @project Surokkha AI — Offline-First Emergency Safety Ecosystem
 * @author Mohammed Muntasir Rahman Joy
 * @description Priority waitlist and early access onboarding modal with participant
 * categorization and verified dispatch notification capture.
 */

import React, { useState } from 'react';

interface AccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AccessModal: React.FC<AccessModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('student');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() || phone.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setEmail('');
    setPhone('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-2xl p-6 text-white shadow-2xl">
        <button
          type="button"
          onClick={handleReset}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xs px-2 py-1 rounded cursor-pointer"
          aria-label="close modal"
        >
          ✕
        </button>

        <div className="flex items-center gap-2 mb-4">
          <img
            src="/logo-white.png"
            alt="surokkha logo"
            className="h-5 w-5 object-contain"
            onError={(e) => {
              e.currentTarget.src = '/logo-black.png';
              e.currentTarget.classList.add('invert');
            }}
          />
          <h2 className="text-lg font-medium text-white tracking-tight lowercase">
            join surokkha early access
          </h2>
        </div>

        {submitted ? (
          <div className="py-6 text-center space-y-2">
            <p className="text-sm font-medium text-white">
              you are on the priority waitlist.
            </p>
            <p className="text-xs text-white/70">
              we will notify you as soon as production batch 01 dispatches.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="mt-4 bg-white text-black text-xs font-normal rounded-full px-5 py-2 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-white/70 leading-relaxed">
              get early priority access to surokkha wearable safety sensors and bangladesh-wide 999 integration.
            </p>

            <div className="space-y-1">
              <label className="text-[11px] font-mono text-white/40 block">participant category</label>
              <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                {[
                  { id: 'student', label: 'student' },
                  { id: 'worker', label: 'worker' },
                  { id: 'citizen', label: 'citizen' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRole(item.id)}
                    className={`py-1.5 px-2 rounded-lg border text-center transition-colors cursor-pointer ${
                      role === item.id
                        ? 'bg-white text-black border-white'
                        : 'bg-black border-white/10 text-white/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] font-mono text-white/40 block mb-1">email address</label>
              <input
                type="email"
                required
                placeholder="enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/60 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <div>
              <label className="text-[11px] font-mono text-white/40 block mb-1">mobile phone (optional)</label>
              <input
                type="tel"
                placeholder="017XXXXXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-black/60 border border-white/20 rounded-full px-4 py-2.5 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black text-sm font-normal rounded-full px-6 py-2.5 hover:bg-neutral-200 transition-colors cursor-pointer"
            >
              request early access
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
