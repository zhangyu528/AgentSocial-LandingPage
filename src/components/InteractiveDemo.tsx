import React from "react";
import { demoData } from "../data/mockData";

interface InteractiveDemoProps {
  readonly className?: string;
}

export const InteractiveDemo: React.FC<InteractiveDemoProps> = ({ className = "" }) => {
  return (
    <section className={`py-24 ${className}`} id="demo">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white dark:bg-card-dark rounded-3xl border border-slate-200 dark:border-border-dark overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-border-dark bg-slate-50/50 dark:bg-black/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-lg bg-[#3370ff] flex items-center justify-center text-white">
                  <span className="material-symbols-outlined">forum</span>
                </div>
                <div>
                  <div className="text-sm font-bold">{demoData.messenger.title}</div>
                  <div className="text-[10px] opacity-50 uppercase font-bold tracking-wider">{demoData.messenger.subtitle}</div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-300 dark:bg-slate-700 flex-shrink-0"></div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-lg rounded-tl-none shadow-sm text-sm border border-slate-200 dark:border-slate-700">
                    {demoData.messenger.userMessage}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-primary/40">
                    <span className="material-symbols-outlined text-sm">smart_toy</span>
                  </div>
                  <div className="bg-white dark:bg-[#1a1f2e] border border-primary/30 p-4 rounded-xl shadow-xl w-full max-w-sm">
                    <div className="text-xs font-bold text-primary mb-2 uppercase tracking-tight">{demoData.messenger.agentPlan.title}</div>
                    <ul className="text-xs space-y-2 mb-4 opacity-80">
                      {demoData.messenger.agentPlan.steps.map((step) => (
                        <li key={step.id} className="flex gap-2">
                          <span className="text-primary font-bold">{step.id}.</span> {step.content}
                        </li>
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <button className="flex-1 bg-primary text-white text-[11px] py-2 rounded font-bold hover:brightness-110 transition-all">
                        {demoData.messenger.agentPlan.actions[0]}
                      </button>
                      <button className="flex-1 bg-slate-200 dark:bg-slate-700 text-[11px] py-2 rounded font-bold">
                        {demoData.messenger.agentPlan.actions[1]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 font-mono text-sm overflow-hidden">
              <div className="flex items-center gap-2 mb-6 opacity-40">
                <span className="material-symbols-outlined text-sm">terminal</span>
                <span>{demoData.terminal.title}</span>
              </div>
              <div className="space-y-3">
                {demoData.terminal.logs.map((log, index) => (
                  <div key={index} className="flex gap-3 text-white">
                    <span className="text-slate-500">[{log.time}]</span>
                    <span className={log.type === "WEBHOOK" || log.type === "AGENT" ? "text-primary" : log.type === "COMMAND" ? "text-green-400" : "text-white"}>{log.type}</span>
                    <span className={log.color.includes("italic") ? "italic" : ""}>{log.content}</span>
                  </div>
                ))}
                <div className="pt-4 animate-pulse">
                  <span className="bg-primary/20 text-primary px-2 py-1 rounded text-xs border border-primary/30">Executing...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};