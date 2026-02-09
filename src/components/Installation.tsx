"use client";

import React from "react";
import { installationData } from "../data/mockData";

export const Installation: React.FC = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(installationData.command);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-background-dark/30 scroll-mt-20" id="installation">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{installationData.title}</h2>
          <p className="opacity-70 max-w-xl mx-auto">{installationData.subtitle}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0d1117] border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden shadow-2xl">
              <div className="bg-[#161b22] px-6 py-4 flex items-center justify-between border-b border-border-dark">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Terminal</div>
                <button className="text-slate-400 hover:text-white transition-colors" onClick={copyToClipboard}>
                  <span className="material-symbols-outlined text-[20px]">content_copy</span>
                </button>
              </div>
              <div className="p-8 font-mono text-lg md:text-xl">
                <div className="flex items-center gap-4">
                  <span className="text-blue-400 select-none">$</span>
                  <code className="text-slate-300">
                    <span className="text-pink-400">npm</span> <span className="text-green-400">install</span> <span className="text-amber-300">@zhangyu528/agentsocial@0.1.1</span>
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {installationData.requirements.map((req, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark">
                <span className="material-symbols-outlined text-primary">{req.icon}</span>
                <span className="opacity-70 text-xs">{req.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};