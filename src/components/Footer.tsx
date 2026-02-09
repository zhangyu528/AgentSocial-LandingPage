import React from "react";
import { footerData } from "../data/mockData";

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-border-dark opacity-70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="bg-slate-800 p-1 rounded-md text-white">
            <span className="material-symbols-outlined text-[14px] block">hub</span>
          </div>
          <span className="text-sm font-bold tracking-tight">{footerData.brand}</span>
          <span className="text-[10px] ml-2 opacity-50 px-2 border border-current rounded">{footerData.license}</span>
        </div>
        <div className="flex gap-8 text-sm">
          {footerData.links.map((link) => (
            <a key={link.label} className="hover:text-primary transition-colors" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-xs">
          {footerData.copyright}
        </div>
      </div>
    </footer>
  );
};
