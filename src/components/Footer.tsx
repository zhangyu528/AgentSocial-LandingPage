import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-border-dark opacity-70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-slate-800 p-1 rounded-md text-white">
            <span className="material-symbols-outlined text-[14px] block">hub</span>
          </div>
          <span className="text-sm font-bold tracking-tight">AgentSocial</span>
          <span className="text-[10px] ml-2 opacity-50 px-2 border border-current rounded">MIT LICENSE</span>
        </div>
        <div className="flex gap-8 text-sm">
          <a className="hover:text-primary transition-colors" href="#">GitHub</a>
          <a className="hover:text-primary transition-colors" href="#">Documentation</a>
          <a className="hover:text-primary transition-colors" href="#">Security Audit</a>
          <a className="hover:text-primary transition-colors" href="#">Contact</a>
        </div>
        <div className="text-xs">
          © 2024 AgentSocial Open Source Project.
        </div>
      </div>
    </footer>
  );
};
