import React from "react";
import { technicalData } from "../data/mockData";

export const TechnicalSpecs: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-200 dark:border-border-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white dark:bg-card-dark p-8 lg:p-12 rounded-3xl border border-slate-200 dark:border-border-dark shadow-xl">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-6">{technicalData.title}</h2>
            <div className="flex flex-wrap gap-3 mb-8">
              {technicalData.tags.map((tag, index) => (
                <span key={index} className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-bold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">{tag.icon}</span> {tag.label}
                </span>
              ))}
            </div>
            <p className="opacity-60 max-w-xl text-sm leading-relaxed">
              {technicalData.description}
            </p>
          </div>
          <div className="text-center lg:text-right flex flex-col items-center lg:items-end">
            <div className="text-4xl font-black mb-4 tracking-tight">{technicalData.cta}</div>
            <a className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all mb-4" href={technicalData.email}>
              <span className="material-symbols-outlined text-[20px]">mail</span>
              {technicalData.button}
            </a>
            <div className="text-xs opacity-50 font-mono">Current Version: {technicalData.version}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
