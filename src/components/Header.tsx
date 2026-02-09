import React from "react";
import { navigationData } from "../data/mockData";

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-slate-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg text-white">
            <span className="material-symbols-outlined block">hub</span>
          </div>
          <span className="text-xl font-bold tracking-tight">AgentSocial</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
          {navigationData.links.map((link) => (
            <a key={link.label} className="hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            className="flex items-center gap-2 bg-slate-200 dark:bg-card-dark px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-all"
            href="#installation"
          >
            <span className="material-symbols-outlined text-[18px]">terminal</span>
            <span>{navigationData.cta.cliLabel}</span>
          </a>
        </div>
      </div>
    </header>
  );
};