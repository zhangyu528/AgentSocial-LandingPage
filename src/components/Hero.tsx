import React from "react";
import { heroData } from "../data/mockData";

interface HeroProps {
  readonly className?: string;
}

export const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section className={`relative overflow-hidden py-24 lg:py-32 ${className}`}>
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6 border border-primary/20">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              {heroData.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6 tracking-tight">
              {heroData.title.main} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">{heroData.title.highlight}</span>
            </h1>
            <p className="text-lg lg:text-xl opacity-70 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {heroData.description}
            </p>
            <div className="flex flex-col items-center lg:items-start gap-4 justify-center lg:justify-start">
              <a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary text-white border border-primary px-8 py-4 rounded-xl text-lg font-bold hover:brightness-110 transition-all shadow-lg shadow-primary/25" href="#installation">
                <span className="material-symbols-outlined">terminal</span>
                {heroData.cta.install}
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-blue-600/50 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-white dark:bg-[#0d1117] border border-slate-200 dark:border-border-dark rounded-xl overflow-hidden shadow-2xl">
                <div className="bg-slate-100 dark:bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-border-dark">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="text-[10px] font-mono opacity-50 uppercase tracking-widest">{heroData.console.title}</div>
                  <div className="w-10"></div>
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed space-y-4">
                  <div className="flex gap-3">
                    <span className="text-primary font-bold">~</span>
                    <span className="text-green-400">{heroData.console.command}</span>
                  </div>
                  {heroData.console.logs.map((log, index) => (
                    <div key={index} className={log.color}>[info] {log.content}</div>
                  ))}
                  <div className="flex gap-3 text-white/90">
                    <span className="text-primary font-bold">»</span>
                    <span>Agent is listening for tasks in social channels...</span>
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <div className="bg-primary/10 border border-primary/20 rounded p-3">
                      <div className="text-xs text-primary mb-1 uppercase font-bold">{heroData.console.task.title}</div>
                      <div className="italic text-white/70">{heroData.console.task.content}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};