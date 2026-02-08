import React from "react";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 aspect-square rounded-lg text-white flex items-center justify-center">
            <span className="material-symbols-outlined block">hub</span>
          </div>
          <span className="text-xl font-bold tracking-tight">AgentSocial</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
          <a className="hover:text-primary transition-colors" href="#features">Features</a>
          <a className="hover:text-primary transition-colors" href="#demo">Interactive Demo</a>
          <a className="hover:text-primary transition-colors" href="#how-it-works">Workflow</a>
          <a className="hover:text-primary transition-colors" href="#">Docs</a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-slate-200 dark:bg-card-dark px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>CLI</span>
          </button>
          <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:brightness-110 transition-all neon-glow">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};