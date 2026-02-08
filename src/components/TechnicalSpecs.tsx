import React from "react";

export const TechnicalSpecs: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white dark:bg-card-dark p-8 lg:p-12 rounded-3xl border border-slate-200 dark:border-border-dark shadow-xl">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">javascript</span> Node.js v18+
              </span>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">swap_calls</span> WebSocket Proxy
              </span>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">psychology</span> Claude 3.5 Sonnet
              </span>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">cloud</span> Gemini 1.5 Pro
              </span>
              <span className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">security</span> AES-256 Auth
              </span>
            </div>
            <p className="opacity-60 max-w-xl text-sm leading-relaxed">
              AgentSocial is built as a lightweight, non-custodial middleware. Your keys never leave your environment, and communication is secured via end-to-end encrypted tunnels.
            </p>
          </div>
          <div className="text-center lg:text-right">
            <div className="text-4xl font-black mb-4 tracking-tight">Ready to collaborate?</div>
            <button className="bg-primary text-white px-10 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all neon-glow mb-4">
              Fork on GitHub
            </button>
            <div className="text-xs opacity-50 font-mono">Current Version: v1.4.2-stable</div>
          </div>
        </div>
      </div>
    </section>
  );
};
