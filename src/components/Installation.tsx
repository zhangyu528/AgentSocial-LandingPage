"use client";

import React from "react";
import { installationData } from "../data/mockData";

interface InstallationProps {
  readonly className?: string;
}

export const Installation: React.FC<InstallationProps> = ({ className = "" }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className={`py-24 bg-slate-50 dark:bg-background-dark/30 scroll-mt-20 ${className}`} id="installation">
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
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-bold">Terminal - AgentSocial Auth-Sync</div>
                <div className="w-4"></div>
              </div>
              <div className="p-8 font-mono text-sm md:text-base">
                <div className="space-y-8">
                  {installationData.steps.map((step, stepIdx) => (
                    <div key={stepIdx} className="group/cmd">
                      <div className="text-slate-500 mb-1"># {stepIdx + 1}. {step.title}</div>
                      <div className="flex items-start gap-3">
                        <span className="text-blue-400 select-none">$</span>
                        <div className="flex-1 space-y-1">
                          {step.commands.map((cmd, cmdIdx) => (
                            <div key={cmdIdx} className="flex items-center justify-between group/line">
                              <code className="text-slate-300 break-all">
                                {cmd.split(' ').map((word, wordIdx) => {
                                  if (word === 'gh' || word === 'npm') return <span key={wordIdx} className="text-pink-400">{word} </span>;
                                  if (word.startsWith('-')) return <span key={wordIdx} className="text-blue-400">{word} </span>;
                                  if (word === 'install' || word === 'auth' || word === 'login' || word === 'refresh' || word === 'config' || word === 'set' || word === 'token') {
                                    return <span key={wordIdx} className={word === 'install' ? 'text-green-400' : 'text-slate-300'}>{word} </span>;
                                  }
                                  if (word.includes('@') || word.includes('read:packages')) return <span key={wordIdx} className="text-amber-300">{word} </span>;
                                  return word + ' ';
                                })}
                              </code>
                              <button 
                                className="text-slate-600 hover:text-white transition-colors opacity-0 group-hover/line:opacity-100"
                                onClick={() => copyToClipboard(cmd)}
                              >
                                <span className="material-symbols-outlined text-[16px]">content_copy</span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
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