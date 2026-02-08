import React from "react";
import { workflowData } from "@/data/mockData";

interface WorkflowProps {
  readonly className?: string;
}

export const Workflow: React.FC<WorkflowProps> = ({ className = "" }) => {
  return (
    <section className={`py-24 bg-slate-50 dark:bg-background-dark/30 ${className}`} id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">{workflowData.title}</h2>
          <p className="opacity-70">{workflowData.subtitle}</p>
        </div>
        <div className="relative">
          {/* Progress Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 dark:bg-border-dark"></div>
          <div className="grid lg:grid-cols-4 gap-12">
            {workflowData.steps.map((step, index) => (
              <div key={index} className="relative z-10 text-center lg:text-left">
                <div
                  className={`w-24 h-24 mx-auto lg:mx-0 rounded-3xl flex items-center justify-center mb-6 shadow-xl ring-8 ring-white dark:ring-background-dark transition-all ${
                    step.active
                      ? "bg-primary text-white shadow-primary/30"
                      : "bg-white dark:bg-card-dark border-2 border-slate-200 dark:border-border-dark text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-4xl">{step.icon}</span>
                </div>
                <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                <p className="text-sm opacity-60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};